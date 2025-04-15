"use client";

import { UserType } from "#/db/sampleData";

import Border from "#/components/border";
import ClientFetch from "#/components/clientFetch";
import User from "#/components/user";
import Users from "#/components/users";

function WaterfallClientAvatars() {
  return (
    <ClientFetch<UserType[]>
      url="/api/sampleData?count=6"
      renderChild={(users) => (
        <div className="mt-4 flex flex-wrap justify-between gap-2">
          {users.map((user) => (
            <User key={user.id} user={user} avatar compact />
          ))}
        </div>
      )}
    />
  );
}

function WaterfallClientFriends() {
  return (
    <ClientFetch<UserType[]>
      url="/api/sampleData?count=2"
      renderChild={(friends) => (
        <div className="-mx-2 mt-4">
          <Users
            users={friends}
            compact
            className="p-4"
            renderChildren={() => <WaterfallClientAvatars />}
          />
        </div>
      )}
    />
  );
}

export default function WaterfallClient() {
  return (
    <Border client name="WaterfallClient">
      <ClientFetch<UserType[]>
        url="/api/sampleData?count=1"
        renderChild={(users) => (
          <Users users={users} renderChildren={() => <WaterfallClientFriends />} />
        )}
      />
    </Border>
  );
}

// TODO another version with suspense...
