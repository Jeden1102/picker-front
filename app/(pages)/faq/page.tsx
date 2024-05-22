"use client";

import { title } from "@/components/primitives";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function FaqPage() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <h1 className={title({ size: "md" })}>Have any&nbsp;</h1>
      <h1 className={title({ color: "pink", size: "md" })}>questions?&nbsp;</h1>
      <p className="my-8">
        We prepared answers for frequently asked questions below.
      </p>
      <div className="mt-4">
        <Accordion variant="splitted">
          <AccordionItem
            className="text-left"
            key="1"
            aria-label="Accordion 1"
            title="Accordion 1"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            className="text-left"
            key="2"
            aria-label="Accordion 2"
            title="Accordion 2"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            className="text-left"
            key="3"
            aria-label="Accordion 3"
            title="Accordion 3"
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
