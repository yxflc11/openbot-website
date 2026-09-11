---
title: "安装 OpenBot"
description: "安装 OpenBot — OpenBot"
---

> 下载 [macOS / Windows alpha.6 预览版](https://github.com/yxflc11/openbot/releases/tag/desktop-v0.1.0-alpha.6)，并核对随附的 SHA256SUMS。安装器尚未签名，macOS 包尚未公证，保留系统信任提示。


OpenBot 桌面版可以在本机运行私人工作区，也可以连接已有的 OpenBot 服务电脑。macOS Apple Silicon 和 Windows x64 均包含本地 Server 与数据库。模型需要单独配置；安装软件不会自动开始付费推理。

## macOS 安装

1. 下载 alpha.6 的 [Apple Silicon DMG](https://github.com/yxflc11/openbot/releases/download/desktop-v0.1.0-alpha.6/openbot-desktop-0.1.0-alpha.6-darwin-arm64.dmg)，核对发布页的 SHA256SUMS。
2. 打开 DMG，将 OpenBot 拖入 Applications。升级前先退出 OpenBot 并备份工作区；不要删除原用户数据目录。
3. 打开 OpenBot，选择“作为服务电脑”或连接已有服务，再到设置中保存模型提供方、API 密钥和模型，明确启用 Agent。

当前包仅适用于 Apple Silicon，不包含 Intel 版。应用采用 ad-hoc 签名，尚未获得 Developer ID 签名和 Apple 公证；系统可能要求在“系统设置 → 隐私与安全性”中确认打开。仅在确认下载来源后按系统提供的流程处理，应用不绕过 Gatekeeper 或组织策略。相关操作见 [Apple 对系统信任提示的说明](https://support.apple.com/en-us/102445)。

## Windows 安装

1. 打开 [GitHub 发布页](https://github.com/yxflc11/openbot/releases)，选择当前版本的 Windows x64 `.exe`，核对文件名和发布页 `SHA256SUMS` 中的校验值。
2. 运行安装器，从开始菜单打开 OpenBot。桌面本地模式按当前用户安装，不需要管理员权限。
3. 首次选择“作为服务电脑”，将数据库和服务放在本机；已有服务时选择“连接服务电脑”。
4. OpenBot 首次准备内置 PostgreSQL 和本地服务，无需安装 Docker 或 Node.js。
5. 进入设置，选择模型提供方，保存 API 密钥和模型，明确启用 Agent。然后创建 Bot 和频道。

未签名预览包可能触发 Windows 系统信任提示，软件不会绕过系统策略。此安装器不包含 Windows ARM64，也不会自动授权工作电脑控制。

## 再次打开

日常启动复用已有安装、加密身份、模型设置和数据库，仅显示简短连接状态。首次安装的检查清单不会反复出现。升级时保留原用户目录；手动备份数据库前先退出 OpenBot。卸载应用不等于删除工作区数据。

macOS 首次打开应用或替换未签名预览包时，可能要求访问登录钥匙串。请在 macOS 系统窗口处理；这里需要的是钥匙串密码，不是模型 API 密钥，已有模型设置仍保存在工作区中。日常重启验证通过，不代表换成另一个未签名应用包后也不会提示。系统授权选项见 [Apple 的钥匙串访问说明](https://support.apple.com/en-ie/guide/keychain-access/kyca1243/mac)。

也可连接独立部署的 Server。插件中的 localhost 始终指服务电脑，不一定是当前客户端。详细平台证据见 [Windows 说明](https://github.com/yxflc11/openbot/blob/4289027cfa24d812f8977ca7a16b18e7ae4dbe55/docs/WINDOWS_DESKTOP.zh-CN.md)。
