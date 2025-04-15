import Code from "#/components/code";
import Info from "#/components/info";
import Markdown from "#/components/markdown";
import Readable from "#/components/readable";
import SignOff from "#/components/signOff";
import { Tab } from "#/components/tab";

import CacheReactServer from "./cacheReactServer";
import NoCacheReactServer from "./noCacheReactServer";

export default function CachingPage() {
  return (
    <>
      <Readable>
        <Info>
          Next.js has it&apos;s own caching system that handles caching at the route and fetch
          level. This page focuses on React&apos;s built-in Server Component level caching.
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

        <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
          <div>
            <div className="mx-2 flex justify-start">
              <Tab color="purple">RSCs without Cache</Tab>
            </div>
            <div className="flex flex-col gap-4 rounded-md border border-purple-500 bg-purple-50 p-4">
              <NoCacheReactServer />
              <NoCacheReactServer />
            </div>
          </div>
          <div>
            <div className="mx-2 flex justify-start">
              <Tab color="green">RSCs with Cache</Tab>
            </div>
            <div className="flex flex-col gap-4 rounded-md border border-green-500 bg-green-50 p-4">
              <CacheReactServer />
              <CacheReactServer />
            </div>
          </div>
        </div>
      </Readable>
      <div className="grid gap-4 sm:grid-cols-2">
        <Code
          label="RSC Without Cache"
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
          label="RSC With Cache"
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
      <SignOff>Now lets look at what nextjs can do.</SignOff>
    </>
  );
}
