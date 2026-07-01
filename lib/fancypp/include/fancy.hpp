#pragma once
#include <chrono>
#include <cstdint>
#include <functional>
#include <iomanip>
#include <iostream>
#include <ostream>
#include <sstream>
#include <string>
#include <string_view>
#include <type_traits>
#include <utility>

namespace Fancy
{
    namespace SFINAE
    {
        template <typename T> struct is_printable
        {
          private:
            static std::uint8_t test(...);
            template <typename O> static auto test(O *) -> decltype(std::cout << std::declval<O>(), std::uint16_t{});

          public:
            static const bool value = sizeof(test(reinterpret_cast<T *>(0))) == sizeof(std::uint16_t);
        };
        template <typename T> struct is_timepoint
        {
          private:
            static std::uint8_t test(...);
            template <typename O> static auto test(std::chrono::time_point<O> *) -> std::uint16_t;

          public:
            static const bool value = sizeof(test(reinterpret_cast<T *>(0))) == sizeof(std::uint16_t);
        };
        template <typename T> struct is_container
        {
          private:
            static std::uint8_t test(...);
            template <typename O>
            static auto test(O *) -> decltype(std::declval<O>().begin(), std::declval<O>().end(), std::uint16_t{});

          public:
            static const bool value = sizeof(test(reinterpret_cast<T *>(0))) == sizeof(std::uint16_t);
        };
        template <typename T> struct is_pair
        {
          private:
            static std::uint8_t test(...);
            template <typename A, typename B> static auto test(std::pair<A, B> *) -> std::uint16_t;

          public:
            static const bool value = sizeof(test(reinterpret_cast<T *>(0))) == sizeof(std::uint16_t);
        };
        template <typename T> struct is_tuple
        {
          private:
            static std::uint8_t test(...);
            template <typename... O> static auto test(std::tuple<O...> *) -> std::uint16_t;

          public:
            static const bool value = sizeof(test(reinterpret_cast<T *>(0))) == sizeof(std::uint16_t);
        };
        template <typename T> struct is_duration
        {
          private:
            static auto test(...) -> std::uint8_t;
            template <typename O, typename L> static auto test(std::chrono::duration<O, L> *) -> std::uint16_t;

          public:
            static const bool value = sizeof(test(reinterpret_cast<T *>(0))) == sizeof(std::uint16_t);
        };
    } // namespace SFINAE

    namespace Helpers
    {
        template <typename T, std::enable_if_t<SFINAE::is_timepoint<T>::value> * = nullptr>
        static auto toTimeStr(const T &what, const std::string &format)
        {
            auto time_t = std::chrono::system_clock::to_time_t(what);
            auto tm = *std::gmtime(&time_t); // NOLINT

            std::stringstream ss;
            ss << std::put_time(&tm, format.data());

            return ss.str();
        }

        template <std::size_t I, std::size_t MaxI, typename Tuple, typename Function,
                  std::enable_if_t<(I >= 0)> * = nullptr>
        void iterateTupleImpl(const Tuple &tuple, const Function &func)
        {
            func(I, std::get<I>(tuple));
            if constexpr (I < MaxI)
            {
                iterateTupleImpl<I + 1, MaxI>(tuple, func);
            }
        }
        template <typename Function, typename... P>
        void iterateTuple(const std::tuple<P...> &tuple, const Function &func)
        {
            iterateTupleImpl<0, sizeof...(P) - 1>(tuple, func);
        }
    } // namespace Helpers

    class BaseColor
    {
      protected:
        std::uint8_t r, g, b;

