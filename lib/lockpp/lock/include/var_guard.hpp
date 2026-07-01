#pragma once
#include <locked_var.hpp>
#include <mutex>

#include <sfinae/is_brace_constructiible.hpp>

namespace sxl
{
    template <class var_t, class mutex_t = std::mutex>
    class var_guard
    {
        var_t value;
        mutable mutex_t mutex;

      public:
        var_guard(var_t &&value) : value(value) {}
        var_guard(const var_t &value) : value(value) {}
        var_guard(const var_guard &other) : value((std::lock_guard(other.mutex), other.value)) {}

        template <typename... T, std::enable_if_t<sxl::is_brace_construcrible<var_t, T...>::value> * = nullptr>
        var_guard(const T &...params) : value({params...})
        {
        }

      public:
        var_t copy()
        {
            std::lock_guard lock(mutex);
            return value;
        }
        var_t &get_unsafe()
        {
            return value;
        }
        const var_t &get_unsafe() const
        {
            return value;
        }
        const var_t copy() const
        {
            std::lock_guard lock(mutex);
            return value;
        }

        locked_var<var_t, mutex_t> scoped()
        {
            mutex.lock();
            return locked_var<var_t, mutex_t>(value, mutex);
        }
        const locked_var<var_t, mutex_t> scoped() const
        {
            mutex.lock();
            return locked_var<var_t, mutex_t>(value, mutex);
        }

      public:
        locked_var<var_t, mutex_t> operator*()
        {
            mutex.lock();
            return locked_var<var_t, mutex_t>(value, mutex);
        }
        var_t &operator~()
        {
            return value;
        }
        locked_var<var_t, mutex_t> operator->()
        {
            mutex.lock();
            return locked_var<var_t, mutex_t>(value, mutex);
        }
        operator var_t()
        {
            std::lock_guard lock(mutex);
            return value;
        }

        const locked_var<var_t, mutex_t> operator->() const
        {
            mutex.lock();
            return locked_var<var_t, mutex_t>(value, mutex);
        }
        const locked_var<var_t, mutex_t> operator*() const
        {
            mutex.lock();
            return locked_var<var_t, mutex_t>(value, mutex);
        }
        const var_t &operator~() const
        {
            return value;
        }
        operator const var_t() const
        {
            std::lock_guard lock(mutex);
            return value;
        }

      public:
        template <typename T, std::enable_if_t<std::is_assignable_v<var_t &, T>> * = nullptr>
        var_guard<var_t, mutex_t> &operator=(T &&other)
        {
            if constexpr (std::is_same_v<std::decay_t<T>, var_guard<var_t, mutex_t>>)
            {
                if (&other == this)
                {
                    return *this;
                }
            }

            std::lock_guard lock(mutex);
            value = other;
            return *this;
        }
    };
} // namespace sxl