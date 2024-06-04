import { Card, CardBody } from "@nextui-org/card";
import { gradientBg } from "../primitives";
import clsx from "clsx";

interface Props {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

function ScrapeFormSteps({ activeStep, setActiveStep }: Props) {
  const steps = ["General info", "Authorization", "Scrape details", "Summary"];

  return (
    <Card className={clsx(gradientBg({ color: "blue" }), "text-white")}>
      <CardBody>
        <div className="flex gap-6 justify-center">
          {steps.map((step, i) => (
            <button
              className="flex flex-col items-center justify-center"
              onClick={() => setActiveStep(i)}
              key={i}
            >
              <span
                className={clsx(
                  {
                    "bg-white text-gray-800": activeStep === i,
                  },
                  "w-10 h-10 rounded-full border-2 font-semibold border-white flex items-center justify-center"
                )}
              >
                {i + 1}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-4">
          <p className="uppercase font-light text-sm">Step {activeStep + 1}</p>
          <p className="uppercase">{steps[activeStep]}</p>
        </div>
      </CardBody>
    </Card>
  );
}

export default ScrapeFormSteps;
