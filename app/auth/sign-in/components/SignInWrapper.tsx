import React from "react";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import { Button } from "@/lib/ui/Button";

const inputStyles = "capitalize pl-10 rounded-full border-gray h-12";

const SignInWrapper = () => {
  return (
    <form>
      <div className="flex flex-col gap-y-5">
        <EmailInput inputStyles={inputStyles} />
        <PasswordInput inputStyles={inputStyles} />

        <Button
          type="submit"
          className="w-full rounded-full h-12 bg-red-500 text-white"
        >
          Sign In
        </Button>
      </div>

      <div className="flex justify-center mt-4">
        <p className="text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <a href="/auth/sign-up" className="text-red-500">
            Sign Up
          </a>
        </p>
      </div>
    </form>
  );
};

export default SignInWrapper;
