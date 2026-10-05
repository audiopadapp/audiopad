#if defined(_WIN32)
#include "winsound.hpp"
#include <Shlwapi.h>
#include <aclapi.h>
#include <algorithm>
#include <core/global/globals.hpp>
#include <endpointvolume.h>
#include <fancy.hpp>
#include <functiondiscoverykeys_devpkey.h>
#include <helper/misc/misc.hpp>

#pragma comment(lib, "Advapi32.lib")
#pragma comment(lib, "Shlwapi.lib")

namespace Audiopad
{
    namespace Objects
    {
        Device::Device(IMMDevice *device)
        {
            if (!device)
            {
                return;
            }

            this->device = std::shared_ptr<IMMDevice>(device, [](IMMDevice *&ptr) { ptr->Release(); });

            IPropertyStore *store = nullptr;
            if (SUCCEEDED(device->OpenPropertyStore(STGM_READ, &store)) && store)
            {
                PROPVARIANT friendlyName;
                PropVariantInit(&friendlyName);
                if (SUCCEEDED(store->GetValue(PKEY_Device_FriendlyName, &friendlyName)))
                {
                    if (friendlyName.vt == VT_LPWSTR && friendlyName.pwszVal)
                    {
                        name = Helpers::narrow(friendlyName.pwszVal);
                    }
                    PropVariantClear(&friendlyName);
                }

                PROPVARIANT guidProp;
                PropVariantInit(&guidProp);
                if (SUCCEEDED(store->GetValue(PKEY_Device_GUID, &guidProp)))
                {
                    if (guidProp.vt == VT_LPWSTR && guidProp.pwszVal)
                    {
                        guid = Helpers::narrow(guidProp.pwszVal);
                    }
                    PropVariantClear(&guidProp);
                }

                store->Release();
            }
            else
            {
                Fancy::fancy.logTime().warning() << "Failed to open property store of " << device << std::endl;
            }

            if (guid.empty())
            {
                LPWSTR strId = nullptr;
                if (SUCCEEDED(device->GetId(&strId)) && strId)
                {
                    std::string fullId = Helpers::narrow(strId);
                    auto pos = fullId.find_last_of('{');
                    if (pos != std::string::npos)
                    {
                        guid = fullId.substr(pos);
                    }
                    else
                    {
                        guid = fullId;
                    }
                    CoTaskMemFree(strId);
                }
            }
            std::transform(guid.begin(), guid.end(), guid.begin(), [](char c) { return tolower(c); });
        }
        bool WinSound::setup()
        {
            CoInitialize(nullptr);
            IMMDeviceEnumerator *rawEnumerator = nullptr;
            if (!FAILED(CoCreateInstance(__uuidof(MMDeviceEnumerator), nullptr, CLSCTX_INPROC_SERVER,
                                         __uuidof(IMMDeviceEnumerator), reinterpret_cast<void **>(&rawEnumerator))))
            {
                enumerator = std::shared_ptr<IMMDeviceEnumerator>(
                    rawEnumerator, [](IMMDeviceEnumerator *enumPtr) { enumPtr->Release(); });

                IMMDevice *defaultDevice = nullptr;
                enumerator->GetDefaultAudioEndpoint(eCapture, eMultimedia, &defaultDevice);
                defaultRecordingDevice = RecordingDevice(defaultDevice);

                // Check if any recording device is currently set to listen through VB-Audio
                for (const auto &recordingDevice : getRecordingDevices())
                {
                    if (recordingDevice.isListeningToDevice())
                    {
                        auto device = getPlaybackDevice(recordingDevice.getDevicePlayingThrough());
                        if (device && device->getName().find("VB-Audio") != std::string::npos)
                        {
                            defaultRecordingDevice = recordingDevice;
                            break;
                        }
                    }
                }

                if (defaultRecordingDevice && defaultRecordingDevice->getName().find("VB-Audio") != std::string::npos)
                {
                    for (const auto &recordingDevice : getRecordingDevices())
                    {
                        if (recordingDevice.getName().find("VB-Audio") == std::string::npos)
                        {
                            defaultRecordingDevice = recordingDevice;
                            break;
                        }
                    }
                }

                return true;
            }

            Fancy::fancy.logTime().failure() << "Failed to create enumerator" << std::endl;
            return false;
        }

