import Code from "#/components/code";
import Highlight from "#/components/highlight";
import Info from "#/components/info";
import Readable from "#/components/readable";

import InterWeavingServer from "./interweavingServer";

export default function InterweavingPage() {
  return (
    <>
      <Readable>
        <Info>
          We can overcome boundaries by interweaving client and server components. Interweaving
          means we also <Highlight>pass components around</Highlight> rather than just importing
          them.
        </Info>
        <p>
          Remember,{" "}
          <Highlight>
            network boundaries are created based on imports, not based on ancestors
          </Highlight>
          . This means that any component type can be the parent or child of any other component
          type.
        </p>
        <InterWeavingServer />
      </Readable>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Code
          tabs={["Interweaving Server Components"]}
          code={`            
// default server network boundary

// becuase these are IMPORTED here...
import ServerAsync from "./serverAsync";
import Shared from "./shared";

import Client from "./client";

export default function Page() {
  return (
    <div>
      <p>I am a server component</p>
      <ServerAsync />
      <Shared />
      {/* despite being children */} 
      {/* of a Client Component */}
      <Client>
        {/* they remain in the current */}
        {/* server network boundary */}
        <ServerAsync />
        <Shared />
      </Client>
      {/* we can pass also components as props */}
      {/* just like they are children */}
      <Client header={<ServerAsync />} />
    </div>
  );
}          
        `}
        />
        <Code
          tabs={["Interweaving Client Component"]}
          code={`            
"use client"; // client network boundary

// becuase the shared component is imported here...
import Shared from "./shared";

export default function Client({
  children,
  header,
}: {
  children?: React.ReactNode;
  header?: React.ReactNode;
}) {
  return (
    <div>
      {/* it is turned into a client component */}
      <Shared />
      {/* but the same component passed as a prop */}
      {/* will remain a server component */}
      {header && <h2>{header}</h2>}
      {children}
    </div>
  );
}
        `}
        />
      </div>
    </>
  );
}
