"use client";

import { usePathname } from "next/navigation";

import { demos } from "#/components/navigation";
import SignOff from "#/components/signOff";

import DemosFooterNav from "./demosFooterNav";

export default function DemosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Find the current demo based on the pathname
  const currentDemo = demos.find((demo) => demo.path === pathname);

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex flex-grow flex-col">
        <div className="flex flex-col gap-8">
          {/* sup */}
          {children}
        </div>
      </div>
      {currentDemo && !currentDemo.disabled && currentDemo.signOffMessage && (
        <SignOff>{currentDemo.signOffMessage}</SignOff>
      )}
      <DemosFooterNav currentPath={pathname} />
    </div>
  );
}
