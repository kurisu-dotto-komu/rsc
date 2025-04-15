import clsx from "clsx";

export function Tab({
  children,
  color = "gray",
  className,
}: {
  children: React.ReactNode;
  color?: "green" | "red" | "blue" | "gray" | "purple";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-t-md border-1 border-b-0 px-2 py-0.5 font-mono text-xs select-none",
        color === "green" && "border-green-300 bg-green-200 text-green-800",
        color === "red" && "border-red-300 bg-red-200 text-red-800",
        color === "blue" && "border-blue-300 bg-blue-200 text-blue-800",
        color === "gray" && "border-gray-300 bg-gray-200 text-gray-800",
        color === "purple" && "border-purple-300 bg-purple-200 text-purple-800",
        className,
      )}
    >
      {children}
    </div>
  );
}
