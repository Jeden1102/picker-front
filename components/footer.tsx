"use client";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { gradient, linkHover } from "@/components/primitives";
import { usePathname } from "next/navigation";
import clsx from "clsx";

function Footer() {
  const pathname = usePathname();

  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-50 border-t border-gray-100 py-4 dark:bg-gray-950 dark:border-gray-950 md:py-8">
      <div className="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row md:gap-8 md:justify-between">
        <div className="max-w-96">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="text-lg">
              Page<span className={gradient({ color: "pink" })}>Scraper</span>
            </p>
          </NextLink>
          <p className="text-base opacity-75 my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            deserunt natus architecto non libero, aut incidunt est dicta?
            Cupiditate, animi?
          </p>
        </div>
        <div className="mt-2">
          <span className="font-semibold block mt-2">Navigation</span>
          {siteConfig.navItems.map((item) => (
            <div key={item.href}>
              {!item.subItems && (
                <NextLink
                  color="foreground"
                  href={item.href}
                  className={clsx(
                    "!font-normal block my-1 w-fit",
                    pathname === item.href
                      ? gradient({ color: "pink" })
                      : linkHover()
                  )}
                >
                  {item.label}
                </NextLink>
              )}
              {item.subItems && (
                <div>
                  <span className="font-semibold block mt-2">{item.label}</span>
                  <div>
                    {item.subItems.map((section) => (
                      <div key={section.label}>
                        <p>
                          {section.items.map((section) => (
                            <NextLink
                              key={section.label}
                              className={clsx(
                                "!font-normal block my-1 w-fit",
                                pathname === item.href
                                  ? gradient({ color: "pink" })
                                  : linkHover()
                              )}
                              color="foreground"
                              href={section.href}
                            >
                              {section.label}
                            </NextLink>
                          ))}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-1">
          <span className="font-semibold block mt-2">Resources</span>
          {siteConfig.resourceItems.map((item) => (
            <p key={item.label}>
              <NextLink
                className={clsx(
                  "!font-normal block my-1 w-fit",
                  pathname === item.href
                    ? gradient({ color: "pink" })
                    : linkHover()
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </p>
          ))}
        </div>
        <div className="mt-1">
          <span className="font-semibold block mt-2">Company</span>
          {siteConfig.companyItems.map((item) => (
            <p key={item.label}>
              <NextLink
                className={clsx(
                  "!font-normal block my-1 w-fit",
                  pathname === item.href
                    ? gradient({ color: "pink" })
                    : linkHover()
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </p>
          ))}
        </div>
      </div>
      <div className="mt-3 container mx-auto max-w-7xl px-6">
        &copy; {currentYear} Page
        <span className={gradient({ color: "pink" })}>Scraper</span>
      </div>
    </div>
  );
}

export default Footer;
