"use client";

import Border from "#/components/border";
import Counter from "#/components/counter";
import TabBox from "#/components/tabBox";

import InterweavingShared from "./interweavingShared";

export default function InterweavingClient({
  children,
  header,
  name = "InterweavingClient",
}: {
  children?: React.ReactNode;
  header?: React.ReactNode;
  name?: string;
}) {
  return (
    <Border client name={name} readable>
      <p>
        I am client component with a <code>&quot;use client&quot;</code> directive. I can do client
        things: <Counter />
      </p>
      {header && (
        <TabBox dotted tabs={["Prop"]}>
          {header}
        </TabBox>
      )}
      <TabBox dotted tabs={["Import"]}>
        <InterweavingShared />
      </TabBox>
      <TabBox dotted tabs={["Children"]}>
        <div className="flex flex-col gap-4">{children}</div>
      </TabBox>
    </Border>
  );
}
