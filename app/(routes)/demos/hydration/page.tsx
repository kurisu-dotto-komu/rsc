import Image from "next/image";

import Border from "#/components/border";
import Code from "#/components/code";
import Info from "#/components/info";
import Markdown from "#/components/markdown";
import Readable from "#/components/readable";
import SignOff from "#/components/signOff";

import Comic2 from "./hydration2.png";
import Comic1 from "./hydration.png";
import HydrationClient from "./hydrationClient";
import HydrationError from "./hydrationError";
import {
  HydrationErrorClientOnlyFix,
  HydrationErrorDynamicImportFix,
  HydrationErrorUseEffectFix,
} from "./hydrationErrorFix";
import HydrationServer from "./hydrationServer";
import HydrationShared from "./hydrationShared";
import HydrationSharedClient from "./hydrationSharedClient";
import InteractiveClient from "./interactiveClient";

export default function HydrationPage() {
  return (
    <>
      <Readable>
        <Info>
          Hydration is the process of attaching JavaScript event handlers to server-rendered HTML in
          the browser. The RSC paradigm helps make hydration seamless.
        </Info>
        <p>
          While the hydration mechanism itself is part of React, the strategy of exactly when and
          how hydration occurs is handled by your framework. In our case, we&apos;re using Next.js,
          so keep this in mind that there may be implementation nuances when applying this knowledge
          to different frameworks.
        </p>
        <InteractiveClient />
        <Markdown>
          {`
Above is a Client Component with interactivity. To get this on your screen and clickable, here's what happens:

- Even through it's a "client component", it is pre-rendered on the server during the build step (!)  
- The output of this rendering, static HTML, is like a "real skeleton" of the component
- This skeleton is sent to the client on initial page load, so something can be shown to the user while the client JS environment is loading. 
- The skeleton looks identical to the hydrated component's initial state, so it feels like the component is immediately loaded without any "popping" effect
- Once the JS code is downloaded and the client is ready to go, the client "hydrates" the static HTML, adding event listeners and making the component interactive
- Ideally, this hydration step transitions from a "real skeleton" to a "real component" with identical DOM elements, so nobody is the wiser!

But wait, I thought we can't use \`useState\`, etc, with Server Components?

This is still true for actual Server Components, but Next.js has a way to coerce Client Components to be rendered on the server, just for for this special trick. 

As a reminder, only client components can be interactive, so only client components need to be hydrated:

`}
        </Markdown>
        <HydrationServer />
        <HydrationClient />
        <Border server>
          <HydrationShared />
        </Border>
        <HydrationSharedClient />
        <p>
          Hydration works wonderfully as long as the pre-rendered skeleton HTML matches the
          initially rendered DOM of the hydrated client component. Unfortunately, this is not always
          the case.
        </p>
      </Readable>
      <div className="grid grid-cols-2 gap-4">
        <Image src={Comic1} alt="Hydration" className="rounded-lg" />
        <Image src={Comic2} alt="Hydration" className="rounded-lg" />
      </div>
      <Readable>
        <Markdown>{`
Notable causes of [hydration errors](https://nextjs.org/docs/messages/react-hydration-error
) include:

- Incorrect nesting of HTML tags
- Using checks like \`typeof window !== 'undefined'\` 
- Using browser-only APIs like \`window\` or \`localStorage\` 
- Using time-dependent APIs such as the \`Date()\` constructor 
- Browser extensions or CDNs modifying the page's static HTML

Take, for example, the following simple client component. This would be no trouble before RSC, but it causes a hydration error in Next.js.

**Refresh the page to see hydration happening!**
          `}</Markdown>
        <HydrationError />
        <Code
          code={`
"use client";

export default function HydrationError() {
  return (
    <div>
      The time is {new Date().toLocaleTimeString()}
    </div>
  );
}
`.trim()}
        />
        <p>
          This casuses a hydration error because the date on the server doesn&apos;t match what is
          rendered on the client. Uh oh!
        </p>
        <p>
          Luckily, there are a few ways to work around this. One (more elegant) way is to add a
          placeholder that is replaced when the client is loaded, using <code>useEffect</code> and{" "}
          <code>useState</code>.
        </p>
        <HydrationErrorUseEffectFix />
        <Code
          code={`
"use client";

export function HydrationErrorUseEffectFix() {
  const [theTime, setTheTime] = useState<string>("???");

  useEffect(() => {
    // this is never called when pre-rendering,
    // only when mounted on the client
    setTheTime(new Date().toLocaleTimeString());
  }, []);

  return (
    <div>
      The time is {theTime}
    </div>
  );
}
        `}
        />
        <p>
          Another catch-all solution is to completely avoid rendering until we are sure we are only
          in the browser, and either showing a spinner or a blank space during pre-rendering. This
          technique is needed for importing some pre-RSC client-only libraries.
        </p>
        <HydrationErrorClientOnlyFix />
      </Readable>
      <div className="grid gap-4 sm:grid-cols-2">
        <Code
          tabs={["HydrationErrorClientOnlyFix"]}
          code={`
"use client";

import ClientOnly from "./clientOnly";

export function HydrationErrorClientOnlyFix() {
  return (
      <ClientOnly>
        <HydrationError />
      </ClientOnly>
  );
}

        `}
        />
        <Code
          tabs={["ClientOnly"]}
          code={`
"use client";

import { useEffect, useState } from "react";

export default function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // dont render anything until we are
  // sure we are mounted in a browser
  if (!mounted) return null;

  // render children now its safe to
  return children;
}
        `}
        />
      </div>
      <Readable>
        <p>
          You can also avoid hydration errors by skipping the SSR step when you dynamically import a
          a client component. This is particularly useful for lazy-loading big-ass libraries.
        </p>
        <HydrationErrorDynamicImportFix />
        <Code
          code={`
"use client";

import dynamic from "next/dynamic";

const DynamicFix = dynamic(() => import("./hydrationError"), { ssr: false });

export function HydrationErrorDynamicImportFix() {
  return <DynamicFix />;
}
        `}
        />
      </Readable>
      <SignOff>Next, let&apos;s look at some new features of server components.</SignOff>
    </>
  );
}
