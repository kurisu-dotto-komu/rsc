import AsyncServer from "#/components/asyncServer";
import Border from "#/components/border";

import InterweavingClient from "./interweavingClient";
import InterweavingShared from "./interweavingShared";

export default function InterweavingServer() {
  return (
    <Border server readable>
      <p>I am a server component</p>
      <AsyncServer />
      <InterweavingShared />
      <p>
        We can pass Server Components &quot;through&quot; child Client Components without creating a
        network boundary:
      </p>
      <InterweavingClient>
        <InterweavingShared />
        <AsyncServer />
      </InterweavingClient>
      <p>A more complex example, passing a Server Component as a prop and deeply nesting:</p>
      <InterweavingClient header={<AsyncServer />}>
        <InterweavingShared />
        <InterweavingClient name="Nested Client">
          <AsyncServer />
        </InterweavingClient>
      </InterweavingClient>
    </Border>
  );
}
