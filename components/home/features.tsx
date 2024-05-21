import { gradient } from "../primitives";
import clsx from "clsx";
import { Button } from "@nextui-org/button";
import FeaturesCards from "./features-cards";

function Features() {
  return (
    <>
      <div className="mb-8 max-w-xl mx-auto md:my-20 text-center">
        <h2 className={clsx("text-lg", gradient({ color: "pink" }))}>Scrape</h2>
        <h3 className="text-2xl md:text-5xl font-semibold my-4">
          Find page, scrape content, share with others.
        </h3>
        <p className="opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          molestias corporis impedit nihil. Modi neque impedit beatae iure qui
          harum.
        </p>
        <Button className="mt-8" color="primary" size="md">
          Explore our features
        </Button>
      </div>
      <FeaturesCards />
    </>
  );
}

export default Features;
