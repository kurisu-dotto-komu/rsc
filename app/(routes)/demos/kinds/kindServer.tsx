import fs from "fs";

import Border from "#/components/border";
import Markdown from "#/components/markdown";

export default function KindServer() {
  const data = fs.readFileSync("app/db/test.json", "utf8");
  const json = JSON.parse(data);
  return (
    <Border server name="PureServer">
      <Markdown>{`
Hi, I am a "pure" server component. Because I use server only features, I will
throw an error if a browser tries to render me. I can read files like \`app/db/test.json\` because I am rendered on the server.

I won't leak secrets to the client unless I explicitally expose them in the output of my render.

\`${JSON.stringify(json)}\`
      `}</Markdown>
    </Border>
  );
}
