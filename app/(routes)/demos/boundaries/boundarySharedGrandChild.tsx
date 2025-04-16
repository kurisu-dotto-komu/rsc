import Border from "#/components/border";

import BoundarySharedChild from "./boundarySharedChild";

export default function BoundarySharedGrandChild() {
  return (
    <Border name="BoundarySharedGrandChild">
      <p>As a shared component, my imports inherit my boundary.</p>
      <BoundarySharedChild />
    </Border>
  );
}
