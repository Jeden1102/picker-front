import "@/styles/blog.css";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-2 md:py-20">
      <div className="inline-block max-w-2xl">{children}</div>
    </section>
  );
}
