import Border from "#/components/border";

import EnvironmentValues from "./environmentValues";

export default async function EnvironmentServer({ filterNextJs }: { filterNextJs?: boolean }) {
  return (
    <Border server name="EnvironmentServer">
      <EnvironmentValues filterNextJs={filterNextJs} />
    </Border>
  );
}
