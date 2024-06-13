import { title } from "@/components/primitives";

async function getData() {
  const res = await fetch("http://localhost:1337/api/terms");

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
      <div
        className="mt-4 terms"
        dangerouslySetInnerHTML={{ __html: data.data[0].attributes.content }}
      ></div>
    </div>
  );
}
