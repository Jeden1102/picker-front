"use client";

import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button, ButtonGroup } from "@nextui-org/button";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    title: "Pay once, own it forever",
    price: 149,
    description:
      "Invoices and receipts available for easy company reimbursement",
    benefits: ["Private forum access", "Member resources"],
  },
  {
    name: "Basic",
    title: "Pay once, own it forever",
    price: 249,
    description:
      "Invoices and receipts available for easy company reimbursement",
    benefits: [
      "Private forum access",
      "Member resources",
      "Entry to annual conference",
    ],
  },
  {
    name: "Premium",
    title: "Pay once, own it forever",
    price: 299,
    description:
      "Invoices and receipts available for easy company reimbursement",
    benefits: [
      "Private forum access",
      "Member resources",
      "Entry to annual conference",
      "Official member t-shirt",
    ],
  },
];

export default function PricingPage() {
  const [activePlanIndex, setActivePlanIndex] = useState(0);
  const [activePlan, setActivePlan] = useState(plans[activePlanIndex]);

  useEffect(() => {
    setActivePlan(plans[activePlanIndex]);
  }, [activePlanIndex]);

  return (
    <div>
      <h1 className={title({ size: "md" })}>Simple no-tricks pricing</h1>
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <Card>
            <div className="px-8 pt-4 sm:p-4 lg:flex-auto">
              <h3 className="text-lg tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                Choose a pricing plan:
              </h3>
              <ButtonGroup>
                {plans.map((plan, key) => (
                  <Button
                    key={plan.name}
                    onClick={() => setActivePlanIndex(key)}
                    className={clsx({
                      "bg-secondary text-white": activePlanIndex === key,
                    })}
                  >
                    {plan.name}
                  </Button>
                ))}
              </ButtonGroup>
              <p className="mt-6 text-xl leading-7 text-gray-600 dark:text-gray-100">
                <b>{activePlan.name}</b>&nbsp;details:
              </p>
            </div>
            <div className="px-4 pb-4">
              <div className="lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 dark:bg-gray-950 py-4 my-4 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-4">
                    <p className="text-base font-semibold text-gray-600 dark:text-gray-100">
                      {activePlan.title}
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        ${activePlan.price}
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-100">
                        USD
                      </span>
                    </p>
                    <Button className="w-full mt-4" color="secondary">
                      Get access
                    </Button>
                    <p className="mt-6 text-xs leading-5 text-gray-600 dark:text-gray-100">
                      {activePlan.description}
                    </p>
                  </div>
                </div>
              </div>
              <ul
                role="list"
                className="mt-2 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 dark:text-gray-100 sm:grid-cols-2 sm:gap-4"
              >
                {activePlan.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3 items-center">
                    <FaCheck size={12} className="text-secondary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
