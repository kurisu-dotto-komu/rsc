"use client";

import Border from "#/components/border";

import { useCounter } from "./contextCounterProvider";

export default function ContextCounterButton() {
  const { count, setCount } = useCounter();

  return (
    <Border client name="ContextCounterButton">
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Shared Counter: {count}
      </button>
    </Border>
  );
}
