---
title: "How the project is organized"
description: "How the project is organized — OpenBot"
---

OpenBot is a monorepo with separate applications and reusable packages. The desktop client displays the workspace. The Server owns Bot identity, channel membership, task routing, permissions, approvals and audit. PostgreSQL persists the authoritative records; files are stored with channel or artifact metadata and digests.

| Part | Responsibility |
| --- | --- |
| `apps/web` | React workspace, channels, Bot profiles, settings, plugins and task views |
| `apps/desktop` | Electron shell, OS credential access, controlled downloads, local Server lifecycle and packaging |
| `apps/server` | Authenticated API, native Agent, collaboration, plugins, attachments and scheduling |
| `packages/domain`, `packages/protocol` | Shared types and boundary schemas |
| `packages/db` | Database schema and ordered migrations |
| Worker Hosts and `providers` | Separately enrolled, scoped execution; not a second authority |
| [openbot-website](https://github.com/yxflc11/openbot-website) | Independent product website, bilingual manuals and demo |

Model output, webpages, files, plugins and workers are untrusted inputs. A capability does not confer permission. A Bot runs under its own identity, including when another Bot asks it for help. Explicit approval is still needed for operations requiring it.

Use the [current architecture](https://github.com/yxflc11/openbot/blob/4872993b8394073c855e5ad4929aca7707d01d5f/docs/ARCHITECTURE.md) and [repository map](https://github.com/yxflc11/openbot/blob/4872993b8394073c855e5ad4929aca7707d01d5f/docs/REPOSITORY_MAP.md) to find extension points and verification commands. The optional office visualization remains deferred; it is not part of the collaboration runtime.
