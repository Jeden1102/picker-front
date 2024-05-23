"use client";

import { Card } from "@nextui-org/card";
import EmailSend from "../lottie/email-send";
import { Button } from "@nextui-org/button";
import { sendEmailConfirmation } from "@/app/lib/auth/email-confirmation";
import { useState } from "react";

export default function ConfirmationMessage() {
  const [isResend, setIsResend] = useState(false);
  const [isResendError, setIsResendError] = useState(false);
  const handleEmailResend = async () => {
    try {
      await sendEmailConfirmation("");
      setIsResend(true);
    } catch {
      setIsResendError(true);
      setIsResend(true);
    }
  };

  return (
    <Card className="p-4">
      <h2 className="font-semibold text-lg mb-4">
        Confirmation email has been send.
      </h2>
      <EmailSend />
      <p className="text-lg font-light">
        An confimation email has beeen send to your email account. Please check
        your SPAM folder to make sure our email dont get lost.
      </p>
      <p>Cant find our message?</p>
      <Button
        disabled={isResend}
        color={isResendError ? "danger" : "primary"}
        onClick={() => handleEmailResend()}
        className="w-fit mx-auto mt-2"
      >
        {isResend
          ? "Message has been resend"
          : isResendError
          ? "There was an error sending the message"
          : "Send"}
      </Button>
    </Card>
  );
}
