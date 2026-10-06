#include "audio.hpp"
#include <algorithm>
#include <chrono>
#include <core/global/globals.hpp>
#include <fancy.hpp>
#include <thread>
#if defined(_WIN32)
#include <helper/misc/misc.hpp>
#endif

#define MINIAUDIO_IMPLEMENTATION
#include <miniaudio.h>

namespace Audiopad::Objects
{
#if defined(_WIN32)
    using Audiopad::Helpers::widen;
#endif

    void Audio::setup()
    {
#if defined(__linux__)
        nullSink = std::nullopt;
#endif
        Fancy::fancy.logTime().message() << "Detecting audio devices..." << std::endl;
        for (const auto &device : getAudioDevices())
        {
            Fancy::fancy.logTime().message() << "  - Found device: " << device.name 
                                             << " | Default: " << (device.isDefault ? "Yes" : "No") << std::endl;
            if (device.isDefault)
            {
                defaultPlayback = device;
            }
#if defined(__linux__)
            if (device.name == "audiopad_sink")
            {
                nullSink = device;
            }
#endif
        }
    }
    void Audio::destroy()
    {
        stopAll();
    }
    std::optional<PlayingSound> Audio::play(const Objects::Sound &sound,
                                            const std::optional<Objects::AudioDevice> &playbackDevice)
    {
        static std::atomic<std::uint32_t> id = 0;

        auto *decoder = new ma_decoder;
#if defined(_WIN32)
        auto res = ma_decoder_init_file_w(widen(sound.path).c_str(), nullptr, decoder);
#else
        auto res = ma_decoder_init_file(sound.path.c_str(), nullptr, decoder);
#endif

        if (res != MA_SUCCESS)
        {
            Fancy::fancy.logTime().failure() << "Failed to create decoder from file: " << sound.path << ", error: " >>
                res << std::endl;
            delete decoder;

            return std::nullopt;
        }

        auto *device = new ma_device;
        auto config = ma_device_config_init(ma_device_type_playback);

        ma_uint64 length_in_pcm_frames{};
        ma_decoder_get_length_in_pcm_frames(decoder, &length_in_pcm_frames);

        config.dataCallback = data_callback;
        config.periodSizeInMilliseconds = 100;
        config.sampleRate = decoder->outputSampleRate;
        config.playback.format = decoder->outputFormat;
        config.playback.channels = decoder->outputChannels;

        auto pSound = std::make_shared<PlayingSound>();
        config.pUserData = reinterpret_cast<void *>(static_cast<PlayingSound *>(pSound.get()));

        if (playbackDevice)
        {
            config.playback.pDeviceID = &playbackDevice->raw.id;
        }
        else
        {
            config.playback.pDeviceID = &defaultPlayback.raw.id;
        }

        if (ma_device_init(nullptr, &config, device) != MA_SUCCESS)
        {
            Fancy::fancy.logTime().failure() << "Failed to create device" << std::endl;
            ma_decoder_uninit(decoder);
            delete decoder;
            delete device;

            return std::nullopt;
        }

        // Ensure decoder matches the actual initialized device format, channels, and sample rate.
        // On Windows WASAPI shared mode, device->sampleRate is often 48000Hz while MP3s are 44100Hz.
        // Re-initializing the decoder with the device's format enables miniaudio's high-quality
        // internal resampling so MP3s play at normal speed and do not cut off before completion.
        if (decoder->outputFormat != device->playback.format ||
            decoder->outputChannels != device->playback.channels ||
            decoder->outputSampleRate != device->sampleRate)
        {
            ma_decoder_uninit(decoder);
            auto decoderConfig = ma_decoder_config_init(device->playback.format, device->playback.channels, device->sampleRate);
#if defined(_WIN32)
            res = ma_decoder_init_file_w(widen(sound.path).c_str(), &decoderConfig, decoder);
#else
            res = ma_decoder_init_file(sound.path.c_str(), &decoderConfig, decoder);
#endif
            if (res != MA_SUCCESS)
            {
                Fancy::fancy.logTime().failure() << "Failed to re-initialize decoder to device format: " << sound.path << std::endl;
                ma_device_uninit(device);
                delete decoder;
                delete device;
                return std::nullopt;
            }
            ma_decoder_get_length_in_pcm_frames(decoder, &length_in_pcm_frames);
        }

        if (playbackDevice)
        {
            if (sound.remoteVolume)
            {
                device->masterVolumeFactor = static_cast<float>(*sound.remoteVolume) / 100.f;
            }
            else
            {
                device->masterVolumeFactor = static_cast<float>(Globals::gSettings.remoteVolume) / 100.f;
            }
        }
        else
        {
            if (sound.localVolume)
            {
                device->masterVolumeFactor = static_cast<float>(*sound.localVolume) / 100.f;
            }
            else
            {
                device->masterVolumeFactor = static_cast<float>(Globals::gSettings.localVolume) / 100.f;
            }
        }

        if (ma_device_start(device) != MA_SUCCESS)
        {
            ma_device_uninit(device);
            ma_decoder_uninit(decoder);

            delete device;
            delete decoder;

            Fancy::fancy.logTime().warning() << "Failed to play sound " << sound.path << std::endl;

            return std::nullopt;
        }

        auto soundId = ++id;

        pSound->id = soundId;
        pSound->sound = sound;
        pSound->raw.device = device;
        pSound->raw.decoder = decoder;
        pSound->length = length_in_pcm_frames;
        pSound->sampleRate = device->sampleRate;
        pSound->playbackDevice = playbackDevice ? *playbackDevice : defaultPlayback;
        pSound->lengthInMs = static_cast<std::uint64_t>(static_cast<double>(pSound->length) /
                                                        static_cast<double>(device->sampleRate) * 1000);

        playingSounds->emplace(soundId, pSound);
        return *pSound;
    }
    void Audio::stopAll()
    {
        auto scoped = playingSounds.scoped();
        while (!scoped->empty())
        {
            auto &sound = scoped->begin()->second;
            if (sound->raw.device && sound->raw.decoder)
            {
                ma_device_uninit(sound->raw.device);
                ma_decoder_uninit(sound->raw.decoder);
            }

            sound->raw.device = nullptr;
            sound->raw.decoder = nullptr;

            scoped->erase(sound->id);
        }
    }
    bool Audio::stop(const std::uint32_t &soundId)
    {
        auto scoped = playingSounds.scoped();
        std::vector<std::uint32_t> idsToStop;

        if (scoped->find(soundId) != scoped->end())
        {
            idsToStop.push_back(soundId);
        }
        else
        {
            for (const auto &pair : *scoped)
            {
                if (pair.second && pair.second->sound.id == soundId)
                {
                    idsToStop.push_back(pair.first);
                }
            }
        }

        if (!idsToStop.empty())
        {
            for (auto id : idsToStop)
            {
                if (scoped->find(id) != scoped->end())
                {
                    auto soundCopy = *scoped->at(id);
                    auto &sound = scoped->at(id);
                    if (sound->raw.device && sound->raw.decoder)
                    {
                        ma_device_uninit(sound->raw.device);
                        ma_decoder_uninit(sound->raw.decoder);
                    }

                    sound->raw.device = nullptr;
                    sound->raw.decoder = nullptr;

                    scoped->erase(id);

                    if (Globals::gGui)
                    {
                        Globals::gGui->onSoundFinished(soundCopy);
                    }
                }
            }
            return true;
        }

        Fancy::fancy.logTime().warning() << "Failed to stop sound with id " << soundId << ", sound does not exist"
                                         << std::endl;
        return false;
    }
    namespace
    {
        std::shared_ptr<PlayingSound> findPlayingSound(
            const std::map<std::uint32_t, std::shared_ptr<PlayingSound>> &sounds, std::uint32_t soundId)
        {
            auto it = sounds.find(soundId);
            if (it != sounds.end())
            {
                return it->second;
            }
            for (const auto &pair : sounds)
            {
                if (pair.second && pair.second->sound.id == soundId)
                {
                    return pair.second;
                }
            }
            return nullptr;
        }
    }

