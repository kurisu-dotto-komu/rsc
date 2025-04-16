import { getSampleData } from "#/db/sampleData";

import Border from "#/components/border";
import Users from "#/components/users";

export default async function NoCacheReactServer() {
  const users = await getSampleData(3);
  return (
    <Border server name="NoCacheReactServer">
      <Users users={users} compact />
    </Border>
  );
}
