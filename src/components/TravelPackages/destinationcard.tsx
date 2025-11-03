"use client";
import React from "react";
import Image from "next/image";

interface DestinationCardProps {
  image: string;
  title: string;
  price: string;
  days: string;
  rating: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  image,
  title,
  price,
  days,
  rating,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[280px] md:w-[300px] group">
 
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="w-full h-[180px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
        />
      <span className="absolute top-2 right-2 bg-white/10 text-black text-xs font-semibold px-2 py-1 rounded-full ">
  {rating}
</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600 mb-3">
          {price}/{days} Days
        </p>
        <button className="bg-sky-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-sky-500 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