        std::string Device::getGUID() const
        {
            return guid;
        }
        std::string Device::getName() const
        {
            return name;
        }
        bool RecordingDevice::isMuted() const
        {
            if (!device)
            {
                Fancy::fancy.logTime().failure() << "Failed to get mute state, device was invalid" << std::endl;
                return false;
            }

            IAudioEndpointVolume *endpointVolume = nullptr;
            if (FAILED(device->Activate(__uuidof(IAudioEndpointVolume), CLSCTX_INPROC_SERVER, nullptr,
                                        reinterpret_cast<void **>(&endpointVolume))) || !endpointVolume)
            {
                Fancy::fancy.logTime().warning() << "Failed to get muted state of " << name << std::endl;
                return false;
            }

            BOOL isMuted{};
            endpointVolume->GetMute(&isMuted);
            endpointVolume->Release();

            return isMuted;
        }
        bool RecordingDevice::isListeningToDevice() const
        {
            if (!device)
            {
                Fancy::fancy.logTime().failure() << "Failed to get listening state, device was invalid" << std::endl;
                return false;
            }

            IPropertyStore *store = nullptr;
            if (FAILED(device->OpenPropertyStore(STGM_READ, &store)) || !store)
            {
                Fancy::fancy.logTime().warning() << "Failed to get listen state of " << name << std::endl;
                return false;
            }

            PROPVARIANT listenProp;
            PropVariantInit(&listenProp);
            store->GetValue(PKEY_Device_ListenToThisDevice, &listenProp);

            bool isListening = false;
            if (listenProp.vt == VT_BOOL)
            {
                isListening = (listenProp.boolVal == -1);
            }

            PropVariantClear(&listenProp);
            store->Release();

            return isListening;
        }
        bool RecordingDevice::mute(bool state) const
        {
            if (!device)
            {
                Fancy::fancy.logTime().failure() << "Failed to set mute state, device was invalid" << std::endl;
                return false;
            }

            IAudioEndpointVolume *endpointVolume = nullptr;
            if (FAILED(device->Activate(__uuidof(IAudioEndpointVolume), CLSCTX_INPROC_SERVER, nullptr,
                                        reinterpret_cast<void **>(&endpointVolume))) || !endpointVolume)
            {
                Fancy::fancy.logTime().warning() << "Failed to set mute state for " << name << std::endl;
                return false;
            }

            endpointVolume->SetMute(state, nullptr);
            endpointVolume->Release();
            return true;
        }
        static bool enableTokenPrivilege(LPCWSTR privilege)
        {
            HANDLE hToken = nullptr;
            if (!OpenProcessToken(GetCurrentProcess(), TOKEN_ADJUST_PRIVILEGES | TOKEN_QUERY, &hToken))
            {
                return false;
            }
            TOKEN_PRIVILEGES tp;
            LUID luid;
            if (!LookupPrivilegeValueW(nullptr, privilege, &luid))
            {
                CloseHandle(hToken);
                return false;
            }
            tp.PrivilegeCount = 1;
            tp.Privileges[0].Luid = luid;
            tp.Privileges[0].Attributes = SE_PRIVILEGE_ENABLED;
            AdjustTokenPrivileges(hToken, FALSE, &tp, sizeof(TOKEN_PRIVILEGES), nullptr, nullptr);
            bool ok = (GetLastError() == ERROR_SUCCESS);
            CloseHandle(hToken);
            return ok;
        }

