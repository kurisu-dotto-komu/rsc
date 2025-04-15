import { type NextRequest } from "next/server";

import { getSampleData } from "#/db/sampleData";

export const dynamic = "force-dynamic";

function castToNumberOrUndefined(value: string | null): number | undefined {
  if (value === null) return undefined;
  const number = Number(value);
  return isNaN(number) ? undefined : number;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const count = castToNumberOrUndefined(searchParams.get("count"));

  // you might think this is an unfair comparison.
  // but I want to emphasize the differences, and
  // it's impossible to really do this locally
  // so we are simulating a slow network ONLY for client API calls
  // yeah, i know, sorry. whatevs.
  // TODO might remove in prod, but lets see...
  await new Promise((resolve) => setTimeout(resolve, 500));
  // we alreayd have a 250ms delay in the getSampleData function
  // so this is just to make it more obvious
  return Response.json(await getSampleData(count));
}
