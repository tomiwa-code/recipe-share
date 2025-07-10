import React from "react";

import { Input } from "./Input";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./Dropdown";
import { CookingPot, UserRound, UsersRound } from "lucide-react";
import { NavLinkType } from "@/types/nav.types";
import MobileNav from "./MobileNav";

const linksArr: NavLinkType[] = [
  {
    label: "Recipes",
    href: "/recipes",
    icon: <CookingPot size={20} />,
  },
  {
    label: "Community",
    href: "/community",
    icon: <UsersRound size={20} />,
  },
];

const Navbar = () => {
  const isUser = false;

  return (
    <header className="absolute z-50 top-0 left-0 right-0 pt-5">
      <div className="flex items-center justify-between container mx-auto py-6 px-4 md:px-8 lg:px-16">
        <Link href={"/"} className="flex-1 flex items-center gap-x-2">
          <div className="bg-red-500 rounded-lg size-8 flex items-center justify-center">
            <p className="uppercase text-sm font-bold text-white">RS</p>
          </div>

          <h2 className="text-base font-semibold text-black capitalize">
            recipe share
          </h2>
        </Link>

        <div className="flex-1 hidden lg:block">
          <div className="w-full max-w-xl bg-white/50 backdrop-blur-sm border border-gray rounded-xl">
            <Input
              type="text"
              placeholder="Search recipes..."
              className="w-full h-12 border-none outline-none px-5"
            />
          </div>
        </div>

        <nav className="items-center flex-1 gap-x-4 justify-end hidden lg:flex">
          <ul className="flex items-center gap-x-4">
            {linksArr.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="cursor-pointer">
                  {!isUser ? (
                    <div className="size-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <UserRound size={16} />
                    </div>
                  ) : (
                    <Avatar className={"size-10 bg-gray-200"}>
                      <AvatarImage src={""} />
                      <AvatarFallback>{"UN"}</AvatarFallback>
                    </Avatar>
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-100 border-none">
                <DropdownMenuLabel>
                  {isUser ? "My Account" : "Start sharing recipes"}
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray" />
                {!isUser && (
                  <>
                    <DropdownMenuItem className="hover:bg-gray-200 duration-300">
                      <Link href={"/auth/sign-in"}>Sign In</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-200 duration-300">
                      <Link href={"/auth/sign-up"}>Sign Up</Link>
                    </DropdownMenuItem>
                  </>
                )}
                {isUser && (
                  <>
                    <DropdownMenuItem>
                      <Link href={"/profile"}>Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </ul>
        </nav>

        {/* MOBILE  */}
        <MobileNav isUser={isUser} linkArr={linksArr} />
      </div>
    </header>
  );
};

export default Navbar;
