import fs from "fs";

import Border from "#/components/border";

export default function KindServer() {
  const data = fs.readFileSync("app/db/test.json", "utf8");
  const json = JSON.parse(data);
  return (
    <Border readable server>
      <div>Hi, I am a Server Component.</div>
      <code>{JSON.stringify(json, null, 2)}</code>
    </Border>
  );
}
