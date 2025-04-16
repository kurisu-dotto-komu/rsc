import AsyncServer from "#/components/asyncServer";
import Border from "#/components/border";
import Code from "#/components/code";

import BoundaryClient from "./boundaryClient";
import BoundarySharedChildGrandChild from "./boundarySharedGrandChild";

export default function BoundaryServer() {
  return (
    <Border server>
      <p>This is a server component.</p>
      <AsyncServer />
      <BoundarySharedChildGrandChild />
      {/* <BoundarySharedGrandChild /> */}
      <BoundaryClient header={<Code code={`"use client"; // is at the top of my file`} />} />
    </Border>
  );
}
