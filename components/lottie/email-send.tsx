"use client";
import Lottie from "lottie-react";
import animationData from "@/public/lottie/email-success.json";

function EmailSend() {
  return (
    <Lottie
      style={{ height: 150 }}
      animationData={animationData}
      autoplay
      loop
    />
  );
}

export default EmailSend;