    std::optional<PlayingSound> Audio::pause(const std::uint32_t &soundId)
    {
        auto scoped = playingSounds.scoped();
        auto sound = findPlayingSound(*scoped, soundId);
        if (sound)
        {
            if (!sound->paused)
            {
                if (sound->raw.device && ma_device_get_state(sound->raw.device) == ma_device_state_started)
                {
                    ma_device_stop(sound->raw.device);
                }
                sound->paused = true;
            }

            return *sound;
        }

        Fancy::fancy.logTime().warning() << "Failed to pause sound with id " << soundId << ", sound does not exist"
                                         << std::endl;
        return std::nullopt;
    }
    std::optional<PlayingSound> Audio::repeat(const std::uint32_t &soundId, bool shouldRepeat)
    {
        auto scoped = playingSounds.scoped();
        auto sound = findPlayingSound(*scoped, soundId);
        if (sound)
        {
            sound->repeat = shouldRepeat;
            return *sound;
        }

        Fancy::fancy.logTime().warning() << "Failed to set repeat for sound with id " << soundId
                                         << ", sound does not exist" << std::endl;
        return std::nullopt;
    }
    std::optional<PlayingSound> Audio::resume(const std::uint32_t &soundId)
    {
        auto scoped = playingSounds.scoped();
        auto sound = findPlayingSound(*scoped, soundId);
        if (sound)
        {
            if (sound->paused)
            {
                if (sound->raw.device && ma_device_get_state(sound->raw.device) == ma_device_state_stopped)
                {
                    ma_device_start(sound->raw.device);
                }
                sound->paused = false;
            }

            return *sound;
        }

        Fancy::fancy.logTime().warning() << "Failed to resume sound with id " << soundId << ", sound does not exist "
                                         << std::endl;
        return std::nullopt;
    }
    void Audio::onFinished(PlayingSound sound)
    {
        // Allow hardware playback buffer to drain fully before uninitializing
        // to prevent cutting off the last ~100-200ms of sound playback
        std::this_thread::sleep_for(std::chrono::milliseconds(200));

        auto scoped = playingSounds.scoped();
        if (scoped->find(sound.id) != scoped->end())
        {
            ma_device_uninit(sound.raw.device);
            ma_decoder_uninit(sound.raw.decoder);

            sound.raw.device = nullptr;
            sound.raw.decoder = nullptr;

            Globals::gGui->onSoundFinished(sound);
            scoped->erase(sound.id);
        }
        else
        {
            Fancy::fancy.logTime().warning() << "Sound finished but is not playing" << std::endl;
        }
    }
    void Audio::onSoundProgressed(PlayingSound *sound, std::uint64_t frames)
    {
        sound->readFrames += frames;
        sound->buffer += frames;

        // Emit updates roughly every 100ms for smooth progress tracking
        if (sound->buffer >= (sound->sampleRate / 10))
        {
            if (sound->length > 0)
            {
                sound->readInMs = static_cast<std::uint64_t>(
                    (static_cast<double>(sound->readFrames) / static_cast<double>(sound->length)) *
                    static_cast<double>(sound->lengthInMs));
            }

            if (Globals::gGui)
            {
                Globals::gGui->onSoundProgressed(*sound);
            }

            sound->buffer = 0;
        }
    }
    void Audio::onSoundSeeked(PlayingSound *sound, std::uint64_t frame)
    {
        sound->shouldSeek = false;
        sound->readFrames = frame;
        if (sound->length > 0)
        {
            sound->readInMs = static_cast<std::uint64_t>((static_cast<double>(frame) / static_cast<double>(sound->length)) *
                                                         static_cast<double>(sound->lengthInMs));
        }
        else
        {
            sound->readInMs = 0;
        }
        sound->buffer = 0;

        if (Globals::gGui && sound->playbackDevice.isDefault)
        {
            Globals::gGui->onSoundProgressed(*sound);
        }
    }
    std::optional<PlayingSound> Audio::seek(const std::uint32_t &soundId, std::uint64_t position)
    {
        auto scoped = playingSounds.scoped();
        auto sound = findPlayingSound(*scoped, soundId);
        if (sound)
        {
            if (sound->lengthInMs > 0)
            {
                sound->seekTo =
                    static_cast<std::uint64_t>((static_cast<double>(position) / static_cast<double>(sound->lengthInMs)) *
                                               static_cast<double>(sound->length));
            }
            else
            {
                sound->seekTo = 0;
            }

            if (sound->seekTo > sound->length)
            {
                sound->seekTo = sound->length;
            }

            if (sound->paused.load())
            {
                // When paused, audio device thread is stopped.
                // Seek decoder directly and immediately so position is preserved!
                if (sound->raw.decoder)
                {
                    ma_decoder_seek_to_pcm_frame(sound->raw.decoder, sound->seekTo);
                }
                onSoundSeeked(sound.get(), sound->seekTo);
            }
            else
            {
                // When playing, flag for audio thread to seek before reading next PCM frames
                sound->shouldSeek = true;
            }

            auto rtn = *sound;
            rtn.readFrames = sound->seekTo;
            rtn.readInMs = position;
            return rtn;
        }

        Fancy::fancy.logTime().warning() << "Failed to seek sound with id " << soundId << ", sound does not exist"
                                         << std::endl;
        return std::nullopt;
    }
    void Audio::data_callback(ma_device *device, void *output, [[maybe_unused]] const void *input,
                              std::uint32_t frameCount)
    {
        auto *sound = reinterpret_cast<PlayingSound *>(device->pUserData);
        if (!sound)
        {
            return;
        }

        if (!sound->raw.decoder)
        {
            return;
        }

        // Apply pending seek BEFORE reading new frames to prevent reading/playing stale audio!
        if (sound->shouldSeek)
        {
            ma_decoder_seek_to_pcm_frame(sound->raw.decoder, sound->seekTo);
            Globals::gAudio.onSoundSeeked(sound, sound->seekTo);
        }

        ma_uint64 readFrames{};
        ma_decoder_read_pcm_frames(sound->raw.decoder, output, frameCount, &readFrames);

        if (readFrames < frameCount && output)
        {
            ma_decoder *pDecoder = sound->raw.decoder.load();
            if (pDecoder)
            {
                ma_uint32 bytesPerFrame = ma_get_bytes_per_frame(pDecoder->outputFormat, pDecoder->outputChannels);
                ma_uint8 *pOutputBytes = reinterpret_cast<ma_uint8 *>(output);
                memset(pOutputBytes + (readFrames * bytesPerFrame), 0, (frameCount - readFrames) * bytesPerFrame);
            }
        }

        if (sound->playbackDevice.isDefault && readFrames > 0)
        {
            Globals::gAudio.onSoundProgressed(sound, readFrames);
        }

        if (readFrames <= 0 && !sound->shouldSeek)
        {
            if (sound->repeat)
            {
                ma_decoder_seek_to_pcm_frame(sound->raw.decoder, 0);
                Globals::gAudio.onSoundSeeked(sound, 0);
            }
            else
            {
                Globals::gQueue.push_unique(reinterpret_cast<std::uintptr_t>(device),
                                            [sound = *sound] { Globals::gAudio.onFinished(sound); });
            }
        }
    }
    std::vector<AudioDevice> Audio::getAudioDevices()
    {
        std::string defaultName;
        {
            ma_device device;
            ma_device_config deviceConfig = ma_device_config_init(ma_device_type_playback);
            ma_device_init(nullptr, &deviceConfig, &device);

            defaultName = device.playback.name;

            ma_device_uninit(&device);
        }

        ma_context context;

        if (ma_context_init(nullptr, 0, nullptr, &context) != MA_SUCCESS)
        {
            Fancy::fancy.logTime().failure() << "Failed to initialize context" << std::endl;
            return {};
        }

        ma_device_info *pPlayBackDeviceInfos{};
        ma_uint32 deviceCount{};

        ma_result result = ma_context_get_devices(&context, &pPlayBackDeviceInfos, &deviceCount, nullptr, nullptr);
        if (result != MA_SUCCESS)
        {
            Fancy::fancy.logTime().failure() << "Failed to get playback devices!" << std::endl;
            return {};
        }

        std::vector<AudioDevice> playBackDevices;
        for (unsigned int i = 0; deviceCount > i; i++)
        {
            auto &rawDevice = pPlayBackDeviceInfos[i];

            AudioDevice device;
            device.raw = rawDevice;
            device.name = rawDevice.name;
            device.isDefault = rawDevice.name == defaultName;

            playBackDevices.emplace_back(device);
        }

        ma_context_uninit(&context);

        for (auto it = playBackDevices.begin(); it != playBackDevices.end(); it++)
        {
            if (it->name.find("VB-Audio") != std::string::npos)
            {
                if (it != playBackDevices.begin())
                {
                    std::iter_swap(playBackDevices.begin(), it);
                }
            }
        }

        return playBackDevices;
    }
#if defined(_WIN32)
    std::optional<AudioDevice> Audio::getAudioDevice(const std::string &name)
    {
        for (const auto &device : getAudioDevices())
        {
            if (device.name == name)
            {
                return device;
            }
        }
        return std::nullopt;
    }
#endif
    std::vector<PlayingSound> Audio::getPlayingSounds()
    {
        auto scoped = playingSounds.scoped();

        std::vector<PlayingSound> rtn;
        for (const auto &sound : *scoped)
        {
            rtn.emplace_back(*sound.second);
        }

        return rtn;
    }
    PlayingSound::PlayingSound(const PlayingSound &other)
    {
        if (&other == this)
        {
            return;
        }

        length = other.length;
        lengthInMs = other.lengthInMs;
        readFrames = other.readFrames;
        sampleRate = other.sampleRate;

        id = other.id;
        sound = other.sound;
        buffer = other.buffer;

        seekTo.store(other.seekTo);
        paused.store(other.paused);
        repeat.store(other.repeat);
        readInMs.store(other.readInMs);
        shouldSeek.store(other.shouldSeek);

        raw.device.store(other.raw.device);
        raw.decoder.store(other.raw.decoder);
        playbackDevice = other.playbackDevice;
    }
    PlayingSound &PlayingSound::operator=(const PlayingSound &other)
    {
        if (&other == this)
        {
            return *this;
        }

        length = other.length;
        lengthInMs = other.lengthInMs;
        readFrames = other.readFrames;
        sampleRate = other.sampleRate;

        id = other.id;
        sound = other.sound;
        buffer = other.buffer;

        seekTo.store(other.seekTo);
        paused.store(other.paused);
        repeat.store(other.repeat);
        readInMs.store(other.readInMs);
        shouldSeek.store(other.shouldSeek);

        raw.device.store(other.raw.device);
        raw.decoder.store(other.raw.decoder);
        playbackDevice = other.playbackDevice;

        return *this;
    }
} // namespace Audiopad::Objects