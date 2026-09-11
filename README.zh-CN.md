# OpenBot 官网

[English](README.md)

这是 [OpenBot](https://github.com/yxflc11/openbot) 的独立官网与中英文使用手册仓库。产品运行时代码保留在 OpenBot 仓库；这里负责产品页面、公开文档、搜索和部署。

使用 Astro 7.2.10、Starlight 0.42.0（MIT）。交互演示从 `openbot-source.json` 固定的 OpenBot 提交构建，直接复用真实产品组件，明确标注示例数据且不连接模型。生成文件和缓存源码均不提交。

## 本地开发

使用 Node 22.22.2 和 npm 10.9.9：

```sh
npm ci
npm run prepare:demo
npm run dev
```

`prepare:demo` 将经过审核的 OpenBot 仓库取到 `.cache/openbot`，检出固定提交、按锁文件安装依赖并构建共享界面。升级引用前检查源码与依赖变化。页面修改放在本仓库的 `src`，不要修改可重新生成的缓存。发布前执行 `npm run check`；输出为 `dist/`，`npm run preview` 可预览。

## 目录职责

- `src/components/Landing.astro`：双语产品介绍。
- `src/content/docs`：英文与 `zh-cn` 中文手册。
- `src/styles`：官网和文档样式。
- `scripts`：固定版本的演示构建、内容与链接验证。
- `.github/workflows/site.yml`：构建与 GitHub Pages 部署。
- `vercel.json`：已连接的 Vercel 预览同样先构建固定版本的产品演示，再验证静态网站。通过静态重写保留 `/openbot-website/` 路径，不添加服务端运行环境。配置依据 [Vercel 静态配置契约](https://vercel.com/docs/project-configuration/vercel-json)。

官网没有 Owner 会话、后端、密钥、模型调用或插件安装权限。协议、架构等权威技术文档和插件目录仍由 OpenBot 维护。目标地址为 https://yxflc11.github.io/openbot-website/ ，中文位于 `/zh-cn/`。MIT 授权，上游声明随依赖保留。
