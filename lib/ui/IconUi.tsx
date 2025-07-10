import React from "react";
import { cn } from "../utils";

interface IconUiProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

const IconUi = ({ icon, text, className }: IconUiProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-y-2 items-center justify-center text-gray-500",
        className
      )}
    >
      {icon}
      <p className="font-medium text-black/80 text-sm">{text}</p>
    </div>
  );
};

export default IconUi;
