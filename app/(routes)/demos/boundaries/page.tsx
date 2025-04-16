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
            the <b>imported</b> (grand)children of client components all become client components
          </Highlight>
          . When <code>&quot;use client&quot;</code> appears, a &quot;network boundary&quot; is
          created in the component tree.
        </Info>
        <BoundaryServer />
      </Readable>
      <div className="grid grid-cols-2 gap-4">
        <Code
          tabs={["BoundaryServer"]}
          code={`
import Client from "./boundaryClient";
import ServerAsync from "./serverAsync";
import SharedChild from "./sharedChild";

export default function BoundaryServer() {
  return (
    <div>
      {/* Server component */}
      <ServerAsync />
      {/* Becomes a server component */}
      <SharedChild />
      {/* Client component boundary */}
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
      {/* Server component */}
      <Counter />
      {/* Becomes a client component */}
      <SharedChild />
      {/* Cannot import server component */}
      {/* <ServerAsync /> */}
    </div>
  );
}
`}
        />
      </div>
      <SignOff>So, how do we overcome boundaries?</SignOff>
    </>
  );
}
