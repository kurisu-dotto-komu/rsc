import fs from "fs/promises";

import Border from "#/components/border";
import Markdown from "#/components/markdown";

export default async function PureServerAsync() {
  const data = await fs.readFile("app/db/test.json", "utf8");
  const json = JSON.parse(data);
  return (
    <Border server name="PureServerAsync">
      <Markdown>{`
Same as above - \`${JSON.stringify(json)}\` - except I'm async function. It's quite convenient to be able to use async code within a react component!

\`\`\`typescriptreact
export default async function PureServerAsync() {
  const data = await fs.readFile("app/db/test.json", "utf8");
  const json = JSON.parse(data);
  return <code>{JSON.stringify(json)}</code>;
}
\`\`\`
      `}</Markdown>
    </Border>
  );
}
