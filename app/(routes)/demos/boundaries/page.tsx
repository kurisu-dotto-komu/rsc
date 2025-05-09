import Code from "#/components/code";
import Highlight from "#/components/highlight";
import Info from "#/components/info";
import Readable from "#/components/readable";
import SignOff from "#/components/signOff";

import BoundaryServer from "./boundaryServer";

export default function BoundariesPage() {
  return (
    <>
      <Readable>
        <Info>
          In RSC,{" "}
          <Highlight>
            files that start with &quot;use client&quot; are bundled for the browser, and any React
            components they import must also be client‑safe; importing a Server Component here
            triggers a compile‑time error
          </Highlight>
          . When <code>&quot;use client&quot;</code> appears, a &quot;network boundary&quot; is
          created in the component tree.
        </Info>
        <BoundaryServer />
      </Readable>
      <div className="grid gap-4 sm:grid-cols-2">
        <Code
          tabs={["BoundaryServer"]}
          code={`
import Client from "./boundaryClient";
import ServerAsync from "./serverAsync";
import SharedChild from "./sharedChild";

export default function BoundaryServer() {
  return (
    <div>
      {/* Server Component */}
      <ServerAsync />
      {/* Becomes a Server Component */}
      <SharedChild />
      {/* Introduces a Network Boundary */}
      <BoundaryClient />
    </div>
  );
}
`}
        />
        <Code
          tabs={["BoundaryClient"]}
          code={`
"use client"; // the magic directive

import Counter from "./counter";
import SharedChild from "./sharedChild";

export default function BoundaryClient() {
  return (
    <div>
      {/* Client Component */}
      <Counter />
      {/* Becomes a Client Component */}
      <SharedChild />
      {/* Cannot import Server Components */}
      {/* <ServerAsync /> */}
    </div>
  );
}
`}
        />
      </div>
    </>
  );
}
