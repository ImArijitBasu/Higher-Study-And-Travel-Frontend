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
  { id: 3, image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86", destination: "Kuala Lumpur, Malaysia", duration: "3h 55m, direct", dates: "Fri 21/11 → Thu 27/11", price: "from Tk 34,682" },
  { id: 4, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", destination: "Bangkok, Thailand", duration: "2h 40m, direct", dates: "Tue 4/11 → Tue 11/11", price: "from Tk 36,137" },
  { id: 5, image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86", destination: "Dubai, UAE", duration: "5h 30m, direct", dates: "Mon 10/11 → Fri 14/11", price: "from Tk 58,220" },
  { id: 6, image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", destination: "Tokyo, Japan", duration: "7h 10m, direct", dates: "Wed 12/11 → Mon 17/11", price: "from Tk 69,300" },
  { id: 7, image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba", destination: "Sydney, Australia", duration: "10h 45m, 1 stop", dates: "Fri 21/11 → Thu 27/11", price: "from Tk 95,600" },
  { id: 8, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c", destination: "Rome, Italy", duration: "10h 20m, 1 stop", dates: "Sat 15/11 → Fri 21/11", price: "from Tk 77,890" },
];

export default function DestinationsPage() {
  // ================= Destinations Grid =================
  const regions = {
    AFRICA: { countries: ["Morocco", "South Africa"], image: "/images/africa.jpg", icon: "🌍", logo: "/logos/africa-logo.png" },
    AMERICAS: { countries: ["Argentina", "Colombia", "Costa Rica", "Mexico", "United States"], image: "/images/americas.jpg", icon: "🌎", logo: "/logos/america-logo.png" },
    OCEANIA: { countries: ["New Zealand"], image: "/images/oceania.jpg", icon: "🌊", logo: "/logos/oceania-logo.png" },
    ASIA: { countries: ["Indonesia","China","South Korea","Taiwan","Thailand"], image: "/images/asia.jpg", icon: "🗼", logo: "/logos/asia-logo.png" },
    EUROPE: { countries: ["Croatia","Cyprus","Czech Republic","England","France","Georgia","Hungary"], image: "/images/europe.jpg", icon: "🏛️", logo: "/logos/europe-logo.png" },
    IRELAND: { countries: ["Italy","Northern Ireland","Portugal","Scotland","Spain"], image: "/images/ireland.jpg", icon: "🍀", logo: "/logos/ireland-logo.png" },
  };

  const [openRegion, setOpenRegion] = useState<string | null>(null);

  // ================= Travel Deals Carousel Setup =================
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const extendedDeals = [...deals, ...deals];

  useEffect(() => {
    if (containerRef.current) setWidth(containerRef.current.scrollWidth / 2);
    if (!isPaused) startScroll();
    else controls.stop();
  }, [width, isPaused]);

  const startScroll = (startX?: number) => {
    const initialX = startX ?? x.get();
    controls.start({
      x: [initialX, -width],
      transition: { x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } },
    });
  };

  const handleMouseEnter = (index: number) => {
    if (!containerRef.current) return;
    const card = containerRef.current.children[index] as HTMLElement;
    const offsetLeft = card.offsetLeft;
    x.set(-offsetLeft);
    setIsPaused(false);
    startScroll(-offsetLeft);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startScroll();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 pt-20">
      
      {/* ================= Hero Section ================= */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Study Abroad Destinations</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore your dream study locations worldwide, from Europe’s top universities to Asia’s cultural hubs.
        </p>
      </section>

      {/* ================= Destinations Grid ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(regions).map(([region, data]) => {
            const isOpen = openRegion === region;
            return (
              <div key={region} className="relative">
                <div
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
                  onClick={() => setOpenRegion(isOpen ? null : region)}
                >
                  {/* Image & Logo */}
                  <div className="relative h-48 w-full">
                    <Image src={data.image} alt={region} fill className="object-cover" priority />
                    <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md p-2 rounded-lg shadow-md">
                      <Image src={data.logo} alt={`${region} logo`} width={40} height={40} className="rounded-md" />
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                      <div className="text-6xl mb-2">{data.icon}</div>
                      <h2 className="text-3xl font-bold">{region}</h2>
                      <p className="text-white/90 mt-1">{data.countries.length} destinations</p>
                    </div>
                  </div>

                  {/* Short country list */}
                  <div className="p-6">
                    {data.countries.slice(0, 4).map(c => (
                      <div key={c} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <Link href={`/destinations/${c.toLowerCase().replace(/[,\s]+/g,"-")}`} className="text-gray-700 hover:text-blue-600 font-medium">{c}</Link>
                      </div>
                    ))}
                    {data.countries.length > 4 && (
                      <div className="text-sm text-gray-500 mt-2 pl-5">+{data.countries.length-4} more countries</div>
                    )}
                  </div>

                  {/* Dropdown */}
                  <div className={`absolute left-0 right-0 bottom-0 translate-y-full bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 z-10 ${isOpen ? "opacity-100 visible translate-y-2" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2"}`}>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <span>All {region} Destinations</span>
                        <div className="w-3 h-3 rounded-full ml-2 bg-blue-500"></div>
                      </h3>
                      <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto">
                        {data.countries.map(c => (
                          <Link key={c} href={`/destinations/${c.toLowerCase().replace(/[,\s]+/g,"-")}`} className="flex items-center py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            <span className="text-gray-700 hover:text-blue-600 font-medium flex-1">{c}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ================= Travel Deals Carousel ================= */}
      <section className="py-16 px-6 font-sans select-none container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">✈️ Travel Deals</h2>
        <div className="overflow-hidden cursor-grab" ref={containerRef}>
          <motion.div
            animate={controls}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -width, right: 0 }}
            dragElastic={0.15}
            className="flex space-x-6 pb-6"
          >
            {extendedDeals.map((deal,index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="min-w-[280px] bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image src={deal.image} alt={deal.destination} fill className="object-cover rounded-3xl" />
                </div>
                <div className="p-5 flex flex-col justify-between h-[200px]">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{deal.destination}</h3>
                    <p className="text-sm text-gray-500">{deal.duration}</p>
                    <p className="text-base font-semibold mt-2 text-blue-600">{deal.price}</p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700 transition-colors font-semibold mt-3">Book Now</button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  );
}
