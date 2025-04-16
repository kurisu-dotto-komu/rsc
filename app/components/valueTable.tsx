import { clsx } from "clsx";

import ScrollRight from "./scrollRight";

export type ValueTableItem = {
  name: React.ReactNode;
  value: React.ReactNode;
  highlight?: boolean;
  masked?: boolean;
};

export default function ValueTable({ values }: { values: ValueTableItem[] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-gray-300 bg-white/10">
      <table className="min-w-full divide-y divide-gray-300">
        <tbody className="divide-y divide-gray-300">
          {values.map((item, index) => {
            // Handle masked values - show first 5 chars unblurred, rest blurred
            const renderValue = () => {
              if (item.value === undefined) return "-";

              if (item.masked && typeof item.value === "string") {
                const visiblePart = item.value.substring(0, 5);
                const blurredPart = item.value.substring(5);

                return (
                  <>
                    <span>{visiblePart}</span>
                    {blurredPart && <span className="blur-[0.5em]">{blurredPart}</span>}
                  </>
                );
              }

              return item.value;
            };

            return (
              <tr
                key={index}
                className={clsx("hover:bg-white/40", item.highlight && "bg-yellow-100/30")}
              >
                <td className="relative w-[20ch] max-w-[20ch] bg-black/5 font-mono text-xs font-bold">
                  <ScrollRight>
                    <div className="inline-block min-w-full p-3 text-right">{item.name}</div>
                  </ScrollRight>
                </td>
                <td
                  className={clsx(
                    "p-3 font-mono text-sm whitespace-nowrap",
                    item.highlight && "font-bold text-yellow-600",
                  )}
                >
                  {renderValue()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
