---
title: "Share a Bot or its results"
description: "Share a Bot or its results — OpenBot"
---

The channel header uses an icon-only sharing entry with an accessible label. Sharing has two distinct destinations: download task outputs, or share the Bot itself.

## Download an output

Open a generated report or file card and choose download. The Server supplies the committed artifact, not a new model-generated summary. On Desktop, choose a destination in the system Save dialog. A failed or cancelled task may not have produced an artifact; its state is shown separately.

## Share the Bot itself

Select the Bot to share and inspect the export preview. It describes the reusable role, profile, appearance, execution preferences and verified skills included in the package. Download is bound to the exact reviewed package digest; if the profile changes, review the new version first.

When permitted by its license, an export can include the reviewed contents of a self-contained `SKILL.md`. Expand the skill preview to inspect the instructions before downloading. The receiving workspace creates a new Bot identity; included skills start disabled until it reviews the exact content. Packages without instruction bodies and legacy v1 packages remain importable.

Private memory, transcripts, API keys, provider tokens, sessions, live channel memberships and plugin grants do not become a recipient's authority. An imported Bot is inspected and activated through the receiving workspace's review flow. The recipient chooses its own model and permissions.

For the package format, evidence binding, dependency closure and verification boundary, see the [portable Employee contract](https://github.com/yxflc11/openbot/blob/4872993b8394073c855e5ad4929aca7707d01d5f/docs/EMPLOYEE.md).
