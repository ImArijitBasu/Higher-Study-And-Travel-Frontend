"use client";

import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";

const MainBanner = () => {
  return (
    <section
      className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center text-gray-900 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, #e0f7fa 0%, #b3e5fc 40%, #e3f2fd 100%)`, // ❄️ Ice-blue gradient
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optional light overlay for depth */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-gray-900">
          Study and Travel for{" "}
          <span className="text-cyan-600">Everyone</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
          Quality education and incredible destinations — your dream study abroad program made affordable.
        </p>

        {/* Tagline */}
        <div className="my-8 flex justify-center">
          <span className="bg-white/50 backdrop-blur-sm px-6 py-2 text-lg font-semibold text-cyan-600 rounded-full shadow-sm">
            Cut the cost, not the experience.
          </span>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search for programs..."
              className="w-full py-3 pl-6 pr-16 rounded-full bg-white/60 backdrop-blur-md border border-white/40 text-gray-900 placeholder-gray-600 focus:bg-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 text-base"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-3 shadow-md hover:shadow-cyan-400/40 transition-all duration-300">
                <FaSearch size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-8">
          <Button className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white text-base font-semibold px-10 py-5 rounded-full shadow-lg hover:shadow-cyan-300/40 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
            <Link href="/u/scholarships">Find a Program</Link>
            <AiOutlineDoubleRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/30 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-600 mb-1">500+</div>
            <div className="text-gray-700 text-sm">Partner Universities</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-600 mb-1">50+</div>
            <div className="text-gray-700 text-sm">Countries Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-600 mb-1">10K+</div>
            <div className="text-gray-700 text-sm">Students Placed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
