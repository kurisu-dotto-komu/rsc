import Code from "#/components/code";
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
          , which is sent and displayed to the client. This isn&apos;t exactly what happens but
          it&apos;s close enough for a basic mental model.
        </p>
        <p>
          Because of this, it is safe to make requests to sensitive APIs or resources within the
          code of Server Components themselves, as long as the output of their render process is
          carefully controlled.
        </p>
        <p>
          React Server Components can be <code>async</code> functions, which allows them to await
          promises.
        </p>
      </Readable>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <KindServer />
          <Code
            code={`
import fs from "fs";

// woah, fs is available!
export default function ServerSync() {
  // we can read the filesystem inside Server Component!
  const data = fs.readFileSync("app/db/test.json", "utf8");
  const json = JSON.parse(data);
  return (
    <div>
      <div>Hi, I am a Server Component.</div>
      <code>{JSON.stringify(json, null, 2)}</code>
    </div>
  );
}`}
          />
        </div>
        <div className="flex flex-col gap-4">
          <KindServerAsync />
          <Code
            code={`
import fs from "fs/promises";

// woah, it's async!
export default async function ServerAsync() {
  // we can await promises inside Server Components
  const data = await fs.readFile("app/db/test.json", "utf8");
  const json = JSON.parse(data);
  return (
    <div>
      <div>Hi, I am an Async Server Component.</div>
      <code>{JSON.stringify(json, null, 2)}</code>
    </div>
  );
}
`}
          />
        </div>
      </div>
      <Readable>
        <h2>
          <span className="text-blue-700">Client Components</span>
        </h2>
        <p>
          These are components that use browser-only APIs. They usually have some kind of
          interactivity or some kind of rendering that can only be done in the browser. They have
          the <code>use client</code> directive at the top of their file.
          <Highlight>
            They behave like &quot;traditional&quot; react components most of the time.
          </Highlight>
        </p>
        <KindClient />
        <Code
          code={`
"use client";
// useEffect and useState are only available with "use client" set
import { useEffect, useState } from "react";

export default function Client() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <div>I am a Client Component. Watch me count: {count}</div>;
}
`}
        />

        <p>
          In the RSC world, depending on the framework, Client Components can behave unexpectedly,
          especially during Hydration. We will look more closely at this later.
        </p>
        <div>
          <h2>
            <span className="text-green-700">Shared Components</span>
          </h2>
          <p>
            Shared Components can act as either Server or Client components. Because they don&apos;t
            use any APIs that are only available on the client or server, they can be rendered in
            either environment.{" "}
            <Highlight>
              They automatically &quot;become&quot; Server or Client components to match the
              environment they are imported into.
            </Highlight>
          </p>
          <p>
            Typically, Shared Components are useful for things like UI elements that might need to
            be rendered on both the client and server.
          </p>
        </div>
        <KindShared />
        <KindSharedClient />
        <hr />
        <p>
          It is up to you, the developer, to decide which components to use. The kind of component
          you use for a given task will vary, but it will determine a rendering strategy, how you
          fetch data, and how the user interacts with your app.
        </p>
      </Readable>
      <KindComparisonTable />
      <Readable>
        <p>
          As a rule of thumb, and as Next.js defaults dictate,{" "}
          <Highlight>
            Use Shared Components unless you need to use a Server Component feature like data
            fetching,
          </Highlight>{" "}
          and{" "}
          <Highlight>
            only use a Client Component when you need to use a browser-only API.
          </Highlight>
        </p>
        <p>
          Of course, there are always exceptions, but the RSC paradigm provides you with maximum
          flexibility to tackle any problem.
        </p>
      </Readable>
    </>
  );
}
