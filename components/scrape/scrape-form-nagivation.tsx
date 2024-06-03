import { Button } from "@nextui-org/button";

interface Props {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

function ScrapeFormNavigation({ activeStep, setActiveStep }: Props) {
  return (
    <div className="flex gap-4">
      <Button
        disabled={activeStep === 0}
        onClick={() => setActiveStep(--activeStep)}
      >
        Back
      </Button>
      <Button
        disabled={activeStep === 3}
        color="primary"
        onClick={() => setActiveStep(++activeStep)}
      >
        Next
      </Button>
    </div>
  );
}

export default ScrapeFormNavigation;
