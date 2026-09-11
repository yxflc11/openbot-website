---
title: "Install OpenBot"
description: "Install OpenBot — OpenBot"
---

> Download the [macOS / Windows alpha.6 preview](https://github.com/yxflc11/openbot/releases/tag/desktop-v0.1.0-alpha.6) and verify its SHA256SUMS. This is an unsigned development installer; macOS is not notarized and system trust prompts remain in place.


OpenBot Desktop runs a private workspace on your computer or connects to an existing OpenBot Server. macOS Apple Silicon and Windows x64 both include a local Server and database. A model provider is configured separately; installing the app does not start paid inference.

## macOS installation

1. Download the alpha.6 [Apple Silicon DMG](https://github.com/yxflc11/openbot/releases/download/desktop-v0.1.0-alpha.6/openbot-desktop-0.1.0-alpha.6-darwin-arm64.dmg) and check the release's SHA256SUMS.
2. Open the DMG and drag OpenBot into Applications. Quit OpenBot and back up your workspace before upgrading; retain the existing user data directory.
3. Open OpenBot, create a local workspace or connect to an existing Server, then save your model provider, API key and model in Settings and enable the Agent.

This package supports Apple Silicon, not Intel Macs. It is ad-hoc signed, without Developer ID signing or Apple notarization; macOS may require confirmation in System Settings → Privacy & Security. Follow the system-provided process only after verifying the download source. OpenBot does not bypass Gatekeeper or organizational policy. See [Apple’s explanation of system trust prompts](https://support.apple.com/en-us/102445).

## Windows

1. Open [GitHub releases](https://github.com/yxflc11/openbot/releases) and select the current Windows x64 `.exe`. Check its filename and SHA-256 against the release's `SHA256SUMS`.
2. Run the per-user installer and open OpenBot from the Start menu. Administrator rights are not needed for the local Desktop workspace.
3. Choose **As the Server computer** to keep the database and Server on this machine, or **Connect to a Server** for an existing deployment.
4. On first use, OpenBot prepares its bundled PostgreSQL and local Server. No Docker or separately installed Node.js is required.
5. Open Settings, select a model provider, save the API key and model, and explicitly enable the Agent. Create your first Bot and channel.

An unsigned preview may produce a Windows trust prompt. OpenBot does not bypass operating-system policy. Windows ARM64 and automatic computer-control enrollment are not included in this installer.

## Returning to your workspace

Normal launches reuse the saved installation, encrypted bootstrap identity, model settings and database. A short connection screen replaces the first-install checklist. Keep the same user profile and application data when upgrading. Quit the app before copying database files for a backup. Uninstalling the app does not erase workspace data.

The desktop client can also connect to a separately hosted Server over its reviewed URL. Localhost always means the Server machine for tools and plugins. See the [Windows engineering contract](https://github.com/yxflc11/openbot/blob/4289027cfa24d812f8977ca7a16b18e7ae4dbe55/docs/WINDOWS_DESKTOP.md) for platform evidence and packaging details.
