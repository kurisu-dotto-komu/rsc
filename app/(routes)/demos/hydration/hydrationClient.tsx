"use client";

import Border from "#/components/border";

export default function HydrationClient() {
  return (
    <Border client name="HydrationClient">
      <code>use client</code> components will always hydrate.
    </Border>
  );
}
