import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const STRAPI_URL = process.env.STRAPI_URL;

  const res = await fetch(
    `${STRAPI_URL}/api/blogs?pagination[pageSize]=3&populate=image`
  );

  return res.json();
}

async function Blogs() {
  interface ImageFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
  }

  interface ImageAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      small: ImageFormat;
      medium: ImageFormat;
      thumbnail: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
  }

  interface ImageData {
    id: number;
    attributes: ImageAttributes;
  }

  interface Image {
    data: ImageData;
  }

  interface Attributes {
    subtitle: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    category: string;
    image: Image;
  }

  interface Article {
    id: number;
    attributes: Attributes;
  }

  const STRAPI_URL = process.env.STRAPI_URL;
  const data = await getData();

  return (
    data.data && (
      <div className="flex flex-col gap-4 md:flex-row mb-10 lg:mb-14" id="blog">
        {data.data.map((blog: Article) => (
          <Link key={blog.id} href={`/blog/${blog.id}`}>
            <Card className="py-4 w-full">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">
                  {blog.attributes.subtitle}
                </p>
                <small className="text-default-500">
                  {blog.attributes.category}
                </small>
                <h4 className="font-bold text-large">
                  {blog.attributes.title}
                </h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={`${STRAPI_URL}${blog.attributes.image.data.attributes.url}`}
                  width={400}
                  height={270}
                />
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    )
  );
}

export default Blogs;
