import { title } from "@/components/primitives";

async function getData() {
  const STRAPI_URL = process.env.STRAPI_URL;

  const res = await fetch(`${STRAPI_URL}/api/terms`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function TermsPage() {
  const data = await getData();
  return (
    <div>
      <h1 className={title({ size: "md" })}>Terms</h1>
      {data && (
        <div
          className="mt-4 terms"
          dangerouslySetInnerHTML={{ __html: data.data[0].attributes.content }}
        ></div>
      )}
    </div>
  );
}
