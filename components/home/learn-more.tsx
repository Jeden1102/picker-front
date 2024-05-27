"use client";

import Link from "next/link";
import { gradient } from "../primitives";
import clsx from "clsx";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";

function LearnMore() {
  return (
    <>
      <div className="max-w-4xl mx-auto md:my-20 text-center">
        <h2 className={clsx("text-lg", gradient({ color: "pink" }))}>
          Learn more
        </h2>
        <p className="opacity-70 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          molestias corporis impedit nihil. Modi neque impedit beatae iure qui
          harum.
        </p>
        <div className="flex gap-4 my-6 flex-col md:flex-row justify-center">
          <Link href="/faq">
            <Card className="md:p-4 w-full">
              <CardBody>
                <Image
                  className="mx-auto my-4"
                  src="/images/more.svg"
                  width={150}
                  height={150}
                  alt="More icon."
                />
                <p className="text-center uppercase text-sm opacity-75">
                  Inspiration?
                </p>
                <h3 className="text-center text-lg font-semibold">
                  Check the use cases
                </h3>
              </CardBody>
            </Card>
          </Link>
          <Link href="/faq">
            <Card className="md:p-4 w-full">
              <CardBody>
                <Image
                  className="mx-auto my-4"
                  src="/images/more.svg"
                  width={150}
                  height={150}
                  alt="More icon."
                />
                <p className="text-center uppercase text-sm opacity-75">
                  Questions?
                </p>
                <h3 className="text-center text-lg font-semibold">
                  Deep dive in answers
                </h3>
              </CardBody>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LearnMore;
