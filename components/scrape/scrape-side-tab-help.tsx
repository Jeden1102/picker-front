import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { TfiHelpAlt } from "react-icons/tfi";

interface Props {
  activeStep: number;
}

function ScrapeSideTabHelp({ activeStep }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const headings = [
    "General info",
    "Authorization",
    "Scrape details",
    "Summary",
  ];
  return (
    <>
      <Button onPress={onOpen}>
        <TfiHelpAlt />
      </Button>
      <Modal
        className="absolute right-0 top-0 h-full m-0 sm:m-0 md:rounded-r-none"
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Scraping proccess help - {headings[activeStep]}
              </ModalHeader>
              <ModalBody>
                {activeStep === 0 && (
                  <>
                    <p>Please fill all fields to proceed to the next step.</p>
                    <p>
                      <b className="pr-1">Scrape title</b>
                      will be a field corresponding to the name of scraping
                      you've applied. Make it stand out!
                    </p>
                    <p>
                      <b className="pr-1">Scrape description</b>
                      will be a field corresponding to the description of your
                      scrape. Generally just let the users know what is your
                      scraped use for. You can provide some use cases etc.
                    </p>
                    <p>
                      <b className="pr-1">Website</b>
                      will be a field corresponding to the website of scrape
                      target. Pass only the part without the protocol (https) -
                      we've got it for you!
                    </p>
                    <p>
                      If you are ready with the fields. Proceed to the next step
                      ;)
                    </p>
                  </>
                )}
                {activeStep === 1 && (
                  <>
                    <p>
                      <b className="pr-1">Scraping available public</b>- select
                      this option if you want to publish your scrape to all
                      users. It will be visible public.
                    </p>
                    <p>
                      <b className="pr-1">Scraper endpoints public available</b>
                      - select this option if you want to make all your
                      endpoints available without any authorization. Even if
                      your scrape is not public available, by selecting this
                      option, the endpoints are accessible without any key.
                    </p>
                    <p>
                      <b className="pr-1">Authorization key</b>
                      key needed for api endpoint authorization.
                    </p>
                    <p>
                      If you are ready with the fields. Proceed to the next step
                      ;)
                    </p>
                  </>
                )}
                {activeStep === 2 && (
                  <>
                    <p>
                      To create new scrape selector, just click the button 'Add
                      scraping selector'
                    </p>
                    <p>
                      If you are using the picker extension to scrape content,
                      after succesfully save you can paste the object by
                      clicking the 'Paste from page picker' button
                    </p>
                    <p>To create the scrape, just fill all the fields:</p>
                    <p>
                      <b>Key</b> - key of scrape item, each key have to be
                      unique!
                    </p>
                    <p>
                      <b>Selector</b> - html selector of each item
                    </p>
                    <p>
                      <b>Selected content</b> - the content of item to be
                      scraped
                    </p>
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ScrapeSideTabHelp;
