import Info from "#/components/info";
import Readable from "#/components/readable";
import SignOff from "#/components/signOff";

import CookieButton from "./cookieButton";
import EnvironmentClient from "./environmentClient";
import EnvironmentServer from "./environmentServer";

export default function EnvironmentPage() {
  return (
    <>
      <Readable>
        <Info>
          Because server components run in a node.js environment, while client components run in the
          browser, they have access to different APIs and properties.
        </Info>
      </Readable>
      <h2 className="text-center text-2xl font-bold">React Environment Values</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <EnvironmentServer />
        <EnvironmentClient />
      </div>
      <h2 id="nextjs" className="text-center text-2xl font-bold">
        Next.JS / Vercel Specific Environment Values
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <EnvironmentServer filterNextJs />
        <EnvironmentClient filterNextJs />
      </div>
      <Readable>
        <p>
          Remember, Shared Components will inherit whichever environment they are imported into, but
          this shouldn&apos;t really make a difference if they are written to be environment
          agnostic, as they should be.
        </p>
      </Readable>
      <CookieButton />
    </>
  );
}
