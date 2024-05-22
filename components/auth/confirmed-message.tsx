"use client";
import { Card } from "@nextui-org/card";
import Lottie from "lottie-react";
import animationData from "@/public/lottie/email-success.json";
export default function ConfirmationMessage() {
  return (
    <div className="p-4">
      <h2 className="font-semibold text-lg mb-4">
        Your email has been confirmed
      </h2>
      <Lottie
        style={{ height: 150 }}
        animationData={animationData}
        autoplay
        loop
      />
      <p className="text-lg font-light">
        Your are now able to login to your account
      </p>
    </div>
  );
}
