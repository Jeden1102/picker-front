import { title } from "@/components/primitives";
import ConfirmedMessage from "@/components/auth/confirmed-message";
export default async function EmailConfirmed() {
  return (
    <div>
      <h1 className={title()}>
        <ConfirmedMessage />
      </h1>
    </div>
  );
}
