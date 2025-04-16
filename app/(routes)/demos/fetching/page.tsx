import Code from "#/components/code";
import Highlight from "#/components/highlight";
import Info from "#/components/info";
import Markdown from "#/components/markdown";
import Readable from "#/components/readable";
import SignOff from "#/components/signOff";

import FetchAPI from "./fetchAPI";
import FetchDirect from "./fetchDirect";

export const dynamic = "force-dynamic";

export default async function FetchingPage() {
  return (
    <>
      <Readable>
        <Info>
          React Server Components should fetch directly from function on the server. Instead of
          calling interal APIs, call data-getter functions directly.
        </Info>
        <p>
          Both of the following RSCs fetch the same data, and they both (sort of) work, but{" "}
          <Highlight>
            it is an anti-pattern to use an internal API to fetch data in an RSC
          </Highlight>
          .
        </p>
        <div className="grid grid-cols-2 gap-4">
          <FetchDirect />
          <FetchAPI />
        </div>
      </Readable>

      <div className="grid grid-cols-2 gap-4">
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
          color="red"
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

- No network request, so less latency and resources used
- More secure because you don't need to expose an API
- TypeScript types will be included
- Easier to reason about
- Easier to maintain
- Easier to debug
- Easier to test

And that's not to mention that your local API server won't be running during the build step, so you don't get the benefits of SSG. **Just say "no" to using an internal API to fetch data in an RSC.**
        `}</Markdown>
      </Readable>
      <SignOff>But lets say yes to streaming data !</SignOff>
    </>
  );
}
