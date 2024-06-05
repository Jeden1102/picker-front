import { Card, CardBody } from "@nextui-org/card";
import { gradientBg } from "../primitives";
import clsx from "clsx";

interface Props {
  activeStep: number;
}

function ScrapeFormSteps({ activeStep }: Props) {
  const steps = ["General info", "Authorization", "Scrape details", "Summary"];

  return (
    <Card
      className={clsx(
        gradientBg({ color: "blue" }),
        "text-white p-4 md:flex-1 md:max-w-72"
      )}
    >
      <CardBody>
        <div className="flex gap-6 justify-center md:flex-col">
          {steps.map((step, i) => (
            <div
              className="flex flex-col items-center justify-center md:flex-row gap-4"
              key={i}
            >
              <span
                className={clsx(
                  {
                    "bg-white text-gray-800": activeStep === i,
                  },
                  "min-w-10 w-10 h-10 rounded-full border-2 font-semibold border-white flex items-center justify-center"
                )}
              >
                {i + 1}
              </span>
              <div className="hidden md:block">
                <p className="uppercase font-light text-sm">
                  Step {activeStep + 1}
                </p>
                <p className="uppercase">{steps[activeStep]}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 md:hidden">
          <p className="uppercase font-light text-sm">Step {activeStep + 1}</p>
          <p className="uppercase">{steps[activeStep]}</p>
        </div>
      </CardBody>
    </Card>
  );
}

export default ScrapeFormSteps;
