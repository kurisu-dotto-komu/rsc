import { Suspense } from "react";

import Border from "#/components/border";
import Code from "#/components/code";
import Highlight from "#/components/highlight";
import Info from "#/components/info";
import Markdown from "#/components/markdown";
import Readable from "#/components/readable";
import Spinner from "#/components/spinner";
import TabBox from "#/components/tabBox";

import FetchAPI from "./fetchAPI";
import FetchDirect from "./fetchDirect";

export const dynamic = "force-dynamic";

export default async function FetchingPage() {
  return (
    <>
      <Readable>
        <Info>
          React Server Components should fetch directly from functions on the server when possible.
          Instead of calling interal APIs, call data-getter functions directly.
        </Info>
        <p>
          Both of the following RSCs fetch the same data, and they both (sort of) work, but{" "}
          <Highlight>
            it is an anti-pattern to use an <b>internal</b> API to fetch data in an RSC
          </Highlight>
          . Of course, if the API is <b>external</b>, have at it!
        </p>
        <div className="grid grid-cols-2 gap-4">
          <TabBox color="green" tabs={["Fetch Directly"]}>
            <Border server>
              <FetchDirect />
            </Border>
          </TabBox>
          <TabBox color="purple" tabs={["Fetch Internal API"]}>
            <Border server>
              {/* We haven't looked at suspense yet, but we need it here */}
              <Suspense fallback={<Spinner />}>
                <FetchAPI />
              </Suspense>
            </Border>
          </TabBox>
        </div>
      </Readable>

      <div className="grid gap-4 sm:grid-cols-2">
        <Code
          color="green"
          tabs={["Fetching Directly", "Good! 👍"]}
          code={`
// do this
export async function FetchDirect() {
  const users = await getSampleData();
  return <Users users={users} />;
}

// or even
export async function FetchSQL() {
  const query = 'SELECT * FROM users';
  const users = await db.query(query);
  return <Users users={users} />;
}
`}
        />
        <Code
          color="purple"
          tabs={["Fetching from internal API", "Bad! 👎"]}
          code={`
// don't do this            
export async function FetchAPI() {
  // this API implements getSampleData()
  const url = process.env.APP_URL + "/api/sampleData";
  const response = await fetch(url);
  const users = (await response.json()) as UserType[];
  return <Users users={users} />;
}
`}
        />
      </div>
      <Readable>
        <Markdown>{`
This may feel strange coming from the client-side world, but the benefits are clear:

- Faster as there is no network request
- More secure as you don't need to expose an API
- Improved DX as it is just like importing a module
- TypeScript types will be included
- Easier to test / maintain / debug

And that's not to mention that your local API server won't be running during the build step, so you don't get the benefits of SSG. **Just say "no" to using an internal API to fetch data in an RSC.**
        `}</Markdown>
      </Readable>
    </>
  );
}
