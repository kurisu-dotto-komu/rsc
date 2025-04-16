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
  const currentIndex = demos.findIndex((demo) => demo.path === pathname);

  // Find the next non-disabled demo
  const nextDemo = demos.slice(currentIndex + 1).find((demo) => !demo.disabled);

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex flex-grow flex-col">
        <div className="flex flex-col gap-8">
          {/* sup */}
          {children}
        </div>
      </div>
      {nextDemo && nextDemo.signOffMessage && <SignOff>{nextDemo.signOffMessage}</SignOff>}
      <DemosFooterNav currentPath={pathname} />
    </div>
  );
}
