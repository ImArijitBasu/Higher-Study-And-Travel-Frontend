"use client";
import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCalendarEvent, BsGlobe } from "react-icons/bs";
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
}: UniversityCardProps) {
//   console.log({
//   universityName,
//   programName,
//   location,
//   worldRank,
//   degree,
//   intakeDate,
//   entryScore,
//   tuitionFee,
//   image,
//   featured,
// });

  return (
    <div className="w-full bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col justify-between">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-3">
        <AiOutlineHeart className="text-gray-400 text-xl hover:text-red-500 cursor-pointer" />
      </div>
      {/* University Logo */}
      <div className="flex justify-around mb-4">
        <Image
          src={
            image ||
            "https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/University_of_Melbourne_coat_of_arms.svg/800px-University_of_Melbourne_coat_of_arms.svg.png"
          }
          alt={universityName}
          width={64}
          height={64}
          className="object-contain"
          unoptimized
        />
        <div className="">
          <h3 className="text-lg font-semibold text-blue-700 text-center leading-tight mb-1">
        {programName}
      </h3>
      <p className="text-gray-700 text-sm text-center mb-4">
        {universityName}
      </p>
        </div>
      </div>

      {/* Title */}
      

      {/* Info Section */}
      <div className="space-y-2 text-gray-600 text-sm">
        <p className="flex items-center gap-2">
          <BsGlobe className="text-gray-500" />
          THE World Ranking: <span className="font-medium">{worldRank}</span>
        </p>
        <p className="flex items-center gap-2">
          <IoIosSchool className="text-gray-500" />
          {degree}
        </p>
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-500" />
          {location}
        </p>
        <p className="flex items-center gap-2">
          <BsCalendarEvent className="text-gray-500" />
          Next intake: <span className="font-medium">{intakeDate}</span>
        </p>
        <p className="flex items-center gap-2">
          <BsGlobe className="text-gray-500" />
          Entry Score: <span className="font-medium">{entryScore}</span>
        </p>
        <p className="flex items-center gap-2">
          <FaMoneyBillWave className="text-gray-500" />
          {tuitionFee}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 mt-5">
        <button className="bg-[#0070C0] hover:bg-[#005999] text-white font-semibold py-2.5 rounded-md text-sm transition-all">
          See if I qualify
        </button>
        <button className="border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium py-2.5 rounded-md text-sm transition-all">
          View details
        </button>
      </div>
    </div>
  );
}
