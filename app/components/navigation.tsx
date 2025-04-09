import {
  RiAppsLine,
  RiArrowUpLine,
  RiCheckFill,
  RiCodeLine,
  RiDatabaseLine,
  RiFlashlightLine,
  RiHourglassLine,
  RiLayoutGridLine,
  RiLockLine,
  RiUserSettingsLine,
  RiVoiceprintLine,
} from "react-icons/ri";

export interface Route {
  path: string;
  name: string;
  icon?: React.ElementType;
  subMenu?: SubMenuItem[];
}

export interface SubMenuItem {
  path: string;
  name: string;
  icon?: React.ElementType;
}

export const demos = [
  {
    name: "Features",
    path: "/demos/features",
    icon: RiCheckFill,
    description: "Core RSC features and capabilities",
  },
  {
    name: "Environment",
    path: "/demos/environment",
    icon: RiCodeLine,
    description: "Server and client environment differences",
  },
  {
    name: "Hoisting",
    path: "/demos/hoisting",
    icon: RiArrowUpLine,
    description: "Understanding component hoisting in RSC",
  },
  {
    name: "Nesting",
    path: "/demos/nesting",
    icon: RiLayoutGridLine,
    description: "Server and client component nesting patterns",
  },
  {
    name: "Suspense",
    path: "/demos/suspense",
    icon: RiHourglassLine,
    description: "Loading states and suspense boundaries",
  },
  {
    name: "Caching",
    path: "/demos/caching",
    icon: RiDatabaseLine,
    description: "Data fetching and caching strategies",
  },
  {
    name: "Sessions",
    path: "/demos/sessions",
    icon: RiUserSettingsLine,
    description: "User session management in RSC",
  },
  {
    name: "Streaming",
    path: "/demos/streaming",
    icon: RiVoiceprintLine,
    description: "Streaming data to the client",
  },
  {
    name: "Security",
    path: "/demos/security",
    icon: RiLockLine,
    description: "Security best practices and considerations",
  },
  {
    name: "Realtime",
    path: "/demos/realtime",
    icon: RiFlashlightLine,
    description: "Real-time updates and streaming",
  },
];

export const navigation = [
  // { name: "Home", path: "/", icon: RiHomeLine },
  {
    name: "Demos",
    path: "/demos",
    icon: RiAppsLine,
    subMenu: demos,
  },
];
