// AI Slop
import Link from "next/link";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RiAlertLine, RiCloseLine, RiExternalLinkLine } from "react-icons/ri";

import Markdown from "#/components/markdown";
import Table, { Column } from "#/components/table";

/**
 * Indicator types for the comparison table
 * - true: Feature is supported (green checkmark)
 * - false: Feature is not supported (red X)
 * - "warning": Feature has special considerations (orange triangle)
 * - Can be extended with more types in the future
 */
export type IndicatorType = boolean | "warning";

/**
 * Data structure for a comparison table row
 */
export type ComparisonData = {
  task: string;
  serverComponent: IndicatorType;
  clientComponent: IndicatorType;
  shared: IndicatorType;
  isLink?: boolean;
  linkUrl?: string;
};

/**
 * Component for rendering different indicator icons based on the value
 */
const IndicatorIcon = ({ type }: { type: IndicatorType }) => {
  switch (type) {
    case true:
      return <IoCheckmarkCircle size={28} />;
    case false:
      return <RiCloseLine size={24} />;
    case "warning":
      return <RiAlertLine size={24} />;
    default:
      return <RiCloseLine size={24} />;
  }
};

/**
 * Component for rendering a cell with an indicator icon
 */
const IconCell = ({ value }: { value: IndicatorType }) => {
  const getColorClass = (value: IndicatorType): string => {
    switch (value) {
      case true:
        return "text-green-500";
      case false:
        return "text-gray-400";
      case "warning":
        return "text-orange-500";
      default:
        return "text-gray-400";
    }
  };

  return (
    <span className={`inline-flex align-middle text-base ${getColorClass(value)}`}>
      <IndicatorIcon type={value} />
    </span>
  );
};

/**
 * Component for rendering a task cell with optional link
 */
const TaskCell = ({
  task,
  isLink,
  linkUrl,
}: {
  task: string;
  isLink?: boolean;
  linkUrl?: string;
}) => {
  if (isLink && linkUrl) {
    return (
      <a
        href={linkUrl}
        rel="noopener noreferrer nofollow"
        target="_blank"
        className="inline-flex items-center text-base hover:underline"
      >
        <Markdown>{task}</Markdown>
        <span className="ml-1">
          <RiExternalLinkLine size={20} />
        </span>
      </a>
    );
  }

  return (
    <div className="text-base">
      <Markdown>{task}</Markdown>
    </div>
  );
};

/**
 * Sample data for the comparison table
 * In a real application, this would likely come from a separate data file or API
 */
const comparisonData: ComparisonData[] = [
  {
    task: "Fetch data",
    serverComponent: true,
    clientComponent: false,
    shared: false,
  },
  {
    task: "Access backend resources (directly)",
    serverComponent: true,
    clientComponent: false,
    shared: false,
  },
  {
    task: "Keep sensitive information on the server (access tokens, API keys, etc)",
    serverComponent: true,
    clientComponent: false,
    shared: false,
  },
  {
    task: "Keep large dependencies on the server / Reduce client-side JavaScript",
    serverComponent: true,
    clientComponent: false,
    shared: "warning",
  },
  {
    task: "Share common 'dumb' component code that can be rendered in browser and node.js",
    serverComponent: false,
    clientComponent: false,
    shared: true,
  },
  {
    task: "Add interactivity and event listeners (`onClick()`, `onChange()`, etc)",
    serverComponent: false,
    clientComponent: true,
    shared: false,
  },
  {
    task: "Use State and Lifecycle Effects (`useState()`, `useReducer()`, `useEffect()`, etc)",
    serverComponent: false,
    clientComponent: true,
    shared: false,
  },
  {
    task: "Use browser-only APIs",
    serverComponent: false,
    clientComponent: true,
    shared: false,
  },
  {
    task: "Use custom hooks that depend on state, effects, or browser-only APIs",
    serverComponent: false,
    clientComponent: true,
    shared: false,
  },
  {
    task: "Handle edge cases where rendering on server is inefficient.",
    serverComponent: false,
    clientComponent: true,
    shared: false,
  },
];

/**
 * Column configuration for the comparison table
 */
const getColumns = (): Column<ComparisonData>[] => [
  {
    header: (
      <div className="flex items-center gap-4">
        <span>What do you need to do?</span>
        <Link
          className="text-sm text-gray-500 no-underline hover:text-gray-700"
          href="https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns"
          target="_blank"
          rel="noopener noreferrer"
        >
          Table Source
        </Link>
      </div>
    ),
    accessor: (item: ComparisonData) => (
      <TaskCell task={item.task} isLink={item.isLink} linkUrl={item.linkUrl} />
    ),
    align: "left",
  },
  {
    header: "Server",
    accessor: (item: ComparisonData) => <IconCell value={item.serverComponent} />,
    align: "center",
  },
  {
    header: "Shared",
    accessor: (item: ComparisonData) => <IconCell value={item.shared} />,
    align: "center",
  },
  {
    header: "Client",
    accessor: (item: ComparisonData) => <IconCell value={item.clientComponent} />,
    align: "center",
  },
];

/**
 * Comparison table component that displays the capabilities of different component types
 */
export default function KindComparisonTable() {
  const columns = getColumns();

  return (
    <Table
      data={comparisonData}
      columns={columns}
      headerClassName="bg-gray-50 whitespace-nowrap text-lg font-medium px-6 py-3"
      rowClassName="border-t border-gray-100 hover:bg-gray-50"
      className="overflow-hidden rounded-lg border border-gray-200 shadow-sm"
      cellClassName="px-6 py-3"
    />
  );
}
