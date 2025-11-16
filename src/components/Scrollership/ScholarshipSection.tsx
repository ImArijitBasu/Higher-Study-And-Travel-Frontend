"use client";

import React, { useRef, useState } from "react";
import { AiOutlineDoubleRight, AiFillStar } from "react-icons/ai";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaAward, FaGlobe } from "react-icons/fa";

interface Scholarship {
  id: number;
  image: string;
  title: string;
  university: string;
  field: string;
  country: string;
  degree: string;
  deadline: string;
  amount: string;
  flag: string;
  rating: number;
  eligibility: string;
}

export default function ScholarshipsSection({ limit }: { limit?: number }) {
  const scholarships: Scholarship[] = [
    {
      id: 1,
      image: "https://static.sliit.lk/wp-content/uploads/2024/10/28052224/University-of-Melbourne.jpg",
      title: "Harvard Global Excellence Scholarship",
      university: "Harvard University",
      field: "Computer Science",
      country: "United States",
      degree: "Bachelor's",
      deadline: "Dec 15, 2025",
      amount: "$45,000",
      flag: "https://flagcdn.com/w40/us.png",
      rating: 4.9,
      eligibility: "Minimum 3.8 GPA, leadership experience",
    },
    {
      id: 2,
      image: "https://image-static.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg",
      title: "Stanford Engineering Fellowship",
      university: "Stanford University",
      field: "Mechanical Engineering",
      country: "United States",
      degree: "Master's",
      deadline: "Jan 20, 2026",
      amount: "$35,000",
      flag: "https://flagcdn.com/w40/us.png",
      rating: 4.8,
      eligibility: "Engineering background, research potential",
    },
    {
      id: 3,
      image: "https://www.meridean.org/assets/img/university/16905355981672387200243744.jpg",
      title: "Oxford International Humanities Award",
      university: "University of Oxford",
      field: "Humanities & Arts",
      country: "United Kingdom",
      degree: "PhD",
      deadline: "Feb 28, 2026",
      amount: "Fully Funded",
      flag: "https://flagcdn.com/w40/gb.png",
      rating: 4.9,
      eligibility: "Research proposal, academic publications",
    },
    {
      id: 4,
      image: "https://dxp.plus/cdn-cgi/image/w=3840,q=90,f=webp,fit=contain/https://us-cdn.dxp.plus/4e7f1e24-6b44-4103-9287-7bfb88f988b8/Oxford%20City.jpg.preview.png",
      title: "Tokyo Tech Innovation Scholarship",
      university: "University of Tokyo",
      field: "Artificial Intelligence",
      country: "Japan",
      degree: "Master's",
      deadline: "Mar 10, 2026",
      amount: "$28,000",
      flag: "https://flagcdn.com/w40/jp.png",
      rating: 4.7,
      eligibility: "STEM background, programming skills",
    },
  ];

  const displayedScholarships = limit
    ? scholarships.slice(0, limit)
    : scholarships;

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getDeadlineColor = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 30) return "text-red-600 bg-red-50 border-red-200";
    if (diffDays < 60) return "text-orange-600 bg-orange-50 border-orange-200";
    return "text-green-600 bg-green-50 border-green-200";
  };

  // New Animation Variants - Premium but not 3D
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -15,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const floatVariants = {
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const shimmerVariants = {
    initial: { x: "-100%", rotate: -45 },
    animate: {
      x: "200%",
      rotate: -45,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        variants={floatVariants}
        animate="floating"
        className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatVariants}
        animate="floating"
        transition={{ delay: 2 }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl"
      />
      
      {/* Floating Academic Icons */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-300/20"
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            rotate: [0, 180, 360],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <FaGraduationCap size={24} />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="flex justify-center items-center gap-6 mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full"
            />
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                variants={glowVariants}
                animate="pulse"
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full opacity-20 blur-lg"
              />
              <FaAward className="w-16 h-16 text-blue-600 relative z-10" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-0.5 bg-gradient-to-l from-emerald-600 to-blue-600 rounded-full"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Premium{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Scholarships
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover life-changing opportunities from world-class institutions. 
            Your future starts with the right scholarship.
          </motion.p>
        </motion.div>

        {/* Enhanced Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {displayedScholarships.map((scholarship, index) => (
            <motion.div
              key={scholarship.id}
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(scholarship.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 relative">
                {/* Magnetic Shine Effect */}
                <motion.div
                  variants={shimmerVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Image Section with Parallax Effect */}
                <div className="relative h-48 w-full overflow-hidden">
                  <motion.img
                    src={scholarship.image}
                    alt={scholarship.title}
                    className="w-full h-full object-cover"
                    whileHover={{ 
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  {/* Animated University Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="absolute top-4 left-4"
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-2xl border border-white/20">
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                          <FaUniversity className="text-blue-600 text-sm" />
                        </motion.div>
                        <p className="text-sm font-bold text-gray-900">{scholarship.university.split(' ')[0]}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Animated Flag & Country */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    className="absolute top-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-2xl border border-white/20"
                  >
                    <motion.img
                      src={scholarship.flag}
                      alt={scholarship.country}
                      className="w-6 h-4 rounded-sm"
                      whileHover={{ scale: 1.2 }}
                    />
                    <span className="text-sm font-bold text-gray-900">{scholarship.country.split(' ')[0]}</span>
                  </motion.div>

                  {/* Animated Rating */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                    className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/80 backdrop-blur-sm rounded-full px-4 py-2"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <AiFillStar className="text-yellow-400 text-lg" />
                    </motion.div>
                    <span className="text-white font-bold text-sm">
                      {scholarship.rating}
                    </span>
                  </motion.div>

                  {/* Pulsing Degree Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.9 }}
                    className="absolute bottom-4 right-4"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          "0 0 0px rgba(59, 130, 246, 0.3)",
                          "0 0 15px rgba(59, 130, 246, 0.6)",
                          "0 0 0px rgba(59, 130, 246, 0.3)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold"
                    >
                      {scholarship.degree}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-5 relative z-10">
                  {/* Title & Field */}
                  <div className="space-y-3">
                    <motion.h3
                      whileHover={{ color: "#2563eb" }}
                      className="text-xl font-bold text-gray-900 line-clamp-2 leading-tight transition-colors duration-300"
                    >
                      {scholarship.title}
                    </motion.h3>
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 bg-blue-500 rounded-full"
                      />
                      <p className="text-blue-600 font-semibold text-sm">
                        {scholarship.field}
                      </p>
                    </div>
                  </div>

                  {/* Amount & Deadline - Single Line */}
                  <div className="flex items-center justify-between gap-4 pt-2">
                    <motion.div 
                      className="space-y-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wide">Funding</p>
                      <motion.p 
                        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"
                        animate={{ 
                          backgroundPosition: ["0%", "100%", "0%"] 
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity 
                        }}
                        style={{ backgroundSize: "200% 200%" }}
                      >
                        {scholarship.amount}
                      </motion.p>
                    </motion.div>
                    <motion.div 
                      className="space-y-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-gray-400 text-xs" />
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wide">Deadline</p>
                      </div>
                      <motion.span 
                        className={`text-sm font-bold px-3 py-1.5 rounded-xl border-2 ${getDeadlineColor(scholarship.deadline)}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {scholarship.deadline}
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Action Button - Keeping Original Blue-Emerald Color */}
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group/btn"
                  >
                    {/* Floating Particles in Button */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          y: [0, -25, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${25 + i * 25}%`,
                          bottom: "10%",
                        }}
                      />
                    ))}
                    
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Apply Now
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <AiOutlineDoubleRight />
                      </motion.div>
                    </span>

                    {/* Button Shine Effect */}
                    <motion.div
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                    />
                  </motion.button>
                </div>

                {/* Hover Glow Effect */}
                <AnimatePresence>
                  {hoveredCard === scholarship.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-3xl -z-10 blur-md"
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Button - Keeping Original Colors */}
        {limit && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                href="u/scholarships"
                className="group relative bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold px-12 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-4 overflow-hidden"
              >
                {/* Animated Gradient Shift */}
                <motion.div
                  animate={{
                    background: [
                      "linear-gradient(135deg, #2563eb, #10b981)",
                      "linear-gradient(135deg, #10b981, #2563eb)",
                      "linear-gradient(135deg, #2563eb, #10b981)",
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0"
                />
                
                {/* Shine Effect */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                />
                
                <span className="relative z-10 text-lg">Explore All Scholarships</span>
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative z-10"
                >
                  <AiOutlineDoubleRight size={24} />
                </motion.div>

                {/* Floating Dots */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${20 + i * 30}%`,
                      bottom: "15%",
                    }}
                  />
                ))}
              </Link>

              {/* Outer Glow */}
              <motion.div
                variants={glowVariants}
                animate="pulse"
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur-xl -z-10"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}