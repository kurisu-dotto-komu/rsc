import { getChartData } from "#/db/chartData";

export async function GET() {
  return Response.json(await getChartData());
}
