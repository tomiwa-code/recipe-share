import React from "react";
import AuthWrapper from "./components/AuthWrapper";
import Image from "next/image";
import bg from "@/constants/bg";
import AuthFooter from "./components/AuthFooter";
import Logo from "@/lib/ui/Logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-black min-h-screen overflow-x-hidden">
      <div className="absolute z-0 inset-0 opacity-90">
        <Image
          src={bg.auth_bg_img}
          alt="Auth Background"
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-center"
          priority
        />
      </div>

      <header className="w-full mx-auto h-fit relative container px-4 md:px-8 lg:px-16 pt-8">
        <Logo />
      </header>

      <AuthWrapper>{children}</AuthWrapper>

      <AuthFooter />
    </div>
  );
};

export default AuthLayout;
