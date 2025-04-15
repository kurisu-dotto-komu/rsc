import { UserType } from "#/db/sampleData";

import Users from "#/components/users";

export default async function FetchAPI() {
  try {
    const url = process.env.NEXT_PUBLIC_APP_URL + "/api/sampleData";
    const response = await fetch(url);
    const users = (await response.json()) as UserType[];
    return <Users users={users} compact />;
  } catch (error) {
    console.error(error);
    return <div>Error fetching data</div>;
  }
}
