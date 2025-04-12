"use client";

import Border from "#/components/border";

export default function HydrationError() {
  return (
    <Border client name="HydrationError">
      The time is {new Date().toLocaleTimeString()}
    </Border>
  );
}
