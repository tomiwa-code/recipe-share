"use client";

import useScrollHeight from "@/hooks/useScrollHeight";
import { ArrowUp } from "lucide-react";
import React from "react";
import { cn } from "../utils";

const ScrollToTop = () => {
  const { inRange } = useScrollHeight(300);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-10 z-[999] right-10 bg-red-500 size-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-500",
        inRange
          ? "opacity-100 translate-y-0 cursor-pointer pointer-events-auto"
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <ArrowUp className="text-xl text-white" />
    </button>
  );
};

export default ScrollToTop;
