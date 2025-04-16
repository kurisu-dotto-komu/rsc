import Border from "#/components/border";

export default function HydrationShared() {
  return (
    <Border>Shared components will only hydrate if they are imported by a client component.</Border>
  );
}
