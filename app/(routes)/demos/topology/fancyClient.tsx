"use client";

import Border from "#/components/border";
import Counter from "#/components/counter";

export default function FancyClient() {
  return (
    <Border client name="FancyClient">
      <div className="flex items-center gap-2 p-2 text-blue-800">
        <div className="font-bold">Client Counter: </div>
        <Counter />
      </div>
    </Border>
  );
}
