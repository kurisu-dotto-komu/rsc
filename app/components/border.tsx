export default function Border({
  children,
  client,
}: {
  children: React.ReactNode;
  client?: boolean;
}) {
  let color = "border-red-300 bg-red-50";
  let label = "server";
  let labelColor = "bg-red-300 text-red-700";

  const isClient = typeof window !== "undefined";

  if (client) {
    if (isClient) {
      color = "border-blue-300 bg-blue-50";
      label = "client";
      labelColor = "bg-blue-300 text-blue-700";
    } else {
      color = "border-purple-300 bg-purple-50";
      label = `serverside "use client"`;
      labelColor = "bg-purple-300 text-purple-700";
    }
  }

  return (
    <div className={`border-3 ${color} relative rounded-md p-4`}>
      {label && (
        <div
          className={`absolute top-0 right-0 select-none ${labelColor} rounded-bl-md px-2 py-1 text-xs font-medium uppercase`}
        >
          {label}
        </div>
      )}
      {children}
    </div>
  );
}
