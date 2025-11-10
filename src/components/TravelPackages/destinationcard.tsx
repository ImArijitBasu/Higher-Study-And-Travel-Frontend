"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FiStar,
  FiMapPin,
  FiCalendar,
  FiHeart,
  FiShare2,
  FiEye,
  FiClock,
  FiUsers,
  FiBook,
  FiAward,
  FiCheck,
} from "react-icons/fi";

interface DestinationCardProps {
  image: string;
  title: string;
  price: string;
  days: string;
  rating: number;
  country?: string;
  university?: string;
  duration?: string;
  type?: string;
  features?: string[];
  discount?: string;
  bestseller?: boolean;
  viewMode?: "grid" | "list";
  reviews?: number;
  students?: number;
  level?: "Beginner" | "Intermediate" | "Advanced";
  language?: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  image,
  title,
  price,
  days,
  rating,
  country = "Multiple Countries",
  university = "Various Universities",
  duration = "Flexible",
  type = "Study Program",
  features = ["Cultural Activities", "Academic Sessions"],
  discount,
  bestseller = false,
  viewMode = "grid",
  reviews = 128,
  students = 250,
  level = "Intermediate",
  language = "English",
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  /** ---------- Rating Star Renderer ---------- **/
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, index) => {
          if (index < fullStars)
            return <FiStar key={index} className="w-3 h-3 text-amber-400 fill-amber-400" />;
          if (index === fullStars && hasHalfStar)
            return (
              <div key={index} className="relative">
                <FiStar className="w-3 h-3 text-gray-300" />
                <div className="absolute inset-0 w-1/2 overflow-hidden">
                  <FiStar className="w-3 h-3 text-amber-400 fill-amber-400" />
                </div>
              </div>
            );
          return <FiStar key={index} className="w-3 h-3 text-gray-300" />;
        })}
        <span className="ml-1 text-sm font-semibold text-gray-900">{rating}</span>
        <span className="text-xs text-gray-500 ml-1">({reviews})</span>
      </div>
    );
  };

  /** ---------- Level Badge Color ---------- **/
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-700 border-green-200";
      case "Intermediate":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Advanced":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  /** ---------- Shared Badge Component ---------- **/
  const Badge = ({
    text,
    gradient,
  }: {
    text: string;
    gradient: string;
  }) => (
    <span
      className={`bg-gradient-to-r ${gradient} text-white px-3 py-1.5 rounded-xl text-xs font-semibold shadow-md border border-white/20`}
    >
      {text}
    </span>
  );

  /** ---------- GRID VIEW ---------- **/
  if (viewMode === "grid") {
    return (
      <div className="group relative h-full">
        <div className="flex flex-col bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
          {/* Image */}
          <div className="relative h-60 sm:h-64 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {bestseller && <Badge text="⭐ Bestseller" gradient="from-amber-500 to-orange-500" />}
              {discount && <Badge text={`🎯 ${discount}`} gradient="from-green-500 to-emerald-500" />}
            </div>

            {/* Rating */}
            <div className="absolute top-3 right-3 bg-black/80 text-white px-2.5 py-1 rounded-xl flex items-center gap-1 text-sm">
              <FiStar className="fill-amber-400 text-amber-400" />
              {rating}
            </div>

            {/* Action Buttons */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-2 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                    isLiked
                      ? "bg-red-500 border-red-500 text-white"
                      : "bg-white/20 border-white/30 text-white hover:bg-red-500 hover:border-red-500"
                  }`}
                >
                  <FiHeart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                </button>
                <button className="p-2 rounded-xl bg-white/20 border border-white/30 text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300">
                  <FiShare2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6 flex flex-col flex-1">
            {/* Meta Info */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <FiMapPin className="text-cyan-500 w-4 h-4" />
              <span>{country}</span>
              <span className="text-gray-400">•</span>
              <span>{university}</span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-cyan-700 transition-colors">
              {title}
            </h3>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {features.slice(0, 2).map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2.5 py-1.5 border border-gray-200"
                >
                  <FiCheck className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-gray-700">{f}</span>
                </div>
              ))}
              {features.length > 2 && (
                <div className="bg-gray-50 rounded-lg px-2.5 py-1.5 border border-gray-200 text-xs text-gray-700">
                  +{features.length - 2} more
                </div>
              )}
            </div>

            {/* Duration & Rating */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-xl px-3 py-1.5">
                <FiClock className="text-cyan-500" />
                <span>{days} days</span>
              </div>
              {renderStars(rating)}
            </div>

            {/* Bottom Section */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">{price}</div>
                <div className="text-xs text-gray-500">total package</div>
              </div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-transform transform hover:scale-105 flex items-center gap-2">
                <FiEye className="w-4 h-4" />
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /** ---------- LIST VIEW ---------- **/
  return (
    <div className="group relative bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col xl:flex-row">
      {/* Image */}
      <div className="relative xl:w-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}

        {/* Overlay Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {bestseller && <Badge text="⭐ Bestseller" gradient="from-amber-500 to-orange-500" />}
          {discount && <Badge text={`🎯 ${discount}`} gradient="from-green-500 to-emerald-500" />}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 xl:p-8 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">
              {title}
            </h3>
            {renderStars(rating)}
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-2 bg-cyan-50 px-3 py-1.5 rounded-xl">
              <FiMapPin className="text-cyan-600" /> {country}
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-xl">
              <FiBook className="text-blue-600" /> {university}
            </div>
            <div className="flex items-center gap-2 bg-purple-50 px-3 py-1.5 rounded-xl">
              <FiClock className="text-purple-600" /> {duration}
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-2">
              <FiAward className="text-amber-500" /> {language}
            </div>
            <div className="flex items-center gap-2">
              <FiUsers className="text-green-500" /> {students.toLocaleString()}+ students
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {features.slice(0, 4).map((feature, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-50 px-3 py-2 border border-gray-200 rounded-xl">
                <FiCheck className="w-3 h-3 text-green-500" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
          <div>
            <div className="text-3xl font-bold text-gray-900">{price}</div>
            <div className="text-sm text-gray-500 flex items-center gap-1">
              <FiCalendar className="w-4 h-4" /> {days} days • All inclusive
            </div>
          </div>

          <div className="flex gap-3">
            <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all font-semibold">
              <FiEye className="w-4 h-4 inline mr-2" /> Preview
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 font-semibold shadow-lg transition-all hover:scale-105">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
