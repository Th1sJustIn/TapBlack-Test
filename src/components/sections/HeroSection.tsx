"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  backgroundImage?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  headline = "Tap. Share. Connect.",
  subheadline = "Instantly share your digital presence with a simple tap. The modern way to network.",
  ctaText = "Get Your Card Now",
  backgroundImage = "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1920&q=80",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[800px] bg-background text-foreground overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="People using TapBlack cards"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-6">
        <div className="max-w-3xl">
          {/* Accent element */}
          <div className="w-20 h-1.5 bg-accent mb-8"></div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl">
            {subheadline}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={onCtaClick}
              size="lg"
              className={cn(
                "bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 h-auto text-lg",
                "transition-all duration-300 transform hover:translate-y-[-2px]",
              )}
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 bg-transparent text-foreground hover:bg-primary/10 hover:text-foreground px-8 py-6 h-auto text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Floating card visual */}
        <div className="absolute bottom-[-100px] right-[5%] hidden lg:block">
          <div className="relative w-[300px] h-[180px] bg-gradient-to-br from-primary to-accent rounded-xl shadow-2xl transform rotate-[-5deg]">
            <div className="absolute inset-1 bg-black/80 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-primary text-sm font-medium mb-1">
                  TapBlack Express
                </div>
                <div className="text-white text-lg font-bold">
                  Your Digital Identity
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="text-sm text-gray-400 mb-2">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
