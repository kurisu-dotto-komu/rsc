import Highlight from "#/components/highlight";
import Info from "#/components/info";
import Readable from "#/components/readable";
import SignOff from "#/components/signOff";

import KindClient from "./kindClient";
import KindComparisonTable from "./kindComparisonTable";
import KindServer from "./kindServer";
import KindServerAsync from "./kindServerAsync";
import KindShared from "./kindShared";
import KindSharedClient from "./kindSharedClient";

export default function KindsPage() {
  return (
    <>
      <Readable>
        <Info>
          The RSC paradigm introduces three &quot;kinds&quot; of components -{" "}
          <b className="text-red-700">Server</b>, <b className="text-blue-700">Client</b>, and{" "}
          <b className="text-green-700">Shared</b>.
        </Info>
        <h2>
          <span className="text-red-700">Server Components</span>
        </h2>
        <p>
          The source code of server components is not sent to the client, and their rendering
          process does not happen in the client. Only the <i>result</i> of the server-side rendering
          process is sent. It might be useful to{" "}
          <Highlight>
            think of Server Components as template generators that output static HTML
          </Highlight>
          , which is sent and displayed to the client.
        </p>
        <p>
          Because of this, it is safe to make requests to sensitive APIs or resources within the
          code of Server Components themselves, as long as the output of their render process is
          carefully controlled.
        </p>
        <KindServer />
        <KindServerAsync />
        <h2>
          <span className="text-blue-700">Client Components</span>
        </h2>
        <p>
          These are components that use browser-only APIs. They usually have some kind of
          interactivity. They have the <code>use client</code> directive at the top of their file.
          <Highlight>
            They behave like &quot;traditional&quot; react components most of the time.
          </Highlight>
        </p>
        <KindClient />
        <div>
          While <code>use client</code> components exist to provide browser / client interactivity,
          despite the name, <Highlight>they are also be rendered on the server</Highlight> during
          the build step. Their static HTML is sent to the client, and then hydrated with
          interactivity on the client once the page&apos;s resources are loaded. This prevents
          elements from &quot;popping&quot; when the page is loading, but because of this, Client
          components have a few other gotchas, which we will cover later.
        </div>
        <div>
          <h2>
            <span className="text-green-700">Shared Components</span>
          </h2>
          <p>
            Shared components can act as either server or client components. Because they don&apos;t
            use any APIs that are only available on the client or server, they can be rendered
            anywhere.{" "}
            <Highlight>
              Shared Components automatically &quot;become&quot; Server or Client components based
              on their environment.
            </Highlight>
          </p>
        </div>
        <KindShared />
        <KindSharedClient />
      </Readable>
      <KindComparisonTable />
      <SignOff>
        Now lets go into more detail about the differences between client and server components, and
        when to use them.
      </SignOff>
    </>
  );
}
