"use client";
// @ts-expect-error
import { useFormState } from "react-dom";
import { Input } from "@nextui-org/input";
import { useTransition, useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { error } from "@/components/primitives";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { resetPassword } from "@/app/lib/auth/reset-password";

type Props = {
  code: string | undefined;
};

export default function ResetPasswordForm({ code }: Props) {
  const [isVisible, setIsVisible] = useState(-1);

  const initialState = { code };
  const [isPending, startTransition] = useTransition();

  const [state, dispatch] = useFormState(resetPassword, initialState);

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      dispatch(formData);
    });
  };

  useEffect(() => {
    if (isPending) return;
  }, [isPending]);

  return (
    <form className="space-y-3 md:px-8" action={handleSubmit}>
      <div className="flex-1 px-6 pb-4 pt-8 flex flex-col gap-2">
        <h2 className="text-2xl">New password</h2>
        <p className="font-light mb-6">
          Set new password using the form below.
        </p>
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
              onClick={() => setIsVisible(0)}
            >
              {isVisible === 0 ? (
                <IoEyeOffOutline size={20} />
              ) : (
                <IoEyeOutline size={20} />
              )}
            </button>
          }
          type={isVisible === 0 ? "text" : "password"}
          className="max-w-xs"
        />
        {state?.errors?.password ? (
          <div id="customer-error" aria-live="polite" className={error()}>
            {state.errors.password.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
        <Input
          id="password"
          name="passwordConfirmation"
          label="Password"
          variant="bordered"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={() => setIsVisible(1)}
            >
              {isVisible === 1 ? (
                <IoEyeOffOutline size={20} />
              ) : (
                <IoEyeOutline size={20} />
              )}
            </button>
          }
          type={isVisible === 1 ? "text" : "password"}
          className="max-w-xs"
        />
        {state?.errors?.password ? (
          <div id="customer-error" aria-live="polite" className={error()}>
            {state.errors.password.map((error: string) => (
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
