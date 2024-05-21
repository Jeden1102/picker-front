"use client";

import { Navbar as NextUINavbar, NavbarItem } from "@nextui-org/navbar";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { CiSettings } from "react-icons/ci";

function NavbarMenuMobile() {
  return siteConfig.navItems.map((item) => (
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
  ));
}

export default NavbarMenuMobile;
