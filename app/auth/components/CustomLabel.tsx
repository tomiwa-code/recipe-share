import { Label } from "@/lib/ui/Lable";
import React from "react";

const CustomLabel = ({
  htmlFor,
  className,
  text,
}: {
  htmlFor: string;
  className?: string;
  text: string;
}) => {
  return (
    <Label
      htmlFor={htmlFor}
      className={`capitalize text-gray-400 text-sm ${className}`}
    >
      {text}
    </Label>
  );
};

export default CustomLabel;
