"use client";
// @ts-expect-error
import { useFormState } from "react-dom";
import { Input } from "@nextui-org/input";
import { sendForgotPasswordEmail } from "@/app/lib/auth/forgot-password";
import { useTransition, useEffect, useState, startTransition } from "react";
import { IoMailOutline } from "react-icons/io5";
import { Button } from "@nextui-org/button";
import { error } from "@/components/primitives";

export default function ForgotPasswordForm() {
  const initialState = {};
  const [isPending, startTransition] = useTransition();

  const [state, dispatch] = useFormState(sendForgotPasswordEmail, initialState);

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      dispatch(formData);
    });
  };

  return (
    <form className="space-y-3 md:px-8" action={handleSubmit}>
      <div className="flex-1 px-6 pb-4 pt-8 flex flex-col gap-2">
        <h2 className="text-2xl">Forgot password?</h2>
        <p className="font-light mb-6">
          Fill the email field. We will send you a recovery link on your email.
        </p>
        <Input
          id="identifier"
          name="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          variant="bordered"
          endContent={<IoMailOutline size={20} />}
        />
        {state?.errors?.identifier ? (
          <div id="customer-error" aria-live="polite" className={error()}>
            {state.errors.identifier.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
        <Button
          type="submit"
          color="primary"
          className="mt-2"
          isLoading={isPending}
          disabled={state.success}
        >
          Send
        </Button>
        {state.message && <p>{state.message}</p>}
      </div>
    </form>
  );
}
