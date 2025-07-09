import React from "react";
import HeroSection from "./HeroSection";
import Image from "next/image";
import images from "@/constants/images";
import Link from "next/link";
import { Button } from "@/lib/ui/Button";
import RecipesWrapper from "./RecipesWrapper";
import Features from "./Features";
import BackgroundEffect from "@/lib/ui/BackgroundEffect";

const LandingPageWrapper = () => {
  return (
    <main className="w-full relative min-h-screen overflow-x-hidden">
      <BackgroundEffect />

      <div className="absolute top-0 z-0 left-1/2 -translate-x-1/2 w-[500px]">
        <Image
          src={images.ingredients_2.src}
          alt="ingredient 1"
          width={1000}
          height={1000}
          priority
        />
      </div>
      <div className="absolute right-0 top-0 z-0">
        <Image
          src={images.ingredients_1.src}
          alt="ingredient 1"
          width={1000}
          height={1000}
          priority
        />
      </div>

      <div className="container mx-auto px-4 pb-20 md:px-8 lg:px-16 relative z-10">
        <section id="hero-section" className="mb-20">
          <HeroSection />
        </section>

        <section id="recipes-section" className="mb-16">
          <RecipesWrapper />

          <div className="w-full flex items-center justify-center mt-10">
            <Link href={"/recipes"}>
              <Button
                variant={"outline"}
                className="text-sm text-black/80 border-black/50 bg-transparent py-5 rounded-full hover:tracking-wider duration-300 capitalize"
              >
                discover more recipes
              </Button>
            </Link>
          </div>
        </section>

        <section id="features-section">
          <Features />
        </section>
      </div>
    </main>
  );
};

export default LandingPageWrapper;
