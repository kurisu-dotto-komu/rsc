import Border from "#/components/border";

import ChildServer from "./childServer";

export default function ParentServer() {
  return (
    <Border>
      <div>Server Parent</div>
      <ChildServer />
    </Border>
  );
}
