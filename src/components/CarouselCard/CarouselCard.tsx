"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaCompass } from "react-icons/fa";

interface Story {
  id: number;
  imageUrl: string;
  title: string;
}

const storiesData: Story[] = [
  { id: 1, imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", title: "Bali, Indonesia" },
  { id: 2, imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", title: "Paris, France" },
  { id: 3, imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", title: "Swiss Alps, Switzerland" },
  { id: 4, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4sX87VY9hnQGyebt2t0aYuu9bpKDhhokOw&s", title: "Kyoto, Japan" },
  { id: 5, imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", title: "Sahara Desert, Morocco" },
  { id: 6, imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", title: "Santorini, Greece" },
  { id: 7, imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86", title: "Patagonia, Chile" },
  { id: 8, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxRqXXqmFW2JKAa_rPiz1ZC5w_uC-rZNFwQ&s", title: "Dubai, UAE" },
  { id: 9, imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", title: "Cappadocia, Turkey" },
];

const CarouselCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setSlideWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="w-full py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Enhanced Header with More Engaging Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4 border border-amber-200"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              🌟 Featured Destinations
            </motion.span>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Next{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-cyan-500">
                  Adventure
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-400"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>{" "}
              Awaits
            </h2>

            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore breathtaking destinations that will ignite your wanderlust and create memories that last a lifetime
            </motion.p>

            {/* Stats Section */}
            <motion.div
              className="flex justify-center items-center gap-8 text-sm text-gray-500"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>50+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>1000+ Travelers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>4.9/5 Rating</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-slate-50 to-transparent z-10" />

          {/* Carousel */}
          <motion.div
            className="flex"
            animate={{
              x: isPaused ? "0px" : ["0px", `-${slideWidth}px`]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...storiesData, ...storiesData].map((story, index) => (
              <motion.div
                key={`${story.id}-${index}`}
                className="flex-shrink-0 w-80 h-96 mx-4 relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
                  y: -10
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Image
                  src={story.imageUrl}
                  alt={story.title}
                  fill
                  className="object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-2xl opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold drop-shadow-2xl">{story.title}</h3>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.div>
                  </div>
                  <p className="text-amber-200 font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    Discover more →
                  </p>
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500/90 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm shadow-lg">
                    ✨ Must Visit
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Call to Action with New Colors & Animations */}
        <motion.div
          className="text-center mt-12 w-11/12 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.4)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-16 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3 mx-auto overflow-hidden"
          >
            {/* Animated background particles */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-emerald-300 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: "50%",
                  }}
                />
              ))}
            </div>

            {/* Double shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-200/20 to-transparent transform -skew-x-12 -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-700 delay-200" />

            {/* Glow border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300 opacity-70 group-hover:opacity-100 -z-10" />

            <span className="relative flex items-center gap-3">
              Start Your Application
              <motion.div
                animate={{
                  x: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaArrowRight className="text-lg" />
              </motion.div>
            </span>

            {/* Pulse ring effect */}
            <motion.div
              className="absolute inset-0 border-2 border-emerald-300/50 rounded-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>

          <motion.p
            className="text-amber-700/80 text-sm mt-6 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            🌍 Join 10,000+ adventurers exploring hidden gems worldwide
          </motion.p>

          {/* Floating elements */}
          <motion.div
            className="flex justify-center gap-2 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {["🗺️", "✈️", "🏝️", "🏔️", "🌆"].map((emoji, index) => (
              <motion.span
                key={index}
                className="text-2xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CarouselCards;