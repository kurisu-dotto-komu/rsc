"use client";

import Border from "#/components/border";
import Counter from "#/components/counter";

import BoundarySharedGrandChild from "./boundarySharedGrandChild";

export default function BoundaryClient({ header }: { header: React.ReactNode }) {
  return (
    <Border client>
      {header}
      <p>
        This is a client component, doing client things <Counter />.
      </p>
      <p>
        All my imports must become client components, even if they don&apos;t have the{" "}
        <code>&quot;use client&quot;</code> directive.
      </p>
      <BoundarySharedGrandChild />
      <p>As above, I can import shared components, but I can&apos;t import server components.</p>
    </Border>
  );
}
