import clsx from "clsx";
import Image from "next/image";

import type { UserType } from "#/db/sampleData";

// Reusable component for user info fields
const InfoField = ({ label, value }: { label: string; value: string | Date }) => {
  return (
    <div className="flex min-w-0 flex-col text-sm text-gray-600 sm:flex-row sm:items-center">
      <span className="flex-shrink-0 font-medium sm:w-16">{label}:</span>
      <span className="flex-1 truncate">
        {value instanceof Date ? value.toLocaleDateString() : value}
      </span>
    </div>
  );
};

// Avatar component with popover
const Avatar = ({ user, size = "md" }: { user: UserType; size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  return (
    <div className="group relative inline-block">
      <div
        className={clsx(
          "relative flex-shrink-0 overflow-hidden rounded-full bg-gray-200",
          sizeClasses[size],
        )}
      >
        <Image src={user.avatar} alt={`${user.name}'s avatar`} fill className="object-cover" />
      </div>
      <div className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-xs text-white group-hover:block">
        {user.name}
      </div>
    </div>
  );
};

export type UserProps = {
  user: UserType;
  children?: React.ReactNode;
  compact?: boolean;
  avatar?: boolean;
  className?: string;
  renderUser?: (user: UserType, compact: boolean) => React.ReactNode;
  renderChildren?: (user: UserType) => React.ReactNode;
};

export default function User({
  user,
  children,
  compact = false,
  avatar = false,
  className,
  renderUser,
  renderChildren,
}: UserProps) {
  if (avatar) {
    return <Avatar user={user} size={compact ? "sm" : "md"} />;
  }

  // If a custom renderer is provided, use it
  if (renderUser) {
    return (
      <div
        className={clsx(
          "not-prose h-full w-full rounded-lg border border-gray-200 bg-white shadow-sm",
          compact ? "p-2" : "p-4 sm:p-6",
          className,
        )}
      >
        {renderUser(user, compact)}
        {renderChildren ? renderChildren(user) : children}
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "not-prose h-full w-full rounded-lg border border-gray-200 bg-white shadow-sm",
        compact ? "p-2" : "p-4 sm:p-6",
        className,
      )}
    >
      <div className="flex flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
        <div
          className={clsx(
            "relative flex-shrink-0 overflow-hidden rounded-full bg-gray-200",
            compact ? "h-12 w-12" : "h-16 w-16",
          )}
        >
          <Image src={user.avatar} alt={`${user.name}'s avatar`} fill className="object-cover" />
        </div>
        <div className="text-center sm:text-left">
          <h3 className={clsx("font-semibold text-gray-900", compact ? "text-base" : "text-lg")}>
            {user.name}
          </h3>
          <p className="text-sm text-gray-600">{user.title}</p>
        </div>
      </div>

      {!compact && (
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
          <InfoField label="Email" value={user.email} />
          <InfoField label="Area" value={user.jobArea} />
          <InfoField label="Role" value={user.jobDescriptor} />
          <InfoField label="Joined" value={user.joinDate} />
        </div>
      )}
      {renderChildren ? renderChildren(user) : children}
    </div>
  );
}
