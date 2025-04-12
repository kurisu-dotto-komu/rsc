export default function Border({
  children,
  client,
  server,
  name,
  className,
}: {
  children: React.ReactNode;
  client?: boolean;
  server?: boolean;
  name?: string;
  className?: string;
}) {
  // default shared
  let kind = "shared";
  let kindColor = "bg-green-200 text-green-900";

  // handle kinds
  if (server) {
    kind = "pure server";
    kindColor = "bg-red-200 text-red-900";
  }
  if (client) {
    kind = `"use client"`;
    kindColor = "bg-blue-200 text-blue-900";
  }

  // handle location
  let location = "node.js";
  let locationColor = "bg-red-200 text-red-900";
  let boxColor = "border-orange-200 bg-orange-100";

  // if we're on the client, override
  if (typeof document !== "undefined") {
    location = "browser";
    locationColor = "bg-blue-200 text-blue-900";
    if (kind === "shared") {
      boxColor = "border-cyan-200 bg-cyan-100";
    } else {
      boxColor = "border-blue-200 bg-blue-100";
    }
  } else {
    if (server) {
      boxColor = "border-red-200 bg-red-100";
    }
    if (client) {
      boxColor = "border-purple-200 bg-purple-100";
    }
  }

  return (
    <div className={`border-2 ${boxColor} relative my-2 rounded-md px-2 py-4 ${className}`}>
      <div className="absolute -top-5 right-1 left-1 -mt-px flex items-center justify-between font-mono text-xs select-none">
        <div>{name && <div className={`rounded-t-md ${kindColor} px-2 py-0.5`}>{name}</div>}</div>
        <div className="flex gap-1">
          <div className={`rounded-t-md ${kindColor} px-2 py-0.5`}>{kind}</div>
          <div className={`rounded-t-md ${locationColor} px-2 py-0.5`}>{location}</div>
        </div>
      </div>
      {children}
    </div>
  );
}
