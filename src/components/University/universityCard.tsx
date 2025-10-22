"use client";
import React from "react";
import Image from "next/image";

interface UniversityCardProps {
  universityName: string;
  programType: string;
  availableSemesters: string;
  price: string;
  featured: boolean;
  availablePrograms: string;
  image?: string;
}

export function UniversityCard({
  universityName,
  programType,
  availableSemesters,
  price,
  
  availablePrograms,
  image,
}: UniversityCardProps) {
  return (
    <div className="card bg-base-100 border-2 border-gray-200  shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* ✅ Image Section */}
      <figure className="px-6 pt-6">
        <Image
          src={
            image ||
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
          }
          alt={universityName}
          width={400}
          height={250}
          className="rounded-xl object-cover h-48 w-full"
          unoptimized 
        />
      </figure>

      {/* ✅ Card Body */}
      <div className="card-body items-center text-center">
        {/* Featured Tag */}
        

        <h2 className="card-title text-xl font-bold text-gray-900">
          {universityName}
        </h2>

        <p className="text-gray-600 text-sm">{programType}</p>

        <p className="text-gray-700 text-sm mt-2">
          <span className="font-semibold">Semesters:</span> {availableSemesters}
        </p>

        <p className="text-lg font-bold  mt-2">{price}</p>

       
      </div>
    </div>
  );
}
