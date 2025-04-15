"use client";

import { useEffect, useRef, useState } from "react";

import Spinner from "#/components/spinner";

interface ClientFetchProps<T> {
  url: string;
  renderChild: (data: T) => React.ReactNode;
}

export default function ClientFetch<T>({ url, renderChild }: ClientFetchProps<T>) {
  const [data, setData] = useState<T | undefined>();
  // prevent fetching data multiple times (in dev mode)
  const fetchingRef = useRef(false);

  useEffect(() => {
    if (fetchingRef.current) return;
    fetchingRef.current = true;

    const fetchData = async () => {
      try {
        const res = await fetch(url, { cache: "no-store" });
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  if (!data) {
    return <Spinner />;
  }

  return <>{renderChild(data)}</>;
}
