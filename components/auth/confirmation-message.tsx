"use client";
import { Card } from "@nextui-org/card";
import Lottie from "lottie-react";
import animationData from "@/public/lottie/email-success.json";
export default function ConfirmationMessage() {
  return (
    <Card className="p-4">
      <h2 className="font-semibold text-lg mb-4">
        Confirmation email has been send.
      </h2>
      <Lottie
        style={{ height: 150 }}
        animationData={animationData}
        autoplay
        loop
      />
      <p className="text-lg font-light">
        An confimation email has beeen send to your email account. Please check
        your SPAM folder to make sure our email dont get lost.
      </p>
    </Card>
  );
}
