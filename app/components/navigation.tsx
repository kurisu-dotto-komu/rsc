import {
  RiAlignBottom,
  RiAppsLine,
  RiCheckFill,
  RiCheckboxMultipleBlankFill,
  RiDatabaseLine,
  RiDownloadLine,
  RiFlashlightLine,
  RiFunctions,
  RiGitMergeLine,
  RiGlobalLine,
  RiHourglassLine,
  RiLockLine,
  RiNextjsLine,
  RiPictureInPictureLine,
  RiStackLine,
  RiTableView,
  RiUserSettingsLine,
  RiWaterFlashLine,
} from "react-icons/ri";

export type Route = {
  path: string;
  name: string;
  icon?: React.ElementType;
  subMenu?: SubMenuItem[];
  disabled?: boolean;
  description?: string;
  color?: "red" | "green" | "blue";
};

export type SubMenuItem = {
  path: string;
  name: string;
  icon?: React.ElementType;
  disabled?: boolean;
  color?: "red" | "green" | "blue";
  description?: string;
};

export type DemoItem = {
  path: string;
  name: string;
  icon?: React.ElementType;
  disabled?: boolean;
  color?: "red" | "green" | "blue";
  description: string;
  signOffMessage?: string;
};

export const demos: DemoItem[] = [
  {
    name: "Features",
    path: "/demos/features",
    icon: RiCheckFill,
    description: "Core RSC features and capabilities",
    color: "blue",
    signOffMessage: "Now let&apos;s explore the different kinds of components in RSC!",
  },
  {
    name: "Kinds",
    path: "/demos/kinds",
    icon: RiCheckboxMultipleBlankFill,
    description: "The types of components in RSC",
    color: "green",
    signOffMessage:
      "Now let&apos;s go into more detail about the differences between client and server components, and when to use them.",
  },
  {
    name: "Environments",
    path: "/demos/environment",
    icon: RiTableView,
    description: "Server and client environment differences",
    color: "green",
    signOffMessage:
      "Next, let&apos;s see how these components can be combined together in a component tree topology.",
  },
  {
    name: "Boundaries",
    path: "/demos/boundaries",
    icon: RiStackLine,
    description: "Server and client environment differences",
    color: "green",
    signOffMessage: "So, how do we overcome boundaries?",
  },
  {
    name: "Interweaving",
    path: "/demos/interweaving",
    icon: RiGitMergeLine,
    description: "Constructing component trees that contain RSCs",
    color: "green",
    signOffMessage: "Now let&apos;s see how we can share state between components using Context!",
  },
  // {
  //   name: "Topology",
  //   path: "/demos/topology",
  //   icon: RiGitMergeLine,
  //   description: "Constructing component trees that contain RSCs",
  //   color: "red",
  // },
  // {
  //   name: "Nesting",
  //   path: "/demos/nesting",
  //   icon: RiPictureInPictureLine,
  //   description: "Server and client component nesting patterns",
  //   color: "red",
  // },
  {
    name: "Context",
    path: "/demos/context",
    icon: RiGlobalLine,
    description: "Passing context between components",
    color: "green",
    signOffMessage: "One way might be to check the user session! Let&apos;s find out how...",
  },
  {
    name: "Fetching",
    path: "/demos/fetching",
    icon: RiDownloadLine,
    description: "Data fetching in RSC",
    color: "green",
    signOffMessage: "But let&apos;s say yes to streaming data!",
  },
  {
    name: "Caching",
    path: "/demos/caching",
    icon: RiDatabaseLine,
    description: "Data fetching and caching strategies",
    color: "green",
    signOffMessage: "Now let&apos;s look at what nextjs can do.",
  },
  {
    name: "Suspense",
    path: "/demos/suspense",
    icon: RiHourglassLine,
    description: "Streaming RSCs using suspense boundaries",
    color: "green",
    signOffMessage:
      "Next, let&apos;s see how much of an effect this can have when chaining multiple Suspense components.",
  },
  {
    name: "Waterfall",
    path: "/demos/waterfall",
    icon: RiAlignBottom,
    description: "Waterfall rendering",
    color: "green",
    signOffMessage: "Now let&apos;s see how hydration works with these components!",
  },
  {
    name: "Hydration",
    path: "/demos/hydration",
    icon: RiWaterFlashLine,
    description: "Hydration and client components",
    color: "green",
    signOffMessage: "Next, let&apos;s look at some new features of server components.",
  },
  // {
  //   name: "Hoisting",
  //   path: "/demos/hoisting",
  //   icon: RiArrowUpLine,
  //   description: "Understanding component hoisting in RSC",
  //   // disabled: true,
  // },
  // {
  //   name: "Streaming",
  //   path: "/demos/streaming",
  //   icon: RiVoiceprintLine,
  //   description: "Streaming data to the client",
  //   disabled: true,
  // },
  {
    name: "Security",
    path: "/demos/security",
    icon: RiLockLine,
    description: "Security best practices and considerations",
    disabled: true,
  },
  {
    name: "Sessions",
    path: "/demos/sessions",
    icon: RiUserSettingsLine,
    description: "User session management in RSC",
    disabled: true,
  },
  {
    name: "Realtime",
    path: "/demos/realtime",
    icon: RiFlashlightLine,
    description: "Real-time updates and streaming",
    disabled: true,
  },
  {
    name: "Functions",
    path: "/demos/functions",
    icon: RiFunctions,
    description: "Server Functions",
    disabled: true,
  },
  {
    name: "Next.js Magic",
    path: "/demos/nextjs",
    icon: RiNextjsLine,
    description: "Understanding component hoisting in RSC",
    disabled: true,
  },
];

export const navigation = [
  // { name: "Home", path: "/", icon: RiHomeLine },
  {
    name: "Demos",
    path: "/demos",
    // icon: RiAppsLine,
    subMenu: demos.map(({ path, name, icon, disabled, color }) => ({
      path,
      name,
      icon,
      disabled,
      color,
    })),
  },
];
