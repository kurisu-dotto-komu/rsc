import Info from "#/components/info";
import Notebook from "#/components/notebook";
import SignOff from "#/components/signOff";

import EnvironmentClient from "./environmentClient";
import EnvironmentServer from "./environmentServer";

export default function EnvironmentPage() {
  return (
    <Notebook>
      <Info>
        Because server components run in a node.js environment, while client components run in the
        browser, they have access to different APIs and properties.
      </Info>
      <div className="not-prose grid grid-cols-2 gap-2">
        <EnvironmentServer />
        <EnvironmentClient />
      </div>
      <SignOff>
        Next, lets see how these components can be combined together in a component tree topology.
      </SignOff>
    </Notebook>
  );
}
