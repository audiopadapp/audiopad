#pragma once
#include <httplib.h>
#include <optional>

namespace Audiopad
{
    namespace Objects
    {
        struct VersionStatus
        {
            std::string current;
            std::string latest;
            bool outdated;
        };
    } // namespace Objects
} // namespace Audiopad

class VersionCheck
{
    static httplib::Client client;

  public:
    static std::optional<Audiopad::Objects::VersionStatus> getStatus();
};