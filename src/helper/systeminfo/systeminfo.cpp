#include "systeminfo.hpp"
#include <core/global/globals.hpp>
#include <helper/json/bindings.hpp>

std::string SystemInfo::getSettingsInfo()
{
    auto settingsJson = nlohmann::json(Audiopad::Globals::gSettings);

    std::string rtn;
    for (const auto &item : settingsJson.items())
    {
        rtn += item.key() + ": " + item.value().dump() + "\n";
    }

    return rtn;
}

std::string SystemInfo::getSummary()
{
    return getSystemInfo() + "\n" + getSettingsInfo() + "\n" + "AUDIOPAD_VERSION: " + AUDIOPAD_VERSION;
}