import Border from "#/components/border";
import UsersAsync from "#/components/usersAsync";

export default async function BoundaryServerAsync() {
  return (
    <Border server name="BoundaryServerAsync">
      <UsersAsync />
    </Border>
  );
}
