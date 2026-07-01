cmake_minimum_required(VERSION 3.1)
project(guardpp LANGUAGES CXX VERSION 2.0)

# --------------------------------------------------------------------------------------------------------
# Create library
# --------------------------------------------------------------------------------------------------------

add_library(${PROJECT_NAME})
target_compile_features(${PROJECT_NAME} PRIVATE cxx_std_17)
set_target_properties(${PROJECT_NAME} PROPERTIES CXX_STANDARD 17 CXX_EXTENSIONS OFF CXX_STANDARD_REQUIRED ON)

if (WIN32)
    target_sources(${PROJECT_NAME} PRIVATE "src/guard.windows.cpp")
else()
    target_sources(${PROJECT_NAME} PRIVATE "src/guard.linux.cpp")

    if (CMAKE_BUILD_TYPE STREQUAL "Debug")
        target_compile_options(${PROJECT_NAME} PRIVATE -Wall -Werror -Wextra -pedantic)
    endif()
endif()

# --------------------------------------------------------------------------------------------------------
# Include "include" folder
# --------------------------------------------------------------------------------------------------------

target_include_directories(${PROJECT_NAME} PUBLIC "include")

# --------------------------------------------------------------------------------------------------------
# Link required libraries
# --------------------------------------------------------------------------------------------------------

include(FetchContent)

FetchContent_Declare(expected GIT_REPOSITORY "https://github.com/TartanLlama/expected")

option(EXPECTED_BUILD_TESTS "" OFF)
option(EXPECTED_BUILD_PACKAGE "" OFF)
FetchContent_MakeAvailable(expected)

target_link_libraries(${PROJECT_NAME} PUBLIC tl::expected)

# --------------------------------------------------------------------------------------------------------
# Build a test executable
# --------------------------------------------------------------------------------------------------------

option(guardpp_tests "Build tests" OFF)

if (guardpp_tests)
    message(STATUS "Building guardpp tests")

    include(FetchContent)
    FetchContent_Declare(tiny-process GIT_REPOSITORY "https://gitlab.com/eidheim/tiny-process-library/")
    FetchContent_MakeAvailable(tiny-process)

    add_executable(${PROJECT_NAME}_test "tests/test.cpp")
    add_executable(${PROJECT_NAME}_test_exe "tests/main.cpp")

    target_link_libraries(${PROJECT_NAME}_test_exe PRIVATE guardpp)
    target_link_libraries(${PROJECT_NAME}_test PRIVATE guardpp tiny-process-library)

    target_compile_features(${PROJECT_NAME}_test PRIVATE cxx_std_17)
    set_target_properties(${PROJECT_NAME}_test PROPERTIES CXX_STANDARD 17 CXX_EXTENSIONS OFF CXX_STANDARD_REQUIRED ON)
    
    target_compile_features(${PROJECT_NAME}_test_exe PRIVATE cxx_std_17)
    set_target_properties(${PROJECT_NAME}_test_exe PROPERTIES CXX_STANDARD 17 CXX_EXTENSIONS OFF CXX_STANDARD_REQUIRED ON)
endif()