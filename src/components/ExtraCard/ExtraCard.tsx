"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGlobeAmericas } from "react-icons/fa"; // 🌍 added React icon

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
  { id: 9, image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", destination: "Istanbul, Turkey", duration: "8h 5m, direct", dates: "Mon 18/11 → Sun 23/11", price: "from Tk 64,420" },
  { id: 10, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c", destination: "New York, USA", duration: "14h 50m, 1 stop", dates: "Wed 26/11 → Tue 2/12", price: "from Tk 120,850" },
  { id: 11, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGtyEQSbs-6HMGsvoAPPCkbEv-O5HmD9X9Q&s", destination: "Cape Town, South Africa", duration: "11h 30m, 1 stop", dates: "Sun 23/11 → Sat 29/11", price: "from Tk 88,600" },
  { id: 12, image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", destination: "Santorini, Greece", duration: "9h 20m, 1 stop", dates: "Fri 14/11 → Thu 20/11", price: "from Tk 72,300" },
];

export default function ExtraCard() {
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

    const startScroll = () => {
      controls.start({
        x: [x.get(), -width],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    };

    if (!isPaused) startScroll();
    else controls.stop();
  }, [controls, width, isPaused]);

  return (
    <section className="py-4 px-6 font-sans select-none container mx-auto">
      {/* Updated professional header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3">
          <FaGlobeAmericas className="text-4xl text-blue-600" />
          <h2 className="text-4xl font-extrabold text-gray-900">
            Exclusive <span className="text-blue-600">Global Destinations</span>
          </h2>
        </div>
        <p className="text-gray-800 mt-3 text-base max-w-3xl mx-auto">
          Explore our curated list of premium destinations from around the world — designed for unforgettable journeys and cultural discovery.
        </p>
      </div>

      {/* Carousel Section */}
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
              transition={{ type: "spring", stiffness: 300 }}
              className="min-w-[280px] bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={deal.image}
                  alt={deal.destination}
                  fill
                  className="object-cover rounded-3xl p-3"
                />
              </div>

              <div className="p-5 flex flex-col justify-between h-[200px]">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{deal.destination}</h3>
                  <p className="text-sm text-gray-500">{deal.duration}</p>
                  <p className="text-base font-semibold mt-2 text-blue-600">{deal.price}</p>
                </div>
                <button className="btn btn-info rounded-2xl mt-3">Book Now</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* See More Button */}
      <div className="mt-10 flex items-center justify-center">
        <Link
          href="u/destinations"
          className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
        >
          See More Destinations
          
        </Link>
      </div>
    </section>
  );
}
