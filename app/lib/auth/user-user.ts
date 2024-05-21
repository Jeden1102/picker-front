"use server";

import { cookies } from "next/headers";

export async function isLoggedIn() {
  return cookies().get("jwt")?.value;
}

export async function useUser() {
  const STRAPI_URL = process.env.STRAPI_URL;
  if (!STRAPI_URL) throw new Error("Missing STRAPI_URL environment variable.");
  if (!isLoggedIn()) throw new Error("Unauthorized.");

  try {
    const URL = `${STRAPI_URL}/api/users/me`;
    const response: any = await fetch(URL, {
      method: "GET",
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${cookies().get("jwt")?.value}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: "Unauthorized." };
  }
}
