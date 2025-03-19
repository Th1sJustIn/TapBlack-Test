"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CtaSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundClass?: string;
}

const CtaSection = ({
  title = "Ready to transform your networking experience?",
  description = "Get your TapBlack card today and start sharing your digital presence with a simple tap. Join thousands of professionals who've already made the switch.",
  buttonText = "Get Your Card Now",
  buttonLink = "/order",
  backgroundClass = "bg-gradient-to-br from-black via-gray-900 to-gray-800",
}: CtaSectionProps) => {
  return (
    <section
      className={cn(
        "w-full py-24 px-4 md:px-8 flex flex-col items-center justify-center text-center",
        backgroundClass,
      )}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="animate-pulse-slow">
          <Link href={buttonLink}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-gray-800 overflow-hidden"
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-gray-400 text-sm">Joined this month</span>
          </div>
          <div className="flex items-center">
            <div className="mr-3 bg-gray-800 px-3 py-1 rounded-full">
              <span className="text-green-400 font-semibold">4.9/5</span>
            </div>
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
