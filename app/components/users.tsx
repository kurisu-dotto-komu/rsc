import clsx from "clsx";

import { UserType } from "#/db/sampleData";

import User, { UserProps } from "./user";

export default function Users({
  users,
  parentClassName = "flex flex-col gap-4",
  ...props
}: { users: UserType[]; parentClassName?: string } & Omit<UserProps, "user">) {
  return (
    <div className={clsx(parentClassName, props.compact && "gap-2")}>
      {users.map((user) => (
        <User key={user.id} {...props} user={user} />
      ))}
    </div>
  );
}
