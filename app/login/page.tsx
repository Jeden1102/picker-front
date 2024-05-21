import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";

export default function LoginPage() {
  return (
    <div>
      <Card>
        <CardBody className="md:px-12">
          <h1 className="text-2xl my-4">Log in to your account</h1>
          <form className="flex flex-col gap-4" action="">
            <Input
              isRequired
              type="email"
              label="Email"
              placeholder="john@doe.com"
            />
            <Input
              isRequired
              type="password"
              label="Password"
              placeholder="********"
            />
            <Button color="primary">Log in</Button>
          </form>
          <div className="flex gap-2 mt-4">
            <p className="text-sm opacity-75">Don&apos;t have an account?</p>
            <NextLink
              className="text-sm opacity-75 text-blue-500"
              href="/register"
            >
              Create an account
            </NextLink>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
