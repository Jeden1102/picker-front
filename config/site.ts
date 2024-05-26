export type SiteConfig = typeof siteConfig;
import { CiSettings } from "react-icons/ci";
export const siteConfig = {
    name: "Next.js + NextUI",
    description:
        "Make beautiful websites regardless of your design experience.",
    navItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Product",
            href: "/product",
        },
        {
            label: "Features",
            href: "/features",
            subItems: [
                {
                    label: "Scraper",
                    items: [
                        {
                            label: "Scraper Feature 1",
                            desciption: "Scraper Feature 1 description",
                            icon: CiSettings,
                            href: "/features/one",
                        },
                    ],
                },
                {
                    label: "Picker",
                    items: [
                        {
                            label: "Picker Feature 1",
                            desciption: "Picker Feature 1 description",
                            icon: CiSettings,
                            href: "/features/one",
                        },
                    ],
                },
            ],
        },
    ],
    resourceItems: [
        {
            label: "Blog",
            href: "/blog",
        },
        {
            label: "FAQ",
            href: "/faq",
        },
        {
            label: "Pricing",
            href: "/pricing",
        },
        {
            label: "Community",
            href: "/community",
        },
    ],
    companyItems: [
        {
            label: "Terms",
            href: "/terms",
        },
        {
            label: "Privacy",
            href: "/privacy",
        },
        {
            label: "Cookies",
            href: "/cookies",
        },
    ],
    userItems: [
        {
            label: "Account settings",
            href: "/user/settings",
        },
        {
            label: "My scrapes",
            href: "/user/scrapes",
        },
        {
            label: "Add new scrape",
            href: "/user/new-scrape",
        },
    ],
};
