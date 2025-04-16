import Link from "next/link";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { demos } from "#/components/navigation";

type DemosFooterNavProps = {
  currentPath: string;
};

export default function DemosFooterNav({ currentPath }: DemosFooterNavProps) {
  const currentIndex = demos.findIndex((demo) => demo.path === currentPath);

  if (currentIndex === -1) {
    return null;
  }

  // Find the next non-disabled demo
  const nextDemo = demos.slice(currentIndex + 1).find((demo) => !demo.disabled) || null;

  // Find the previous non-disabled demo
  const prevDemo =
    demos
      .slice(0, currentIndex)
      .reverse()
      .find((demo) => !demo.disabled) || null;

  return (
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
  );
}
