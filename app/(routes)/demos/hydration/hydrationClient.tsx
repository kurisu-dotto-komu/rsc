"use client";

import Border from "#/components/border";

export default function HydrationClient() {
  return (
    <Border client name="HydrationClient">
      Client components will always hydrate (whether they&apos;re interactive or not).
    </Border>
  );
}
