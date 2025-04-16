"use client";

import { useState } from "react";

import Border from "#/components/border";

export default function InteractiveClient() {
  const [count, setCount] = useState(0);

  return (
    <Border client>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        Count: {count}
      </button>
    </Border>
  );
}
