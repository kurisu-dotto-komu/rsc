import Border from "#/components/border";

export default function HydrationShared() {
  return (
    <Border name="HydrationShared">
      Shared components will only hydrate if they are imported by a client component.
    </Border>
  );
}
