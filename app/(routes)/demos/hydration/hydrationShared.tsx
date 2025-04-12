import Border from "#/components/border";

export default function HydrationShared() {
  return (
    <Border name="HydrationShared">
      When imported and rendered in a server environment, shared components don&apos;t need to
      hydrate. If they are imported by a <code>use client</code> component, they will behave like a
      client component, and will need to hydrate.
    </Border>
  );
}
