"use client";

import { useEffect, useState } from "react";

import dynamic from "next/dynamic";

import Border from "#/components/border";

import ClientOnly from "./clientOnly";
import HydrationError from "./hydrationError";

export function HydrationErrorUseEffectFix() {
  // this "???" cannot be the date, as it will cause a hydration error
  const [theTime, setTheTime] = useState<string>("???");

  useEffect(() => {
    setTheTime(new Date().toLocaleTimeString());
  }, []);

  return (
    <Border client name="HydrationErrorUseEffectFix">
      The time is {theTime}
    </Border>
  );
}

export function HydrationErrorClientOnlyFix() {
  return (
    <Border client name="HydrationErrorClientOnlyFix">
      <ClientOnly>
        <HydrationError />
      </ClientOnly>
    </Border>
  );
}

export const DynamicFix = dynamic(() => import("./hydrationError"), { ssr: false });

export function HydrationErrorDynamicImportFix() {
  return (
    <Border client name="HydrationErrorDynamicImportFix">
      <DynamicFix />
    </Border>
  );
}
