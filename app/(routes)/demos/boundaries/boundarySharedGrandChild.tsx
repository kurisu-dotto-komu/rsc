import Border from "#/components/border";

import BoundarySharedChild from "./boundarySharedChild";

export default function BoundarySharedGrandChild() {
  return (
    <Border>
      <p>As a shared component, my imports inherit my boundary.</p>
      <BoundarySharedChild />
    </Border>
  );
}
