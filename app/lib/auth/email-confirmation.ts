"use server";

export async function sendEmailConfirmation(email: string) {
  const STRAPI_URL = process.env.STRAPI_URL;
  if (!STRAPI_URL) throw new Error("Missing STRAPI_URL environment variable.");
  const url = `${STRAPI_URL}/api/auth/send-email-confirmation`;

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
    console.log(data);
    if (!response.ok && data.error)
      return { message: data.error.message, errors: null };
  } catch (error) {
    console.log(error);
    return { error: "Server error please try again later." };
  }
}
