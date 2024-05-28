import { title } from "@/components/primitives";
import { loggedUser } from "../../lib/auth/user-user";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { siteConfig } from "@/config/site";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 pb-2 md:py-10">
      <h1 className={title({ size: "sm" })}>Account</h1>
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="flex flex-col md:flex-1">
          {siteConfig.userItems.map((item) => (
            <Button
              key={item.href}
              as={Link}
              href={item.href}
              className="w-fit text-left md:w-full md:justify-start"
              variant="light"
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
