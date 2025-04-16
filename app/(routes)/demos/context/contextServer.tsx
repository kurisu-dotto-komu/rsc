import AsyncServer from "#/components/asyncServer";
import Border from "#/components/border";

import ContextCounterButton from "./contextCounterButton";

export default async function ContextServer() {
  return (
    <Border server>
      <AsyncServer />
      <div>Marvel, as I import these client components:</div>
      <div className="grid grid-cols-2 gap-4">
        <ContextCounterButton />
        <ContextCounterButton />
      </div>
      <div>
        Because I&apos;m rendered on the server, I am completely unaware of any client context.
        However, React is clever enough to share context with my imported client components, because
        they share the same provider further up in the component tree.
      </div>
      <div>It&apos;s magic!</div>
    </Border>
  );
}
