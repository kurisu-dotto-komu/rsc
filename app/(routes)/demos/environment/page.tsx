import Info from "#/components/info";
import Readable from "#/components/readable";
import SignOff from "#/components/signOff";

import EnvironmentClient from "./environmentClient";
import EnvironmentServer from "./environmentServer";

export default function EnvironmentPage() {
  return (
    <>
      <Readable>
        <Info>
          Because server components run in a node.js environment, while client components run in the
          browser, they have access to different APIs and properties.
        </Info>
      </Readable>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <EnvironmentServer />
        <EnvironmentClient />
      </div>
      <SignOff>
        Next, lets see how these components can be combined together in a component tree topology.
      </SignOff>
    </>
  );
}
