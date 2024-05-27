"use client";

import { Navbar as NextUINavbar, NavbarItem } from "@nextui-org/navbar";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { CiSettings } from "react-icons/ci";

import { gradient, linkHover } from "@/components/primitives";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";

function NavbarMenuDesktop() {
  const pathname = usePathname();
  return (
    <ul className="hidden md:flex gap-4 justify-start ml-6 items-center">
      {siteConfig.navItems.map((item) => (
        <NavbarItem key={item.href}>
          {!item.subItems && (
            <div className="px-3">
              <Link
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
              </Link>
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
                <Link
                  className={clsx("!font-normal", linkHover())}
                  color="foreground"
                  href="#"
                >
                  {item.label}
                </Link>
              </DropdownTrigger>
              <DropdownMenu
                variant="faded"
                aria-label="Dropdown menu with description"
              >
                {item.subItems.map((section) => (
                  <DropdownSection key={section.label} title={section.label}>
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
  );
}

export default NavbarMenuDesktop;
