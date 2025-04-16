"use client";

// import fs from "fs/promises";
import { useEffect } from "react";
import { useState } from "react";

import Border from "#/components/border";
import Spinner from "#/components/spinner";

import EnvironmentValues from "./environmentValues";

export default function EnvironmentClient({ filterNextJs }: { filterNextJs?: boolean }) {
  // prevent hydration errors
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Border client>
      {!mounted && <Spinner />}
      {mounted && <EnvironmentValues filterNextJs={filterNextJs} />}
    </Border>
  );
}
