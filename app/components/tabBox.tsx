import React from "react";

import clsx from "clsx";

export type ColorType = "green" | "red" | "blue" | "gray" | "purple" | "pink";

interface TabProps {
  children: React.ReactNode;
  color?: ColorType;
  className?: string;
}

export function Tab({ children, color = "gray", className }: TabProps) {
  return (
    <div
      className={clsx(
        "rounded-t-md border-1 border-b-0 px-2 py-0.5 font-mono text-xs select-none",
        color === "green" && "border-green-300 bg-green-200 text-green-800",
        color === "red" && "border-red-300 bg-red-200 text-red-800",
        color === "blue" && "border-blue-300 bg-blue-200 text-blue-800",
        color === "gray" && "border-gray-300 bg-gray-200 text-gray-800",
        color === "purple" && "border-purple-300 bg-purple-200 text-purple-800",
        color === "pink" && "border-pink-300 bg-pink-200 text-pink-800",
        className,
      )}
    >
      {children}
    </div>
  );
}

export type TabItem = string | { text: string; color?: ColorType };

interface TabBoxProps {
  children: React.ReactNode;
  tabs: TabItem[];
  className?: string;
  color?: ColorType;
  dotted?: boolean;
  slim?: boolean;
}

export default function TabBox({
  children,
  tabs,
  className = "my-4",
  color = "gray",
  dotted = false,
  slim = false,
}: TabBoxProps) {
  const [firstTab, ...restTabs] = tabs;

  return (
    <div className={clsx(className)}>
      <div className="flex w-full items-center gap-1 overflow-hidden px-2">
        {/* First tab: shrink naturally, no overflow */}
        {firstTab && (
          <div className="flex-shrink-0">
            <Tab
              className="truncate"
              color={typeof firstTab === "string" ? color : firstTab.color || color}
            >
              {typeof firstTab === "string" ? firstTab : firstTab.text}
            </Tab>
          </div>
        )}

        {/* Spacer between first tab and the rest */}
        <div className="min-w-0 flex-1" />

        {/* Rest of the tabs: truncate if needed */}
        {restTabs.length > 0 && (
          <div className="flex flex-shrink-0 gap-1 overflow-hidden">
            {restTabs.map((tab, index) => (
              <div key={index}>
                <Tab color={typeof tab === "string" ? color : tab.color || color}>
                  {typeof tab === "string" ? tab : tab.text}
                </Tab>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className={clsx(
          "flex flex-col gap-2 rounded-lg border-2",
          !slim && "p-2",
          color === "green" && "border-green-200 bg-green-100",
          color === "red" && "border-red-200 bg-red-100",
          color === "blue" && "border-blue-200 bg-blue-100",
          color === "gray" && "border-gray-200 bg-gray-100",
          color === "purple" && "border-purple-200 bg-purple-100",
          color === "pink" && "border-pink-200 bg-pink-100",
          dotted && "border-2 border-dotted bg-white/40",
        )}
      >
        {children}
      </div>
    </div>
  );
}
