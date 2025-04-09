"use client";

// import fs from "fs/promises";
import { useEffect } from "react";
import { useState } from "react";

import Border from "#/components/border";

import jsonImport from "./hello.json";
import Properties from "./properties";

export default function EnvironmentClient() {
  const [usedEffect, setUsedEffect] = useState(false);
  const [jsonImportAsync, setJsonImportAsync] = useState<any>(undefined);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    setUsedEffect(true);
    (async () => {
      const json = await import("./helloAsync.json");
      setJsonImportAsync(json.default);
      // try {
      //   const jsonRead = await fs.readFile("./helloFs.json", "utf-8");
      // } catch (error) {
      //   setError(error as Error);
      // }
    })();
  }, []);

  // TODO use this canonical check instead of window.

  const runningOnClient = typeof document !== "undefined";

  return (
    <Border client checkSSR>
      <div className="mb-4 text-sm font-bold text-blue-800">
        I have <code>&quot;use client&quot;</code> at the top of my file.
      </div>
      <Properties
        data={{
          hrefLocation: typeof location !== "undefined" ? location.href : undefined,
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : undefined,
          secret: process.env.MY_SECRET,
          cwd: process.cwd(),
          __dirname,
          hasWindow: typeof window !== "undefined",
          usedEffect,
          importMetaUrl: import.meta.url,
          jsonImport,
          jsonImportAsync,
          jsonRead: undefined,
          // jsonRead: JSON.parse(await fs.readFile(jsonPath, "utf-8")),
        }}
      />
      {error && <div className="text-red-500">{error.message}</div>}
    </Border>
  );
}
