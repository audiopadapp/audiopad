#include <Windows.h>
#include <guard.hpp>

namespace guardpp
{
    struct guard::impl
    {
        HANDLE handle;
    };

    guard::guard(std::string name) : m_name(std::move(name)), m_impl(std::make_unique<impl>())
    {
        m_impl->handle = CreateMutex(nullptr, TRUE, m_name.c_str());
    }

    guard::~guard()
    {
        ReleaseMutex(m_impl->handle);
        CloseHandle(m_impl->handle);
    }

    tl::expected<bool, std::error_code> guard::reset() const
    {
        // TODO(Windows): Unimplemented. I don't think there is a way to release a named mutex when you don't own it. This should however not be that big of a problem since the mutex is
        // TODO(Windows): extremely robust on windows

        // From this stack overflow answer(https://stackoverflow.com/questions/9072570/how-can-i-delete-a-mutex-and-semaphore-in-win32-api):
        // > You have to close all handles that are opened to that mutex / semaphore.
        // > If you don't own some of them, you can not.

        return tl::make_unexpected(std::error_code(-1, std::generic_category()));
    }

    tl::expected<bool, std::error_code> guard::other_instance() const
    {
        auto rtn = WaitForSingleObject(m_impl->handle, 0);

        switch (rtn)
        {
        case WAIT_OBJECT_0:
            return false;
        case WAIT_TIMEOUT:
            return true;
        case WAIT_ABANDONED:
            return false;
        default:
            return tl::make_unexpected(std::error_code(static_cast<int>(GetLastError()), std::system_category()));
        }
    }
} // namespace guardpp