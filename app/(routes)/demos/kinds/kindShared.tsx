import Border from "#/components/border";
import Markdown from "#/components/markdown";

export default function KindShared() {
  return (
    <Border>
      <Markdown>{`
Hi, I am an Shared component. I will be rendered on the server by default, but if a Client Component imports me, I will be rendered on the client.

To remain truly shareable, I should not use any client-only or server-only APIs. I will throw an error if I use an unsupported API in the wrong environment.
      `}</Markdown>
    </Border>
  );
}
