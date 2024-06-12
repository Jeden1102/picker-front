"use client";

import { title } from "@/components/primitives";
import { loggedUser } from "../../lib/auth/user-user";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <section className="flex flex-col gap-4 pb-2 md:py-10">
      <h1 className={title({ size: "sm" })}>Account</h1>
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="flex flex-col md:flex-1 gap-2">
          {siteConfig.userItems.map((item) => (
            <Button
              key={item.href}
              as={Link}
              href={item.href}
              className="text-left md:justify-start"
              variant={item.href === pathname ? "flat" : "light"}
            >
              {item.label}
            </Button>
          ))}
        </div>
        <Card className="p-4 w-full md:w-3/4">{children}</Card>
      </div>
    </section>
  );
}
