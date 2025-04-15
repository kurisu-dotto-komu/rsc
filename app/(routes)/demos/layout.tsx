"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { demos } from "#/components/navigation";

export default function DemosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const currentIndex = demos.findIndex((demo) => demo.path === pathname);

  // Find the next non-disabled demo
  const nextDemo = demos.slice(currentIndex + 1).find((demo) => !demo.disabled) || null;

  // Find the previous non-disabled demo
  const prevDemo =
    demos
      .slice(0, currentIndex)
      .reverse()
      .find((demo) => !demo.disabled) || null;

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex flex-grow flex-col">
        <div className="flex flex-col gap-8">{children}</div>
      </div>
      <div className="mt-8 flex items-center justify-between">
        {prevDemo ? (
          <Link href={prevDemo.path} className="btn">
            <RiArrowLeftSLine className="text-sm opacity-80" />
            {prevDemo.name}
            {prevDemo.icon && <prevDemo.icon className="text-lg" />}
          </Link>
        ) : (
          <div />
        )}
        {nextDemo ? (
          <Link href={nextDemo.path} className="btn">
            {nextDemo.icon && <nextDemo.icon className="text-lg" />}
            {nextDemo.name}
            <RiArrowRightSLine className="text-sm opacity-80" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
