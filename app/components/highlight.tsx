import React from "react";

interface HighlightProps {
  children: React.ReactNode;
}

export default function Highlight({ children }: HighlightProps) {
  return <span className="highlight">{children}</span>;
}
