import {
  RiAlignBottom,
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
};

export type SubMenuItem = {
  path: string;
  name: string;
  icon?: React.ElementType;
  disabled?: boolean;
  description?: string;
};

export type DemoItem = {
  path: string;
  name: string;
  icon?: React.ElementType;
  disabled?: boolean;
  description: string;
  signOffMessage?: string;
};

export const demos: DemoItem[] = [
  {
    name: "Features",
    path: "/demos/features",
    icon: RiCheckFill,
    description: "Core RSC features and capabilities",
    signOffMessage:
      "Next, let's explore the core features and capabilities of React Server Components!",
  },
  {
    name: "Kinds",
    path: "/demos/kinds",
    icon: RiCheckboxMultipleBlankFill,
    description: "The three types of components in RSC: Server, Client, and Shared",
    signOffMessage:
      "Let's go into detail about the differences between client and server components, and when to use them.",
  },
  {
    name: "Environments",
    path: "/demos/environment",
    icon: RiTableView,
    description: "Server and client environment differences",
    signOffMessage:
      "Let's look at the different environments where server and client components run.",
  },
  {
    name: "Boundaries",
    path: "/demos/boundaries",
    icon: RiStackLine,
    description: "How network boundaries work in the component tree",
    signOffMessage: "Next, let's explore how boundaries work between server and client components.",
  },
  {
    name: "Interweaving",
    path: "/demos/interweaving",
    icon: RiGitMergeLine,
    description: "Passing components between server and client boundaries",
    signOffMessage:
      "Let's see how we can construct component trees that contain React Server Components.",
  },
  {
    name: "Context",
    path: "/demos/context",
    icon: RiGlobalLine,
    description: "Passing context between server and client components",
    signOffMessage:
      "Next, let's find out how to share context between server and client components.",
  },
  {
    name: "Fetching",
    path: "/demos/fetching",
    icon: RiDownloadLine,
    description: "Data fetching patterns in RSC",
    signOffMessage: "Next, let's say yes to streaming data with React Server Components!",
  },
  {
    name: "Caching",
    path: "/demos/caching",
    icon: RiDatabaseLine,
    description: "Using React's cache function for memoization",
    signOffMessage: "Next, let's look at what Next.js can do with caching strategies.",
  },
  {
    name: "Suspense",
    path: "/demos/suspense",
    icon: RiHourglassLine,
    description: "Streaming RSCs using suspense boundaries",
    signOffMessage:
      "Let's see how much of an effect this can have when chaining multiple Suspense components.",
  },
  {
    name: "Waterfall",
    path: "/demos/waterfall",
    icon: RiAlignBottom,
    description: "Handling nested data-fetching components",
    signOffMessage: "Next, let's see how hydration works with these components!",
  },
  {
    name: "Hydration",
    path: "/demos/hydration",
    icon: RiWaterFlashLine,
    description: "How client components hydrate server-rendered HTML",
    signOffMessage: "Next, let's look at some new features of server components.",
  },
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
  // {
  //   name: "Next.js Magic",
  //   path: "/demos/nextjs",
  //   icon: RiNextjsLine,
  //   description: "Understanding component hoisting in RSC",
  //   disabled: true,
  // },
];

export const navigation = [
  {
    name: "Demos",
    path: "/demos",
    subMenu: demos.map(({ path, name, icon, disabled }) => ({
      path,
      name,
      icon,
      disabled,
    })),
  },
];
