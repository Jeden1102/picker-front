"use server";

import { cookies } from "next/headers";

export async function sendEmailConfirmation(email: string) {
  const STRAPI_URL = process.env.STRAPI_URL;
  if (!STRAPI_URL) throw new Error("Missing STRAPI_URL environment variable.");
  const url = `${STRAPI_URL}/api/auth/send-email-confirmation`;

  if (email === "") {
    email = cookies().get("created-email")?.value ?? "";
  }

  try {
    const response: any = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
      cache: "no-cache",
    });

    const data = await response.json();

    return { message: "Email has been send succesfully!" };
  } catch (error) {
    console.log(error);
    return { error: "Server error please try again later." };
  }
}
