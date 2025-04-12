"use client";

import Border from "#/components/border";

import ChildClient from "./childClient";
import ChildServer from "./childServer";

export default function ParentClient() {
  return (
    <Border client>
      <div>Client Parent</div>
      <ChildClient />
      <ChildServer />
    </Border>
  );
}
