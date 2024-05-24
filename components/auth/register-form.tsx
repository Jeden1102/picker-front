"use client";
// @ts-expect-error
import { useFormState } from "react-dom";
import { registerAction } from "@/app/lib/auth/register-action";
import Link from "next/link";
import { Input } from "@nextui-org/input";
import { IoEyeOffOutline, IoEyeOutline, IoMailOutline } from "react-icons/io5";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { LuUserCircle } from "react-icons/lu";
import { error } from "@/components/primitives";

export default function RegisterForm() {
  const initialState = {};
  const [state, dispatch] = useFormState(registerAction, initialState);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <form className="space-y-3" action={dispatch}>
      <div className="flex-1  px-6 pb-4 pt-8 flex flex-col gap-2">
        <h1 className={`mb-3 text-2xl`}>Create an account</h1>
        <p className="mb-4">
          Create your account to unlock all functionallities.
        </p>
        <Input
          id="username"
          name="username"
          type="text"
          label="Username"
          placeholder="John123"
          variant="bordered"
          endContent={<LuUserCircle size={20} />}
        />

        {state?.errors?.username ? (
          <div id="customer-error" aria-live="polite" className={error()}>
            {state.errors.username.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}

        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          variant="bordered"
          endContent={<IoMailOutline size={20} />}
        />

        {state?.errors?.email ? (
          <div id="customer-error" aria-live="polite" className={error()}>
            {state.errors.email.map((error: string) => (
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
        />
        {state?.errors?.password ? (
          <div id="customer-error" aria-live="polite" className={error()}>
            {state.errors.password.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
        <Button type="submit" color="primary" className="mt-2">
          Register
        </Button>
        <p>already have an account?</p>
        <Link className="text-blue-500" href="/login">
          Log in
        </Link>
        <div className="flex h-8 items-end space-x-1">
          {state?.message ? (
            <div id="customer-error" aria-live="polite" className={error()}>
              <p>{state.message}</p>
            </div>
          ) : null}
        </div>
      </div>
    </form>
  );
}
