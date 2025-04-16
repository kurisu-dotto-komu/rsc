import Readable from "./readable";

export default function SignOff({ children }: { children: React.ReactNode }) {
  return (
    <Readable>
      <div className="mt-12 border-t border-gray-200 px-6 pt-4 text-center text-sm text-gray-800 italic">
        {children}
      </div>
    </Readable>
  );
}
