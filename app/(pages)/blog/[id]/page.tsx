import Image from "next/image";
import { Chip } from "@nextui-org/chip";
import { notFound } from "next/navigation";

async function getData(id: string | number) {
  const STRAPI_URL = process.env.STRAPI_URL;

  const res = await fetch(`${STRAPI_URL}/api/blogs/${id}?populate=image`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data;
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  const data = await getData(params.id);

  if (!data || !data.data) {
    notFound();
  }

  const { data: article } = data;
  const STRAPI_URL = process.env.STRAPI_URL;

  return (
    <div>
      <h1 className="text-3xl font-bold">{article.attributes.title}</h1>
      <p>{article.attributes.subtitle}</p>
      <Image
        alt="Blog image"
        className="object-cover rounded-lg my-4"
        src={`${STRAPI_URL}${article.attributes.image.data.attributes.url}`}
        width={1020}
        height={370}
      />
      <Chip color="danger">{article.attributes.category}</Chip>
      <div
        className="blog"
        dangerouslySetInnerHTML={{ __html: article.attributes.content }}
      ></div>
    </div>
  );
}
