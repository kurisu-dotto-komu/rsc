"use client";

import { useEffect, useRef, useState } from "react";

import Border from "#/components/border";

import BarChart from "./barChart";

export default function BarChartClient() {
  const [data, setData] = useState<{ key: string; value: number }[] | undefined>();
  // prevent fetching data multiple times (dev mode)
  const fetchingRef = useRef(false);

  useEffect(() => {
    if (fetchingRef.current) return;
    fetchingRef.current = true;

    const fetchData = async () => {
      try {
        const res = await fetch("/api/chartData");
        const newData = await res.json();
        setData(newData);
      } catch (error) {
        console.error("Error fetching bar chart data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Border client>
      <BarChart data={data} />
    </Border>
  );
}
