"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaMoneyBillWave, FaStar } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsCalendarEvent, BsGlobe, BsAward } from "react-icons/bs";
import { UniversityCardProps } from "@/types";

export function UniversityCard({
  universityName,
  programName,
  location,
  worldRank,
  degree,
  intakeDate,
  entryScore,
  tuitionFee,
  image,
  featured,
}: UniversityCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 overflow-hidden hover:translate-y-[-4px]">
      {/* Header with Image */}
      <div className="relative h-48 bg-gradient-to-r from-blue-600 to-cyan-600 overflow-hidden">
        <Image
          src={image}
          alt={universityName}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <FaStar size={12} />
              Featured
            </span>
          </div>
        )}

        {/* Favorite Button */}
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
        >
          {isFavorite ? (
            <AiFillHeart className="text-red-500 text-xl" />
          ) : (
            <AiOutlineHeart className="text-white text-xl" />
          )}
        </button>

        {/* University Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-lg leading-tight mb-1 line-clamp-2">
            {programName}
          </h3>
          <p className="text-blue-200 text-sm font-medium">
            {universityName}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* World Ranking Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
            <BsAward className="text-blue-600" />
            <span className="text-sm font-semibold">World Rank #{worldRank}</span>
          </div>
          <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {degree}
          </div>
        </div>

        {/* Key Information */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-700">
            <FaMapMarkerAlt className="text-gray-400 flex-shrink-0" />
            <span className="text-sm">{location}</span>
          </div>
          
          <div className="flex items-center gap-3 text-gray-700">
            <BsCalendarEvent className="text-gray-400 flex-shrink-0" />
            <span className="text-sm">
              <strong>Intake:</strong> {intakeDate}
            </span>
          </div>
          
          <div className="flex items-center gap-3 text-gray-700">
            <BsGlobe className="text-gray-400 flex-shrink-0" />
            <span className="text-sm">
              <strong>Entry:</strong> {entryScore}
            </span>
          </div>
          
          <div className="flex items-center gap-3 text-gray-700">
            <FaMoneyBillWave className="text-gray-400 flex-shrink-0" />
            <span className="text-sm font-semibold text-green-600">
              {tuitionFee}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow-lg hover:shadow-blue-500/25">
            Check Eligibility
          </button>
          <button className="flex-1 border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-gray-700 font-medium py-3 px-4 rounded-xl text-sm transition-all duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}