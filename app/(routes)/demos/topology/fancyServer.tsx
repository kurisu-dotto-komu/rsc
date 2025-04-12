import { getSampleData } from "#/db/sampleData";

import Border from "#/components/border";

export default async function FancyServer() {
  const data = await getSampleData();
  return (
    <Border server name="FancyServer">
      <div className="flex items-center gap-2 p-2 text-red-800">
        <div className="font-bold">DB Data: </div>
        <div>{data.map((user) => user.name).join(", ")}</div>
      </div>
    </Border>
  );
}
