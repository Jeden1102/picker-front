"use client";
import ScrapeForm from "./scrape-form";
import ScrapeFormSteps from "./scrape-form-steps";
import ScrapeFormHeadings from "./scrape-form-headings";
import { useState } from "react";

function ScrapeFormWrapper() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6">
        <ScrapeFormSteps activeStep={activeStep} />
        <div className="flex flex-col md:flex-1">
          <ScrapeFormHeadings activeStep={activeStep} />
          <ScrapeForm
            activeStep={activeStep}
            setActiveStep={(step) => setActiveStep(step)}
          />
        </div>
      </div>
    </div>
  );
}

export default ScrapeFormWrapper;