        static bool makeRegistryKeyWritable(const std::wstring &subKey)
        {
            enableTokenPrivilege(SE_TAKE_OWNERSHIP_NAME);
            enableTokenPrivilege(SE_RESTORE_NAME);
            enableTokenPrivilege(SE_BACKUP_NAME);

            HKEY hKey = nullptr;
            LSTATUS status = RegOpenKeyExW(HKEY_LOCAL_MACHINE, subKey.c_str(), REG_OPTION_BACKUP_RESTORE, WRITE_DAC | READ_CONTROL, &hKey);
            if (status != ERROR_SUCCESS)
            {
                status = RegOpenKeyExW(HKEY_LOCAL_MACHINE, subKey.c_str(), REG_OPTION_BACKUP_RESTORE, WRITE_OWNER, &hKey);
                if (status == ERROR_SUCCESS && hKey)
                {
                    PSID pAdminSid = nullptr;
                    SID_IDENTIFIER_AUTHORITY NtAuth = SECURITY_NT_AUTHORITY;
                    if (AllocateAndInitializeSid(&NtAuth, 2, SECURITY_BUILTIN_DOMAIN_RID, DOMAIN_ALIAS_RID_ADMINS, 0, 0, 0, 0, 0, 0, &pAdminSid))
                    {
                        SECURITY_DESCRIPTOR sd;
                        InitializeSecurityDescriptor(&sd, SECURITY_DESCRIPTOR_REVISION);
                        SetSecurityDescriptorOwner(&sd, pAdminSid, FALSE);
                        RegSetKeySecurity(hKey, OWNER_SECURITY_INFORMATION, &sd);
                        FreeSid(pAdminSid);
                    }
                    RegCloseKey(hKey);
                    status = RegOpenKeyExW(HKEY_LOCAL_MACHINE, subKey.c_str(), REG_OPTION_BACKUP_RESTORE, WRITE_DAC | READ_CONTROL, &hKey);
                }
            }

            if (status == ERROR_SUCCESS && hKey)
            {
                PSID pAdminSid = nullptr;
                PSID pUserSid = nullptr;
                SID_IDENTIFIER_AUTHORITY NtAuth = SECURITY_NT_AUTHORITY;
                AllocateAndInitializeSid(&NtAuth, 2, SECURITY_BUILTIN_DOMAIN_RID, DOMAIN_ALIAS_RID_ADMINS, 0, 0, 0, 0, 0, 0, &pAdminSid);
                AllocateAndInitializeSid(&NtAuth, 2, SECURITY_BUILTIN_DOMAIN_RID, DOMAIN_ALIAS_RID_USERS, 0, 0, 0, 0, 0, 0, &pUserSid);

                EXPLICIT_ACCESSW ea[2] = {};
                DWORD eaCount = 0;
                if (pAdminSid)
                {
                    ea[eaCount].grfAccessPermissions = KEY_ALL_ACCESS;
                    ea[eaCount].grfAccessMode = SET_ACCESS;
                    ea[eaCount].grfInheritance = CONTAINER_INHERIT_ACE | OBJECT_INHERIT_ACE;
                    ea[eaCount].Trustee.TrusteeForm = TRUSTEE_IS_SID;
                    ea[eaCount].Trustee.TrusteeType = TRUSTEE_IS_GROUP;
                    ea[eaCount].Trustee.ptstrName = (LPWSTR)pAdminSid;
                    eaCount++;
                }
                if (pUserSid)
                {
                    ea[eaCount].grfAccessPermissions = KEY_ALL_ACCESS;
                    ea[eaCount].grfAccessMode = SET_ACCESS;
                    ea[eaCount].grfInheritance = CONTAINER_INHERIT_ACE | OBJECT_INHERIT_ACE;
                    ea[eaCount].Trustee.TrusteeForm = TRUSTEE_IS_SID;
                    ea[eaCount].Trustee.TrusteeType = TRUSTEE_IS_GROUP;
                    ea[eaCount].Trustee.ptstrName = (LPWSTR)pUserSid;
                    eaCount++;
                }

                PACL pOldDacl = nullptr;
                PSECURITY_DESCRIPTOR pSD = nullptr;
                if (GetSecurityInfo(hKey, SE_REGISTRY_KEY, DACL_SECURITY_INFORMATION, nullptr, nullptr, &pOldDacl, nullptr, &pSD) == ERROR_SUCCESS)
                {
                    PACL pNewDacl = nullptr;
                    if (SetEntriesInAclW(eaCount, ea, pOldDacl, &pNewDacl) == ERROR_SUCCESS)
                    {
                        SetSecurityInfo(hKey, SE_REGISTRY_KEY, DACL_SECURITY_INFORMATION, nullptr, nullptr, pNewDacl, nullptr);
                        LocalFree(pNewDacl);
                    }
                    if (pSD) LocalFree(pSD);
                }
                if (pAdminSid) FreeSid(pAdminSid);
                if (pUserSid) FreeSid(pUserSid);
                RegCloseKey(hKey);
                return true;
            }
            return false;
        }

