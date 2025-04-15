"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiArrowDownSLine } from "react-icons/ri";

import Container from "./container";
import { navigation } from "./navigation";
import { Route, SubMenuItem } from "./navigation";

function NavLink({
  route,
  isActive,
}: {
  route: Route;
  isActive: (route: string, subRoute?: string) => boolean;
}) {
  const activeSubMenu = route.subMenu?.find((subItem: SubMenuItem) =>
    isActive(route.path, subItem.path),
  );
  const displayRoute = activeSubMenu || route;

  return (
    <div key={displayRoute.path} className="group relative">
      <Link
        href={displayRoute.path}
        className={`inline-flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:text-gray-900 ${
          isActive(displayRoute.path) ? "bg-gray-100 text-black" : "text-gray-600"
        }`}
      >
        {displayRoute.icon && <displayRoute.icon className="mr-2" />}
        {displayRoute.name}
        {route.subMenu && <RiArrowDownSLine className="ml-1 text-xs opacity-80" />}
      </Link>

      {route.subMenu && <SubMenu subMenu={route.subMenu} isActive={isActive} />}
    </div>
  );
}

function SubMenu({
  subMenu,
  isActive,
}: {
  subMenu: SubMenuItem[];
  isActive: (route: string, subRoute?: string) => boolean;
}) {
  const getColorClass = (color?: string) => {
    if (!color) return "";
    const colorMap = {
      red: "text-red-600",
      green: "text-green-600",
      blue: "text-blue-600",
    };
    return colorMap[color as keyof typeof colorMap] || "";
  };

  return (
    <div className="invisible absolute right-0 z-20 mt-1 w-40 overflow-hidden rounded-md bg-white opacity-0 shadow-sm ring-1 ring-gray-100 transition-all duration-150 group-hover:visible group-hover:opacity-100">
      <div className="py-0.5" role="menu">
        {subMenu.map((subItem: SubMenuItem) => {
          const content = (
            <>
              {subItem.icon && (
                <subItem.icon
                  className={`mr-2 ${subItem.disabled ? "opacity-50" : ""} ${getColorClass(subItem.color)}`}
                />
              )}
              <span className={getColorClass(subItem.color)}>{subItem.name}</span>
            </>
          );

          if (subItem.disabled) {
            return (
              <div
                key={subItem.path}
                className="flex cursor-not-allowed items-center px-3 py-1.5 text-sm text-gray-400"
                role="menuitem"
              >
                {content}
              </div>
            );
          }

          return (
            <Link
              key={subItem.path}
              href={subItem.path}
              className={`flex items-center px-3 py-1.5 text-sm hover:bg-gray-50 ${
                isActive(subItem.path) ? "bg-gray-100" : ""
              }`}
              role="menuitem"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (route: string, subRoute?: string): boolean => {
    if (subRoute) {
      return pathname === subRoute;
    }
    if (route === "/") {
      return pathname === route;
    }
    return pathname.startsWith(route);
  };

  return (
    <nav className="shadow-sm">
      <Container>
        <div className="flex h-14 justify-between">
          <div className="flex items-center">
            <span>
              <Link href="/" className="text-lg font-semibold">
                RSC Demos
              </Link>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            {navigation.map((route) => (
              <NavLink key={route.path} route={route} isActive={isActive} />
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}
