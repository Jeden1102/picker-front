"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";

function Blogs() {
  return (
    <div className="flex flex-col gap-4 md:flex-row mb-10 lg:mb-14">
      {[...Array(3)].map((i) => (
        <Link key={i} href="/faq">
          <Card className="py-4 w-full">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Scraping benefits</p>
              <small className="text-default-500">Technology</small>
              <h4 className="font-bold text-large">
                Checkout all the benefits coming from page scraping
              </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/images/feature-2.png"
                width={400}
                height={270}
              />
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default Blogs;
