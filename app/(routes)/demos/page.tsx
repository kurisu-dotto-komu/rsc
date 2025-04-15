import Link from "next/link";

import { demos } from "#/components/navigation";

export default function Home() {
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
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {demos.map((demo) => {
        const content = (
          <div className="flex items-center gap-4 py-2">
            {demo.icon && (
              <demo.icon
                className={`text-4xl ${demo.disabled ? "opacity-50" : ""} ${getColorClass(demo.color)}`}
              />
            )}
            <div>
              <div className={`text-lg font-bold ${getColorClass(demo.color)}`}>{demo.name}</div>
              <div className="text-sm opacity-70">{demo.description}</div>
            </div>
          </div>
        );

        if (demo.disabled) {
          return (
            <div key={demo.path} className="btn cursor-not-allowed opacity-50">
              {content}
            </div>
          );
        }

        return (
          <Link key={demo.path} href={demo.path} className="btn">
            {content}
          </Link>
        );
      })}
    </div>
  );
}
