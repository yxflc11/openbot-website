---
title: "Build your first plugin"
description: "Build your first plugin — OpenBot"
---

The repository includes a real MCP example with read and write tools, a resource, a prompt and an interactive view. It uses no external account and stores its demonstration notes in memory.

## Create an independent project

From an OpenBot source checkout, generate a new project in an empty destination:

```sh
npm run plugin:create -- ../my-openbot-plugin
cd ../my-openbot-plugin
npm install
npm start
```

The generated project includes its own package manifest, README, MIT license and MCP example. It runs independently of the OpenBot monorepo and refuses to overwrite an existing destination. You can maintain and publish it in your own repository.

## Run the repository example

From the source checkout, install the locked dependencies with Node 22.22.2 and npm 10.9.9:

```sh
npm ci
npx tsx apps/server/src/plugin-example.ts
```

On the **OpenBot Server machine**, explicitly set the development endpoint before starting the Server:

```dotenv
OPENBOT_PLUGIN_LOCAL_ENDPOINTS=http://127.0.0.1:4318/mcp
```

Localhost is otherwise rejected. Public integrations use HTTPS and must satisfy the Server's public-address and no-redirect policy.

Open Plugins, preview the endpoint, and install it. Grant `sum_numbers` as read and `append_note` as confirm to one Bot. Select resources and prompts separately, then enable. Ask that Bot to add 13 and 29. Request appending a short test note and approve the exact call. Preview the resource and prompt; open the view and use its local controls.

## Replace the example with your service

Use the official SDK in your preferred language. Separate observational and mutating operations, validate inputs in your own service, keep credentials in the connection rather than prompts, and describe actual effects. Return small, bounded results. Add rejection, timeout, revocation and duplicate-call tests—not just a successful response.

See [example source](https://github.com/yxflc11/openbot/blob/4872993b8394073c855e5ad4929aca7707d01d5f/apps/server/src/plugin-example.ts) and [MCP documentation](https://modelcontextprotocol.io/docs/getting-started/intro). The example is a development service, not a public hosted endpoint.
