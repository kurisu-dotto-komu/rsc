"use client";

import Border from "#/components/border";

export default function HydrationError() {
  return (
    <Border client name="Hydration Error">
      The time is {new Date().toLocaleTimeString()}
    </Border>
  );
}
