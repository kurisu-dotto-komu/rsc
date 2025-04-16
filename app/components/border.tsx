// TODO tab stuff
import clsx from "clsx";

import Readable from "./readable";
import TabBox, { type ColorType, Tab } from "./tabBox";

export default function Border({
  children,
  client,
  server,
  name,
  className,
  readable,
}: {
  children: React.ReactNode;
  client?: boolean;
  server?: boolean;
  name?: string;
  className?: string;
  readable?: boolean;
}) {
  // default shared
  let kind = "shared";
  let kindColor: ColorType = "green";

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
  let locationColor: ColorType = "red";

  // if we're on the client, override
  if (typeof document !== "undefined") {
    location = "browser";
    locationColor = "blue";
  }

  const tabs = [
    ...(name ? [{ text: name, color: kindColor }] : []),
    { text: kind, color: kindColor },
    { text: location, color: locationColor },
  ];

  return (
    <div className={`last:!mb-0 [.prose>&]:my-4`}>
      <TabBox tabs={tabs} color={kindColor} className={clsx(className, !readable && "not-prose")}>
        {readable && <Readable>{children}</Readable>}
        {!readable && children}
      </TabBox>
    </div>
  );
}
