"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaGlobe, FaUserGraduate, FaLightbulb } from "react-icons/fa";

interface Tab {
  id: "what" | "who" | "why";
  label: string;
  icon: React.ReactNode;
}

interface ContentItem {
  title: string;
  text: string[];
  image: string;
  link: string;
}

const AboutStudy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"what" | "who" | "why">("what");

  const tabs: Tab[] = [
    { 
      id: "what", 
      label: "What Is Study Abroad?", 
      icon: <FaGlobe className="text-lg" />
    },
    { 
      id: "who", 
      label: "Who Can Study Abroad?", 
      icon: <FaUserGraduate className="text-lg" />
    },
    { 
      id: "why", 
      label: "Why Study Abroad?", 
      icon: <FaLightbulb className="text-lg" />
    },
  ];

  const content: Record<"what" | "who" | "why", ContentItem> = {
    what: {
      title: "What Is Study Abroad?",
      text: [
        "Studying abroad is more than just earning credits in a new country—it's a life-changing adventure that reshapes how you see the world and yourself.",
        "It's about stepping outside your comfort zone, immersing yourself in new cultures, and experiencing different perspectives firsthand.",
        "Beyond academics, you'll develop valuable life skills, expand your global network, and create unforgettable memories.",
      ],
      image:
        "https://scholarszone.com.bd/wp-content/uploads/2025/06/Study-Abroad-2025.jpg.webp",
      link: "HOW TO PICK A PROGRAM",
    },
    who: {
      title: "Who Can Study Abroad?",
      text: [
        "Almost anyone with a passion for learning and adventure can study abroad!",
        "Whether you're in high school, college, or university, there's a program that fits your academic and personal goals.",
        "If you're open-minded and eager to experience the world from a new perspective, studying abroad is for you!",
      ],
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQHrYeNb3llXJQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691898107626?e=2147483647&v=beta&t=lXnJxTKOCPHdhVJajHNNyMN0RqkG2aNzbs0yiZCUEIg",
      link: "HOW TO APPLY FOR A PROGRAM",
    },
    why: {
      title: "Why Study Abroad?",
      text: [
        "Studying abroad opens doors to new opportunities—both personal and professional.",
        "You'll gain independence, global awareness, and a competitive edge that employers value highly.",
        "It's a journey that transforms your education and your future.",
      ],
      image:
        "https://cdn.prod.website-files.com/5e6bef9160e290b99b7644b5/6516aeb88a1b8cf8e3b1047c_1%20(1)%20(1).webp",
      link: "BENEFITS OF STUDYING ABROAD",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      {/* Enhanced Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Understanding{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
            Study Abroad
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Everything you need to know about studying abroad - from the basics to the benefits
        </p>
      </motion.div>

      {/* Enhanced Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300
              ${activeTab === tab.id
                ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-2xl shadow-blue-500/25"
                : "bg-white text-gray-700 shadow-lg hover:shadow-xl border border-gray-100"
              }
            `}
          >
            {tab.icon}
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Content Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Text Content */}
          <motion.div variants={textVariants} className="space-y-6">
            <motion.h3
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              {content[activeTab].title}
            </motion.h3>

            <motion.div variants={itemVariants} className="space-y-4">
              {content[activeTab].text.map((para, i) => (
                <motion.p
                  key={i}
                  variants={itemVariants}
                  className="text-gray-600 leading-relaxed text-lg"
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.a
                href="#"
                whileHover={{ x: 10 }}
                className="inline-flex items-center gap-3 text-blue-600 font-semibold text-lg group"
              >
                <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  {content[activeTab].link}
                </span>
                <FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300 text-emerald-500" />
              </motion.a>
            </motion.div>

            {/* Additional Info Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="text-blue-600 font-semibold text-sm">Global Network</div>
                <div className="text-2xl font-bold text-gray-900">190+</div>
                <div className="text-xs text-gray-600">Countries</div>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                <div className="text-emerald-600 font-semibold text-sm">Students</div>
                <div className="text-2xl font-bold text-gray-900">5M+</div>
                <div className="text-xs text-gray-600">Annually</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="relative"
          >
            <motion.div
              variants={imageVariants}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={content[activeTab].image}
                alt={content[activeTab].title}
                className="w-full h-[400px] object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <FaGlobe className="text-white text-sm" />
            </motion.div>
            
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <FaUserGraduate className="text-white text-xs" />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center mt-12"
      >
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-emerald-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutStudy;