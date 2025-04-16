import Link from "next/link";
import {
  RiCodeLine,
  RiCpuLine,
  RiFileTextLine,
  RiFlashlightLine,
  RiGlobalLine,
  RiRefreshLine,
  RiServerLine,
  RiShieldCheckLine,
} from "react-icons/ri";

import IconGrid from "#/components/iconGrid";
import Info from "#/components/info";
import Readable from "#/components/readable";

import BarChartClient from "./barChartClient";
import BarChartServer from "./barChartServer";
import CodeEditors from "./codeEditors";

const benefits = [
  {
    icon: RiFlashlightLine,
    title: "Lightning Fast",
    description: "Instant server rendering with no client-side data fetching",
  },
  {
    icon: RiFileTextLine,
    title: "Zero JS by Default",
    description: "Static HTML without client-side JavaScript",
  },
  {
    icon: RiServerLine,
    title: "Server Power",
    description: "Direct access to backend resources and databases",
  },
  {
    icon: RiShieldCheckLine,
    title: "Enhanced Security",
    description: "Keep sensitive operations server-side without needing an API",
  },
  {
    icon: RiRefreshLine,
    title: "Streaming Ready",
    description: "Progressive loading with React Suspense",
  },
  {
    icon: RiCpuLine,
    title: "Smaller Bundles",
    description: "Only ship necessary JavaScript to the client",
  },
  {
    icon: RiCodeLine,
    title: "Better DX",
    description: "Simpler data fetching and component patterns",
  },
  {
    icon: RiGlobalLine,
    title: "SEO Friendly",
    description: "Server-rendered content for search engines",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Readable>
        <Info>
          React Server Components (RSC) represent a paradigm shift in how we build React
          applications. Let&apos;s explore the key features and benefits that make RSC a
          game-changer for modern web development.
        </Info>
        <p>
          At their core, React Server Components allow you to write components that run exclusively
          on the server, reducing client-side JavaScript and improving performance. Here are the key
          advantages that make React Server Components transformative for web applications:
        </p>
      </Readable>
      <IconGrid items={benefits} />
      <Readable>
        <p>
          To better understand these benefits in action, let&apos;s look at a practical example
          comparing server and client components. Below, you&apos;ll see two identical charts - one
          rendered on the server and one on the client. Notice how the server component appears
          instantly with the data, while the client component needs to fetch data after mounting.
        </p>
        <p>Even if you disable Javascript, the the Server Component is still shown!</p>
      </Readable>

      <div className="grid gap-4 md:grid-cols-2">
        <BarChartServer />
        <BarChartClient />
      </div>

      <Readable>
        <p>
          The charts above are powered by{" "}
          <Link href="https://rosencharts.com/" target="_blank">
            RosenCharts
          </Link>
          , a modern charting library specifically designed for RSC. It demonstrates how libraries
          can be built to take advantage of server-side rendering capabilities.
        </p>
        <p>
          However, it&apos;s important to note that the RSC ecosystem is still evolving. Many
          popular libraries, including{" "}
          <Link href="https://github.com/plouc/nivo/issues/2618" target="_blank">
            Nivo
          </Link>{" "}
          charts, don&apos;t yet support React 19 and the new server components architecture. This
          is currently one of the main challenges when adopting RSC, as developers need to either
          wait for library updates or find RSC-compatible alternatives.
        </p>
        <p>
          Let&apos;s look at one more example that showcases how RSC can optimize complex UI
          components. The code blocks below would typically be massive client components with
          multiple themes and language support. With RSC, we can just render these components on the
          server and ship pre-rendered HTML to the client. This significantly reduces the JavaScript
          bundle size. These blocks are powered by{" "}
          <Link href="https://bright.codehike.org/" target="_blank">
            Bright
          </Link>
          , a syntax highlighting library that demonstrates RSC compatibility.
        </p>
      </Readable>

      <CodeEditors />
      <Readable>
        <p>
          Before you leave this page, open your browser&apos;s developer tools and disable
          JavaScript - you&apos;ll notice that most of the content still works perfectly! This is
          because React Server Components render the HTML and CSS on the server, resulting in an
          initial payload of less than 40KB for this entire page.
        </p>
        <p>
          Now imagine if this was a traditional React application - the client-bundle.js would be
          massive, containing all the chart libraries, code editors, and UI components. On mobile
          devices with limited bandwidth and processing power, downloading and executing that bundle
          would create significant delays. React Server Components solve this by moving the heavy
          lifting to the server and only sending the minimal necessary JavaScript to the client.
        </p>
      </Readable>
    </>
  );
}
