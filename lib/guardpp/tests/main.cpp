#include <cstring>
#include <guard.hpp>

int main(int argc, char **args) // NOLINT
{
    guardpp::guard instance_guard("guardpp");

    if (strcmp(args[argc - 1], "--reset") == 0)
    {
        auto rtn = instance_guard.reset();
        if (!rtn)
        {
            return rtn.error().value();
        }
    }

    auto other_instance = instance_guard.other_instance();

    if (other_instance)
    {
        if (other_instance.value())
        {
            return 2;
        }

        return 0;
    }

    return other_instance.error().value();
}