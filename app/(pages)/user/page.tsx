import { title } from "@/components/primitives";
import { loggedUser } from "../../lib/auth/user-user";
import Link from "next/link";
import { Button } from "@nextui-org/button";

export default async function UserPage() {
    const user = await loggedUser();
    return (
        <div>
            User
        </div>
    );
}
