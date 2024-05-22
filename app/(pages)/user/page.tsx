import { title } from "@/components/primitives";
import { useUser } from "../../lib/auth/user-user";
export default async function UserPage() {
  const user = await useUser();
  console.log(user);
  return (
    <div>
      <h1 className={title()}>User {user.email}</h1>
    </div>
  );
}
