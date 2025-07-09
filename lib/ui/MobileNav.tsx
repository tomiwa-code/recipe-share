"use client";
import React from "react";
import { Button } from "./Button";
import { House, Menu, X } from "lucide-react";
import Link from "next/link";
import { NavLinkType } from "@/types/nav.types";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

interface MobileNavProps {
  isUser: boolean;

  linkArr: NavLinkType[];
}

const MobileNav = ({ isUser, linkArr }: MobileNavProps) => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleOpenNav = () => {
    setOpenNav((prev) => !prev);
  };

  return (
    <div className="lg:hidden flex-1 flex items-center justify-end relative">
      <Button
        className="bg-foreground/30 backdrop-blur-sm"
        onClick={handleOpenNav}
      >
        <Menu className="text-black !size-7" />
      </Button>

      {openNav && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          <div
            className="absolute z-0 inset-0 bg-black/30 backdrop-blur-sm select-none cursor-pointer"
            onClick={handleOpenNav}
          />

          <div className="w-[60%] md:w-[40%] bg-foreground h-screen overflow-auto py-2 relative z-10">
            <div className="w-full flex items-center justify-end">
              <Button
                variant={"ghost"}
                className="text-black/80 border-black/50"
                onClick={handleOpenNav}
              >
                <X />
              </Button>
            </div>

            <nav className="px-4">
              <ul className="flex flex-col gap-y-4 text-base md:text-xl">
                <li>
                  <Link href={"/"} className="flex items-center gap-x-3">
                    <House size={20} />
                    <span>Home</span>
                  </Link>
                </li>
                {linkArr.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      className="flex items-center gap-x-3"
                      href={link.href}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="absolute bottom-5 px-4 w-full pt-4 border-t border-gray-300">
              {!isUser && (
                <div className="flex flex-col gap-y-2">
                  <p className="text-sm text-gray-500 mb-2">
                    Sign in or sign up to share your recipes with the community.
                  </p>

                  <div className="flex gap-x-2">
                    <Link href={"/auth/sign-in"}>
                      <Button variant={"outline"} className="bg-transparent">
                        Sign In
                      </Button>
                    </Link>

                    <Link href={"/auth/sign-up"}>
                      <Button variant={"ghost"}>Sign Up</Button>
                    </Link>
                  </div>
                </div>
              )}

              {isUser && (
                <div className="flex flex-col gap-y-3">
                  <Link href={"/profile"} className="flex items-center gap-x-3">
                    <Avatar className={"size-10 bg-gray-200"}>
                      <AvatarImage src={""} />
                      <AvatarFallback className="uppercase">{"jd"}</AvatarFallback>
                    </Avatar>

                    <p className="capitalize text-sm text-black font-medium">
                      john doe
                    </p>
                  </Link>

                  <Button variant={"outline"} className="bg-transparent">
                    Logout
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
