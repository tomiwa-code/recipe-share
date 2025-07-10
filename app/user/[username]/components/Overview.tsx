import icons from "@/constants/icons";
import Image from "next/image";
import React from "react";

const Overview = () => {
  return (
    <div className="flex items-center w-full h-[400px] justify-center flex-col gap-y-2">
      <div className="size-24 relative mb-2">
        <Image
          src={icons.workInProgress}
          alt="User Not Found"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      <h2 className="text-lg font-semibold">Coming Soon</h2>
      <p>This section is under construction.</p>
    </div>
  );
};

export default Overview;
