import images from "@/constants/images";
import Image from "next/image";
import React from "react";

const HeaderBgImages = () => {
  return (
    <div className="absolute h-[250px] md:h-[300px] left-0 right-0 top-0 overflow-hidden z-0 border-b border-gray-300 bg-foreground">
      <div className="absolute top-0 z-0 left-1/2 -translate-x-1/2 w-[500px]">
        <Image
          src={images.ingredients_2.src}
          alt="ingredient 1"
          width={1000}
          height={1000}
          priority
        />
      </div>

      <div className="absolute right-0 top-0 size-[250px] md:size-[500px]">
        <Image
          src={images.chicken}
          alt="chicken served in a plate"
          width={1000}
          height={1000}
        />
      </div>

      <div className="absolute left-0 bottom-0 size-[250px] md:size-[350px]">
        <Image
          src={images.grilledFish}
          alt="grilled fish served in a plate"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default HeaderBgImages;
