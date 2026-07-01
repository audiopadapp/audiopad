## lockpp
A cross-platform C++17 library that manages mutex protection for objects.

## Usage

- Add the library to your project
  - ```cmake
    add_subdirectory(/path/to/lockpp)
    link_libraries(lockpp)
    ```

## Example
```cpp
#include <var_guard.hpp>
#include <string>

int main()
{
    sxl::var_guard<std::string> test = "Test";

    {
        // Test is now locked until the scope is exited.
        auto scoped = test.scoped();

        scoped->append("1");
        scoped = "Some other test";

        std::string &val = *scoped;
        val.erase(val.begin());
        // Test is now no longer locked.
    }

    test->clear(); // Test is only locked for single operation.

    return 0;
}
```
