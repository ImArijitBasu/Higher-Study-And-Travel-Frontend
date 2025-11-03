"use client";

import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const TriBanner = () => {
    return (
        <div className="relative w-full container mx-auto h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg group">
            {/* Background Image */}
            <Image
                src="/plane-bg.jpg" // তোমার background image path
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
                <div>
                    {/* Search Input */}
                    <div className="relative ">
                      <div className="">
                          <FaSearch className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search Destinations"
                            className="pl-10 px-5 pr-4 py-2 w-[280px] md:w-[300px] rounded-full bg-white/80 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-3">
                    {/* Country Dropdown */}
                    <select className="px-4 py-2 rounded-full bg-white/80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option>Country</option>
                        <option>Bangladesh</option>
                        <option>Thailand</option>
                        <option>Maldives</option>
                    </select>

                    {/* Activities Dropdown */}
                    <select className="px-8 py-2 rounded-full bg-white/80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option>Activities</option>
                        <option>Beach</option>
                        <option>Hiking</option>
                        <option>City Tour</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default TriBanner;