        static void ensureDevicePropertyKeyWritable(IMMDevice *dev, const std::string &guid)
        {
            std::wstring endpointId;
            if (dev)
            {
                LPWSTR strId = nullptr;
                if (SUCCEEDED(dev->GetId(&strId)) && strId)
                {
                    endpointId = strId;
                    CoTaskMemFree(strId);
                }
            }

            if (!endpointId.empty())
            {
                std::wstring baseKey = L"SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\MMDevices\\Audio\\Capture\\" + endpointId;
                makeRegistryKeyWritable(baseKey);
                makeRegistryKeyWritable(baseKey + L"\\Properties");
                return;
            }

            if (guid.empty())
            {
                return;
            }

            std::wstring guidW = Helpers::widen(guid);
            HKEY hCapture = nullptr;
            if (RegOpenKeyExW(HKEY_LOCAL_MACHINE, L"SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\MMDevices\\Audio\\Capture",
                              0, KEY_READ, &hCapture) == ERROR_SUCCESS)
            {
                wchar_t subKeyName[256];
                DWORD index = 0;
                DWORD nameLen = 256;
                while (RegEnumKeyExW(hCapture, index++, subKeyName, &nameLen, nullptr, nullptr, nullptr, nullptr) == ERROR_SUCCESS)
                {
                    std::wstring name(subKeyName);
                    std::wstring lowerName = name;
                    std::wstring lowerGuidW = guidW;
                    std::transform(lowerName.begin(), lowerName.end(), lowerName.begin(), ::towlower);
                    std::transform(lowerGuidW.begin(), lowerGuidW.end(), lowerGuidW.begin(), ::towlower);
                    if (lowerName.find(lowerGuidW) != std::wstring::npos)
                    {
                        std::wstring baseKey = L"SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\MMDevices\\Audio\\Capture\\" + name;
                        makeRegistryKeyWritable(baseKey);
                        makeRegistryKeyWritable(baseKey + L"\\Properties");
                        break;
                    }
                    nameLen = 256;
                }
                RegCloseKey(hCapture);
            }
        }

