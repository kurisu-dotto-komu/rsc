import Border from "#/components/border";
import Markdown from "#/components/markdown";

export default function KindShared() {
  return (
    <Border name="Shared">
      <Markdown>{`
Hi, I am an Shared component. I can do a lot, but I am the "common denominator" of client and server functionality. In Next.js, I am the "default" kind of component.

To remain "Shared", I should not \`export async functions\`, and avoid using server-only features like \`headers()\` from Next.js, \`fs.readFile()\`, or access environment variables like \`process.env.MY_SECRET\` because these are only available when rendered on the server. 

Conversely, I cannot use client-only features like \`useState\` or \`useEffect\` etc, because I might be rendered on the server. I do not have access to the \`window\` object, or any DOM elements.

I will throw an error if I use an unsupported API in the wrong environment.

I will be rendered on the server by default, but if if a parent \`"use client"\` component **imports** me, I will be rendered on the client.

      `}</Markdown>
    </Border>
  );
}
