"use client";

import { ComponentType, useEffect, useState } from "react";

type SafeImportProps = {
  loader: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  errorFallback?: (error: Error) => React.ReactNode;
  props?: Record<string, any>;
};

export default function SafeImport({
  loader,
  fallback = <div>Loading component…</div>,
  errorFallback = (error) => (
    <div style={{ color: "red" }}>
      <strong>Import failed:</strong> {error.message}
    </div>
  ),
  props = {},
}: SafeImportProps) {
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loader()
      .then((mod) => {
        setComponent(() => mod.default);
      })
      .catch((err) => {
        console.error("SafeImport error:", err);
        setError(err);
      });
  }, [loader]);

  if (error) {
    return errorFallback(error);
  }

  if (!Component) {
    return fallback;
  }

  return <Component {...props} />;
}