      public:
        BaseColor(std::uint8_t r, std::uint8_t g, std::uint8_t b) : r(r), g(g), b(b) {}
        virtual std::ostream &print(std::ostream &) const = 0;
    };
    class ForegroundColor : public BaseColor
    {
      public:
        using BaseColor::BaseColor;
        std::ostream &print(std::ostream &stream) const override
        {
            stream << "\033[38;2;" + std::to_string(r) + ";" + std::to_string(g) + ";" + std::to_string(b) + "m";
            return stream;
        }
    };
    class BackgroundColor : public BaseColor
    {
      public:
        using BaseColor::BaseColor;
        std::ostream &print(std::ostream &stream) const override
        {
            stream << "\033[48;2;" + std::to_string(r) + ";" + std::to_string(g) + ";" + std::to_string(b) + "m";
            return stream;
        }
    };
    inline std::ostream &operator<<(std::ostream &stream, const BaseColor &color)
    {
        return color.print(stream);
    }

    enum class EffectType
    {
        Bold,
        Italic,
        Strike,
        Underline,
        Blink,
        Reset
    };
    template <EffectType type> struct Effect
    {
        constexpr Effect() = default;
    };
    template <EffectType type>
    std::ostream &operator<<(std::ostream &stream, [[maybe_unused]] const Effect<type> &effect)
    {
        if constexpr (type == EffectType::Bold)
        {
            stream << "\033[1m";
        }
        else if constexpr (type == EffectType::Italic)
        {
            stream << "\033[3m";
        }
        else if constexpr (type == EffectType::Strike)
        {
            stream << "\033[9m";
        }
        else if constexpr (type == EffectType::Underline)
        {
            stream << "\033[4m";
        }
        else if constexpr (type == EffectType::Blink)
        {
            stream << "\033[5m";
        }
        else if constexpr (type == EffectType::Reset)
        {
            stream << "\033[0m";
        }

        return stream;
    }
    namespace SFINAE
    {
        template <class> struct is_effect : public std::false_type
        {
        };
        template <EffectType T> struct is_effect<Effect<T>> : public std::true_type
        {
        };
    } // namespace SFINAE

    struct Config
    {
        struct
        {
            ForegroundColor braces{120, 120, 120};
            ForegroundColor curlyBraces{160, 160, 160};

            ForegroundColor time{80, 80, 80};
            ForegroundColor string{243, 156, 18};
            ForegroundColor boolean{52, 152, 219};
            ForegroundColor duration{155, 89, 182};
            ForegroundColor arithmetic{142, 68, 173};

            ForegroundColor failure{231, 76, 60};
            ForegroundColor message{69, 170, 242};
            ForegroundColor success{46, 204, 113};
            ForegroundColor warning{241, 196, 15};
        } colors;

        struct
        {
            std::string message = "message";
            std::string success = "success";
            std::string warning = "warning";
            std::string failure = "failure";
        } strings;

        struct
        {
            std::string timeFormat = "%H:%M:%S";
        } formatting;

        struct
        {
            std::function<void(std::ostream &)> style = [](std::ostream &stream) {
                stream << Effect<EffectType::Bold>() << Effect<EffectType::Underline>();
            };
        } importantStyle;
    };

    class Stream
    {
      private:
        Config config;

      public:
        Stream() = default;
        Stream(Config config) : config(std::move(config)) {}

