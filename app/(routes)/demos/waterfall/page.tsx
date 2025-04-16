import Highlight from "#/components/highlight";
import Info from "#/components/info";
import Readable from "#/components/readable";

import WaterfallClient from "./waterfallClient";
import WaterfallServer from "./waterfallServer";

export const dynamic = "force-dynamic";

export default function WaterfallPage() {
  return (
    <>
      <Readable>
        <Info>
          RSC Streaming is great with a single component, but it&apos;s even{" "}
          <Highlight>more noticable when nested data-fetching components are involved</Highlight>.
        </Info>
        <p>Refresh the page to see the waterfall effect.</p>
        <div className="grid grid-cols-2 gap-2">
          <WaterfallServer />
          <WaterfallClient />
        </div>
        <p>
          With a client component, we need to do multiple round trips to fetch data as we render
          components. With RSC, all of those trips happen on the server, which is close to the
          database, perhaps even in the same datacenter. This makes a big difference, especially
          when chaining requests.
        </p>
        <p>
          With RSC, with server-side data fetching combined with streaming components, the waterfall
          effect is almost unnoticable.
        </p>
      </Readable>
    </>
  );
}