        bool RecordingDevice::listenToDevice(bool state) const
        {
            if (!device)
            {
                Fancy::fancy.logTime().failure()
                    << "Failed to set listen to this device, device was invalid" << std::endl;
                return false;
            }

            ensureDevicePropertyKeyWritable(device.get(), guid);

            IPropertyStore *store = nullptr;
            HRESULT res = device->OpenPropertyStore(STGM_READWRITE, &store);
            if (FAILED(res) || !store)
            {
                res = device->OpenPropertyStore(STGM_WRITE, &store);
            }

            if (FAILED(res) || !store)
            {
                if (res == E_ACCESSDENIED)
                {
                    Fancy::fancy.logTime().warning()
                        << "Access Denied: You need Administrator privileges to perform this action" << std::endl;
                }
                if (Globals::gGui)
                {
                    Globals::gGui->onAdminRequired();
                }
                Fancy::fancy.logTime().warning() << "Failed to set listen state for " << name << " (HRESULT: 0x" << std::hex << res << std::dec << ")" << std::endl;
                return false;
            }

            PROPVARIANT listenProp;
            PropVariantInit(&listenProp);
            listenProp.vt = VT_BOOL;
            listenProp.boolVal = state ? VARIANT_TRUE : VARIANT_FALSE;

            HRESULT hr = store->SetValue(PKEY_Device_ListenToThisDevice, listenProp);
            if (SUCCEEDED(hr))
            {
                hr = store->Commit();
            }

            PropVariantClear(&listenProp);
            store->Release();
            return SUCCEEDED(hr);
        }
        bool RecordingDevice::playbackThrough(const PlaybackDevice &destination) const
        {
            if (!device)
            {
                Fancy::fancy.logTime().failure() << "Failed to set destination, device was invalid" << std::endl;
                return false;
            }

            ensureDevicePropertyKeyWritable(device.get(), guid);

            IPropertyStore *store = nullptr;
            HRESULT res = device->OpenPropertyStore(STGM_READWRITE, &store);
            if (FAILED(res) || !store)
            {
                res = device->OpenPropertyStore(STGM_WRITE, &store);
            }

            if (FAILED(res) || !store)
            {
                if (res == E_ACCESSDENIED)
                {
                    Fancy::fancy.logTime().warning()
                        << "Access Denied: You need Administrator privileges to perform this action" << std::endl;
                    if (Globals::gGui)
                    {
                        Globals::gGui->onAdminRequired();
                    }
                }
                Fancy::fancy.logTime().warning() << "Failed to set destination for " << name << " (HRESULT: 0x" << std::hex << res << std::dec << ")" << std::endl;
                return false;
            }

            PROPVARIANT listenProp;
            PropVariantInit(&listenProp);
            listenProp.vt = VT_LPWSTR;

            std::wstring destVal;
            LPWSTR destIdStr = nullptr;
            if (destination.getDevice() && SUCCEEDED(destination.getDevice()->GetId(&destIdStr)) && destIdStr)
            {
                destVal = destIdStr;
                CoTaskMemFree(destIdStr);
            }
            else
            {
                std::wstring destGuid = Helpers::widen(destination.getGUID());
                if (!destGuid.empty() && destGuid.front() != L'{')
                {
                    destGuid = L"{" + destGuid + L"}";
                }
                destVal = L"{0.0.0.00000000}." + destGuid;
            }

            SHStrDupW(destVal.c_str(), &listenProp.pwszVal);

            HRESULT hr = store->SetValue(PKEY_Device_PlaybackThrough, listenProp);
            if (SUCCEEDED(hr))
            {
                hr = store->Commit();
            }

            PropVariantClear(&listenProp);
            store->Release();
            return SUCCEEDED(hr);
        }
        std::string RecordingDevice::getDevicePlayingThrough() const
        {
            if (!device)
            {
                Fancy::fancy.logTime().failure() << "Failed to get destination, device was invalid" << std::endl;
                return "";
            }

            IPropertyStore *store = nullptr;
            if (!FAILED(device->OpenPropertyStore(STGM_READ, &store)) && store)
            {
                PROPVARIANT listenProp;
                PropVariantInit(&listenProp);
                if (!FAILED(store->GetValue(PKEY_Device_PlaybackThrough, &listenProp)))
                {
                    if (listenProp.vt == VT_LPWSTR && listenProp.pwszVal)
                    {
                        auto prop = Helpers::narrow(listenProp.pwszVal);
                        PropVariantClear(&listenProp);
                        store->Release();

                        auto pos = prop.find_first_of('}');
                        if (pos != std::string::npos && pos + 2 < prop.size())
                        {
                            prop = prop.substr(pos + 2);
                        }
                        return prop;
                    }
                    PropVariantClear(&listenProp);
                }
                store->Release();
            }

            Fancy::fancy.logTime().warning() << "Failed to get destination for " << name << std::endl;
            return "";
        }
        std::shared_ptr<WinSound> WinSound::createInstance()
        {
            auto instance = std::shared_ptr<WinSound>(new WinSound()); // NOLINT
            if (instance->setup())
            {
                return instance;
            }

            return nullptr;
        }
        std::vector<RecordingDevice> WinSound::getRecordingDevices()
        {
            std::vector<RecordingDevice> rtn;
            if (!enumerator)
            {
                return rtn;
            }

            IMMDeviceCollection *devices = nullptr;
            if (FAILED(enumerator->EnumAudioEndpoints(eCapture, DEVICE_STATE_ACTIVE, &devices)) || !devices)
            {
                return rtn;
            }

            std::uint32_t deviceCount = 0;
            devices->GetCount(&deviceCount);

            for (std::uint32_t i = 0; deviceCount > i; i++)
            {
                IMMDevice *device = nullptr;
                if (SUCCEEDED(devices->Item(i, &device)) && device)
                {
                    rtn.emplace_back(RecordingDevice(device));
                }
            }

            devices->Release();
            return rtn;
        }
        std::vector<PlaybackDevice> WinSound::getPlaybackDevices()
        {
            std::vector<PlaybackDevice> rtn;
            if (!enumerator)
            {
                return rtn;
            }

            IMMDeviceCollection *devices = nullptr;
            if (FAILED(enumerator->EnumAudioEndpoints(eRender, DEVICE_STATE_ACTIVE, &devices)) || !devices)
            {
                return rtn;
            }

            std::uint32_t deviceCount = 0;
            devices->GetCount(&deviceCount);

            for (std::uint32_t i = 0; deviceCount > i; i++)
            {
                IMMDevice *device = nullptr;
                if (SUCCEEDED(devices->Item(i, &device)) && device)
                {
                    rtn.emplace_back(PlaybackDevice(device));
                }
            }

            devices->Release();
            return rtn;
        }
        static bool isVBCableDeviceName(const std::string &name)
        {
            std::string lower = name;
            std::transform(lower.begin(), lower.end(), lower.begin(), [](unsigned char c) { return static_cast<char>(std::tolower(c)); });
            return (lower.find("vb-audio") != std::string::npos ||
                    lower.find("cable input") != std::string::npos ||
                    lower.find("cable output") != std::string::npos ||
                    lower.find("virtual cable") != std::string::npos ||
                    lower.find("vb-cable") != std::string::npos ||
                    lower.find("voicemeeter") != std::string::npos);
        }

