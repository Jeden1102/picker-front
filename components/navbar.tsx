"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { Button } from "@nextui-org/button";
import { CiSettings } from "react-icons/ci";

import { ThemeSwitch } from "@/components/theme-switch";

import { gradient, linkHover } from "@/components/primitives";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { logoutAction } from "@/app/lib/auth/logout-action";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <NextUINavbar className="fixed" maxWidth="xl">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="text-lg">
              Page<span className={gradient({ color: "pink" })}>Scraper</span>
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden md:flex gap-4 justify-start ml-6 items-center">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              {!item.subItems && (
                <div className="px-3">
                  <NextLink
                    className={clsx(
                      "!font-normal",
                      pathname === item.href
                        ? gradient({ color: "pink" })
                        : linkHover()
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </div>
              )}
              {item.subItems && (
                <Dropdown
                  showArrow
                  classNames={{
                    base: "before:bg-default-200",
                    content:
                      "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                  }}
                >
                  <DropdownTrigger>
                    <NextLink
                      className={clsx("!font-normal", linkHover())}
                      color="foreground"
                      href="#"
                    >
                      {item.label}
                    </NextLink>
                  </DropdownTrigger>
                  <DropdownMenu
                    variant="faded"
                    aria-label="Dropdown menu with description"
                  >
                    {item.subItems.map((section) => (
                      <DropdownSection
                        key={section.label}
                        title={section.label}
                      >
                        {section.items.map((section) => (
                          <DropdownItem
                            key={section.label}
                            description={section.desciption}
                            startContent={<CiSettings />}
                          >
                            {section.label}
                          </DropdownItem>
                        ))}
                      </DropdownSection>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              )}
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex gap-2">
          <ThemeSwitch />
          <form
            action={async () => {
              await logoutAction();
            }}
          >
            <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
          <NextLink href="/login">
            <Button color="primary" variant="solid">
              Log in
            </Button>
          </NextLink>
          <NextLink href="/register">
            <Button color="default" variant="bordered">
              Register
            </Button>
          </NextLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2 py-8">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              {!item.subItems && (
                <div className="px-2 py-2 md:py-0">
                  <NextLink color="foreground" href={item.href}>
                    {item.label}
                  </NextLink>
                </div>
              )}
              {item.subItems && (
                <Accordion isCompact>
                  <AccordionItem aria-label={item.label} title={item.label}>
                    {item.subItems.map((section) => (
                      <div key={section.label}>
                        {section.items.map((section) => (
                          <NextLink
                            key={section.label}
                            color="foreground"
                            href={section.href}
                            className="flex items-center  gap-2"
                          >
                            <CiSettings />
                            <div className="flex my-2 flex-col">
                              {section.label}
                              <span className="font-light text-sm">
                                {section.desciption}
                              </span>
                            </div>
                          </NextLink>
                        ))}
                      </div>
                    ))}
                  </AccordionItem>
                </Accordion>
              )}
            </NavbarItem>
          ))}
          <div className="mt-12 flex gap-4">
            <NextLink href="/login">
              <Button color="primary" variant="solid">
                Log in
              </Button>
            </NextLink>
            <NextLink href="/register">
              <Button color="default" variant="bordered">
                Register
              </Button>
            </NextLink>
          </div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
