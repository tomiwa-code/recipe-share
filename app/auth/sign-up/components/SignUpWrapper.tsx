import React from "react";
import { Input } from "@/lib/ui/Input";
import { EyeClosed, Lock, UserRound } from "lucide-react";
import CustomLabel from "../../components/CustomLabel";
import { Button } from "@/lib/ui/Button";
import Link from "next/link";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";

const inputStyles = "capitalize pl-10 rounded-full border-gray h-12";

const SignUpWrapper = () => {
  return (
    <form>
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-1">
          <CustomLabel htmlFor="full-name" text="full name" />

          <div className="w-full relative flex items-center">
            <div className="absolute left-4">
              <UserRound className="size-4 text-gray-500" />
            </div>

            <Input
              id="full-name"
              placeholder="mike ross"
              className={`${inputStyles}`}
            />
          </div>
        </div>

        <EmailInput inputStyles={inputStyles} />

        <PasswordInput inputStyles={inputStyles} />

        <div className="flex flex-col gap-y-1">
          <CustomLabel htmlFor="retype-password" text="retype password" />

          <div className="w-full relative flex items-center">
            <div className="absolute left-4">
              <Lock className="size-4 text-gray-500" />
            </div>

            <Input
              id="retype-password"
              type="password"
              placeholder="••••••••••••••"
              className={`${inputStyles}`}
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full rounded-full h-12 bg-red-500 text-white"
        >
          Sign Up
        </Button>
      </div>

      <div className="flex items-center justify-center mt-3 px-4">
        <p className="text-sm text-gray-500 text-center">
          By signing up, you agree to our{" "}
          <Link href="/terms" className="text-blue-500">
            Terms of Service and Privacy Policy
          </Link>
          .
        </p>
      </div>

      <div className="flex justify-center mt-4">
        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/auth/sign-in" className="text-red-500">
            Sign In
          </a>
        </p>
      </div>
    </form>
  );
};

export default SignUpWrapper;
