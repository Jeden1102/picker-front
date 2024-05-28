import { gradient, title } from "@/components/primitives";
import clsx from "clsx";

function ScrapeFormHeadings() {
  return (
    <div>
      <h1 className={clsx(gradient({ color: "pink" }), "text-2xl")}>
        New scrape
      </h1>
      <p className="font-light my-2">Create your own scrape that suits you!</p>
    </div>
  );
}

export default ScrapeFormHeadings;
