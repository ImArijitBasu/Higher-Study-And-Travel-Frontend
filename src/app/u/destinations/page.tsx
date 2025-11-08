"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useMotionValue } from "framer-motion";

interface Deal {
  id: number;
  image: string;
  destination: string;
  duration: string;
  dates: string;
  price: string;
}

const deals: Deal[] = [
  { id: 1, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", destination: "Bali, Indonesia", duration: "1h 15m, direct", dates: "Mon 24/11 → Fri 28/11", price: "from Tk 18,450" },
  { id: 2, image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", destination: "Paris, France", duration: "11h 30m, 1 stop", dates: "Fri 14/11 → Fri 21/11", price: "from Tk 82,540" },
  { id: 3, image: "https://images.unsplash.com/photo-1563720223185-96788d7a7e6e", destination: "Kuala Lumpur, Malaysia", duration: "3h 55m, direct", dates: "Fri 21/11 → Thu 27/11", price: "from Tk 34,682" },
  { id: 4, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", destination: "Bangkok, Thailand", duration: "2h 40m, direct", dates: "Tue 4/11 → Tue 11/11", price: "from Tk 36,137" },
  { id: 5, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c", destination: "Dubai, UAE", duration: "5h 30m, direct", dates: "Mon 10/11 → Fri 14/11", price: "from Tk 58,220" },
  { id: 6, image: "https://images.unsplash.com/photo-1540959733332-45e1c2c7c8e1", destination: "Tokyo, Japan", duration: "7h 10m, direct", dates: "Wed 12/11 → Mon 17/11", price: "from Tk 69,300" },
  { id: 7, image: "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a", destination: "Sydney, Australia", duration: "10h 45m, 1 stop", dates: "Fri 21/11 → Thu 27/11", price: "from Tk 95,600" },
  { id: 8, image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b", destination: "Rome, Italy", duration: "10h 20m, 1 stop", dates: "Sat 15/11 → Fri 21/11", price: "from Tk 77,890" },
];

export default function DestinationsPage() {
  const regions = {
    AFRICA: { 
      countries: ["Morocco", "South Africa"], 
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5", 
      icon: "🌍"
    },
    AMERICAS: { 
      countries: ["Argentina", "Colombia", "Costa Rica", "Mexico", "United States"], 
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325", 
      icon: "🌎"
    },
    OCEANIA: { 
      countries: ["New Zealand"], 
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9", 
      icon: "🌊"
    },
    ASIA: { 
      countries: ["Indonesia", "China", "South Korea", "Taiwan", "Thailand"], 
      image: "https://images.unsplash.com/photo-1535139262971-c51845709a48", 
      icon: "🗼"
    },
    EUROPE: { 
      countries: ["Croatia","Cyprus","Czech Republic","England","France","Georgia","Hungary"], 
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b", 
      icon: "🏛️"
    },
    IRELAND: { 
      countries: ["Italy","Northern Ireland","Portugal","Scotland","Spain"], 
      image: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853", 
      icon: "🍀"
    },
  };

  const [openRegion, setOpenRegion] = useState<string | null>(null);

  // ================= Scroll Travel Deals Setup =================
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const extendedDeals = [...deals, ...deals];

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  useEffect(() => {
    if (!isPaused && width > 0) {
      controls.start({
        x: [0, -width],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, width, isPaused]);

  return (
    <main className="min-h-screen bg-white from-blue-50 to-cyan-50 pt-20">

      {/* ================= Hero Section ================= */}
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Study and Travel Destinations</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore your dream study locations worldwide, from Europe  top universities to Asia cultural hubs.
        </p>
      </section>

      {/* ================= Destinations Grid ================= */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(regions).map(([region, data]) => {
            const isOpen = openRegion === region;
            return (
              <div key={region} className="relative">
                <div
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
                  onClick={() => setOpenRegion(isOpen ? null : region)}
                >
                  {/* Image & Icon */}
                  <div className="relative h-48 w-full">
                    <Image 
                      src={data.image} 
                      alt={region} 
                      fill 
                      className="object-cover" 
                      priority 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Icon Badge */}
                    <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md p-2 rounded-lg shadow-md text-2xl">
                      {data.icon}
                    </div>
                    <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white text-center">
                      <div className="text-6xl mb-2">{data.icon}</div>
                      <h2 className="text-3xl font-bold">{region}</h2>
                      <p className="text-white/90 mt-1">{data.countries.length} destinations</p>
                    </div>
                  </div>

                  {/* Short country list */}
                  <div className="p-6">
                    {data.countries.slice(0, 4).map((country) => (
                      <div key={country} className="flex items-center py-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <Link 
                          href={`/destinations/${country.toLowerCase().replace(/[,\s]+/g,"-")}`} 
                          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {country}
                        </Link>
                      </div>
                    ))}
                    {data.countries.length > 4 && (
                      <div className="text-sm text-gray-500 mt-2 pl-5">
                        +{data.countries.length - 4} more countries
                      </div>
                    )}
                  </div>

                  {/* Dropdown */}
                  <div 
                    className={`absolute left-0 right-0 bottom-0 translate-y-full bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 z-10 ${
                      isOpen 
                        ? "opacity-100 visible translate-y-2" 
                        : "opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2"
                    }`}
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <span>All {region} Destinations</span>
                        <div className="w-3 h-3 rounded-full ml-2 bg-blue-500"></div>
                      </h3>
                      <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto">
                        {data.countries.map((country) => (
                          <Link 
                            key={country} 
                            href={`/destinations/${country.toLowerCase().replace(/[,\s]+/g,"-")}`} 
                            className="flex items-center py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            <span className="text-gray-700 hover:text-blue-600 font-medium flex-1">
                              {country}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= Travel Deals Section ================= */}
      <section className="py-16 px-4 font-sans select-none container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">✈️ Travel Deals</h2>

        <div 
          className="overflow-hidden cursor-grab" 
          onMouseEnter={() => setIsPaused(true)} 
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            ref={containerRef}
            animate={controls}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -width, right: 0 }}
            dragElastic={0.15}
            className="flex space-x-6 pb-6"
          >
            {extendedDeals.map((deal, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="min-w-[280px] bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex-shrink-0"
              >
                <div className="relative h-48 w-full">
                  <Image 
                    src={deal.image} 
                    alt={deal.destination}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between h-[200px]">
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-900">
                      {deal.destination}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{deal.duration}</p>
                    <p className="text-sm text-gray-600 mb-2">{deal.dates}</p>
                    <p className="text-base font-semibold text-blue-600">{deal.price}</p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-3 rounded-2xl hover:bg-blue-700 transition-colors font-semibold w-full">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-2xl hover:bg-blue-50 transition-colors font-semibold">
            View All Deals
          </button>
        </div>
      </section>

      {/* ================= CTA Section ================= */}
      <section className="py-16 px-4 text-center bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Find the perfect study abroad program and travel deals all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl hover:bg-blue-50 transition-colors font-semibold">
              Explore Programs
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-3 rounded-2xl hover:bg-white/10 transition-colors font-semibold">
              Contact Advisor
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}