import { RiLoader4Line } from "react-icons/ri";

export default function Spinner() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <RiLoader4Line className="animate-spin text-6xl opacity-50" />
    </div>
  );
}
