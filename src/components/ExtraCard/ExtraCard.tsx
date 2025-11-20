"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaGlobeAmericas,
  FaPlane,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight,
  FaStar,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
  FaRegClock,
} from "react-icons/fa";
import { Button } from "flowbite-react";

interface Deal {
  id: number;
  image: string;
  destination: string;
  country: string;
  duration: string;
  dates: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  discount?: string;
  popular: boolean;
}

const deals: Deal[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    destination: "Bali",
    country: "Indonesia",
    duration: "1h 15m, direct",
    dates: "Mon 24/11 → Fri 28/11",
    price: "Tk 18,450",
    originalPrice: "Tk 21,700",
    rating: 4.8,
    reviews: 1247,
    discount: "15% OFF",
    popular: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    destination: "Paris",
    country: "France",
    duration: "11h 30m, 1 stop",
    dates: "Fri 14/11 → Fri 21/11",
    price: "Tk 82,540",
    rating: 4.9,
    reviews: 2893,
    discount: "10% OFF",
    popular: true,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    destination: "Kuala Lumpur",
    country: "Malaysia",
    duration: "3h 55m, direct",
    dates: "Fri 21/11 → Thu 27/11",
    price: "Tk 34,682",
    originalPrice: "Tk 43,350",
    rating: 4.6,
    reviews: 892,
    discount: "20% OFF",
    popular: false,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    destination: "Bangkok",
    country: "Thailand",
    duration: "2h 40m, direct",
    dates: "Tue 4/11 → Tue 11/11",
    price: "Tk 36,137",
    rating: 4.7,
    reviews: 1567,
    popular: true,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    destination: "Dubai",
    country: "UAE",
    duration: "5h 30m, direct",
    dates: "Mon 10/11 → Fri 14/11",
    price: "Tk 58,220",
    originalPrice: "Tk 66,160",
    rating: 4.8,
    reviews: 2034,
    discount: "12% OFF",
    popular: false,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    destination: "Tokyo",
    country: "Japan",
    duration: "7h 10m, direct",
    dates: "Wed 12/11 → Mon 17/11",
    price: "Tk 69,300",
    rating: 4.9,
    reviews: 3125,
    popular: true,
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    destination: "Sydney",
    country: "Australia",
    duration: "10h 45m, 1 stop",
    dates: "Fri 21/11 → Thu 27/11",
    price: "Tk 95,600",
    originalPrice: "Tk 103,900",
    rating: 4.7,
    reviews: 1876,
    discount: "8% OFF",
    popular: false,
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    destination: "Rome",
    country: "Italy",
    duration: "10h 20m, 1 stop",
    dates: "Sat 15/11 → Fri 21/11",
    price: "Tk 77,890",
    rating: 4.8,
    reviews: 2456,
    popular: true,
  },
];

export default function DestinationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  // const x = useMotionValue(0);
  // const controls = useAnimation();

  const itemsPerView = 4; // Number of cards visible at once
  const totalItems = deals.length;

  // Create infinite loop by duplicating the array
  const extendedDeals = [...deals, ...deals, ...deals];
  // const extendedTotalItems = extendedDeals.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play functionality with infinite loop
  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        // Reset to beginning when reaching the end of original content
        if (nextIndex >= totalItems) {
          return 0;
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, isVisible, totalItems]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      ref={carouselRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 to-cyan-100/30 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-100/30 to-teal-100/20 rounded-full blur-3xl opacity-60"></div>

      <div className="relative z-10 max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="flex justify-center items-center gap-4 mb-6"
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-600"></div>
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full opacity-20 blur-sm"
              ></motion.div>
              <FaGlobeAmericas className="w-12 h-12 text-blue-600 relative z-10" />
            </div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-emerald-600"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Destinations
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our handpicked selection of amazing destinations around the
            world. Curated for unforgettable experiences and adventures.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="relative"
        >
          {/* Navigation Arrows */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl border border-gray-100 flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-3xl"
          >
            <FaChevronLeft className="text-gray-700 w-5 h-5" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl border border-gray-100 flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-3xl"
          >
            <FaChevronRight className="text-gray-700 w-5 h-5" />
          </motion.button>

          {/* Carousel Track - changed by arijit */}
          <div className="overflow-hidden px-12">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {extendedDeals.map((deal, index) => (
                <motion.div
                  key={`${deal.id}-${index}`}
                  variants={{
                    hidden: { y: 50, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  className="flex-shrink-0 w-1/4 px-2 py-10 flex" // flex added
                  whileHover="hover"
                  onHoverStart={() => setIsAutoPlaying(false)}
                  onHoverEnd={() => setIsAutoPlaying(true)}
                >
                  <motion.div
                    variants={{
                      hidden: { y: 30, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                      hover: {
                        y: -8,
                        scale: 1.02,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        },
                      },
                    }}
                    className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-500 group flex flex-col flex-1"
                  >
                    {/* Image Container */}
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={deal.image}
                        alt={deal.destination}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                      {deal.popular && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: (index % totalItems) * 0.1 + 0.5,
                          }}
                          className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                        >
                          Popular
                        </motion.div>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleFavorite(deal.id)}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <FaHeart
                          className={`text-lg transition-colors duration-300 ${
                            favorites.includes(deal.id)
                              ? "text-red-500 fill-red-500"
                              : "text-gray-400 hover:text-red-400"
                          }`}
                        />
                      </motion.button>
                      {deal.discount && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: (index % totalItems) * 0.1 + 0.7,
                          }}
                          className="absolute bottom-4 left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                        >
                          {deal.discount}
                        </motion.div>
                      )}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (index % totalItems) * 0.1 + 0.9 }}
                        className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm"
                      >
                        <FaStar className="text-yellow-400 text-xs" />
                        <span className="font-semibold">{deal.rating}</span>
                        <span className="text-xs opacity-80">
                          ({deal.reviews})
                        </span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors duration-300">
                          {deal.destination}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <FaMapMarkerAlt className="text-blue-500" />
                          <span>{deal.country}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <FaPlane className="text-emerald-500" />
                        <span>{deal.duration}</span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <FaCalendarAlt className="text-purple-500" />
                        <span>{deal.dates}</span>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 h-28">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">
                            {deal.price}
                          </p>
                          {deal.originalPrice && (
                            <p className="text-sm text-gray-500 line-through">
                              {deal.originalPrice}
                            </p>
                          )}
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group/btn"
                        >
                          <span>Book</span>
                          <FaArrowRight className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-b from-cyan-300 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center mt-8 space-x-3"
          >
            {Array.from({ length: totalItems }).map((_, index) => (
              <Button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-600 to-emerald-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.02 }} className="inline-block">
            <Link
              href="/u/destinations"
              className="relative bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold px-12 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 flex items-center gap-3 group overflow-hidden"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              <span className="relative z-10">
                Explore All 50+ Destinations
              </span>
              <FaArrowRight className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-gray-500 text-sm mt-6 flex items-center justify-center gap-2"
          >
            <FaRegClock className="text-blue-500" />
            <span>Limited time offers - Book now to secure your spot!</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
