# Security Policy

The AudioPad team takes the security of our project and its users very seriously. We appreciate the responsible disclosure of security vulnerabilities by security researchers and community members.

---

## Supported Versions

We provide security updates and patches for the following versions of AudioPad:

| Version | Supported | Notes |
| :--- | :--- | :--- |
| `1.x` (Latest Release) | :white_check_mark: | Currently supported |
| `main` branch | :white_check_mark: | Active development tree |
| `< 1.0.0` | :x: | Unsupported; please update to the latest release |

---

## Reporting a Vulnerability

**If you discover a security vulnerability in AudioPad, please do NOT open a public GitHub issue or discuss it in public forums.**

Publicly disclosing a vulnerability before a patch is available puts all users at risk. Instead, please report security vulnerabilities privately using GitHub's built-in **Private Vulnerability Reporting** feature:

1. Navigate to the AudioPad GitHub repository.
2. Click on the **[Security](https://github.com/audiopadapp/audiopad/security)** tab.
3. Select **[Advisories](https://github.com/audiopadapp/audiopad/security/advisories)** in the left sidebar.
4. Click **"Report a vulnerability"** (or use the direct link: [`https://github.com/audiopadapp/audiopad/security/advisories/new`](https://github.com/audiopadapp/audiopad/security/advisories/new)).

---

## What Information to Include in Your Report

To help us investigate and resolve the issue quickly, please provide as much detailed information as possible:

1. **Vulnerability Summary**: A concise description of the issue and the impacted component (e.g., Audio engine, Hotkey listener, WebView bridge, YouTube downloader).
2. **Affected Version & Environment**:
   - AudioPad version / commit hash.
   - Operating System and architecture (e.g., Windows 11 x64, Ubuntu 24.04 x64).
   - Relevant system configurations (e.g., audio server, runtime environment).
3. **Step-by-Step Reproduction**: Detailed, numbered steps that consistently reproduce the vulnerability.
4. **Proof of Concept (PoC)**: Sample files, reproduction scripts, payload examples, or a demonstration video (if applicable).
5. **Impact Assessment**: An explanation of the potential severity and real-world impact (e.g., arbitrary code execution, local privilege escalation, denial of service, path traversal).
6. **Suggested Fix / Remediation** *(Optional)*: If you have already identified a potential patch or workaround, please include it.

---

## What to Expect (Our Response Process)

When you submit a vulnerability report:

- **Acknowledgement**: We will acknowledge receipt of your vulnerability report within **48 hours**.
- **Assessment**: We will verify the report, reproduce the issue, determine its severity, and keep you updated on progress.
- **Remediation**: We will work on a fix in a private security branch or draft advisory. We may ask for your assistance in validating the fix.
- **Coordinated Disclosure**: Once a patch is developed and verified, we will schedule a new release and publish a Security Advisory crediting your responsible disclosure (unless you prefer to remain anonymous).

---

## Out of Scope

The following scenarios are generally considered out of scope:
- Vulnerabilities requiring physical access to an unlocked, fully compromised user device.
- Issues in third-party software not bundled with or maintained by AudioPad (unless caused by AudioPad's configuration or integration).
- Denial-of-service attacks that require local administrative or root rights to disrupt audio hardware.

---

Thank you for helping keep AudioPad and our users secure!
