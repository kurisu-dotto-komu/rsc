export default function Notebook({ children }: { children: React.ReactNode }) {
  return <div className="prose col flex max-w-full flex-col gap-8 pb-10">{children}</div>;
}
