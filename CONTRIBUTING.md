# Contributing to AudioPad

Thank you for your interest in contributing to **AudioPad**! AudioPad is an open-source, cross-platform soundboard designed for high performance, intuitive sound management, and seamless stream injection on Windows and Linux.

Whether you are fixing a bug, adding new features, improving documentation, or reporting an issue, your contributions are welcome and appreciated.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Prerequisites](#prerequisites)
- [Building AudioPad](#building-audiopad)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Configure with CMake](#2-configure-with-cmake)
  - [3. Build the Application](#3-build-the-application)
  - [4. Running AudioPad](#4-running-audiopad)
- [Project Structure](#project-structure)
- [Branch Naming](#branch-naming)
- [Commit Conventions](#commit-conventions)
- [Code Style & Formatting](#code)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
- [Security Vulnerabilities](#security-vulnerabilities)

---

## Code of Conduct

All contributors and community participants are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please treat fellow contributors with respect, empathy, and professional courtesy at all times.

---

## How to Contribute

There are many ways you can contribute to AudioPad:
- **Report Bugs**: Help us find and reproduce issues by filing structured bug reports.
- **Suggest Features**: Propose UX improvements, new views, or audio pipeline integrations.
- **Submit Pull Requests**: Implement bug fixes, performance optimizations, or new capabilities.
- **Improve Documentation**: Fix inaccuracies, clarify instructions, or write guides for new users.
- **Test on Multiple Platforms**: Test AudioPad on various distributions of Linux (PulseAudio, PipeWire) or different Windows versions.

---

## Prerequisites

Before building AudioPad locally, verify that your development environment meets the following requirements:

### Cross-Platform
- **CMake**: Version `3.16` or newer (tested up to CMake `4.x`).
- **Git**: With submodule support.
- **C++ Compiler**: A compiler supporting the **C++17** standard:
  - **Windows**: Microsoft Visual C++ (MSVC) from Visual Studio 2019/2022 (with *Desktop development with C++* workload).
  - **Linux**: GCC 9+ or Clang 10+.

### Windows-Specific Requirements
- **NuGet CLI (`nuget.exe`)**: Available in your system `PATH` (used by CMake to automatically acquire the WebView2 and WIL packages).
- **Microsoft Edge WebView2 Runtime**: Pre-installed on Windows 10/11; standalone installer available for older versions.
- **Inno Setup (Optional)**: Needed only if compiling the Windows installer package (`deployment/setup.iss`).

### Linux-Specific Requirements
- **Development Packages**:
  - `libgtk-3-dev` (GTK3)
  - `libwebkit2gtk-4.0-dev` (WebKit2GTK)
  - `libappindicator3-dev` or `libayatana-appindicator3-dev` (System tray)
  - `libpipewire-0.3-dev` and `libpulse-dev` (Audio engines)
  - `libx11-dev`, `libxtst-dev`, `libxi-dev` (Global hotkey capture)
  - `libwnck-3-dev`
  - `pkg-config`

---

## Building AudioPad

### 1. Clone the Repository
Clone AudioPad along with its required Git submodules:

```bash
git clone --recursive https://github.com/audiopadapp/audiopad.git
cd audiopad
```

If you previously cloned without `--recursive`, fetch the vendored submodules manually:

```bash
git submodule update --init --recursive
```

### 2. Configure with CMake
Generate build files using CMake. We recommend an out-of-source build inside a `build` folder:

```bash
# Debug build (recommended during development):
cmake -B build -DCMAKE_BUILD_TYPE=Debug

# Release build:
cmake -B build -DCMAKE_BUILD_TYPE=Release
```

### 3. Build the Application
Compile the project using CMake's build runner:

```bash
# Windows (MSVC):
cmake --build build --config Debug

# Linux:
cmake --build build -j$(nproc)
```

> **Note on Build Cleanliness**: AudioPad compiles with high warning levels (`/W4` on MSVC, `-Wall -Wextra -Werror` on GCC/Clang in Debug mode). Please ensure any code you write compiles with **0 warnings and 0 errors**.

### 4. Running AudioPad
Once compiled, frontend assets from `src/ui/impl/webview/lib/audiopad-ui` are automatically synchronized to the target directory:

```powershell
# Windows
.\build\Debug\audiopad.exe

# Linux
./build/audiopad
```

---

## Project Structure

A high-level overview of the AudioPad repository layout:

```text
audiopad/
├── assets/                     # Application icons, graphics, and Windows resources (.rc)
├── deployment/                 # Packaging scripts (Inno Setup, Flatpak, AppStream metadata)
├── lib/                        # Vendored open-source libraries & submodules
│   ├── backward-cpp/           # Stack trace and crash handling utility
│   ├── cpp-httplib/            # Lightweight C++ HTTP/HTTPS networking client
│   ├── fancypp/                # Terminal output and console formatting
│   ├── guardpp/                # Single-instance mutex locking helper
│   ├── json/                   # nlohmann/json parser
│   ├── lockpp/                 # Thread synchronization and mutex management
│   ├── miniaudio/              # Single-header low-level audio engine
│   ├── nativefiledialog-extended/ # Native file and folder dialogs
│   ├── semver/                 # Semantic version string parser
│   ├── tiny-process-library/   # Subprocess launcher (youtube-dl/yt-dlp, FFmpeg)
│   └── traypp/                 # Cross-platform system tray integration
├── src/                        # AudioPad C++ source code
│   ├── core/                   # Application state, configuration, and data models
│   │   ├── config/             # Persistent settings management
│   │   ├── enums/              # Core enumerations and error codes
│   │   ├── global/             # Global instances and runtime singletons
│   │   ├── hotkeys/            # OS-specific global keypress hooking (Windows/Linux)
│   │   └── objects/            # Tab, Sound, and Settings data definitions
│   ├── helper/                 # Utility services and background engines
│   │   ├── audio/              # miniaudio playback, device routing, and WASAPI/Pulse/PipeWire
│   │   ├── base64/             # Base64 encoding/decoding
│   │   ├── icons/              # Embedded icon handling
│   │   ├── misc/               # String helpers and Unicode/narrow conversions
│   │   ├── queue/              # Thread-safe job queue
│   │   ├── systeminfo/         # Host OS information
│   │   ├── version/            # Remote update and release check logic
│   │   └── ytdl/               # Integrated audio downloader service
│   ├── ui/                     # UI abstractions, controllers, and platform bindings
│   │   └── impl/webview/       # Webview shell, JavaScript bridge, and UI frontend
│   │       ├── lib/audiopad-ui/ # Frontend web assets (HTML, CSS, JS)
│   │       └── lib/webviewpp/   # C++ WebView2 / WebKitGTK abstraction
│   └── main.cpp                # Application entry point, CLI arguments, and initialization
├── CMakeLists.txt              # Primary CMake project configuration
└── .clang-format               # Code styling rules for clang-format
```

---

## Branch Naming

Keep branch names descriptive and prefixed with their purpose:

| Prefix | Description | Example |
| :--- | :--- | :--- |
| `feat/` or `feature/` | New features or UI additions | `feat/soundpad-shortcuts` |
| `fix/` | Bug fixes and crash corrections | `fix/wasapi-sample-rate` |
| `build/` | CMake, packaging, and dependency changes | `build/modernize-cmake` |
| `refactor/` | Code refactoring without behavioral change | `refactor/audio-device-routing` |
| `docs/` | Documentation additions and fixes | `docs/contributing-guide` |
| `chore/` | Routine maintenance or cleanup | `chore/update-submodules` |

---

## Commit Conventions

AudioPad follows the **[Conventional Commits](https://www.conventionalcommits.org/)** specification. This ensures a clean git log and makes automated changelog generation reliable.

Format:
```text
<type>(<scope>): <short description in imperative mood>

[optional body explaining context and rationale]

[optional footer(s), e.g., Fixes #123]
```

### Allowed Types
- **`feat`**: A new feature (e.g., `feat(ui): add compact soundpad layout view`)
- **`fix`**: A bug fix (e.g., `fix(audio): prevent audio cutoff during sample rate mismatch`)
- **`build`**: Changes affecting build systems, CMake, or dependencies (e.g., `build(cmake): bump minimum required version to 3.16...3.30`)
- **`refactor`**: Code changes that neither fix a bug nor add a feature
- **`style`**: Code formatting, indentation, missing semi-colons (no code logic changes)
- **`docs`**: Documentation only updates
- **`test`**: Adding or updating tests
- **`chore`**: Maintenance tasks, tooling updates, or repository housekeeping

### Rules
- Use imperative, present tense ("add", not "added" or "adds").
- Do not capitalize the first letter of the description.
- Do not place a period at the end of the commit summary line.

---

<a id="code"></a>
## Code Style & Formatting

We maintain strict code style guidelines to keep the codebase clean, legible, and maintainable.

### C++ Code Guidelines
- **Standard**: C++17.
- **Formatting Tool**: Format all C/C++ code using `clang-format` according to the repository's [`.clang-format`](.clang-format) file.
  - To format a file:
    ```bash
    clang-format -i src/path/to/file.cpp
    ```
- **Naming Conventions**:
  - Types, Classes, and Structs: `PascalCase` (e.g., `PlayingSound`, `AudioDevice`).
  - Functions and Methods: `camelCase` (e.g., `getAudioDevices()`, `stopAll()`).
  - Variables: `camelCase` (e.g., `soundId`, `playbackDevice`).
  - Global singletons: `g` prefix in PascalCase (e.g., `Globals::gSettings`).
  - Constants & Enums: `UPPER_SNAKE_CASE` or `PascalCase` enum classes.
- **Memory & Safety**:
  - Prefer smart pointers (`std::unique_ptr`, `std::shared_ptr`) and RAII over raw pointer allocation.
  - Avoid C-style casts; use `static_cast`, `reinterpret_cast`, or `dynamic_cast`.
  - Always clean up external device or OS handles when destroying resources.

### Frontend (UI) Code Guidelines
- Vanilla JavaScript, CSS, and HTML5 inside `src/ui/impl/webview/lib/audiopad-ui/`.
- Maintain consistent indentation (2 or 4 spaces depending on existing file conventions).
- Keep styles organized within CSS custom properties (variables) defined in the design token palette.

---

## Testing

AudioPad currently relies on manual and scenario-based testing across supported platforms:

1. **Build Verification**:
   - Verify that both `Debug` and `Release` configurations compile with **0 warnings** on your platform.
2. **Audio Pipeline Testing**:
   - Play clips of varying audio formats (`.mp3`, `.wav`, `.ogg`, `.flac`).
   - Test independent sliders (Master, Local, Remote volume).
   - Test simultaneous playback and the emergency "Stop All" trigger.
3. **Hotkey Testing**:
   - Register single keys and multi-key combinations (`Ctrl + Shift + Key`).
   - Verify that hotkeys trigger properly even when third-party full-screen games or applications have focus.
4. **UI Responsiveness**:
   - Verify that window resizing works cleanly without visual jitter.
   - Verify switching between List, Grid, and Soundpad layouts.
5. **Single-Instance Validation**:
   - Launching a second instance of AudioPad should display a friendly alert and gracefully exit rather than corrupting user settings.

---

## Pull Request Process

1. **Fork and Sync**: Ensure your fork is up-to-date with `origin/main`.
2. **Create Branch**: Create a feature or fix branch from `main`.
3. **Commit Cleanly**: Follow the [Commit Conventions](#commit-conventions) and keep commits focused.
4. **Format Code**: Run `clang-format` on all modified source files.
5. **Verify Build**: Confirm your code compiles cleanly without any compiler or linker warnings.
6. **Open Pull Request**:
   - Fill in all sections of the [Pull Request Template](.github/pull_request_template.md).
   - Reference any relevant issues (e.g., `Fixes #42`).
   - Provide reproduction steps and test details.
7. **Code Review**: Address feedback or requests from maintainers promptly.

---

## Issue Reporting

### Reporting Bugs
Before filing an issue, search the [GitHub Issue Tracker](https://github.com/audiopadapp/audiopad/issues) to ensure the issue has not already been reported.

When submitting a bug report:
- **Title**: Clear, concise summary of the failure.
- **Environment**: OS version (e.g., Windows 11 Build 26100, Ubuntu 24.04), Audio server (WASAPI, PulseAudio, PipeWire), AudioPad version.
- **Steps to Reproduce**: Detailed numerical steps.
- **Expected vs. Actual Behavior**: What should have happened vs. what actually occurred.
- **Logs / Output**: Include any terminal output, crash dumps, or error messages.

### Suggesting Features
We welcome ideas for making AudioPad better:
- Explain the practical use case for the proposed feature.
- Describe how you envision the user interface or behavior working.
- Note any platform-specific considerations (e.g., Windows vs. Linux behavior).

---

## Security Vulnerabilities

If you discover a security vulnerability in AudioPad, **please do not open a public GitHub issue**.

Please refer to our [Security Policy (SECURITY.md)](SECURITY.md) for instructions on reporting vulnerabilities privately and responsibly through GitHub's Private Vulnerability Reporting mechanism.
