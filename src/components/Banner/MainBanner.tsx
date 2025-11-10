"use client";

import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { Button } from "../ui/button";

const MainBanner = () => {
  return (
    <section 
      className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-gray-900 mx-auto  "
      style={{
        backgroundImage: `linear-gradient(to right, #e0f7fa, #c2f0fc, #f0fcff), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center pt-10 ">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Study and Travel for <span className="text-cyan-500">Everyone</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed max-w-4xl mx-auto">
          Quality education, incredible destinations—your dream study abroad program, for less.
        </p>

        {/* Highlighted Tagline */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white/40 px-6 text-xl font-semibold text-cyan-500 rounded-2xl">
              Cut the cost, not the experience.
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search for programs..."
              className="w-full py-3 pl-6 pr-16 rounded-full bg-white/40 backdrop-blur-sm border border-white/30 text-gray-900 placeholder-gray-600 focus:bg-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-base"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-3 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                <FaSearch size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="flex justify-center mb-6">
          <Button className=" bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 text-white text-base font-semibold px-10 py-5 rounded-full shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
            Find a Program
            <AiOutlineDoubleRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Additional Info Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-500 mb-1">500+</div>
            <div className="text-gray-700 text-sm">Partner Universities</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-500 mb-1">50+</div>
            <div className="text-gray-700 text-sm">Countries Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-500 mb-1">10K+</div>
            <div className="text-gray-700 text-sm">Students Placed</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-300 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
