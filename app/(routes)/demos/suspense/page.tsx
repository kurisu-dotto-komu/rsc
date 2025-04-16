import Code from "#/components/code";
import Highlight from "#/components/highlight";
import Info from "#/components/info";
import Readable from "#/components/readable";
import SignOff from "#/components/signOff";

import SuspenseClient from "./suspenseClient";
import SuspenseServer from "./suspenseServer";

export const dynamic = "force-dynamic";

export default function SuspensePage() {
  return (
    <>
      <Readable>
        <Info>
          React has a feature called <code>Suspense</code> that allows deffered rendering of child
          components. When used with Server Components, a loading state can be shown while data is
          being fetched on the server.
        </Info>
        <p>
          Moreover, when used with Server Components, <code>Suspense</code> allows the data to be
          streamed without blocking the initial page load. Unlike with a client component,{" "}
          <Highlight>no additional network requests are needed</Highlight>. Watch with a throttled
          network to see the power of streaming in action, especially on first load.
        </p>
        <div className="my-8 grid grid-cols-2 gap-6">
          <SuspenseServer />
          <SuspenseClient />
          <div>
            When used with a Server Component, <code>Suspense</code> allows the data to be streamed
            without blocking the initial page load. It does not require another round trip as
            it&apos;s streamed during the intial page request.
          </div>
          <div>
            The &quot;old school&quot; client <code>useEffect</code> data fetching pattern also
            doesn&apos;t block, but it requires another round trip that can only begin after the
            initial page load is complete.
          </div>
        </div>
        <Code
          tabs={["Server Component with Suspense"]}
          code={`
import { Suspense } from "react";
// ...

export async function UserList() {
  const users = await getSampleData(3);
  return <Users users={users} />;
}

export default async function SuspenseDemo() {
  return (
    <Suspense fallback={<Spinner />}>
      <UserList />
    </Suspense>
  );
}      
      `}
        />
      </Readable>
    </>
  );
}
