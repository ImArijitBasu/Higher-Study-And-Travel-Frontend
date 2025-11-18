"use client";

import React from "react";
import Image from "next/image";

const UniBanner = () => {
  return (
    <div className="relative w-full container mx-auto h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg group">
      <Image
        src="/HERO-Oxford_1231106194.jpg" 
        alt="University Banner"
        fill
        style={{ objectFit: "cover" }}
        className="transition-transform duration-700 ease-in-out group-hover:scale-110"
        priority
      />
      <div className="absolute inset-0 bg-black/40 bg-opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h1 className="text-white text-3xl md:text-5xl lg:text-[64px] font-bold text-center leading-tight drop-shadow-lg uppercase">
          Find Your Dream University
        </h1>
      </div>
    </div>
  );
};

export default UniBanner;
