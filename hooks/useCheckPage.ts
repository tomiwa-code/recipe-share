import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useCheckPage = () => {
  const pathname = usePathname();

  // Check if the current page is an auth page
  const isAuthPage = useMemo(() => {
    return pathname.startsWith("/auth");
  }, [pathname]);

  // Check if it is sign up page
  const isSignUpPage = useMemo(() => {
    return pathname === "/auth/sign-up";
  }, [pathname]);

  return { isAuthPage, isSignUpPage };
};
