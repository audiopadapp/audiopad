#include <fcntl.h>
#include <guard.hpp>
#include <unistd.h>

namespace guardpp
{
    struct guard::impl
    {
        int fd;
    };

    guard::guard(std::string name) : m_name(std::move(name)), m_impl(std::make_unique<impl>())
    {
        m_impl->fd = open(("/tmp/" + m_name).c_str(), O_RDWR | O_CREAT | O_CLOEXEC, S_IRUSR | S_IWUSR);
        lockf(m_impl->fd, F_TLOCK, 0); // Try to lock file on creation.
    }

    guard::~guard()
    {
        lockf(m_impl->fd, F_UNLCK, 0);
        close(m_impl->fd);
    }

    tl::expected<bool, std::error_code> guard::reset() const
    {
        close(m_impl->fd);
        remove(("/tmp/" + m_name).c_str());
        m_impl->fd = open(("/tmp/" + m_name).c_str(), O_RDWR | O_CREAT | O_CLOEXEC, S_IRUSR | S_IWUSR);

        auto rtn = lockf(m_impl->fd, F_TLOCK, 0);

        if (rtn)
            return tl::make_unexpected(std::error_code(errno, std::system_category()));

        return true;
    }

    tl::expected<bool, std::error_code> guard::other_instance() const
    {
        auto rtn = lockf(m_impl->fd, F_TLOCK, 0);

        if (!rtn)
            return false;

        switch (errno)
        {
        case EACCES:
        case EAGAIN:
            return true;
        default:
            return tl::make_unexpected(std::error_code(errno, std::system_category()));
        }
    }
} // namespace guardpp