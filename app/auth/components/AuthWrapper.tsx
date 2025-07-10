"use client";
import React from "react";

import { Button } from "@/lib/ui/Button";
import { GoogleIcon } from "@/lib/ui/CustomIcons";
import AuthInfo from "./AuthInfo";

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  return (
    <main className="w-full relative overflow-x-hidden">
      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-8 lg:px-16 md:pt-16 gap-y-8 flex flex-col min-h-[85vh] md:min-h-[80vh] justify-center pb-20 md:pb-0">
        <div className="flex flex-col md:flex-row gap-y-8 items-center md:gap-x-8 lg:gap-x-20 2xl:gap-x-28">
          <div className="w-full md:max-w-md md:min-h-[500px] justify-center flex-col flex shadow-lg px-6 bg-foreground md:px-8 lg:px-10 py-8">
            <div className="w-full">
              <Button className="w-full rounded-full h-12 bg-white">
                <GoogleIcon />
                Continue with Google
              </Button>

              <div className="my-3 flex items-center gap-x-3">
                <div className="flex-1 h-0.5 bg-gray" />
                <div className="w-fit">
                  <p className="text-sm text-gray-500">or</p>
                </div>
                <div className="flex-1 h-0.5 bg-gray" />
              </div>
            </div>

            {children}
          </div>

          <AuthInfo />
        </div>
      </div>
    </main>
  );
};

export default AuthWrapper;
