import { Code } from "bright";
import Link from "next/link";

import Readable from "#/components/readable";

import BarChartClient from "./barChartClient";
import BarChartServer from "./barChartServer";
import CodeEditors from "./codeEditors";

export default function FeaturesPage() {
  return (
    <Readable>
      <p>TODO show flight payload</p>
      <h1>Feature Showcase</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <BarChartServer />
        <BarChartClient />
      </div>
      <p>
        Example RSC Magic via{" "}
        <Link href="https://rosencharts.com/" target="_blank">
          RosenCharts
        </Link>
      </p>
      <CodeEditors />

      <p>
        Syntax highlighting example -- killer!{" "}
        <Link href="https://bright.codehike.org/" target="_blank">
          https://bright.codehike.org/
        </Link>
      </p>

      <div>SPEED EXAMPLE</div>
      <ul>
        <li>Speed</li>
        <li>No-JS Static Pages</li>
        <li>Avoid Shipping Unnecessary JS to the Client</li>
        <li>Async</li>
        <li>FS</li>
        <li>Secure Access to Server-Only Logic</li>
        <li>Simpler DX</li>
        <li>New data patterns</li>
        <li>Single network rountrip ( no need for the client to ask for the data separately)</li>
        <li>Smaller bundle size</li>
        <li>SEO</li>
        <li>TODO GROK NEXTJS DOCS</li>
        <li>TODO PARTIAL PRERENDERING</li>
        <li>Make note when it&apos;s next.js specific</li>
      </ul>
      <p>
        In Next.js, the rendering work is further split by route segments to enable streaming and
        partial rendering, and there are three different server rendering strategies: Static
        Rendering, Dynamic Rendering, Streaming
      </p>
      <h1>Concepts</h1>
      <ul>
        <li>
          use server - only the OUTPUT is sent to the client, without the logic or dependancies;
          like SSG
        </li>
        <li>
          use client - the rendering process is performed on the server AND subsequently on the
          client
        </li>
        <li>use server isn&apos;t for components, only for server functions.</li>
      </ul>
      <h1>Async</h1>
      <p>TODO</p>
      <h1>Limitations</h1>
      <ul>
        <li>
          True RCS needs{" "}
          <Link href="https://rosencharts.com/" target="_blank">
            new libraries
          </Link>{" "}
          sometimes
        </li>
        <li>
          <Link href="https://github.com/plouc/nivo/issues/2618">
            https://github.com/plouc/nivo/issues/2618
          </Link>
        </li>
      </ul>
    </Readable>
  );
}
