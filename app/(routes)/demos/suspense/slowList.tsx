import { User, getSampleData } from "#/db/sampleData";

import Border from "#/components/border";

// Force dynamic rendering and disable caching

export default async function SlowList() {
  // Add an artificial delay of 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Fetch the sample data
  const users = await getSampleData(10);

  return (
    <Border server name="SlowList">
      <div className="rounded-lg border p-4 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">User List (Loaded after 3 seconds)</h2>
        <ul className="space-y-2">
          {users.map((user: User) => (
            <li key={user.id} className="rounded-md border p-3 hover:bg-gray-50">
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-gray-600">{user.email}</div>
              <div className="mt-1 text-xs text-gray-500">
                {user.role} in {user.department} • Joined {user.joinDate.toLocaleDateString()}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Border>
  );
}
