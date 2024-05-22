import ConfirmedMessage from "@/components/auth/confirmed-message";
import { Card } from "@nextui-org/card";
import Link from "next/link";
export default async function EmailConfirmed() {
  return (
    <Card className="p-4">
      <ConfirmedMessage />
      <Link className="text-blue-500" href="/login">
        Log in
      </Link>
    </Card>
  );
}
