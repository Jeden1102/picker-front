import { title } from "@/components/primitives";
import { loggedUser } from "../../lib/auth/user-user";
import Link from "next/link";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { FaRegUser } from "react-icons/fa";
import { LuBadge } from "react-icons/lu";
import { CiCalendarDate } from "react-icons/ci";
import { GoProjectTemplate } from "react-icons/go";

export default async function UserPage() {
  const user = await loggedUser();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  return (
    <div className="flex flex-col w-full">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <p className="text-sm font-medium">User Profile</p>
              <FaRegUser className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardBody>
              <div className="text-lg md:text-xl lg:text-2xl font-bold">
                {user.username}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {user.email}
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <p className="text-sm font-medium">Account Status</p>
              <LuBadge className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardBody>
              <div className="text-lg md:text-xl lg:text-2xl font-bold">
                {user.confirmed && <p>Active</p>}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                User status
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <p className="text-sm font-medium">Account created</p>
              <CiCalendarDate className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardBody>
              <div className="text-lg md:text-xl lg:text-2xl font-bold">
                {formatDate(user.createdAt)}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Date of creation
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <p className="text-sm font-medium">Scrapes</p>
              <GoProjectTemplate className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardBody>
              <div className="text-lg md:text-xl lg:text-2xl font-bold">5</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                You have 5 scrapes on your account
              </p>
            </CardBody>
          </Card>
        </div>
      </main>
    </div>
  );
}
