import { getSampleData } from "#/db/sampleData";

import Users from "#/components/users";

export default async function UsersAsync({
  count = 2,
  className = "grid grid-cols-1 grid-cols-2 gap-4",
  compact = true,
}: {
  count?: number;
  className?: string;
  compact?: boolean;
}) {
  const users = await getSampleData(count);
  return <Users users={users} compact={compact} parentClassName={className} />;
}
