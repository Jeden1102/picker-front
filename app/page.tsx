import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import TrustedBy from "@/components/home/trusted-by";
import Features from "@/components/home/features";
import Stats from "@/components/home/stats";
import LearnMore from "@/components/home/learn-more";
import Blogs from "@/components/home/blogs";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center mb-16 md:mb-4 justify-center gap-4 md:pt-10 md:min-h-[60vh]">
        <div className="inline-block text-center justify-center">
          <h1 className={title({ size: "md" })}>Page content&nbsp;</h1>
          <h1 className={title({ color: "pink", size: "md" })}>
            scraped&nbsp;
          </h1>
          <br />
          <h1 className={title({ size: "md" })}>in a glimpse.</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Select content to be scraped and explore the functionallities.
          </h2>
        </div>
        <Button color="secondary" size="lg">
          Scrape for free
        </Button>
      </section>
      <section>
        <Stats />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <TrustedBy />
      </section>
      <section>
        <LearnMore />
      </section>
      <section>
        {/* @ts-expect-error Server Component */}
        <Blogs />
      </section>
    </>
  );
}
