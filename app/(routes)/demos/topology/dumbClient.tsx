"use client";

import Border from "#/components/border";

export default function DumbClient() {
  const isOnClient = typeof document !== "undefined";
  return (
    <Border client name="DumbClient">
      Yo. I&apos;m a dumb <span className="font-bold text-blue-800">client</span> component.
      I&apos;m being rendered{" "}
      <span className={`font-bold ${isOnClient ? "text-blue-800" : "text-red-800"}`}>
        {isOnClient ? "on the client" : "on the server"}.
      </span>
    </Border>
  );
}
