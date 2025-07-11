import icons from "@/constants/icons";
import { Button } from "@/lib/ui/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserNotFound = () => {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center flex-col gap-y-4">
      <div className="size-16 md:size-24 relative">
        <Image
          src={icons.userNotFound}
          alt="User Not Found"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      <h2 className="text-lg md:text-3xl font-semibold text-black capitalize">
        user not found
      </h2>

      <p className="text-sm text-center text-gray-500 max-w-sm w-full mx-auto">
        We couldn&apos;t find the user you&apos;re looking for. The profile may
        have been removed or the username changed.
      </p>

      <div className="w-full flex flex-col md:flex-row gap-y-3 items-center justify-center gap-x-4 mt-3 text-gray-700">
        <Link href="/">
          <Button variant={"outline"} className="bg-transparent rounded-full">
            Go to Home
          </Button>
        </Link>

        <Link href="/recipes">
          <Button variant={"ghost"} className="">
            Discover more Recipes
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UserNotFound;
