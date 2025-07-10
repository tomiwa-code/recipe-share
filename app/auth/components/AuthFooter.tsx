import { InstagramIcon, TikTokIcon, TwitterIcon } from "@/lib/ui/CustomIcons";
import Link from "next/link";
import React from "react";

const linkArr = [
  { label: "Explore", href: "/recipes" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Help Center", href: "/help" },
];

const iconsArr = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com",
    icon: TikTokIcon,
  },
  {
    label: "Twitter",
    href: "https://www.twitter.com",
    icon: TwitterIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: InstagramIcon,
  },
];

const AuthFooter = () => {
  return (
    <footer className="container mx-auto px-4 md:px-8 lg:px-16 absolute bottom-5 left-1/2 hidden md:block -translate-x-1/2">
      <div className="w-full min-h-14 flex items-center justify-between bg-foreground/30 backdrop-blur-sm rounded-full px-8">
        <div className="flex items-center gap-x-8">
          {linkArr.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-sm text-gray-800 font-medium hover:underline duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-x-8">
          {iconsArr.map((icon, idx) => (
            <Link
              key={idx}
              href={icon.href}
              className="text-sm text-gray-800 font-medium hover:underline duration-300"
            >
              <icon.icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default AuthFooter;
