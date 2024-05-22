"use client";
import { useFormState } from "react-dom";
import { loginAction } from "@/app/lib/auth/login-action";
import Link from "next/link";
import { Card, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline, IoMailOutline } from "react-icons/io5";
import { Button } from "@nextui-org/button";
export default function LoginForm() {
  const initialState = {};
  const [state, dispatch] = useFormState(loginAction, initialState);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <form className="space-y-3 md:px-8" action={dispatch}>
      <div className="flex-1 px-6 pb-4 pt-8 flex flex-col gap-2">
        <h2 className="text-2xl">Log in to your account</h2>
        <p className="font-light mb-6">
          Use the form below to login to the account.
        </p>
        <Input
          id="identified"
          name="identified"
          type="email"
          label="Email"
          placeholder="you@example.com"
          variant="bordered"
          endContent={<IoMailOutline size={20} />}
        />
        {state?.errors?.identifier ? (
          <div
            id="customer-error"
            aria-live="polite"
            className="mt-2 text-sm text-red-500"
          >
            {state.errors.identifier.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
        <Input
          id="password"
          name="password"
          label="Password"
          variant="bordered"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <IoEyeOffOutline size={20} />
              ) : (
                <IoEyeOutline size={20} />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-xs"
        />
        {state?.errors?.password ? (
          <div
            id="customer-error"
            aria-live="polite"
            className="mt-2 text-sm text-red-500"
          >
            {state.errors.password.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
        <Button color="primary" className="mt-2">
          Log in
        </Button>
        <p>or</p>
        <Link className="text-blue-500" href="/register">
          Create an account
        </Link>
        <div className="flex h-8 items-end space-x-1">
          {state?.message ? (
            <div
              id="customer-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              <p>{state.message}</p>
            </div>
          ) : null}
        </div>
      </div>
    </form>
  );
}
