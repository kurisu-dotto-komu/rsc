// "use server" is not needed for server components, they are by default
import fs from "fs/promises";
import { headers } from "next/headers";
import path from "path";

import Border from "#/components/border";

// const jsonPath = path.join(__dirname, "hello.json");
import jsonImport from "./hello.json";
import Properties from "./properties";

export default async function EnvironmentServer() {
  const importMetaUrl = import.meta.url;

  const headersList = await headers();

  return (
    <Border server name="EnvironmentServer">
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
            // skip this, it is breaking on deploy?
            await fs.readFile(
              path.join(path.dirname(new URL(importMetaUrl).pathname), "helloFs.json"),
              "utf-8",
            ),
          ),
        }}
      />
    </Border>
  );
}
