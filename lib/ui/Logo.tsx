import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex-1 flex items-center gap-x-2">
      <div className="bg-red-500 rounded-lg size-8 flex items-center justify-center">
        <p className="uppercase text-sm font-bold text-white">RS</p>
      </div>

      <h2 className="text-base font-semibold text-black capitalize">
        recipe share
      </h2>
    </Link>
  );
};

export default Logo;
