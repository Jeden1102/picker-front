"use server";
import cheerio from "cheerio";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const url = searchParams.get("url");

  if (!url || typeof url !== "string") {
    return NextResponse.json(
      {
        message: "Missing or invalid url param.",
      },
      { status: 400 }
    );
  }

  try {
    const response: any = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          message: "Error fetching the page.",
        },
        { status: 400 }
      );
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    const bodyContent = $("body").html();

    console.log(bodyContent);
    return NextResponse.json(
      {
        data: bodyContent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error fetching the page.",
      },
      { status: 500 }
    );
  }
}
