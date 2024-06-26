"use server";
import { z } from "zod";

export async function sendForgotPasswordEmail(prevState: any, formData: any) {
  const STRAPI_URL = process.env.STRAPI_URL;
  if (!STRAPI_URL) throw new Error("Missing STRAPI_URL environment variable.");
  const url = `${STRAPI_URL}/api/auth/forgot-password`;

  const formSchema = z.object({
    email: z.string().email("Enter a valid email.").trim(),
  });

  const validatedFields = formSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      error: true,
      message: "Please verify your data.",
      inputErrors: validatedFields.error.flatten().fieldErrors,
      code: prevState.code,
    };
  }

  const { email } = validatedFields.data;

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

    return { message: "Email has been send succesfully!", success: true };
  } catch (error) {
    return { error: "Server error please try again later." };
  }
}
