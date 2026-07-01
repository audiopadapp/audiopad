#pragma once
#include <core/objects/data.hpp>
#include <core/objects/settings.hpp>
#include <string>

namespace Audiopad
{
    namespace Objects
    {
        struct Config
        {
            Data data;
            Settings settings;

            void save();
            void load();
            static const std::string path;
        };
    } // namespace Objects
} // namespace Audiopad