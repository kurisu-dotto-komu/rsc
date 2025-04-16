import { cache } from "react";

import { getSampleData } from "#/db/sampleData";

import Border from "#/components/border";
import Users from "#/components/users";

const getUsers = cache(async () => {
  return getSampleData(3);
});

export default async function CacheReactServer() {
  const users = await getUsers();
  return (
    <Border server name="CacheReactServer">
      <Users users={users} compact />
    </Border>
  );
}
