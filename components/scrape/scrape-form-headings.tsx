import { gradient, title } from "@/components/primitives";
import clsx from "clsx";

interface Props {
  activeStep: number;
}

function ScrapeFormHeadings({ activeStep }: Props) {
  const headings = [
    {
      title: "General info",
      subtitle:
        "Set the basic info required for creating your own scrape that suits you!",
    },
    {
      title: "Passwords & Keys",
      subtitle:
        "Set the authorization that you need. Choose wheter your scrape should be public accessiable or not.",
    },
    {
      title: "Some details",
      subtitle:
        "Pick the content to be scraped from selected page. Manually get the selector of element, or use our <a target='_blank' class='text-blue-500 underline' href='https://google.com'>Picker extension</a>",
    },
    {
      title: "Verify",
      subtitle: "Check if everything seems fine and publish your scrape!",
    },
  ];
  return (
    <div>
      <h1 className={clsx(gradient({ color: "pink" }), "text-2xl")}>
        {headings[activeStep].title}
      </h1>
      <p
        className="font-light my-2"
        dangerouslySetInnerHTML={{ __html: headings[activeStep].subtitle }}
      ></p>
    </div>
  );
}

export default ScrapeFormHeadings;
