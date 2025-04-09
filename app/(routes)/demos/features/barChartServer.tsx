import { getChartData } from "#/db/chartData";

import Border from "#/components/border";

import BarChart from "./barChart";

export default async function BarChartServer() {
  const data = await getChartData();
  return (
    <Border>
      <BarChart data={data} />
    </Border>
  );
}
