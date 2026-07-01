cmake_minimum_required(VERSION 3.1)
project(main VERSION 1.0 DESCRIPTION "")

file(GLOB src
    "test/*.cpp"
)

add_executable(main ${src})
target_include_directories(main PRIVATE include)

target_compile_features(main PRIVATE cxx_std_17)
set_target_properties(main PROPERTIES CMAKE_CXX_STANDARD 17)
set_target_properties(main PROPERTIES CMAKE_CXX_EXTENSIONS Off)
set_target_properties(main PROPERTIES CMAKE_CXX_STANDARD_REQUIRED On)

set_target_properties(main PROPERTIES VERSION ${PROJECT_VERSION})
set_target_properties(main PROPERTIES PROJECT_NAME ${PROJECT_NAME})