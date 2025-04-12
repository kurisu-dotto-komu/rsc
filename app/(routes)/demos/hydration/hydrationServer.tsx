import Border from "#/components/border";
import Markdown from "#/components/markdown";

export default async function HydrationServer() {
  return (
    <Border server name="HydrationServer">
      Pure Server components don&apos;t need to hydrate as they don&apos;t have any interactivity.
      Pre-rendered HTML is sent to the client and displayed; no need for client side Javascript.
    </Border>
  );
}
