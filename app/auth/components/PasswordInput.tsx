import React from "react";
import CustomLabel from "./CustomLabel";
import { EyeClosed, Lock } from "lucide-react";
import { Input } from "@/lib/ui/Input";
import { Button } from "@/lib/ui/Button";

interface PasswordInputProps {
  inputStyles: string;
}

const PasswordInput = ({ inputStyles }: PasswordInputProps) => {
  return (
    <div className="flex flex-col gap-y-1">
      <CustomLabel htmlFor="password" text="password" />

      <div className="w-full relative flex items-center">
        <div className="absolute left-4">
          <Lock className="size-4 text-gray-500" />
        </div>

        <Input
          id="password"
          type="password"
          placeholder="Password10:("
          className={`${inputStyles}`}
        />

        <Button type="button" className="absolute right-4">
          <EyeClosed className="size-4 text-gray-500" />
        </Button>
      </div>
    </div>
  );
};

export default PasswordInput;
