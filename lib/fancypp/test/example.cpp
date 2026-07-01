#include <chrono>
#include <fancy.hpp>
#include <list>
#include <map>
#include <vector>

int main()
{
    using namespace std::chrono_literals;
    const auto &cout = Fancy::fancy;

    auto start = std::chrono::system_clock::now();

    cout.logTime().message() << "Something happened!" << std::endl;
    cout.logTime().success() << "Something succeeded" << std::endl;
    cout.logTime().warning() << "Something is weird!" << std::endl;
    cout.logTime().failure() << "Something is wrong!" << std::endl;

    std::vector<int> someInts = {1, 2, 3};
    cout << "SomeInts: " << someInts << std::endl;

    std::list<int> list = {1, 2, 3};
    cout << "A List: " << someInts << std::endl;

    std::map<std::string, char> someMap = {{"key1", '1'}, {"key2", '2'}};
    cout << "A Map: " << someMap << std::endl;

    cout >> "Something important" << std::endl;
    cout << Fancy::Effect<Fancy::EffectType::Blink>() << Fancy::Effect<Fancy::EffectType::Underline>()
         << Fancy::Effect<Fancy::EffectType::Italic>() << Fancy::Effect<Fancy::EffectType::Bold>()
         << "Something blinking" << std::endl;

    std::tuple<int, int, float, std::string, char> tuple = {1, 2, 3.125, "String", 'c'};
    cout << "A Tuple: " << tuple << std::endl;

    cout.logTime() << "A " << std::hex << reinterpret_cast<std::uintptr_t>(&cout) << std::dec << std::endl;
    cout.logTime() << "A " << true << " statement and a " << false << " statement" << std::endl;
    cout.logTime() << "Time elapsed since start: " << (std::chrono::system_clock::now() - start) << std::endl;
    return 0;
}