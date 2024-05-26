"use client";
import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "../utils/Helper";
import { useEffect, useState } from "react";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import clsx from "clsx";

function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState(
        getLocalStorage("cookie_consent", false)
    );

    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", false);
        setCookieConsent(storedCookieConsent);
    }, [setCookieConsent]);

    useEffect(() => {
        setLocalStorage("cookie_consent", cookieConsent);
    }, [cookieConsent]);

    return (
        <Card
            className={clsx({
                "flex  flex-col fixed inset-x-0 rounded-b-none bottom-0 z-20 p-4  justify-between gap-x-8 gap-y-4 md:flex-row md:items-center lg:px-8 xs:block":
                    true,
                hidden: cookieConsent,
            })}
        >
            <p className="max-w-4xl text-sm leading-6 text-gray-900 dark:text-gray-100">
                This website uses cookies to enhance your browsing experience,
                analyze site traffic, and serve better user experiences. By
                continuing to use this site, you consent to our use of cookies.
                Learn more in our{" "}
                <Link className="font-semibold text-secondary" href="/cookies">
                    cookie policy
                </Link>
            </p>

            <div className="flex gap-2">
                <div className="mr-16 flex flex-none items-center gap-x-5">
                    <Button
                        onClick={() => setCookieConsent(true)}
                        type="button"
                        color="secondary"
                    >
                        Accept all 🍪
                    </Button>
                    <Button
                        onClick={() => setCookieConsent(true)}
                        type="button"
                    >
                        Reject all
                    </Button>
                </div>
            </div>
        </Card>
    );
}

export default CookieBanner;
