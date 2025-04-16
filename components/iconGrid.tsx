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
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="flex flex-col items-center p-4 text-center">
            <Icon className="mb-2 h-8 w-8" />
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
