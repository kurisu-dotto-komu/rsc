import { RiQuestionLine } from "react-icons/ri";

export default function Info({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-100 p-4 text-slate-900">
      <div className="flex items-start gap-4">
        <RiQuestionLine className="mt-1 h-10 w-10 flex-shrink-0 text-slate-400" />
        <div className="text-slate-900">{children}</div>
      </div>
    </div>
  );
}
