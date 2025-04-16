"use client";

import Border from "#/components/border";
import Counter from "#/components/counter";
import TabBox from "#/components/tabBox";

import InterweavingShared from "./interweavingShared";

export default function InterweavingClient({
  children,
  header,
  name,
}: {
  children?: React.ReactNode;
  header?: React.ReactNode;
  name?: string;
}) {
  return (
    <Border client name={name} readable>
      <p>
        I can do client things: <Counter />
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
