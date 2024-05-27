import { Card } from "@nextui-org/card";
import ResetPasswordForm from "@/components/auth/reset-password";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    code?: string;
  };
};
export default function ResetPasswordPage({ searchParams }: Props) {
  return (
    <div>
      <Card className="p-2">
        {!searchParams.code && (
          <p>
            Invalid URL provided. Try to request a password reset once again.
          </p>
        )}
        {searchParams.code && <ResetPasswordForm code={searchParams.code} />}
      </Card>
    </div>
  );
}
