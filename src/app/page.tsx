import Image from "next/image";
import Link from "next/link";

// Import components
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white">
      <div className="w-full">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        {/* Testimonials section removed as it's not available */}
        <CtaSection />
        // <Footer />
      </div>
    </main>
  );
}
