const fields = [
  { name: "Window", key: "hasWindow" },
  { name: "Location", key: "hrefLocation" },
  { name: "User Agent", key: "userAgent" },
  { name: "process.env.MY_SECRET", key: "secret" },
  { name: "process.cwd()", key: "cwd" },
  { name: "__dirname", key: "__dirname" },
  { name: "Used Effect", key: "usedEffect" },
  { name: "import.meta.url", key: "importMetaUrl" },
  { name: "Import JSON", key: "jsonImport" },
  { name: "Import JSON Async", key: "jsonImportAsync" },
  { name: "FS Read JSON", key: "jsonRead" },
] as const;

type FieldKey = (typeof fields)[number]["key"];

export default function Properties({ data }: { data: { [K in FieldKey]: unknown } }) {
  return (
    <div className="overflow-x-auto rounded-md border border-gray-200 bg-white/10">
      <table className="divide-y divide-gray-200">
        <tbody className="divide-y divide-gray-200">
          {fields.map((field) => (
            <tr key={field.key} className="hover:bg-white/40">
              <td className="p-3 text-sm font-bold whitespace-nowrap">{field.name}</td>
              <td className="p-3 font-mono text-sm whitespace-nowrap">
                {typeof data[field.key] === "undefined" ? "-" : JSON.stringify(data[field.key])}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
