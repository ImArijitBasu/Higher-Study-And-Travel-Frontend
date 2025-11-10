"use client";

import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const TriBanner = () => {
    return (
        <div className="relative w-full container mx-auto h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg group">
            {/* Background Image */}
            <Image
                src="/plane-bg.jpg" 
                alt="Travel Banner"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 ease-in-out group-hover:scale-110"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 space-y-5">
                {/* Heading */}
                <h1 className="text-white text-3xl md:text-5xl lg:text-[54px] font-bold text-center leading-tight drop-shadow-lg">
                    Find Your Dream Destination
                </h1>

                {/* Search Section */}
              
                
            </div>
        </div>
    );
};

export default TriBanner;
