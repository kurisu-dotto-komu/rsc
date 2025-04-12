"use client";

import Border from "#/components/border";

export default function DynamicChildClient({ text }: { text: string }) {
  return <Border client>{text}</Border>;
}
