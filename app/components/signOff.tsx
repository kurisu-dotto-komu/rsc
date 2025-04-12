export default function SignOff({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-t border-gray-200 pt-4 text-center text-sm text-gray-800 italic">
      {children}
    </div>
  );
}
