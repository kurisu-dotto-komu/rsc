export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Response.json({ message: "Hello, this is a delayed response!" });
}
