"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaGraduationCap,
  FaCheckSquare,
  FaWallet,
  FaSuitcase,
  FaPlaneDeparture,
  FaGlobeAmericas,
} from "react-icons/fa";

interface Step {
  icon: ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkUrl?: string;
}

const steps: Step[] = [
  {
    icon: <FaSearch className="text-3xl text-emerald-600" />,
    title: "Explore Your Options",
    description:
      "Discover top-rated universities and programs that match your passion, goals, and future career ambitions across the globe.",
    linkText: "BROWSE PROGRAMS",
    linkUrl: "#browse",
  },
  {
    icon: <FaGraduationCap className="text-3xl text-emerald-600" />,
    title: "Pick a Program",
    description:
      "Select your dream destination and program by comparing course options, campus life, and international opportunities.",
    linkText: "TALK TO AN ADVISOR",
    linkUrl: "#advisor",
  },
  {
    icon: <FaCheckSquare className="text-3xl text-emerald-600" />,
    title: "Submit an Application",
    description:
      "Apply online with ease and get step-by-step support from our expert advisors throughout your admission process.",
    linkText: "APPLY NOW",
    linkUrl: "#apply",
  },
  {
    icon: <FaWallet className="text-3xl text-emerald-600" />,
    title: "Funding Your Program",
    description:
      "Explore scholarships, grants, and financial aid options to make your study abroad experience affordable and stress-free.",
    linkText: "EXPLORE FUNDING OPTIONS",
    linkUrl: "#funding",
  },
  {
    icon: <FaSuitcase className="text-3xl text-emerald-600" />,
    title: "Prepare to Travel",
    description:
      "Get ready for your journey! Secure your visa, book travel, and pack for your exciting new life abroad.",
    linkText: "TRAVEL CHECKLIST",
    linkUrl: "#travel",
  },
  {
    icon: <FaPlaneDeparture className="text-3xl text-emerald-600" />,
    title: "Embark on Your Journey",
    description:
      "Step into a new culture, broaden your horizons, and experience the world as your classroom.",
    linkText: "HEAR FROM ALUMNI",
    linkUrl: "#alumni",
  },
];

const StudyAbroadWork: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50 text-center">
      {/* Elegant Professional Header */}
      <div className="mb-16">
        <div className="flex justify-center items-center gap-3 mb-4">
          <FaGlobeAmericas className="text-4xl text-emerald-600" />
          <h2 className="text-4xl font-extrabold text-gray-900">
            How <span className="text-emerald-600">Study Abroad</span> Works
          </h2>
        </div>
        <p className="text-gray-700 max-w-3xl mx-auto text-base">
          From choosing the perfect destination to boarding your flight — here’s a simple step-by-step
          guide to begin your global education journey.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 max-w-6xl mx-auto container">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-gray-700 px-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
          >
            {/* Animated Icon */}
            <motion.div
              className="mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              {step.icon}
            </motion.div>

            <h3 className="font-semibold text-lg mb-3 text-emerald-700">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-gray-600">
              {step.description}
            </p>
            <a
              href={step.linkUrl}
              className="text-emerald-600 font-semibold text-sm uppercase tracking-wide hover:underline"
            >
              {step.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudyAbroadWork;
