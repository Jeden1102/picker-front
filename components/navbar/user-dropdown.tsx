"use client";
import React, { useEffect } from "react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";
import { logoutAction } from "@/app/lib/auth/logout-action";
import { useState } from "react";
import { loggedUser } from "@/app/lib/auth/user-user";
import { siteConfig } from "@/config/site";

export default function UserDropdown() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const user = await loggedUser();
            setUser(user);
        }
        fetchUser();
    }, []);
    return (
        <div className="flex items-center gap-4">
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <Link href="/user">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">{user?.email}</p>
                        </Link>
                    </DropdownItem>
                    {siteConfig.userItems.map((item) => (
                        <DropdownItem key={item.href}>
                            <Link href={item.href}>{item.label}</Link>
                        </DropdownItem>
                    ))}
                    <DropdownItem
                        key="logout"
                        color="danger"
                        onClick={() => logoutAction()}
                    >
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
