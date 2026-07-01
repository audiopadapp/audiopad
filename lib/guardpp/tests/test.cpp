#include <guard.hpp>
#include <iostream>
#include <process.hpp>
#include <vector>

int main(int argc, char **args)
{
    guardpp::guard guard("guardpp");
    std::string child(args[argc - 1]);

    if (auto rtn = TinyProcessLib::Process(child).get_exit_status(); rtn != 2) // NOLINT
    {
        std::cout << "Locking failed: " << rtn << std::endl;
        return rtn;
    }

#if defined(__linux__)
    if (auto rtn = TinyProcessLib::Process(std::vector<std::string>{child, "--reset"}).get_exit_status(); rtn != 0) // NOLINT
    {
        std::cout << "Mutex was not properly reset: " << rtn << std::endl;
        return 1;
    }
#endif
}