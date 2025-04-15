import { RiLoader4Line } from "react-icons/ri";

export default function Spinner() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <RiLoader4Line className="m-4 animate-spin text-3xl opacity-50" />
    </div>
  );
}
