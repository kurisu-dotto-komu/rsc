"use client";

import { useState } from "react";

import Border from "#/components/border";

import Shared from "./shared";

export default function SharedClient() {
  const [showing, setShowing] = useState(false);
  return (
    <Border client name="SharedClient">
      <div>
        <button className="btn btn-primary" onClick={() => setShowing(!showing)}>
          {showing ? "Hide" : "Show"}
        </button>
      </div>
      {showing && (
        <div className="mt-10">
          <Shared />
        </div>
      )}
    </Border>
  );
}
