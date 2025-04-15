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
          RSC Streaming is great with a single component, but it&apos;s even more noticable when
          nested data-fetching components are involved.
        </Info>

        <p>
          With a client component, we need to do multiple round trips to fetch data as we render
          components, but with RSC, all of those trips happen on the server and can be much faster.
          As the data is fetched and the componets are streamed, the waterfall effect is almost
          unnoticable thanks to the lack of network delay.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <WaterfallServer />
          <WaterfallClient />
        </div>
      </Readable>
    </>
  );
}
