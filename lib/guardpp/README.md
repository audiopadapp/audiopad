
<h1 align="center"> 💂 guardpp </h1>
<p align="center">
A C++17 library for single-instance applications
</p>

<p align="center">
    <a href="https://github.com/audiopadapp/guardpp/actions">
        <img src="https://img.shields.io/github/workflow/status/Audiopad/guardpp/Test%20on%20Linux?label=Linux%20Build&style=flat-square" alt="Linux Build" />
    </a>
    <a href="https://github.com/audiopadapp/guardpp/actions">
        <img src="https://img.shields.io/github/workflow/status/Audiopad/guardpp/Test%20on%20Windows?label=Windows%20Build&style=flat-square" alt="Windows Build" />
    </a>
    <a href="https://github.com/audiopadapp/guardpp/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/Audiopad/guardpp.svg?style=flat-square" alt="License" />
    </a>
</p>

---

## ⚙️ Configuration
### Tests
```cmake
set(guardpp_tests OFF)
```
> If set to `ON`, guardpp will build a test executable.


## 📎 Installation
- FetchContent
    ```cmake
    include(FetchContent)
    FetchContent_Declare(lockpp GIT_REPOSITORY "https://github.com/audiopadapp/guardpp")

    FetchContent_MakeAvailable(guardpp)
    target_link_libraries(<YourLibrary> guardpp)
    ```
- Git Submodule
    ```bash
    git submodule add "https://github.com/audiopadapp/guardpp"
    ```
    ```cmake
    # Somewhere in your CMakeLists.txt
    add_subdirectory("<path_to_guardpp>")
    target_link_libraries(<YourLibrary> guardpp)
    ```

## 📔 Usage

### Example
```cpp
#include <guard.hpp>
#include <iostream>

int main()
{
    guardpp::guard instance_guard("guardpp");

    auto other_instance = instance_guard.other_instance();
    
    if (other_instance)
    {
        if (other_instance.value())
        {
            std::cout << "Another instance is running!" << std::endl;
        }
        else
        {
            std::cout << "No other instance is running!" << std::endl;
        }
    }
    else
    {
        std::cout << other_instance.error() << std::endl;
    }

    // You can also take-over an existing lock by calling instance_guard.reset(); 
}
```

## 📚 Dependencies

- [`expected`](https://github.com/TartanLlama/expected)
- [`tiny-process-library`](https://gitlab.com/eidheim/tiny-process-library) _(For tests only!)_

## ℹ️ Remarks

- `guard::reset()` is unimplemented on Windows. This is because on Windows a mutex can only be deleted by closing all existing handles to the mutex, we can not do this because we can't access the handles created by other processes.¹

- The linux implementation now uses file based locks instead of shared memory / semaphores, because they seem to be more robust.²

> ¹ https://stackoverflow.com/questions/9072570/how-can-i-delete-a-mutex-and-semaphore-in-win32-api  
> ² http://charette.no-ip.com:81/programming/2010-01-13_PosixSemaphores/index.html