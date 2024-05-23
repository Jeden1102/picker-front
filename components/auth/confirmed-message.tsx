import EmailSend from "../lottie/email-send";
export default function ConfirmationMessage() {
  return (
    <div className="p-4">
      <h2 className="font-semibold text-lg mb-4">
        Your email has been confirmed
      </h2>
      <EmailSend />
      <p className="text-lg font-light">
        Your are now able to login to your account
      </p>
    </div>
  );
}
