import type { Metadata } from "next";
import { Courgette, Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/lib/ui/Navbar";
import Footer from "@/lib/ui/Footer";
import ScrollToTop from "@/lib/ui/ScrollToTop";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-courgette",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Recipe Share",
  description: "Share and discover delicious recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${courgette.variable} antialiased`}
      >
        <NuqsAdapter>
          <NextTopLoader showSpinner={false} color="#fb2c36" />
          <Toaster position="bottom-right" richColors />
          <Navbar />
          {children}
          <ScrollToTop />
          <Footer />
        </NuqsAdapter>
      </body>
    </html>
  );
}
