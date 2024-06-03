"use client";
import ScrapeForm from "./scrape-form";
import ScrapeFormNavigation from "./scrape-form-navigation";
import ScrapeFormSteps from "./scrape-form-steps";
import ScrapeFormHeadings from "./scrape-form-headings";
import { useState } from "react";

function ScrapeFormWrapper() {
  // Active step change only after validation pass in scrape-form.
  const [activeStep, setActiveStep] = useState(0);
  const [activeStepTmp, setActiveStepTmp] = useState(0);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6">
        <ScrapeFormSteps
          activeStep={activeStep}
          setActiveStep={(step) => setActiveStepTmp(step)}
        />
        <div className="flex flex-col">
          <ScrapeFormHeadings activeStep={activeStep} />
          <ScrapeForm
            activeStep={activeStep}
            activeStepTmp={activeStepTmp}
            setActiveStep={(step) => setActiveStep(step)}
          />
        </div>
      </div>
      <ScrapeFormNavigation
        activeStep={activeStep}
        setActiveStep={(step) => setActiveStepTmp(step)}
      />
    </div>
  );
}

export default ScrapeFormWrapper;
