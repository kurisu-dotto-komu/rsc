import { Suspense } from "react";

import { getSampleData } from "#/db/sampleData";

import Border from "#/components/border";
import Spinner from "#/components/spinner";
import Users from "#/components/users";

export async function UserList() {
  const users = await getSampleData(3);
  return <Users users={users} compact />;
}

export default async function SuspenseDemo() {
  return (
    <Border server name="SuspenseDemo">
      <Suspense fallback={<Spinner />}>
        <UserList />
      </Suspense>
    </Border>
  );
}
