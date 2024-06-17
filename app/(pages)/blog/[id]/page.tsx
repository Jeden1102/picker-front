async function getData({ id }: { id: string | number }) {
  const STRAPI_URL = process.env.STRAPI_URL;

  const res = await fetch(`${STRAPI_URL}/api/blogs/${id}`);

  return res.json();
}

export default async function BlogPage() {
  const data = await getData({ id: 1 });
  console.log(data);
  return (
    <div>
      <p className="my-8">
        We prepared answers for frequently asked questions below.
      </p>
    </div>
  );
}
