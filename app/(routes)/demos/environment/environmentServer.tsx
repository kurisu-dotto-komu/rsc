"use server";

import Border from "#/components/border";
import Properties from "./properties";
// const jsonPath = path.join(__dirname, "hello.json");
import jsonImport from "./hello.json";

import path from "path";
import fs from "fs/promises";
import { headers } from "next/headers";

export default async function EnvironmentServer() {
  const importMetaUrl = import.meta.url;

  const headersList = await headers();

  return (
    <Border>
      <div className="mb-4 text-sm font-bold text-red-800">
        I have <code>&quot;use server&quot;</code> at the top of my file.
      </div>

      <Properties
        data={{
          hrefLocation: headersList.get("referer"),
          userAgent: headersList.get("user-agent"),
          secret: process.env.MY_SECRET,
          cwd: process.cwd(),
          __dirname,
          hasWindow: typeof window !== "undefined",
          usedEffect: undefined,
          importMetaUrl,
          jsonImport,
          jsonImportAsync: (await import("./helloAsync.json")).default,
          jsonRead: JSON.parse(
            // await fs.readFile("./helloFs.json", "utf-8")
            await fs.readFile(
              path.join(
                path.dirname(new URL(importMetaUrl).pathname),
                "helloFs.json",
              ),
              "utf-8",
            ),
          ),
        }}
      />
    </Border>
  );
}
