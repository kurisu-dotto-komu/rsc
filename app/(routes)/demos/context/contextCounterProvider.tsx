"use client";

import { ReactNode, createContext, useContext, useState } from "react";

import Border from "#/components/border";

interface ContextCounterContextType {
  count: number;
  setCount: (count: number) => void;
}

const ContextCounterContext = createContext<ContextCounterContextType | undefined>(undefined);

export function ContextCounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <Border client name="Context Provider">
      <ContextCounterContext.Provider value={{ count, setCount }}>
        {children}
      </ContextCounterContext.Provider>
    </Border>
  );
}

export function useCounter() {
  const context = useContext(ContextCounterContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a ContextCounterProvider");
  }
  return context;
}
