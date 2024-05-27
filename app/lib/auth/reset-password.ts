"use server";
import { z } from "zod";

export async function resetPassword(prevState: any, formData: any) {
  const STRAPI_URL = process.env.STRAPI_URL;
  const url = `${STRAPI_URL}/api/auth/send-email-confirmation`;
  if (!STRAPI_URL) throw new Error("Missing STRAPI_URL environment variable.");

  const formSchema = z.object({
    password: z.string().min(6).max(30).trim(),
    passwordConfirmation: z.string().min(6).max(30).trim(),
  });

  const validatedFields = formSchema.safeParse({
    password: formData.get("password"),
    passwordConfirmation: formData.get("passwordConfirmation"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Login.",
    };
  }

  const { password, passwordConfirmation } = validatedFields.data;

  try {
    const response: any = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        passwordConfirmation,
        code: prevState.code,
      }),
      cache: "no-cache",
    });

    const data = await response.json();

    return { message: "Password reset succesfully!" };
  } catch (error) {
    console.log(error);
    return { error: "Server error please try again later." };
  }
}
