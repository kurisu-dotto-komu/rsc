"use client";

import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <span className="font-mono font-bold">{count}</span>;
}
