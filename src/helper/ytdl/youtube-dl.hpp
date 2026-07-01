#pragma once
#include <json.hpp>
#include <optional>

#pragma push_macro("UNICODE")
#undef UNICODE
#include <process.hpp>
#pragma pop_macro("UNICODE")

#include <regex>
#include <string>

namespace Audiopad
{
    namespace Objects
    {
        class YoutubeDl
        {
            bool isAvailable = false;
            static const std::regex urlRegex;
            std::optional<TinyProcessLib::Process> currentDownload;

          public:
            void setup();
            void killDownload();
            bool available() const;
            bool download(const std::string &);
            std::optional<nlohmann::json> getInfo(const std::string &) const;
        };
    } // namespace Objects
} // namespace Audiopad