"use client";

import Border from "#/components/border";

import HydrationShared from "./hydrationShared";

export default function HydrationSharedClient() {
  return (
    <Border client>
      <HydrationShared />
    </Border>
  );
}
