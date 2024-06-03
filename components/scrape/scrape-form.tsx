import { useEffect, useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { v4 } from "uuid";

interface FormValues {
  [key: number]: {
    [key: string]: string | boolean;
  };
}

interface Props {
  activeStep: number;
  activeStepTmp: number;
  setActiveStep: (step: number) => void;
}

function ScrapeForm({ activeStep, activeStepTmp, setActiveStep }: Props) {
  const [formValues, setFormValues] = useState<FormValues>({
    0: {
      name: "",
      description: "",
      website: "",
    },
    1: {
      published: true,
      public: true,
      key: "",
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    step: number
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [step]: {
        ...prevValues[step],
        [name]: value,
      },
    }));
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    step: number
  ) => {
    const { name, checked } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [step]: {
        ...prevValues[step],
        [name]: checked,
      },
    }));
  };

  const setUniqueKey = () => {
    setFormValues((prevValues) => ({
      ...prevValues,
      1: {
        ...prevValues[1],
        key: v4(),
      },
    }));
  };

  const validateStep = (step: number) => {
    // @here - add validation.
    setActiveStep(step);
  };

  useEffect(() => {
    validateStep(activeStepTmp);
  }, [activeStepTmp]);

  return (
    <form className="flex flex-col gap-2 mb-4">
      {activeStep === 0 && (
        <>
          <Input
            type="text"
            label="Scrape title"
            placeholder="Amazing facebook scraper"
            name="name"
            required
            value={formValues[0].name as string}
            onChange={(e) => handleInputChange(e, 0)}
          />
          <Textarea
            name="description"
            label="Description"
            required
            placeholder="This scrape is used to..."
            value={formValues[0].description as string}
            onChange={(e) => handleInputChange(e, 0)}
          />
          <Input
            type="url"
            label="Website"
            placeholder="nextui.org"
            name="website"
            value={formValues[0].website as string}
            onChange={(e) => handleInputChange(e, 0)}
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">https://</span>
              </div>
            }
          />
        </>
      )}
      {activeStep === 1 && (
        <>
          <Checkbox
            name="published"
            isSelected={formValues[1].published as boolean}
            onChange={(e) => handleCheckboxChange(e, 1)}
          >
            Scraping available public
          </Checkbox>
          <span className="text-sm text-light opacity-80">
            Select this option if you want to publish your scrape to all users.
          </span>
          <Checkbox
            name="public"
            isSelected={formValues[1].public as boolean}
            onChange={(e) => handleCheckboxChange(e, 1)}
          >
            Scraper endpoints public available.
          </Checkbox>
          <span className="text-sm text-light opacity-80">
            Select this option if you want to make all your endpoints available
            without any authorization.
          </span>
          {!formValues[1].public && (
            <>
              <Input
                type="text"
                label="Authorization key"
                placeholder="a92ea9fb-273..."
                name="key"
                required
                value={formValues[1].key as string}
                onChange={(e) => handleInputChange(e, 1)}
              />
              <Button onClick={setUniqueKey}>Auto generate</Button>
            </>
          )}
        </>
      )}
    </form>
  );
}

export default ScrapeForm;
