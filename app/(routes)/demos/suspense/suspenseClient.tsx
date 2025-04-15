"use client";

import { UserType } from "#/db/sampleData";

import Border from "#/components/border";
import ClientFetch from "#/components/clientFetch";
import Users from "#/components/users";

export default function FetchWithUseEffect() {
  return (
    <Border client name="FetchWithUseEffect">
      <ClientFetch<UserType[]>
        url="/api/sampleData?count=3"
        renderChild={(users) => <Users users={users} compact />}
      />
    </Border>
  );
}
