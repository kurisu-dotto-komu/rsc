"use client";

import Border from "#/components/border";

import FancyClient from "./fancyClient";

export default function NestableClient({
  children,
  header,
}: {
  children?: React.ReactNode;
  header?: React.ReactNode;
}) {
  return (
    <Border client name="NestableClient">
      {!!header && (
        <div className="border-2 border-dotted border-gray-500">
          <div className="pb-4 text-sm">nestableClient header</div>
          {header}
        </div>
      )}
      <FancyClient />
      {children}
    </Border>
  );
}
