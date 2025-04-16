import Border from "#/components/border";

import InterweavingServerAsync from "./interWeavingServerAsync";
import InterweavingClient from "./interweavingClient";
import InterweavingShared from "./interweavingShared";

export default function InterweavingServer() {
  return (
    <Border server name="InterweavingServer" readable>
      <p>I am a server component</p>
      <InterweavingServerAsync />
      <InterweavingShared />
      <p>
        We can pass Server Components &quot;through&quot; child Client Components without creating a
        network boundary:
      </p>
      <InterweavingClient>
        <InterweavingShared />
        <InterweavingServerAsync />
      </InterweavingClient>
      <p>A more complex example, passing a Server Component as a prop and deeply nesting:</p>
      <InterweavingClient header={<InterweavingServerAsync />}>
        <InterweavingShared />
        <InterweavingClient name="InterweavingClient (Nested)">
          <InterweavingServerAsync />
        </InterweavingClient>
      </InterweavingClient>
    </Border>
  );
}
