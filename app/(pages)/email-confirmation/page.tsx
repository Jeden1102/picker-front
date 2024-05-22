import { title } from "@/components/primitives";
import ConfirmationMessage from "@/components/auth/confirmation-message";
export default async function EmailConfirmation() {
  return (
    <div>
      <h1 className={title()}>
        <ConfirmationMessage />
      </h1>
    </div>
  );
}
