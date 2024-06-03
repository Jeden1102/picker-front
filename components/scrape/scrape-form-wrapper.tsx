"use client";
import ScrapeForm from "./scrape-form";
import ScrapeFormNavigation from "./scrape-form-nagivation";
import ScrapeFormSteps from "./scrape-form-steps";
import ScrapeFormHeadings from "./scrape-form-headings";
import { useState } from "react";

function ScrapeFormWrapper() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6">
        <ScrapeFormSteps
          activeStep={activeStep}
          setActiveStep={(step) => setActiveStep(step)}
        />
        <div className="flex flex-col">
          <ScrapeFormHeadings activeStep={activeStep} />
          <ScrapeForm activeStep={activeStep} />
        </div>
      </div>
      <ScrapeFormNavigation
        activeStep={activeStep}
        setActiveStep={(step) => setActiveStep(step)}
      />
    </div>
  );
}

export default ScrapeFormWrapper;
