import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";

import NextLink from "next/link";
import { Button } from "@nextui-org/button";

import { ThemeSwitch } from "@/components/theme-switch";

import { gradient } from "@/components/primitives";
import { isLoggedIn } from "@/app/lib/auth/user-user";
import UserDropdown from "./navbar/user-dropdown";
import NavbarMenuDesktop from "./navbar/navbar-menu-desktop";
import NavbarMenuMobile from "./navbar/navbar-menu-mobile";

import { NavbarMenu } from "@nextui-org/navbar";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { siteConfig } from "@/config/site";
import { CiSettings } from "react-icons/ci";

export const Navbar = async () => {
  const loggedIn = await isLoggedIn();

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
        <NavbarMenuDesktop />
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {!loggedIn && (
          <NavbarItem className="hidden md:flex gap-2">
            <ThemeSwitch />
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
        )}
      </NavbarContent>
      <div className="hidden md:block">{loggedIn && <UserDropdown />}</div>
      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2 py-8">
          <NavbarMenuMobile />
          {!loggedIn && (
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
          )}
          {loggedIn && <UserDropdown />}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
