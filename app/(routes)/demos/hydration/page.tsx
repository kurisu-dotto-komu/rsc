import Link from "next/link";

import Info from "#/components/info";
import Markdown from "#/components/markdown";
import Notebook from "#/components/notebook";
import SignOff from "#/components/signOff";

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
    <Notebook>
      <Info>
        Hydration is the process of attaching JavaScript event handlers to server-rendered HTML in
        the browser.
      </Info>
      <div>
        TODO diagram showing each type of component and how it is hydrated (all are on the server,
        then only some are re-hydrated).
      </div>
      <div>
        <p>
          In Next.js, pages are first rendered on the server as static HTML, then
          &quot;hydrated&quot; on the client side to become interactive. This process allows for
          fast initial page loads while maintaining interactivity.
        </p>
        <p>
          All kinds of components - Server, Client and Shared - are pre-rendered during the build
          step and the resulting static HTML is sent to the client in the initial request. If a
          component is interactive - if it is part of a &quot;use client&quot; boundary - then it
          needs to be hydrated.
        </p>
        <p>Nextjs will check the HTML to try to hydrate it, so it must match what it expects...?</p>
        <p>
          When done right, hydration allows components to load static non-interactive HTML, and
          seamlessly add interactivity when the page (and it&apos;s required javascript) is loaded.
        </p>
      </div>
      <InteractiveClient />
      <p>Depending on the rendering environment, components will be hydrated or not.</p>
      <HydrationServer />
      <HydrationClient />
      <HydrationShared />
      <HydrationSharedClient />

      <div>
        When dealing with components that run in multiple environments, including Shared and Client
        components, you can run into hydration errors.
      </div>
      <div>
        <h2>Hydration Errors</h2>
        <Link href="https://nextjs.org/docs/messages/react-hydration-error" target="_blank">
          Source
        </Link>

        <Markdown>{`
# Hydration Errors

Common causes of hydration errors include:

- **Incorrect nesting of HTML tags:**
  - \`<p>\` nested in another \`<p>\` tag
  - \`<div>\` nested in a \`<p>\` tag
  - \`<ul>\` or \`<ol>\` nested in a \`<p>\` tag

- **Interactive Content cannot be nested:**
  - \`<a>\` nested in another \`<a>\` tag
  - \`<button>\` nested in another \`<button>\` tag

- Using checks like \`typeof window !== 'undefined'\` in your rendering logic
- Using browser-only APIs like \`window\` or \`localStorage\` in your rendering logic
- Using time-dependent APIs such as the \`Date()\` constructor in your rendering logic
- Browser extensions modifying the HTML
- Incorrectly configured CSS-in-JS libraries
- Ensure your code is following our official examples
- Incorrectly configured Edge/CDN that attempts to modify the html response, such as Cloudflare Auto Minify
          `}</Markdown>
      </div>
      <HydrationSharedClient />
      <HydrationError />
      <HydrationErrorUseEffectFix />
      <HydrationErrorDynamicImportFix />
      <HydrationErrorClientOnlyFix />
      <SignOff>Next, let&apos;s look at some new features of server components.</SignOff>
    </Notebook>
  );
}
