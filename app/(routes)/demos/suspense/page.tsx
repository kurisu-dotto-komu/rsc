import { Suspense } from "react";

import Border from "#/components/border";
import Spinner from "#/components/spinner";

import SlowList from "./slowList";

export const dynamic = "force-dynamic";

export default function SuspensePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-2xl font-bold">Suspense Demo</h1>
      <div className="mb-4">
        <p className="text-gray-600">
          This page demonstrates React Suspense with a slow-loading component. The list below will
          appear after a 3-second delay.
        </p>
        <p>Partial Pre-Rendering</p>
      </div>
      <Border server>
        <Suspense fallback={<Spinner />}>
          <SlowList />
        </Suspense>
      </Border>
    </div>
  );
}
