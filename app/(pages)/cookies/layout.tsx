import "@/styles/terms.css";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center gap-4 pb-2 md:py-10">
      <div className="inline-block ">{children}</div>
    </section>
  );
}
