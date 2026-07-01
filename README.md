# Audiopad

Audiopad is a universal, high-performance, cross-platform soundboard designed for gamers, streamers, and casual users. It allows you to play audio files directly into your microphone stream or voice chat applications (such as Discord, TeamSpeak, or Skype) using native system routing, with system-wide hotkeys and a modern user interface.

---

## 🚀 Why Audiopad?

Most traditional soundboards are either locked to a single operating system, bloated with ads, or utilize rigid, outdated layouts. Audiopad was built to solve these problems by providing:
* **True System Integration**: Audio feeds directly into your voice transmission streams (using native API linking on Windows and PipeWire/PulseAudio on Linux) without needing complex virtual cable routing.
* **Modern, Premium Aesthetics**: Features a dark obsidian theme with clean emerald green accenting that is highly readable and easy on the eyes.
* **Layout Versatility**: Supports three interchangeable song list layouts designed to fit different setups:
  1. **List View (Default)**: A detailed view for managing audio properties, assignment triggers, and hotkeys.
  2. **Grid View**: A card-based visual layout ideal for touchscreens or second monitors.
  3. **Soundpad View**: A highly dense button layout designed for rapid mouse triggering and real-time gaming sound boards.

---

## 🛠️ Tech Stack

Audiopad is split into two major component layers to maximize performance while delivering a rich user experience:

1. **C++ Core Backend**:
   * Responsible for high-performance audio processing, stream injection, process hooks, and registering system-level global hotkeys.
   * Leverages native OS integrations (Windows API on Windows, PipeWire/PulseAudio on Linux).
2. **Webview Frontend (UI)**:
   * Built with standard HTML5, CSS3, and JavaScript, rendering inside a native WebView2 control shell (Windows) or WebKitGTK (Linux).
   * Decoupled rendering ensures that visual layout calculations never block or delay audio playback processing.
3. **Build & Package Management**:
   * Powered by **CMake** for cross-platform compilation.
   * Installer package built using **Inno Setup** on Windows.

---

## 🌟 Key Features

* **Instant Stream Injection**: Link playback directly to virtual input devices or physical micro channels.
* **Separate Volume Sliders**: Adjust audio volume independently for what you hear locally versus what other users hear in the chat room.
* **Global Hotkey Assignment**: Map standard or complex key combinations to sound triggers so you can play clips in-game without alt-tabbing.
* **Song Downloader**: Includes an integrated downloader tool to fetch audio tracks directly from YouTube or other streaming sites. Just copy the URL, select a download folder, and Audiopad downloads and registers the clip automatically.
* **Responsive Control Dock**: Keep track of currently playing audio clips, pause, adjust master speed, or trigger an emergency "Stop All" using the bottom-docked dashboard.

---

## 💻 Contribution Guide

We welcome issues, feedback, and pull requests! Here is how to configure your local development environment and contribute:

### Prerequisites
Before building, ensure you have installed:
* **CMake** (version 3.1 or higher)
* **Compiler**:
  * *Windows:* Visual Studio 2019/2022 (MSVC compiler with C++ desktop workload)
  * *Linux:* GCC or Clang (supporting C++17)
* **WebView2 Runtime** (installed by default on Windows 10/11)

### Building Locally

1. **Clone the repository**:
   To clone the project with all its necessary third-party submodules, run:
   ```bash
   git clone --recursive https://github.com/audiopadapp/audiopad.git
   cd audiopad
   ```

2. **Initialize Submodules (If cloned without `--recursive`)**:
   If you cloned the repository normally, you must fetch the dependency libraries in the `lib/` directory by running:
   ```bash
   git submodule update --init --recursive
   ```

3. **Generate build configurations**:
   Requires **CMake 3.1 or higher**. Create a build directory and configure the project:
   ```bash
   cmake -B build -DCMAKE_BUILD_TYPE=Debug
   ```

4. **Compile the binary**:
   * For Windows (MSVC):
     ```bash
     cmake --build build --config Debug
     ```
   * For Linux:
     ```bash
     cmake --build build
     ```

5. **Run the application**:
   * The compiled executable and its dependent `dist/` web content will be located inside the build directory:
     ```powershell
     # Windows
     .\build\Debug\audiopad.exe
     
     # Linux
     ./build/audiopad
     ```

---

## 📦 Third-Party Libraries (Submodules)

Audiopad uses several lightweight open-source helper libraries located in the `lib/` folder. These are integrated as Git submodules and configured in the [`.gitmodules`](.gitmodules) file. Git reads this file to install and download the correct dependency versions automatically.

Here is what each submodule does:

* **[nlohmann/json](https://github.com/nlohmann/json) (`lib/json`)**: A highly intuitive, modern JSON parsing library for C++.
* **[miniaudio](https://github.com/mackron/miniaudio) (`lib/miniaudio`)**: A single-header audio playback and capture library used for hardware stream operations.
* **[fancypp](https://github.com/Curve/fancypp) (`lib/fancypp`)**: A console formatting and styled messaging log decorator library.
* **[nativefiledialog-extended](https://github.com/btzy/nativefiledialog-extended) (`lib/nativefiledialog-extended`)**: A library that opens native file pickers and folder select dialogues across Windows and Linux.
* **[webviewpp](https://github.com/audiopadapp/webviewpp) (`src/ui/impl/webview/lib/webviewpp`)**: A C++ wrapper that maps WebView2 (Windows) and WebKitGTK (Linux) APIs to bind C++ events directly to JavaScript.
* **[tiny-process-library](https://gitlab.com/eidheim/tiny-process-library) (`lib/tiny-process-library`)**: Cross-process execution wrapper used to run download subprocesses (like FFmpeg and Youtube-dl).
* **[cpp-httplib](https://github.com/yhirose/cpp-httplib) (`lib/cpp-httplib`)**: A simple C++ HTTP/HTTPS client library used to fetch metadata and downloads.
* **[traypp](https://github.com/audiopadapp/traypp) (`lib/traypp`)**: Provides cross-platform system tray control menus.
* **[semver](https://github.com/Neargye/semver) (`lib/semver`)**: A semantic versioning parsing library for comparing version tags during updates check operations.
* **[lockpp](https://github.com/audiopadapp/lockpp) (`lib/lockpp`)**: Multithreaded lock helper utilities.
* **[backward-cpp](https://github.com/bombela/backward-cpp) (`lib/backward-cpp`)**: A stack-trace printer helper used to report crash dumps during debugging.
* **[guardpp](https://github.com/audiopadapp/guardpp) (`lib/guardpp`)**: A simple process mutex library used to restrict running only one concurrent instance of the app.

### Pull Request Workflow
1. Fork this repository.
2. Create a feature branch: `git checkout -b feature/cool-new-layout`.
3. Format code matching our rules (use `clang-format` or check `.clang-format`).
4. Commit your changes: `git commit -m "Add cool new layout view"`.
5. Push to the branch: `git push origin feature/cool-new-layout`.
6. Open a Pull Request!

---

## 📄 License & Community Guidelines

* **License**: This project is licensed under the terms of the [GNU GPLv3](LICENSE) license.
* **Copyright Notice**: Attribution details for Audiopad contributors are available in the [NOTICE](NOTICE) file.
* **Community Standards**: We pledge to foster an inclusive and harassment-free community. Please review our [Code of Conduct](CODE_OF_CONDUCT.md) for guidelines on participation.
