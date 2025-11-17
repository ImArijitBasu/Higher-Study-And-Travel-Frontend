"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import {
  FaSearch,
  FaUniversity,
  FaGlobeAmericas,
  FaUserGraduate,
  FaAward,
  FaStar,
  FaHeart,
} from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const MainBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Countable statistics state
  const [partnerCount, setPartnerCount] = useState(0);
  const [countryCount, setCountryCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [programCount, setProgramCount] = useState(0);

  // Rotating taglines
  const taglines = [
    "Cut the cost, not the experience.",
    "Your global education journey starts here.",
    "Study smarter, travel further.",
    "Affordable excellence in education.",
  ];
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Animate counting for statistics
    const animateCount = (
      setter: (value: number) => void,
      target: number,
      duration: number
    ) => {
      let start = 0;
      const increment = target / (duration / 20);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 20);
    };

    setTimeout(() => {
      animateCount(setPartnerCount, 500, 2000);
      animateCount(setCountryCount, 50, 1500);
      animateCount(setStudentCount, 10000, 2500);
      animateCount(setProgramCount, 1000, 1800);
    }, 1000);

    // Rotate taglines
    const taglineInterval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(taglineInterval);
  }, [taglines.length]);

  // NEW: Geometric Pattern Background
  const GeometricPattern = () => (
    <div className="absolute inset-0 overflow-hidden opacity-40">
      {/* Animated geometric shapes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border-2 border-white/20"
          style={{
            width: Math.random() * 120 + 40,
            height: Math.random() * 120 + 40,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            borderRadius: i % 3 === 0 ? "50%" : i % 3 === 1 ? "20%" : "0%",
            rotate: Math.random() * 360,
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );

  // NEW: Pulsating Grid Background
  const PulsatingGrid = () => (
    <div className="absolute inset-0 opacity-30">
      <motion.div
        className="grid grid-cols-8 grid-rows-6 w-full h-full"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {[...Array(48)].map((_, i) => (
          <motion.div
            key={i}
            className="border border-white/10"
            animate={{
              backgroundColor: [
                "rgba(255,255,255,0.02)",
                "rgba(255,255,255,0.08)",
                "rgba(255,255,255,0.02)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );

  // NEW: Wave Animation Background
  const WaveBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-[200%] h-40 opacity-20"
          style={{
            background: `linear-gradient(90deg, 
              transparent, 
              rgba(255,255,255,0.3), 
              transparent)`,
            top: `${index * 30 + 10}%`,
            rotate: "-2deg",
          }}
          animate={{
            x: [
              index % 2 === 0 ? "-100%" : "0%",
              index % 2 === 0 ? "0%" : "-100%",
            ],
          }}
          transition={{
            duration: 15 + index * 5,
            repeat: Infinity,
            ease: "linear",
            delay: index * 2,
          }}
        />
      ))}
    </div>
  );

  // NEW: Radial Pulse Animation
  const RadialPulse = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border-2 border-cyan-300/30 rounded-full"
          style={{
            width: "100vmax",
            height: "100vmax",
          }}
          animate={{
            scale: [0, 1.5],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );

  // Floating particles (kept but with updated colors)
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 8 + 2,
            height: Math.random() * 8 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background:
              i % 4 === 0
                ? "rgba(255, 255, 255, 0.6)"
                : i % 4 === 1
                ? "rgba(6, 182, 212, 0.5)"
                : i % 4 === 2
                ? "rgba(34, 211, 238, 0.5)"
                : "rgba(59, 130, 246, 0.5)",
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  // NEW: Animated gradient mesh background
  // SIMPLE BACKGROUND ANIMATION
  const SimpleBackground = () => (
    <motion.div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e3a8a, #164e63)",
        backgroundSize: "300% 300%",
      }}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // const itemVariants = {
  //   hidden: { y: 40, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       type: "spring",
  //       stiffness: 100,
  //       damping: 12,
  //     },
  //   },
  // };

  const taglineVariants = {
    enter: { y: 20, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <section className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center text-white overflow-hidden">
      {/* NEW: Mesh Gradient Background */}
      <SimpleBackground />

      {/* NEW: Geometric Pattern */}
      <GeometricPattern />

      {/* NEW: Pulsating Grid */}
      <PulsatingGrid />

      {/* NEW: Wave Animation */}
      <WaveBackground />

      {/* NEW: Radial Pulse */}
      <RadialPulse />

      {/* Enhanced overlay */}
      <motion.div
        className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]"
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Content */}
      <motion.div
        className="relative z-20 w-full max-w-7xl pt-24 mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Heading with enhanced animation */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
              },
            },
          }}
        >
          Study and Travel for{" "}
          <motion.span
            className="inline-block"
            animate={{
              scale: [1, 1.05, 1],
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: "linear-gradient(45deg, #fbbf24, #f59e0b, #fbbf24)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Everyone
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 leading-relaxed max-w-3xl mx-auto"
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
              },
            },
          }}
        >
          Quality education and incredible destinations — your dream study
          abroad program made affordable.
        </motion.p>

        {/* Animated Tagline */}
        <motion.div
          className="my-8 flex justify-center"
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
              },
            },
          }}
        >
          <motion.div
            className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/30 min-h-[48px] flex items-center"
            whileHover={{
              scale: 1.05,
              background: "rgba(255, 255, 255, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTagline}
                className="text-lg font-semibold text-white flex items-center gap-2"
                variants={taglineVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <FaHeart className="text-rose-400" />
                </motion.div>
                {taglines[currentTagline]}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Feature Icons with enhanced animations */}
        <motion.div
          className="flex justify-center gap-8 mb-8"
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
              },
            },
          }}
        >
          {[
            {
              icon: FaUniversity,
              text: "500+ Universities",
              color: "text-cyan-300",
              bg: "bg-cyan-500/20",
            },
            {
              icon: FaGlobeAmericas,
              text: "50+ Countries",
              color: "text-blue-300",
              bg: "bg-blue-500/20",
            },
            {
              icon: FaAward,
              text: "98% Success",
              color: "text-amber-300",
              bg: "bg-amber-500/20",
            },
            {
              icon: FaStar,
              text: "24/7 Support",
              color: "text-emerald-300",
              bg: "bg-emerald-500/20",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.text}
              className="flex flex-col items-center"
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className={`p-3 rounded-xl backdrop-blur-sm border border-white/30 ${feature.color} ${feature.bg} mb-2`}
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                <feature.icon size={20} />
              </motion.div>
              <span className="text-sm text-blue-100 font-medium">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Search Bar */}
        <motion.div className="max-w-2xl mx-auto mb-8" variants={{
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }}>
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for programs"
              className="w-full py-3 pl-6 pr-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-blue-200 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all duration-300 text-base shadow-lg"
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)",
              }}
            />
            <motion.div
              className="absolute right-2 top-1/2 -translate-y-1/2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full p-3 shadow-lg hover:shadow-cyan-400/40 transition-all duration-300">
                <FaSearch size={18} />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Button with gradient animation */}
        <motion.div
          className="flex justify-center mb-8"
          variants={{
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative overflow-hidden rounded-full"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500"
              animate={{
                background: [
                  "linear-gradient(45deg, #3b82f6, #06b6d4)",
                  "linear-gradient(45deg, #06b6d4, #0ea5e9)",
                  "linear-gradient(45deg, #0ea5e9, #3b82f6)",
                  "linear-gradient(45deg, #3b82f6, #06b6d4)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <Button className="relative z-10 text-white text-base font-semibold px-10 py-5 rounded-full shadow-2xl hover:shadow-cyan-300/40 transition-all duration-300 flex items-center gap-3 bg-transparent">
              <Link href="/u/scholarships" className="flex items-center gap-2">
                Find Your Program
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <AiOutlineDoubleRight size={18} />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Stats Section with Countable Numbers */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/30 max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {[
            {
              icon: FaUniversity,
              number: partnerCount,
              suffix: "+",
              text: "Partner Universities",
              description: "World-class institutions",
              gradient: "from-cyan-400 to-blue-400",
            },
            {
              icon: FaGlobeAmericas,
              number: countryCount,
              suffix: "+",
              text: "Countries Worldwide",
              description: "Global destinations",
              gradient: "from-blue-400 to-cyan-400",
            },
            {
              icon: FaUserGraduate,
              number: studentCount,
              suffix: "+",
              text: "Students Placed",
              description: "Successful placements",
              gradient: "from-cyan-400 to-emerald-400",
            },
            {
              icon: FaAward,
              number: programCount,
              suffix: "+",
              text: "Programs Available",
              description: "Various courses",
              gradient: "from-emerald-400 to-cyan-400",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.text}
              className="text-center group p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer relative overflow-hidden"
              variants={{
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
            >
              {/* Hover gradient effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex justify-center mb-3">
                  <motion.div
                    className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white group-hover:scale-110 transition-transform duration-300"
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <stat.icon size={18} />
                  </motion.div>
                </div>

                <motion.div
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text  mb-1"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.1 + 0.5,
                  }}
                >
                  {stat.number.toLocaleString()}
                  {stat.suffix}
                </motion.div>

                <div className="text-white font-semibold text-sm mb-1">
                  {stat.text}
                </div>
                <div className="text-blue-200 text-xs">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-blue-200"
          variants={{
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }}
        >
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            {["24/7 Support", "No Hidden Fees", "98% Success"].map(
              (text, index) => (
                <motion.div
                  key={text}
                  className="flex items-center gap-2 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.8 + index * 0.1 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-cyan-300 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                  {text}
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MainBanner;
