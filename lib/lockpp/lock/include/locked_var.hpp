#pragma once
#include <atomic>
#include <mutex>
#include <type_traits>

#include <sfinae/is_brace_constructiible.hpp>

namespace sxl
{
    template <typename var_t, class mutex_t = std::mutex>
    class locked_var
    {
        var_t &value;
        mutex_t &mutex;
        std::atomic<bool> wasUnlocked = false;

      public:
        locked_var(var_t &value, mutex_t &mutex) : value(value), mutex(mutex) {}
        locked_var(var_t &&value, mutex_t &mutex) : value(value), mutex(mutex) {}
        locked_var(const locked_var &other, mutex_t &mutex) : value(other.value), mutex(mutex) {}

        ~locked_var()
        {
            if (!wasUnlocked)
            {
                mutex.unlock();
            }
        }

      public:
        void unlock()
        {
            mutex.unlock();
            wasUnlocked = true;
        }
        void lock()
        {
            mutex.lock();
            wasUnlocked = false;
        }

      public:
        var_t &operator*()
        {
            return value;
        }
        var_t *operator->()
        {
            return &value;
        }
        /// \remarks: Can lead to unprotected access if object is not scope locked
        operator var_t &()
        {
            return value;
        }

        const var_t &operator*() const
        {
            return value;
        }
        const var_t *operator->() const
        {
            return &value;
        }
        operator const var_t &() const
        {
            return value;
        }

      public:
        template <typename T, std::enable_if_t<std::is_assignable_v<var_t &, T>> * = nullptr>
        locked_var<var_t, mutex_t> &operator=(T &&other)
        {
            if constexpr (std::is_same_v<std::decay_t<T>, locked_var<var_t, mutex_t>>)
            {
                if (&other == this)
                {
                    return *this;
                }
            }

            value = other;
            return *this;
        }
    };
} // namespace sxl