import Border from "#/components/border";
import Markdown from "#/components/markdown";

export default async function HydrationServer() {
  return (
    <Border server name="HydrationServer">
      Server components don&apos;t need to hydrate as they don&apos;t allow DOM interactivity.
    </Border>
  );
}
