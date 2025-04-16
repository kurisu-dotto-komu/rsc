import Border from "#/components/border";
import Code from "#/components/code";

import BoundaryClient from "./boundaryClient";
import BoundaryServerAsync from "./boundaryServerAsync";
import BoundarySharedChild from "./boundarySharedChild";
import BoundarySharedGrandChild from "./boundarySharedGrandChild";

export default function BoundaryServer() {
  return (
    <Border server name="BoundaryServer">
      <p>This is a server component.</p>
      <BoundaryServerAsync />
      <BoundarySharedChild />
      {/* <BoundarySharedGrandChild /> */}
      <BoundaryClient header={<Code code={`"use client"; // is at the top of my file`} />} />
    </Border>
  );
}
