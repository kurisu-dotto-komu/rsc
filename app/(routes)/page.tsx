import Link from "next/link";
import { RiArrowRightSLine, RiGithubFill } from "react-icons/ri";

export default function HomePage() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-6 rounded-lg border border-gray-200 bg-gray-100 p-10 text-center">
        <h1 className="text-4xl font-bold">React Server Components</h1>
        <p className="text-xl text-gray-600">A journey into the wonderful world of RSC</p>
        <Link href="/demos/features" className="btn btn-primary">
          Let&apos;s get started
          <RiArrowRightSLine className="text-sm opacity-80" />
        </Link>
      </div>
      <div className="mt-10">
        <Link className="btn" href="https://github.com/kurisu-dotto-komu/rsc" target="_blank">
          <RiGithubFill />
          Github Repo
        </Link>
      </div>
    </div>
  );
}
