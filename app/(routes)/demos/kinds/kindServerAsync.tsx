import fs from "fs/promises";

import Border from "#/components/border";

export default async function KindServerAsync() {
  const data = await fs.readFile("app/db/test.json", "utf8");
  const json = JSON.parse(data);
  return (
    <Border readable server name="Async Server Component">
      <div>Hi, I am an Async Server Component.</div>
      <code>{JSON.stringify(json, null, 2)}</code>
    </Border>
  );
}
