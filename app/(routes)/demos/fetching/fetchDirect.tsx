import { getSampleData } from "#/db/sampleData";

import Users from "#/components/users";

export default async function FetchDirect() {
  const users = await getSampleData();
  return <Users users={users} compact />;
}
