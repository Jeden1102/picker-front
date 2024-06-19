import ScrapeSideTabHelp from "./scrape-side-tab-help";
import ScrapeSideTabResults from "./scrape-side-tab-results";
import { Card, CardBody } from "@nextui-org/card";

interface Props {
  activeStep: number;
}

function ScrapeSideTabs({ activeStep }: Props) {
  return (
    <Card className="fixed right-0 bottom-4 xl:bottom-1/2 z-50 flex flex-col gap-4 md:rounded-r-none">
      <CardBody className="flex flex-col gap-4">
        <ScrapeSideTabHelp activeStep={activeStep} />
        {activeStep == 2 && <ScrapeSideTabResults />}
      </CardBody>
    </Card>
  );
}

export default ScrapeSideTabs;
