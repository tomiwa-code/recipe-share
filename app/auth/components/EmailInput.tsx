import React from "react";
import CustomLabel from "./CustomLabel";
import { Mail } from "lucide-react";
import { Input } from "@/lib/ui/Input";

interface EmailInputProps {
  inputStyles: string;
}

const EmailInput = ({ inputStyles }: EmailInputProps) => {
  return (
    <div className="flex flex-col gap-y-1">
      <CustomLabel htmlFor="email" text="email address" />

      <div className="w-full relative flex items-center">
        <div className="absolute left-4">
          <Mail className="size-4 text-gray-500" />
        </div>

        <Input
          id="email"
          placeholder="mike.ross@example.com"
          className={`${inputStyles}`}
        />
      </div>
    </div>
  );
};

export default EmailInput;
