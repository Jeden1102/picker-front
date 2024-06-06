"use server";
import cheerio from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function scrape(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { url } = req.query;

  if (!url || typeof url !== "string") {
    res.status(400).json({ message: "Missing or invalid url param." });
    return;
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
      res.status(response.status).json({ message: response.statusText });
      return;
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    const bodyContent = $("body").html();

    console.log(bodyContent);
    res.status(200).json({ message: bodyContent });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
}
