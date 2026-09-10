# OpenBot website

[简体中文](README.zh-CN.md)

The standalone product website and English/Chinese manuals for [OpenBot](https://github.com/yxflc11/openbot). Product runtime code remains in that repository. This repository owns the landing page, public documentation, search and deployment.

Built with Astro 7.2.10 and Starlight 0.42.0 (MIT). The demonstration is built from the exact OpenBot commit in `openbot-source.json`; it reuses real product components with clearly labeled synthetic data and no model connection. Generated files and the source checkout stay ignored.

## Develop

Use Node 22.22.2 and npm 10.9.9:

```sh
npm ci
npm run prepare:demo
npm run dev
```

`prepare:demo` fetches only the reviewed OpenBot repository into `.cache/openbot`, checks out the pinned commit, installs its locked dependencies and builds its shared UI. Review source/dependency changes before updating the pin. Keep edits in this repository's `src`, not the disposable cache. Run `npm run check` before publishing. The public build is `dist/`; local preview uses `npm run preview`.

## Ownership

- `src/components/Landing.astro`: bilingual product page.
- `src/content/docs`: matching English and `zh-cn` manuals.
- `src/styles`: product and documentation styling.
- `scripts`: pinned demo preparation and route/content validation.
- `.github/workflows/site.yml`: build and GitHub Pages deployment.

The website has no Owner session, backend, keys, model calls or plugin-installation authority. Canonical protocol/architecture documents and reviewed plugin metadata remain in OpenBot. Deploy target: https://yxflc11.github.io/openbot-website/ (Chinese: `/zh-cn/`). MIT licensed; upstream framework notices remain with dependencies and OpenBot owns the reused product code.
