import Border from "#/components/border";
import UsersAsync from "#/components/usersAsync";

export default async function AsyncServer() {
  return (
    <Border server name="Async Data">
      <UsersAsync />
    </Border>
  );
}
