import { getSampleData } from "#/db/sampleData";

import Border from "#/components/border";
import Users from "#/components/users";

import ContextCounterButton from "./contextCounterButton";

export default async function ContextServer() {
  const users = await getSampleData(4);

  return (
    <Border server name="ContextServer" className="flex flex-col gap-4">
      <div>I&apos;m server component. Here is some async server-side data to prove it:</div>
      <Users users={users} compact parentClassName="grid grid-cols-2 gap-2" />
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
