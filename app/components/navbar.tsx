"use client";

import { useEffect, useRef, useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const activeSubMenu = route.subMenu?.find((subItem: SubMenuItem) =>
    isActive(route.path, subItem.path),
  );
  const isOnSubmenu = activeSubMenu !== undefined;

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (route.subMenu && isOnSubmenu) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div key={route.path} className="group relative" ref={menuRef}>
      <div className="flex items-center space-x-2">
        {/* Root button - always visible */}
        <Link
          href={route.path}
          className={`inline-flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:text-gray-900 ${
            isActive(route.path) && !isOnSubmenu ? "bg-gray-100 text-black" : "text-gray-600"
          }`}
        >
          {route.icon && <route.icon className="mr-2" />}
          {route.name}
        </Link>

        {/* Submenu button - only visible when on submenu route */}
        {isOnSubmenu && activeSubMenu && route.subMenu && (
          <div className="group/submenu relative">
            <Link
              href={activeSubMenu.path}
              onClick={handleClick}
              className={`inline-flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:text-gray-900 ${
                isActive(activeSubMenu.path) ? "bg-gray-100 text-black" : "text-gray-600"
              }`}
            >
              {activeSubMenu.icon && <activeSubMenu.icon className="mr-2" />}
              {activeSubMenu.name}
              <RiArrowDownSLine className="ml-1 text-xs opacity-80" />
            </Link>

            <SubMenu subMenu={route.subMenu} isActive={isActive} isOpen={isOpen} />
          </div>
        )}
      </div>
    </div>
  );
}

function SubMenu({
  subMenu,
  isActive,
  isOpen,
}: {
  subMenu: SubMenuItem[];
  isActive: (route: string, subRoute?: string) => boolean;
  isOpen: boolean;
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
    <div
      className={`absolute top-full right-0 z-20 mt-1 w-40 overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-150 md:invisible md:opacity-0 md:group-hover/submenu:visible md:group-hover/submenu:opacity-100 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
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
                ⚛ RSC Demos
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
