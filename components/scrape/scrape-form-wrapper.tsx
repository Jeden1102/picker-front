"use client";
import ScrapeForm from "./scrape-form";
import ScrapeFormSteps from "./scrape-form-steps";
import ScrapeFormHeadings from "./scrape-form-headings";
import { useState } from "react";

function ScrapeFormWrapper() {
  // Active step change only after validation pass in scrape-form.
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
