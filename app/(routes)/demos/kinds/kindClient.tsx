"use client";

import { useState } from "react";
import { useEffect } from "react";

import Border from "#/components/border";

export default function KindClient() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Border client>
      <div>
        I am a Client Component. Watch me count:{" "}
        <span className="font-mono font-bold">{count}</span>
      </div>
    </Border>
  );
}
