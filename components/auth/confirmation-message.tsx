import { Card } from "@nextui-org/card";
export default function ConfirmationMessage() {
  return (
    <Card className="p-4">
      <h2 className="font-bold text-lg mb-4">
        Confirmation email has been send.
      </h2>
      <p className="text-lg font-light">
        An confimation email has beeen send to your email account. Please check
        your SPAM folder to make sure our email dont get lost.
      </p>
    </Card>
  );
}
