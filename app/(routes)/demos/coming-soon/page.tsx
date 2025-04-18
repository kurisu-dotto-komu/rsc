import { RiTimeLine } from "react-icons/ri";

import Container from "#/components/container";
import Info from "#/components/info";

export default function ComingSoonPage() {
  return (
    <Container>
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <RiTimeLine className="mb-4 h-16 w-16 text-gray-400" />
        <h1 className="mb-4 text-3xl font-bold">Coming Soon</h1>
        <Info>This feature is currently under development. Check back later for updates!</Info>
      </div>
    </Container>
  );
}
