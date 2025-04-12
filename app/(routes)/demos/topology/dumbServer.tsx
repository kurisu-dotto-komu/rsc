import Border from "#/components/border";

export default async function DumbServer() {
  const isOnClient = typeof document !== "undefined";
  return (
    <Border server name="DumbServer">
      Yo. I&apos;m a dumb <span className="font-bold text-red-800">async server</span> component.
      I&apos;m being rendered{" "}
      <span className={`font-bold ${isOnClient ? "text-blue-800" : "text-red-800"}`}>
        {isOnClient ? "on the client" : "on the server"}.
      </span>
      <p>
        The secret is <b>{process.env.MY_SECRET}</b>.
      </p>
    </Border>
  );
}
