import { Suspense } from "react";

import { getSampleData } from "#/db/sampleData";

import Border from "#/components/border";
import Spinner from "#/components/spinner";
import User from "#/components/user";
import Users from "#/components/users";

async function WaterfallServerAvatars() {
  const users = await getSampleData(6);
  return (
    <div className="mt-4 flex flex-wrap justify-between gap-2">
      {users.map((user) => (
        <User key={user.id} user={user} avatar compact />
      ))}
    </div>
  );
}

async function WaterfallServerFriends() {
  const friends = await getSampleData(2);
  return (
    <div className="-mx-2 mt-4">
      <Users
        users={friends}
        compact
        className="p-4"
        renderChildren={() => (
          <Suspense fallback={<Spinner />}>
            <WaterfallServerAvatars />
          </Suspense>
        )}
      />
    </div>
  );
}

export async function WaterfallServerUsers() {
  const users = await getSampleData(1);
  return (
    <Users
      users={users}
      renderChildren={() => (
        <Suspense fallback={<Spinner />}>
          <WaterfallServerFriends />
        </Suspense>
      )}
    />
  );
}

export default async function WaterfallServer() {
  return (
    <Border server name="WaterfallServer">
      <Suspense fallback={<Spinner />}>
        <WaterfallServerUsers />
      </Suspense>
    </Border>
  );
}
