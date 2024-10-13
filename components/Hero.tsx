import React from "react";
import { Button } from "./ui/button";
import { Car } from "lucide-react";
import Ripple from "./ui/ripple";
import { Input } from "./ui/input";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full lg:h-[400px] h-[300px] text-white">
      {/* Animated background with Ripple effect */}
      <div className="absolute inset-0 flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <Ripple />
      </div>

      {/* Four logos positioned in the corners */}
      {/* Top-left logo (hidden on mobile, visible on lg) */}
      <Car className="absolute left-4 top-8 lg:left-16 lg:top-12 w-12 h-12 lg:w-16 lg:h-16 text-gray-600 hidden lg:block animate-bounce-slow" />

      {/* Bottom-left logo (hidden on mobile, visible on lg) */}
      <Car className="absolute left-4 bottom-8 lg:left-16 lg:bottom-12 w-12 h-12 lg:w-16 lg:h-16 text-gray-600 hidden lg:block animate-bounce-slow" />

      {/* Top-right logo (hidden on mobile, visible on lg) */}
      <Car className="absolute right-4 top-8 lg:right-16 lg:top-12 w-12 h-12 lg:w-16 lg:h-16 text-gray-600 hidden lg:block animate-bounce-slow" />

      {/* Bottom-right logo (hidden on mobile, visible on lg) */}
      <Car className="absolute right-4 bottom-8 lg:right-16 lg:bottom-12 w-12 h-12 lg:w-16 lg:h-16 text-gray-600 hidden lg:block animate-bounce-slow" />

      {/* Main content with text and search bar */}
      <div className="relative z-10 text-center px-4 transition-all duration-500 ease-in-out">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-black">
          Streamlining B2B Connections In EV Supply Chain
        </h1>
        <p className="text-lg mb-4 text-black">
          Find your trusted suppliers or buyers today
        </p>

        {/* Search Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-2 mx-auto">
          <Input
            type="search"
            placeholder="Search with keywords like castings, bearings..."
            className="lg:w-[600px] sm:w-[300px] bg-white/90 placeholder-gray-500 text-gray-900 border-black focus:ring-2 focus:ring-[#28a745] transition-all duration-300 ease-in-out"
          />
          <Button
            type="submit"
            className="w-full sm:w-auto bg-[#28a745] hover:bg-[#218838] text-white rounded-md px-6 transition-colors duration-300 ease-in-out"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
