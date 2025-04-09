export default function Json({ data }: { data: any }) {
  return (
    <pre className="rounded-md border-2 border-black/10 bg-white/80 p-4">
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  );
}
