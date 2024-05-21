import NextLink from "next/link";
import { Button } from "@nextui-org/button";
import { gradient } from "@/components/primitives";

function NotFoundPage() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className={gradient({ color: "pink" })}>404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight  sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 ">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-4">
          <NextLink href="/login">
            <Button color="primary" variant="solid">
              Go home
            </Button>
          </NextLink>
          <NextLink href="/support">
            <Button color="default" variant="solid">
              Contact support
            </Button>
          </NextLink>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
