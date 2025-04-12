import {
  RiAppsLine,
  RiCheckFill,
  RiCheckboxMultipleBlankFill,
  RiDatabaseLine,
  RiFlashlightLine,
  RiFunctions,
  RiGitBranchLine,
  RiGitMergeLine,
  RiHourglassLine,
  RiLockLine,
  RiNextjsLine,
  RiPictureInPictureLine,
  RiStackLine,
  RiTableView,
  RiUserSettingsLine,
  RiVoiceprintLine,
  RiWaterFlashLine,
} from "react-icons/ri";

export type Route = {
  path: string;
  name: string;
  icon?: React.ElementType;
  subMenu?: SubMenuItem[];
};

export type SubMenuItem = {
  path: string;
  name: string;
  icon?: React.ElementType;
};

export const demos = [
  {
    name: "Features",
    path: "/demos/features",
    icon: RiCheckFill,
    description: "Core RSC features and capabilities",
  },
  {
    name: "Kinds",
    path: "/demos/kinds",
    icon: RiCheckboxMultipleBlankFill,
    description: "The types of components in RSC",
  },
  {
    name: "Environments",
    path: "/demos/environment",
    icon: RiTableView,
    description: "Server and client environment differences",
  },
  {
    name: "Topology",
    path: "/demos/topology",
    icon: RiGitMergeLine,
    description: "Constructing component trees",
  },
  // {
  //   name: "Boundaries",
  //   path: "/demos/boundaries",
  //   icon: RiStackLine,
  //   description: "Server and client environment differences",
  // },
  // { // TODO -- what is this usePathname in nextjs, etc.
  //   name: "Hoisting",
  //   path: "/demos/hoisting",
  //   icon: RiArrowUpLine,
  //   description: "Understanding component hoisting in RSC",
  // },
  // {
  //   name: "Nesting",
  //   path: "/demos/nesting",
  //   icon: RiPictureInPictureLine,
  //   description: "Server and client component nesting patterns",
  // },
  {
    name: "Hydration",
    path: "/demos/hydration",
    icon: RiWaterFlashLine,
    description: "Hydration and client components",
  },
  {
    name: "Suspense",
    path: "/demos/suspense",
    icon: RiHourglassLine,
    description: "Loading states and suspense boundaries",
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
    name: "Realtime",
    path: "/demos/realtime",
    icon: RiFlashlightLine,
    description: "Real-time updates and streaming",
  },
  {
    name: "Server Functions",
    path: "#",
    icon: RiFunctions,
    description: "Server functions in RSC",
  },
  // {
  //   name: "Next.js Magic",
  //   path: "/demos/hoisting",
  //   icon: RiNextjsLine,
  //   description: "Understanding component hoisting in RSC",
  // },
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
