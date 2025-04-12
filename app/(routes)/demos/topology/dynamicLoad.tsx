"use client";

import { useState } from "react";

import dynamic from "next/dynamic";

import Border from "#/components/border";

const DynamicClientSSR = dynamic(() => import("./dynamicChildClient"), {
  ssr: true,
});
const DynamicClientNoSSR = dynamic(() => import("./dynamicChildClient"), {
  ssr: false,
});

const DynamicServerSSR = dynamic(() => import("./dynamicChildServer"), {
  ssr: true,
});
const DynamicServerNoSSR = dynamic(() => import("./dynamicChildServer"), {
  ssr: false,
});

export default function DynamicLoad() {
  const [loadComponents, setLoadComponents] = useState(false);

  return (
    <Border client>
      <div className="flex flex-col gap-4">
        <div>
          <button className="btn btn-primary" onClick={() => setLoadComponents(true)}>
            Load Components
          </button>
        </div>

        {loadComponents && (
          <>
            <DynamicClientSSR text="Client SSR" />
            <DynamicClientNoSSR text="Client No SSR" />
            <DynamicServerSSR text="Server SSR" />
            <DynamicServerNoSSR text="Server No SSR" />
          </>
        )}
      </div>
    </Border>
  );
}
