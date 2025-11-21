"use client";

import React, { useState, useEffect, useRef } from "react";
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
  const [searchValue, setSearchValue] = useState("");
  const [partnerCount, setPartnerCount] = useState(0);
  const [countryCount, setCountryCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [programCount, setProgramCount] = useState(0);
  const animationRef = useRef(false);

  const taglines = [
    "Cut the cost, not the experience.",
    "Your global education journey starts here.",
    "Study smarter, travel further.",
    "Affordable excellence in education.",
  ];
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    // Prevent multiple initializations
    if (animationRef.current) return;
    animationRef.current = true;

    setIsVisible(true);

    const animateCount = (setter: any, target: number, duration: number) => {
      let start = 0;
      const increment = target / (duration / 16);
      const startTime = Date.now();
      
      const updateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * target);
        
        setter(current);
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };
      
      requestAnimationFrame(updateCount);
    };

    const timer = setTimeout(() => {
      animateCount(setPartnerCount, 500, 2500);
      animateCount(setCountryCount, 50, 2000);
      animateCount(setStudentCount, 10000, 3000);
      animateCount(setProgramCount, 1000, 2200);
    }, 500);

    const taglineInterval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(taglineInterval);
      animationRef.current = false;
    };
  }, []);

  // DarkTurquoise to Cyan-200 Gradient Background
  const DarkTurquoiseToCyanBackground = () => {
    const orb1Ref = useRef(null);
    const orb2Ref = useRef(null);
    const orb3Ref = useRef(null);

    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* DarkTurquoise (top) to Cyan-200 (bottom) Gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #00CED1 0%, #20B2AA 25%, #48D1CC 50%, #7fdbda 75%, #a5f3fc 100%)",
          }}
        />
        
        {/* DarkTurquoise Orbs */}
        <motion.div
          ref={orb1Ref}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0, 206, 209, 0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
        
        {/* Cyan Orbs */}
        <motion.div
          ref={orb2Ref}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(165, 243, 252, 0.3) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
          initial={{ x: 0, y: 0, scale: 1.1 }}
          animate={{
            x: [0, -60, 0],
            y: [0, 30, 0],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
        
        {/* Mixed Orb */}
        <motion.div
          ref={orb3Ref}
          className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(72, 209, 204, 0.25) 0%, transparent 70%)",
            filter: "blur(45px)",
          }}
          initial={{ x: 0, y: 0, scale: 0.9 }}
          animate={{
            x: [0, 40, 0],
            y: [0, -50, 0],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />

        {/* Wave Pattern */}
        <motion.div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(0, 206, 209, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(32, 178, 170, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(165, 243, 252, 0.15) 0%, transparent 50%)
            `,
          }}
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        />

        {/* Floating Bubbles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: i % 2 === 0 ? "#00CED1" : "#a5f3fc",
                left: `${10 + (i * 8)}%`,
                top: `${15 + (i % 4) * 25}%`,
              }}
              initial={{ y: 0, x: 0, opacity: 0.4, scale: 1 }}
              animate={{
                y: [0, -80, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 10 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeInOut",
                repeatType: "loop",
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 opacity-10 border-2"
          style={{
            borderColor: "#00CED1",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
          initial={{ rotate: 0 }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 opacity-8 border"
          style={{
            borderColor: "#a5f3fc",
            clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
          }}
          initial={{ rotate: 0, scale: 1 }}
          animate={{
            rotate: -360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />

        {/* Subtle Grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
          }}
          initial={{ x: '-100%' }}
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 8,
            repeatType: "loop",
          }}
        />
      </div>
    );
  };

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

  const taglineVariants = {
    enter: { y: 20, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <section className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden">
      <DarkTurquoiseToCyanBackground />

      <motion.div
        className="relative z-20 w-full max-w-7xl pt-24 mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* MAIN HEADING - Dark text with gradient */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          style={{ color: "#0f172a" }}
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: { 
              y: 0, 
              opacity: 1, 
              transition: { 
                type: "spring", 
                stiffness: 100,
                damping: 20,
                duration: 1.2
              } 
            },
          }}
        >
          Study and Travel for{" "}
          <motion.span
            className="inline-block"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ 
              duration: 4,
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Everyone
          </motion.span>
        </motion.h1>

        {/* SUBTITLE - Dark gray */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-6 max-w-3xl mx-auto font-medium"
          style={{ color: "#1e293b" }}
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: { 
              y: 0, 
              opacity: 1, 
              transition: { 
                type: "spring", 
                stiffness: 100,
                damping: 20,
                duration: 1.2
              } 
            },
          }}
        >
          Quality education and incredible destinations — your dream study abroad program made affordable.
        </motion.p>

        {/* TAGLINE - Dark text with professional hover */}
        <motion.div className="my-8 flex justify-center" variants={containerVariants}>
          <motion.div 
            className="px-6 py-3 rounded-full min-h-[48px] flex items-center shadow-lg"
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0, 206, 209, 0.3)",
              borderColor: "#00CED1",
              background: "rgba(255, 255, 255, 0.95)",
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTagline}
                className="text-lg font-semibold flex items-center gap-2"
                style={{ color: "#0f172a" }}
                variants={taglineVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ 
                  duration: 0.6,
                  ease: "easeInOut" 
                }}
              >
                <FaHeart 
                  style={{ color: "#00CED1" }}
                />
                {taglines[currentTagline]}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* ICONS - Dark text with professional hover */}
        <motion.div className="flex justify-center gap-8 mb-8" variants={containerVariants}>
          {[FaUniversity, FaGlobeAmericas, FaAward, FaStar].map((Icon, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center" 
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="p-3 rounded-xl mb-2 shadow-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  color: "#0f172a",
                }}
                animate={{ y: [0, -3, 0] }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity, 
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  boxShadow: "0 10px 25px rgba(0, 206, 209, 0.2)",
                  borderColor: "#00CED1",
                  background: "rgba(255, 255, 255, 0.95)",
                  scale: 1.05 
                }}
              >
                <Icon size={20} />
              </motion.div>
              <span 
                className="text-xs font-medium"
                style={{ color: "#1e293b" }}
              >
                {["Universities", "Global", "Quality", "Excellence"][index]}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* SEARCH BAR - Dark text with professional hover */}
        <motion.div className="max-w-2xl mx-auto mb-8" variants={containerVariants}>
          <motion.div className="relative group">
            <motion.input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for programs, universities, countries..."
              className="w-full py-3 pl-6 pr-16 rounded-full shadow-lg focus:outline-none"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                color: "#0f172a",
                fontSize: "16px",
              }}
              whileFocus={{ 
                scale: 1.01,
                borderColor: "#00CED1",
                boxShadow: "0 0 0 3px rgba(0, 206, 209, 0.1)",
                background: "rgba(255, 255, 255, 0.95)",
                transition: { duration: 0.2 }
              }}
            />
            <Button 
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #00CED1 0%, #20B2AA 100%)",
              }}
              whileHover={{ 
                scale: 1.03,
                background: "linear-gradient(135deg, #20B2AA 0%, #00CED1 100%)",
                boxShadow: "0 5px 15px rgba(0, 206, 209, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <FaSearch size={18} style={{ color: "#ffffff" }} />
            </Button>
          </motion.div>
        </motion.div>

        {/* BUTTON - Professional gradient with hover */}
        <motion.div className="flex justify-center mb-8" variants={containerVariants}>
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.98 }} 
            className="relative"
            transition={{ duration: 0.3 }}
          >
            <Button 
              className="text-base font-semibold px-10 py-5 rounded-full flex items-center gap-3 shadow-xl transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
              }}
              whileHover={{
                background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                boxShadow: "0 15px 30px rgba(15, 23, 42, 0.4)"
              }}
            >
              <Link href="/u/scholarships" className="flex items-center gap-2">
                <span style={{ color: "#ffffff" }}>
                  Find Your Program
                </span>
                <AiOutlineDoubleRight size={18} style={{ color: "#ffffff" }} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* STATS - Dark text with professional hover */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 max-w-4xl mx-auto" variants={containerVariants}>
          {[
            { icon: FaUniversity, number: partnerCount, suffix: "+", text: "Partner Universities" },
            { icon: FaGlobeAmericas, number: countryCount, suffix: "+", text: "Countries Worldwide" },
            { icon: FaUserGraduate, number: studentCount, suffix: "+", text: "Students Placed" },
            { icon: FaAward, number: programCount, suffix: "+", text: "Programs Available" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 rounded-xl cursor-pointer shadow-lg"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
              whileHover={{ 
                y: -3, 
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(0, 206, 209, 0.2)",
                borderColor: "#00CED1",
                background: "rgba(255, 255, 255, 0.95)",
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.3 }}
            >
              <stat.icon 
                size={22} 
                className="mx-auto mb-3" 
                style={{ color: "#0f172a" }}
              />
              <div 
                className="text-2xl font-bold mb-1"
                style={{ color: "#0f172a" }}
              >
                {stat.number}{stat.suffix}
              </div>
              <div 
                className="text-sm font-medium"
                style={{ color: "#1e293b" }}
              >
                {stat.text}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MainBanner;