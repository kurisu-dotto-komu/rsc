"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";

import Border from "#/components/border";

// can we use context?

export default function HoistingPage() {
  const [state, setState] = useState("Click to change state");
  const pathname = usePathname();

  // if (typeof window === "undefined") {
  //   console.log("Yo, we're on the server");
  // } else {
  //   console.log("Yo, we 're on the client");
  // }
  // const

  return (
    <div>
      <h1>Hoisting</h1>

      <Border client>
        <div className="flex flex-col gap-4">
          <div>
            {`Rendering on `}
            {typeof window === "undefined" ? "Server" : "Client"}
          </div>
          <div>{pathname}</div>
          <div>
            <button className="btn btn-primary" onClick={() => setState(`changed + ${Date.now()}`)}>
              {state}
            </button>
          </div>
        </div>
      </Border>
    </div>
  );
}

/*

useContext()	⚠️ Depends	Can work if the context is shared properly, but tricky across server/client boundary


*/