        template <typename T> const Stream &operator<<(const T &what) const
        {
            using raw_type = std::decay_t<T>;

            if constexpr (std::is_same_v<raw_type, std::string> || std::is_same_v<raw_type, std::string_view> ||
                          std::is_same_v<T, const char *>)
            {
                std::cout << config.colors.string << "\"" << what << "\"";
            }
            else if constexpr (std::is_same_v<raw_type, char>)
            {
                std::cout << config.colors.string << "'" << what << "'";
            }
            else if constexpr (std::is_same_v<raw_type, bool>)
            {
                std::cout << config.colors.boolean << (what == true ? "true" : "false");
            }
            else if constexpr (std::is_arithmetic_v<raw_type>)
            {
                std::cout << config.colors.arithmetic << what;
            }
            else if constexpr (SFINAE::is_timepoint<raw_type>::value)
            {
                std::cout << config.colors.time << Helpers::toTimeStr(what, config.formatting.timeFormat);
            }
            else if constexpr (SFINAE::is_duration<raw_type>::value)
            {
                std::cout << config.colors.duration << what.count();
                if constexpr (std::is_same_v<raw_type, std::chrono::hours>)
                {
                    std::cout << "h";
                }
                else if constexpr (std::is_same_v<raw_type, std::chrono::minutes>)
                {
                    std::cout << "m";
                }
                else if constexpr (std::is_same_v<raw_type, std::chrono::seconds>)
                {
                    std::cout << "s";
                }
                else if constexpr (std::is_same_v<raw_type, std::chrono::milliseconds>)
                {
                    std::cout << "ms";
                }
                else if constexpr (std::is_same_v<raw_type, std::chrono::microseconds>)
                {
                    std::cout << "µs";
                }
                else if constexpr (std::is_same_v<raw_type, std::chrono::nanoseconds>)
                {
                    std::cout << "ns";
                }
            }
            else if constexpr (SFINAE::is_tuple<raw_type>::value)
            {
                std::cout << config.colors.curlyBraces << "{";

                constexpr auto size = std::tuple_size<raw_type>::value - 1;
                Helpers::iterateTuple(what, [this, &size](const std::size_t &I, auto &arg) {
                    *this << arg;
                    if (I < size)
                    {
                        std::cout << ", ";
                    }
                });

                std::cout << config.colors.curlyBraces << "}";
            }
            else if constexpr (SFINAE::is_container<raw_type>::value)
            {
                std::cout << config.colors.braces << "[";
                for (auto it = what.begin(); it != what.end(); it++)
                {
                    *this << *it;
                    if (std::distance(it, what.end()) > 1)
                    {
                        std::cout << ", ";
                    }
                }
                std::cout << config.colors.braces << "]";
            }
            else if constexpr (SFINAE::is_pair<raw_type>::value)
            {
                std::cout << config.colors.curlyBraces << "{";
                *this << what.first;
                std::cout << ", ";
                *this << what.second;
                std::cout << config.colors.curlyBraces << "}";
            }
            else if constexpr (SFINAE::is_printable<raw_type>::value)
            {
                std::cout << what;
            }
            else
            {
                static_assert(SFINAE::is_printable<raw_type>::value, "Type is not printable!");
            }

            if constexpr (!SFINAE::is_effect<raw_type>::value && !std::is_same_v<ForegroundColor, raw_type> &&
                          !std::is_same_v<BackgroundColor, raw_type>)
            {
                std::cout << Effect<EffectType::Reset>();
            }
            return *this;
        }
        template <typename T> const Stream &operator>>(const T &what) const
        {
            config.importantStyle.style(std::cout);
            *this << what;
            return *this;
        }
        const Stream &operator<<(std::ostream &(*var)(std::ostream &)) const
        {
            std::cout << Effect<EffectType::Reset>();
            std::cout << var;
            return *this;
        }
        const Stream &logTime() const noexcept
        {
            std::cout << config.colors.braces << "[";
            *this << std::chrono::system_clock::now();
            std::cout << config.colors.braces << "] " << Effect<EffectType::Reset>();
            return *this;
        }

        const Stream &success() const noexcept
        {
            std::cout << config.colors.braces << "[" << config.colors.success << config.strings.success
                      << config.colors.braces << "] " << Effect<EffectType::Reset>();

            return *this;
        }
        const Stream &warning() const noexcept
        {
            std::cout << config.colors.braces << "[" << config.colors.warning << config.strings.warning
                      << config.colors.braces << "] " << Effect<EffectType::Reset>();

            return *this;
        }
        const Stream &failure() const noexcept
        {
            std::cout << config.colors.braces << "[" << config.colors.failure << config.strings.failure
                      << config.colors.braces << "] " << Effect<EffectType::Reset>();

            return *this;
        }
        const Stream &message() const noexcept
        {
            std::cout << config.colors.braces << "[" << config.colors.message << config.strings.message
                      << config.colors.braces << "] " << Effect<EffectType::Reset>();

            return *this;
        }
    };
    const inline Stream fancy;
} // namespace Fancy