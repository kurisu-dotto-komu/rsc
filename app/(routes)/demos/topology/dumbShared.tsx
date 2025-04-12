import Border from "#/components/border";

export default function DumbShared() {
  const isOnClient = typeof document !== "undefined";
  return (
    <Border name="DumbShared">
      Yo. I&apos;m a dumb <span className="font-bold text-green-800">shared</span> component.
      I&apos;m being rendered{" "}
      <span className={`font-bold ${isOnClient ? "text-blue-800" : "text-red-800"}`}>
        {isOnClient ? "on the client" : "on the server"}.
      </span>
    </Border>
  );
}
