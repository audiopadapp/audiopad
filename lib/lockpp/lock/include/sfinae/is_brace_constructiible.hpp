#pragma once
#include <cstdint>
#include <utility>

namespace sxl
{
    template <class class_type, typename... T>
    class is_brace_construcrible
    {
        static auto test(...) -> std::uint8_t;
        template <typename clazz, typename... O>
        static auto test(clazz *, O *...) -> decltype(clazz{std::declval<O>()...}, std::uint16_t{});

      public:
        static const bool value =
            sizeof(test(std::declval<class_type *>(), std::declval<T *>()...)) == sizeof(std::uint16_t);
    };
} // namespace sxl