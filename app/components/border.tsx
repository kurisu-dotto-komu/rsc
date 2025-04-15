// TODO tab stuff
import { Tab } from "./tab";

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
  let kindColor: "green" | "red" | "blue" | "gray" = "green";

  // handle kinds
  if (server) {
    kind = "server";
    kindColor = "red";
  }
  if (client) {
    kind = "client";
    kindColor = "blue";
  }

  // handle location
  let location = "node.js";
  let locationColor: "green" | "red" | "blue" | "gray" = "red";
  let boxColor = "border-orange-200 bg-orange-100";

  // if we're on the client, override
  if (typeof document !== "undefined") {
    location = "browser";
    locationColor = "blue";
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
    <div className={`not-prose [.prose>&]:my-8`}>
      <div className="mx-2 flex justify-between">
        <div>{name && <Tab color={kindColor}>{name}</Tab>}</div>
        <div className="flex gap-1">
          <Tab color={kindColor}>{kind}</Tab>
          <Tab color={locationColor}>{location}</Tab>
        </div>
      </div>
      <div className={`border ${boxColor} relative rounded-md p-2 ${className}`}>{children}</div>
    </div>
  );
}
