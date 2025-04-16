import { IconType } from "react-icons";

interface IconGridItem {
  icon: IconType;
  title: string;
  description: string;
}

interface IconGridProps {
  items: IconGridItem[];
}

export default function IconGrid({ items }: IconGridProps) {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-2 sm:grid-cols-4 lg:grid-cols-4">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="group flex flex-col items-center rounded-lg border border-gray-200 px-2 py-4 text-center shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50"
          >
            <Icon className="mb-4 h-10 w-10 text-gray-600 transition-colors duration-300 group-hover:text-blue-600" />
            <h3 className="mb-2 font-semibold text-gray-800 transition-colors duration-300 group-hover:text-blue-700">
              {item.title}
            </h3>
            <p className="px-2 text-sm text-gray-600 transition-colors duration-300 group-hover:text-blue-600">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
