"use client";
import React from "react";

import { getCurrentYear } from "../utils";
import { useCheckPage } from "@/hooks/useCheckPage";

const Footer = () => {
  // Check if the current page is an auth page, if so, hide the footer
  const { isAuthPage } = useCheckPage();

  return (
    <footer
      className={`w-full bg-black py-16 rounded-t-4xl ${
        isAuthPage ? "hidden" : ""
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-red-400">
              Recipe Share
            </h3>
            <p className="text-gray-200 text-sm md:text-base">
              Bringing food lovers together through shared recipes and culinary
              experiences.
            </p>
          </div>

          <div>
            <FooterTitle text="Explore" />
            <FooterLinkList
              links={[
                { label: "Popular Recipes", url: "/explore/popular" },
                { label: "New Recipes", url: "/explore/new" },
                { label: "Categories", url: "/explore/categories" },
                { label: "Cuisines", url: "/explore/cuisines" },
              ]}
            />
          </div>

          <div>
            <FooterTitle text="Community" />
            <FooterLinkList
              links={[
                { label: "Top Chefs", url: "/community/top-chefs" },
                { label: "Recipe Contests", url: "/community/contests" },
                { label: "Forums", url: "/community/forums" },
                { label: "Tips & Tricks", url: "/community/tips" },
              ]}
            />
          </div>

          <div>
            <FooterTitle text="Support" />
            <FooterLinkList
              links={[
                { label: "Help Center", url: "/support/help-center" },
                { label: "Contact Us", url: "/support/contact" },
                { label: "Privacy Policy", url: "/support/privacy" },
                { label: "Terms of Service", url: "/support/terms" },
              ]}
            />
          </div>
        </div>

        <div className="border-t border-gray-900 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {getCurrentYear()} RecipeShare. Made with ❤️ for food lovers
            everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterTitle = ({ text }: { text: string }) => {
  return <h4 className="font-semibold mb-4 text-foreground">{text}</h4>;
};

type FooterLink = {
  label: string;
  url: string;
};

const FooterLinkList = ({ links }: { links: FooterLink[] }) => {
  return (
    <ul className="space-y-2 text-gray-200">
      {links.map((link) => (
        <li key={link.url}>
          <a href={link.url}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
};
