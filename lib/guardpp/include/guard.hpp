#pragma once
#include <memory>
#include <string>
#include <system_error>
#include <tl/expected.hpp>

namespace guardpp
{
    class guard
    {
        struct impl;

      public:
        std::string m_name;
        std::unique_ptr<impl> m_impl;

      public:
        ~guard();
        explicit guard(std::string name);

      public:
        tl::expected<bool, std::error_code> reset() const;
        tl::expected<bool, std::error_code> other_instance() const;
    };
} // namespace guardpp