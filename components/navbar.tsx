"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@nextui-org/button";

import { ThemeSwitch } from "@/components/theme-switch";

import { gradient } from "@/components/primitives";
import UserDropdown from "./navbar/user-dropdown";
import NavbarMenuDesktop from "./navbar/navbar-menu-desktop";
import NavbarMenuMobile from "./navbar/navbar-menu-mobile";

import { NavbarMenu } from "@nextui-org/navbar";
import { useState, useEffect } from "react";
export const Navbar = ({ loggedIn }: { loggedIn: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  return (
    <NextUINavbar isMenuOpen={isMenuOpen} className="fixed" maxWidth="xl">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link className="flex justify-start items-center gap-1" href="/">
            <p className="text-lg">
              Page<span className={gradient({ color: "pink" })}>Scraper</span>
            </p>
          </Link>
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
            <Link href="/login">
              <Button color="primary" variant="solid">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button color="default" variant="bordered">
                Register
              </Button>
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>
      <div className="hidden md:flex gap-4">
        {loggedIn && (
          <>
            <ThemeSwitch />
            <UserDropdown />
          </>
        )}
      </div>
      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </NavbarContent>
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2 py-8">
          <NavbarMenuMobile />
          {!loggedIn && (
            <div className="mt-12 flex gap-4">
              <Link href="/login">
                <Button color="primary" variant="solid">
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button color="default" variant="bordered">
                  Register
                </Button>
              </Link>
            </div>
          )}
          {loggedIn && <UserDropdown />}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
