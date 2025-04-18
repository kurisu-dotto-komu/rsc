import Code from "#/components/code";
import Info from "#/components/info";
import Markdown from "#/components/markdown";
import Readable from "#/components/readable";
import SignOff from "#/components/signOff";
import TabBox from "#/components/tabBox";

import CacheReactServer from "./cacheReactServer";
import NoCacheReactServer from "./noCacheReactServer";

export default function CachingPage() {
  return (
    <>
      <Readable>
        <Info>
          Next.js has its own caching system that handles caching at the route and fetch level. This
          page focuses on React&apos;s built-in Server Component level caching.
        </Info>

        <Markdown>{`
React Server Components can use the \`cache\` function to memoize expensive computations or data fetching operations. This is similar to \`useMemo\` on the client side, but it works on the server and persists between components that use the same cached function. 

The \`cache\` function returns a cached result instead of re-executing the computation. This mechanism is particularly useful for:

- Server Components that appear many times in the tree
- Expensive database queries
- Complex calculations
- API calls that return the same data for the same parameters

Note that the cache persists when rendering components during the same server request, but it is invalidated upon a new server request.
      `}</Markdown>

        <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TabBox color="purple" tabs={["RSCs without Cache"]}>
            <div>Notice that each time the component is rendered, the data is fetched again.</div>
            <div className="grid grid-cols-2 gap-4">
              <NoCacheReactServer />
              <NoCacheReactServer />
            </div>
          </TabBox>
          <TabBox color="green" tabs={["RSCs with Cache"]}>
            <div>
              Notice that each time the component is rendered, the data stays the same (from a
              cache).
            </div>
            <div className="grid grid-cols-2 gap-4">
              <CacheReactServer />
              <CacheReactServer />
            </div>
          </TabBox>
        </div>
      </Readable>
      <div className="grid gap-4 sm:grid-cols-2">
        <Code
          color="purple"
          tabs={["RSC Without Cache"]}
          code={`
/*
This is wasteful as the database will be 
called each time the component is rendered.
*/

async function DemoProfile() {
  const user = await db.user.query(userId);
  return <Profile user={user} />;
}
        `}
        />
        <Code
          color="green"
          tabs={["RSC With Cache"]}
          code={`
import { cache } from 'react';

// userId serves as a cache key
const getUser = cache(async (userId) => {
  return await db.user.query(userId);
});

async function DemoProfile() {
  const user = await getUser('demo-id');
  return <Profile user={user} />;
}
        `}
        />
      </div>
    </>
  );
}