        bool WinSound::isVBCableInstalled()
        {
            for (const auto &device : getPlaybackDevices())
            {
                if (isVBCableDeviceName(device.getName()))
                {
                    return true;
                }
            }
            for (const auto &device : getRecordingDevices())
            {
                if (isVBCableDeviceName(device.getName()))
                {
                    return true;
                }
            }
            return false;
        }

        std::optional<RecordingDevice> WinSound::getRecordingDevice(const std::string &guid)
        {
            if (guid.empty())
            {
                return std::nullopt;
            }

            std::string lowerGuid = guid;
            std::transform(lowerGuid.begin(), lowerGuid.end(), lowerGuid.begin(), [](char c) { return tolower(c); });

            for (auto &device : getRecordingDevices())
            {
                std::string deviceGuid = device.getGUID();
                std::string deviceName = device.getName();
                std::transform(deviceName.begin(), deviceName.end(), deviceName.begin(), [](char c) { return tolower(c); });

                if (lowerGuid == deviceGuid || lowerGuid == deviceName ||
                    deviceGuid.find(lowerGuid) != std::string::npos || lowerGuid.find(deviceGuid) != std::string::npos)
                {
                    return device;
                }
            }

            return std::nullopt;
        }
        std::optional<PlaybackDevice> WinSound::getPlaybackDevice(const std::string &guid)
        {
            if (guid.empty())
            {
                return std::nullopt;
            }

            std::string lowerGuid = guid;
            std::transform(lowerGuid.begin(), lowerGuid.end(), lowerGuid.begin(), [](char c) { return tolower(c); });
            for (const auto &device : getPlaybackDevices())
            {
                std::string deviceGuid = device.getGUID();
                std::string deviceName = device.getName();
                std::transform(deviceName.begin(), deviceName.end(), deviceName.begin(), [](char c) { return tolower(c); });

                if (lowerGuid == deviceGuid || lowerGuid == deviceName ||
                    deviceGuid.find(lowerGuid) != std::string::npos || lowerGuid.find(deviceGuid) != std::string::npos)
                {
                    return device;
                }
            }

            return std::nullopt;
        }
        bool WinSound::isVBCableProperlySetup()
        {
            if (defaultRecordingDevice)
            {
                auto currentDevOpt = getRecordingDevice(defaultRecordingDevice->getGUID());
                if (currentDevOpt && currentDevOpt->isListeningToDevice())
                {
                    auto playbackDevice = getPlaybackDevice(currentDevOpt->getDevicePlayingThrough());
                    if (playbackDevice && isVBCableDeviceName(playbackDevice->getName()))
                    {
                        return true;
                    }
                }
                return false;
            }

            for (const auto &recordingDevice : getRecordingDevices())
            {
                if (recordingDevice.isListeningToDevice())
                {
                    if (!isVBCableDeviceName(recordingDevice.getName()))
                    {
                        auto playbackDevice = getPlaybackDevice(recordingDevice.getDevicePlayingThrough());
                        if (playbackDevice && isVBCableDeviceName(playbackDevice->getName()))
                        {
                            return true;
                        }
                    }
                }
            }

            return false;
        }
        std::string WinSound::setupVBCable(const std::optional<RecordingDevice> &deviceOverride)
        {
            defaultRecordingDevice = deviceOverride;

            // Turn off listen to VB-Cable for other active recording devices to prevent feedback/duplicate routing
            for (const auto &recordingDevice : getRecordingDevices())
            {
                if (defaultRecordingDevice && recordingDevice.getGUID() == defaultRecordingDevice->getGUID())
                {
                    continue;
                }
                if (recordingDevice.isListeningToDevice())
                {
                    auto playbackDevice = getPlaybackDevice(recordingDevice.getDevicePlayingThrough());
                    if (playbackDevice && isVBCableDeviceName(playbackDevice->getName()))
                    {
                        recordingDevice.listenToDevice(false);
                    }
                }
            }

            if (!defaultRecordingDevice)
            {
                return "ok";
            }

            if (isVBCableProperlySetup())
            {
                return "ok";
            }

            bool vbCableFound = false;
            for (const auto &device : getPlaybackDevices())
            {
                if (isVBCableDeviceName(device.getName()))
                {
                    vbCableFound = true;
                    break;
                }
            }

            if (!vbCableFound)
            {
                Fancy::fancy.logTime().failure() << "VB-Audio Cable playback device not found!" << std::endl;
                return "vb_cable_not_installed";
            }

            if (defaultRecordingDevice && !isVBCableDeviceName(defaultRecordingDevice->getName()))
            {
                if (defaultRecordingDevice->listenToDevice(true))
                {
                    for (const auto &playbackDevice : getPlaybackDevices())
                    {
                        if (isVBCableDeviceName(playbackDevice.getName()))
                        {
                            if (defaultRecordingDevice->playbackThrough(playbackDevice))
                            {
                                return "ok";
                            }
                        }
                    }
                    return "playback_through_failed";
                }
                else
                {
                    return "listen_failed";
                }
            }

            return "failed";
        }
        std::optional<RecordingDevice> WinSound::getMic()
        {
            return defaultRecordingDevice;
        }
    } // namespace Objects
} // namespace Audiopad
#endif