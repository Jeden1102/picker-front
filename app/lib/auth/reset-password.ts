"use server";
import { z } from "zod";

export async function resetPassword(prevState: any, formData: any) {
  const STRAPI_URL = process.env.STRAPI_URL;
  const url = `${STRAPI_URL}/api/auth/reset-password`;
  if (!STRAPI_URL) throw new Error("Missing STRAPI_URL environment variable.");

  const formSchema = z
    .object({
      password: z.string().min(6).max(30).trim(),
      passwordConfirmation: z.string().min(6).max(30).trim(),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      message: "Passwords don't match",
      path: ["confirm"],
    });

  const validatedFields = formSchema.safeParse({
    password: formData.get("password"),
    passwordConfirmation: formData.get("passwordConfirmation"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "There was an error resettig your password.",
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

    return { message: "Password reset succesfully!", success: true };
  } catch (error) {
    console.log(error);
    return { error: "Server error please try again later." };
  }
}
