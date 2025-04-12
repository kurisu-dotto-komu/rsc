"use client";

import { ComponentType, Suspense, useState } from "react";

import dynamic from "next/dynamic";

type ImportClientProps<T extends Record<string, any> = Record<string, any>> = {
  importFn: () => Promise<{ default: ComponentType<T> }>;
  fallback?: React.ReactNode;
  errorFallback?: (error: Error) => React.ReactNode;
  props?: T;
};

/**
 * A component that dynamically imports a component with { ssr: false } and handles errors
 *
 * @example
 * ```tsx
 * <ImportClient
 *   importFn={() => import('./MyComponent')}
 *   props={{ someProp: 'value' }}
 * />
 * ```
 */
export default function ImportClient<T extends Record<string, any> = Record<string, any>>({
  importFn,
  fallback = <div>Loading component…</div>,
  errorFallback = (error) => (
    <div style={{ color: "red" }}>
      <strong>Import failed:</strong> {error.message}
    </div>
  ),
  props = {} as T,
}: ImportClientProps<T>) {
  const [error, setError] = useState<Error | null>(null);

  // Create a dynamic component with SSR disabled
  const DynamicComponent = dynamic(
    () => {
      return importFn().catch((err) => {
        console.error("ImportClient error:", err);
        setError(err);
        // Return a dummy component that will be replaced by the error fallback
        return { default: () => null };
      });
    },
    {
      ssr: false,
      loading: () => fallback,
    },
  );

  if (error) {
    return errorFallback(error);
  }

  return (
    <Suspense fallback={fallback}>
      <DynamicComponent {...props} />
    </Suspense>
  );
}
