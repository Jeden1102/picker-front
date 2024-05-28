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
      {activeStep}
      <CardBody>
        <div className="flex">
          {steps.map((step, i) => (
            <button onClick={() => setActiveStep(i)}>
              <span>{i + 1}</span>
              <div className={activeStep === i ? "block" : "hidden md:block"}>
                <p>Step {i + 1}</p>
                <p>{step}</p>
              </div>
            </button>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

export default ScrapeFormSteps;
