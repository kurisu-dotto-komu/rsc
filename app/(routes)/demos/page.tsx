import { demos } from "#/components/navigation";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {demos.map((demo) => (
        <Link key={demo.path} href={demo.path} className="btn">
          <div className="flex items-center gap-4 py-2">
            <demo.icon className="text-4xl" />
            <div>
              <div className="text-lg font-bold">{demo.name}</div>
              <div className="text-sm opacity-70">{demo.description}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
