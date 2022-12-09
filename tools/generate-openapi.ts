import { walk } from "https://deno.land/std@0.166.0/fs/mod.ts";
import OpenAPI from "npm:openapi-typescript-codegen";

const JamfCredentials = {
  username: "api",
  password: "f9Akf*pk%H&ZZ;uXJg",
};

async function fixExtensions(path: string) {
  for await (const entry of walk(path, { exts: [".ts"] })) {
    const text = await Deno.readTextFile(entry.path);
    const regex = /(?<=from\s+['"])(.*)(?=['"])/g;
    const newText = text.replace(regex, (match) => {
      return match + ".ts";
    });
    await Deno.writeTextFile(entry.path, newText);
  }
}

async function hardcodeCredentials(path: string) {
  let file = await Deno.readTextFile(path);
  file = file.replace("WITH_CREDENTIALS: false,", "WITH_CREDENTIALS: true,")
    .replace(
      "USERNAME: undefined,",
      `USERNAME: '${JamfCredentials.username}',`,
    ).replace(
      "PASSWORD: undefined,",
      `PASSWORD: '${JamfCredentials.password}',`,
    );

  await Deno.writeTextFile(path, file);
}

const opts = {
  useOptions: true,
  useUnionTypes: true,
  httpClient: "fetch",
} as const;

await OpenAPI.generate({
  input: "./scripts/openapi/jamf/classic.yaml",
  output: "./scripts/openapi/jamf/classic",
  ...opts,
});
await fixExtensions("./scripts/openapi/jamf/classic");
await hardcodeCredentials("./scripts/openapi/jamf/classic/core/OpenAPI.ts");

await OpenAPI.generate({
  input: "./scripts/openapi/jamf/pro.json",
  output: "./scripts/openapi/jamf/pro",
  ...opts,
});
await fixExtensions("./scripts/openapi/jamf/pro");
await hardcodeCredentials("./scripts/openapi/jamf/pro/core/OpenAPI.ts");
