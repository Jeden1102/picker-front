import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import clsx from "clsx";
import CookieBanner from "@/components/cookie-banner";
import { cookies } from "next/headers";

console.log(cookies().get("jwt"), "TUTAJ");
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const x = cookies().get("jwt");
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen pt-20 md:pt-0">
            <p>tutaj - </p>
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              tutaj - {x?.value}
              {children}
              <CookieBanner />
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
