import ReactMarkdown from "react-markdown";

export default function Markdown({ children }: { children: string }) {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
}
