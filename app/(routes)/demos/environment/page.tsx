import EnvironmentClient from "./environmentClient";
import EnvironmentServer from "./environmentServer";

export default function EnvironmentPage(props: unknown) {
  // console.log(props);
  return (
    <div className="grid grid-cols-2 gap-2">
      <EnvironmentServer />
      <EnvironmentClient />
    </div>
  );
}
