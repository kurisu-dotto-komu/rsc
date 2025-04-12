"use client";

import { useState } from "react";

import Border from "#/components/border";

import DumbServer from "./dumbServer";
import FancyClient from "./fancyClient";
import FancyServer from "./fancyServer";

export default function ImportFromClient() {
  const [showComponents, setShowComponents] = useState(false);

  return (
    <Border client>
      <div>
        <button onClick={() => setShowComponents(!showComponents)} className="btn btn-primary">
          {showComponents ? "Hide Components" : "Show Components"}
        </button>
      </div>

      {showComponents && (
        <>
          <div>
            I&apos;m a client, here I am importing a server component:
            <DumbServer />
          </div>
          <div>
            Here I am importing a client component:
            <FancyClient />
          </div>
          <div>
            Failing to import an async server component:
            {/* <FancyServer /> */}
          </div>
        </>
      )}
    </Border>
  );
}
