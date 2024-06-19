import { useEffect, useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { v4 } from "uuid";
import z from "zod";
import { error } from "@/components/primitives";
import { Card, CardBody } from "@nextui-org/card";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Snippet } from "@nextui-org/snippet";
import ScrapeSideTabs from "./scrape-side-tabs";
import { getPageDocument } from "@/utils/Scraper";
import { RadioGroup, Radio } from "@nextui-org/radio";

interface FormValues {
  [key: number]: {
    [key: string]: string | boolean | object[] | any;
  };
}

interface Props {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

interface Field {
  [key: string]: any;
}

interface ScrapeObject {
  key: string;
  fields: Field;
  selector: string;
}

function ScrapeForm({ activeStep, setActiveStep }: Props) {
  const [validationErrors, setValidationErrors] = useState({} as any);
  const [scrapedPageDocument, setScrapedPageDocument] = useState(
    null as null | Document
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
    2: {
      scrapingRangeMode: "all",
      scrapingRange: "",
      scrapingSelectors: [],
    },
  });

  const firstStepSchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    website: z.string().min(1),
  });

  const secondStepSchema = z.object({
    key: !formValues[1].public ? z.string().min(1) : z.string().min(0),
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

  const handleRadioChange = (value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      2: {
        ...prevValues[2],
        scrapingRangeMode: value,
      },
    }));
  };

  const addNewScrapeSelector = ({ key, fields, selector }: ScrapeObject) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      2: {
        ...prevValues[2],
        scrapingSelectors: [
          ...prevValues[2].scrapingSelectors,
          { key: key ?? "", selector: selector ?? "", fields: fields ?? {} },
        ],
      },
    }));
  };

  const removeScrapeSelector = (index: number) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      2: {
        ...prevValues[2],
        scrapingSelectors: prevValues[2].scrapingSelectors.filter(
          (_: any, i: number) => i !== index
        ),
      },
    }));
  };

  const setUniqueKey = () => {
    const key = v4();
    navigator.clipboard.writeText(key);
    setFormValues((prevValues) => ({
      ...prevValues,
      1: {
        ...prevValues[1],
        key: key,
      },
    }));
  };

  const validateStep = async (step: number) => {
    const schemas: Record<number, object> = {
      0: {
        name: formValues[0].name,
        description: formValues[0].description,
        website: formValues[0].website,
      },
      1: {
        key: formValues[1].key,
      },
    };

    const validationOptions: Record<number, any> = {
      0: firstStepSchema.safeParse(schemas[activeStep]),
      1: secondStepSchema.safeParse(schemas[activeStep]),
    };

    const validatedFields = validationOptions[activeStep];

    if (!validatedFields.success) {
      setValidationErrors(validatedFields.error.flatten().fieldErrors);
      return;
    }

    if (step === 1) {
      const page = await getPageDocument(`https://${formValues[0].website}`);
      setScrapedPageDocument(page);
    }

    setActiveStep(step);
  };

  const handleSelectorChange = (
    index: number,
    field: keyof ScrapeObject,
    value: string
  ) => {
    const updatedScrapingSelectors = formValues[2].scrapingSelectors.map(
      (selector: any, i: number) => {
        if (i === index) {
          return { ...selector, [field]: value };
        }
        return selector;
      }
    );

    setFormValues((prevValues) => ({
      ...prevValues,
      2: {
        ...prevValues[2],
        scrapingSelectors: updatedScrapingSelectors,
      },
    }));
  };

  const handleSelectorFieldChange = (index: number, key: string) => {
    setFormValues((prevFormValues) => {
      const updatedScrapingSelectors = prevFormValues[2].scrapingSelectors.map(
        (selector: any, i: number) => {
          if (i === index) {
            return {
              ...selector,
              fields: {
                ...selector.fields,
                [key]: !selector.fields[key],
              },
            };
          }
          return selector;
        }
      );

      return {
        ...prevFormValues,
        2: {
          ...prevFormValues[2],
          scrapingSelectors: updatedScrapingSelectors,
        },
      };
    });
  };

  const areAllSelectorsFilled = () => {
    return formValues[2].scrapingSelectors.every(
      (selector: ScrapeObject) =>
        selector.key.trim() !== "" && selector.selector.trim() !== ""
    );
  };

  const updateAvailableScrapeFields = () => {
    console.log(formValues);
    formValues[2].scrapingSelectors.forEach((sel: any) => {
      if (sel.selector) {
        try {
          console.log(scrapedPageDocument?.querySelector(sel.selector));
        } catch {}
      }
    });
  };

  useEffect(() => {
    if (activeStep === 2 && scrapedPageDocument !== null) {
      updateAvailableScrapeFields();
    }
  }, [formValues, activeStep]);

  async function checkScrapeObject() {
    try {
      const clipboardText = await navigator.clipboard.readText();
      if (!clipboardText) return;

      let scrapeObject = JSON.parse(clipboardText);
      if (scrapeObject.source !== "picker") return;

      const fields = scrapeObject.content.reduce((acc: any, key: any) => {
        acc[key] = true;
        return acc;
      }, {} as Record<string, boolean>);

      scrapeObject = {
        ...scrapeObject,
        fields,
      };
      await navigator.clipboard.writeText("");
      addNewScrapeSelector(scrapeObject);
    } catch {}
  }
  return (
    <form className="flex flex-col gap-2 my-2">
      <ScrapeSideTabs activeStep={activeStep} />
      {activeStep === 0 && (
        <>
          <Input
            type="string"
            label="Scrape title"
            placeholder="Amazing facebook scraper"
            name="name"
            required
            value={formValues[0].name as string}
            onChange={(e) => handleInputChange(e, 0)}
          />
          {validationErrors.name && (
            <span className={error()}>{validationErrors.name}</span>
          )}
          <Textarea
            name="description"
            label="Description"
            required
            placeholder="This scrape is used to..."
            value={formValues[0].description as string}
            onChange={(e) => handleInputChange(e, 0)}
          />
          {validationErrors.description && (
            <span className={error()}>{validationErrors.description}</span>
          )}
          <Input
            type="string"
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
          {validationErrors.website && (
            <span className={error()}>{validationErrors.website}</span>
          )}
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
              {validationErrors.key && (
                <span className={error()}>{validationErrors.key}</span>
              )}
              <Button onClick={setUniqueKey} onPress={onOpen}>
                Auto generate
              </Button>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        Unique code copied!
                      </ModalHeader>
                      <ModalBody>
                        <p>Your unique api key code has been generated.</p>
                        <Snippet>
                          {typeof formValues[1].key === "string" &&
                            formValues[1].key}
                        </Snippet>
                        <p>
                          It has been automatically copied to your clipboard.
                          Save it for later!
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </>
          )}
        </>
      )}
      {activeStep === 2 && (
        <>
          {formValues[2].scrapingSelectors.length > 0 && (
            <>
              <RadioGroup
                label="Scraping limit"
                value={formValues[2].scrapingRangeMode}
                onValueChange={handleRadioChange}
              >
                <Radio value="all">All items</Radio>
                <Radio value="first_only">First item only</Radio>
                <Radio value="last_only">Last item only</Radio>
                <Radio value="range">Range</Radio>
              </RadioGroup>
            </>
          )}
          {formValues[2].scrapingRangeMode === "range" && (
            <Input
              type="string"
              label="Scraping Range"
              className="my-2"
              placeholder="e.g., 1-10"
              name="scrapingRange"
              value={formValues[2].scrapingRange}
              onChange={(e) => handleInputChange(e, 2)}
            />
          )}
          {formValues[2].scrapingSelectors.map(
            (scrapeSelector: ScrapeObject, index: number) => (
              <Card key={index}>
                <CardBody className="flex flex-col gap-3">
                  <Input
                    type="string"
                    label="Key"
                    placeholder="auction_price"
                    value={scrapeSelector.key}
                    onChange={(
                      e: React.ChangeEvent<
                        HTMLInputElement | HTMLTextAreaElement
                      >
                    ) => handleSelectorChange(index, "key", e.target.value)}
                  />
                  <div>
                    <Input
                      type="string"
                      label="Selector"
                      placeholder="div > p > a > string"
                      value={scrapeSelector.selector}
                      onChange={(
                        e: React.ChangeEvent<
                          HTMLInputElement | HTMLTextAreaElement
                        >
                      ) =>
                        handleSelectorChange(index, "selector", e.target.value)
                      }
                    />
                    <p className="text-sm opacity-75 mt-1">
                      Warning! By changing selector, content to scrape below may
                      change!
                    </p>
                  </div>

                  <div>
                    <p>Selected content</p>
                    <p className="text-sm opacity-75">
                      Choose the content you want to scrape
                    </p>
                  </div>

                  {Object.keys(scrapeSelector.fields).map((key) => (
                    <Checkbox
                      name={key}
                      isSelected={scrapeSelector.fields[key]}
                      key={key}
                      onChange={() => handleSelectorFieldChange(index, key)}
                    >
                      {key}
                    </Checkbox>
                  ))}
                  <Button
                    type="button"
                    className="w-fit"
                    color="danger"
                    onClick={() => removeScrapeSelector(index)}
                  >
                    Remove
                  </Button>
                </CardBody>
              </Card>
            )
          )}
          <div className="flex gap-2">
            <Button
              type="button"
              color="primary"
              onClick={() =>
                addNewScrapeSelector({
                  key: "",
                  fields: { full: false, content: false },
                  selector: "",
                })
              }
              disabled={!areAllSelectorsFilled()}
            >
              Add scraping selector
            </Button>
            <Button
              type="button"
              color="danger"
              onClick={() => checkScrapeObject()}
              disabled={!areAllSelectorsFilled()}
            >
              Paste from page picker
            </Button>
          </div>
        </>
      )}
      <div className="flex gap-4 mt-4">
        <Button
          disabled={activeStep === 0}
          onClick={() => {
            setActiveStep(activeStep - 1), setValidationErrors({});
          }}
        >
          Back
        </Button>
        <Button
          disabled={activeStep === 3}
          color="primary"
          onClick={() => validateStep(activeStep + 1)}
        >
          Next
        </Button>
      </div>
    </form>
  );
}

export default ScrapeForm;
