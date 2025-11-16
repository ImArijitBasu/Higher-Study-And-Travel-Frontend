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
  FaArrowRight,
  FaShieldAlt,
  FaHeadset,
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
    icon: <FaSearch className="text-2xl" />,
    title: "Explore Your Options",
    description:
      "Discover top-rated universities and programs that match your passion, goals, and future career ambitions across the globe.",
    linkText: "Browse Programs",
    linkUrl: "#browse",
  },
  {
    icon: <FaGraduationCap className="text-2xl" />,
    title: "Pick a Program",
    description:
      "Select your dream destination and program by comparing course options, campus life, and international opportunities.",
    linkText: "Talk to an Advisor",
    linkUrl: "#advisor",
  },
  {
    icon: <FaCheckSquare className="text-2xl" />,
    title: "Submit an Application",
    description:
      "Apply online with ease and get step-by-step support from our expert advisors throughout your admission process.",
    linkText: "Apply Now",
    linkUrl: "#apply",
  },
  {
    icon: <FaWallet className="text-2xl" />,
    title: "Funding Your Program",
    description:
      "Explore scholarships, grants, and financial aid options to make your study abroad experience affordable and stress-free.",
    linkText: "Explore Funding",
    linkUrl: "#funding",
  },
  {
    icon: <FaSuitcase className="text-2xl" />,
    title: "Prepare to Travel",
    description:
      "Get ready for your journey! Secure your visa, book travel, and pack for your exciting new life abroad.",
    linkText: "Travel Checklist",
    linkUrl: "#travel",
  },
  {
    icon: <FaPlaneDeparture className="text-2xl" />,
    title: "Embark on Your Journey",
    description:
      "Step into a new culture, broaden your horizons, and experience the world as your classroom.",
    linkText: "Hear from Alumni",
    linkUrl: "#alumni",
  },
];

const StudyAbroadWork: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-cyan-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-emerald-100/30 to-teal-100/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-xl text-blue-600" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Trusted Process
              </span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <FaHeadset className="text-xl text-emerald-600" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                24/7 Support
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-600"></div>
            <FaGlobeAmericas className="text-4xl text-blue-600" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-emerald-600"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Study Abroad</span> Works
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            From choosing the perfect destination to boarding your flight — here's a simple step-by-step
            guide to begin your global education journey with confidence and clarity.
          </p>
        </motion.div>

        {/* Enhanced Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Connection Line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-200 to-emerald-200 z-0 group-hover:from-blue-300 group-hover:to-emerald-300 transition-colors duration-300"></div>
              )}

              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100/80 p-8 h-full flex flex-col group-hover:border-blue-200/50 transition-all duration-500 overflow-hidden"
              >
                {/* Step Number */}
                <div className="absolute top-6 right-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full flex items-center justify-center group-hover:from-blue-200 group-hover:to-emerald-200 transition-all duration-500">
                    <span className="text-sm font-bold text-gray-700">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Animated Icon Container */}
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover="hover"
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-200/50 transition-shadow duration-500"
                >
                  <div className="text-white">
                    {step.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {step.description}
                </p>

                {/* Enhanced Link */}
                <motion.a
                  href={step.linkUrl}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wide group/link"
                >
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    {step.linkText}
                  </span>
                  <FaArrowRight className="text-blue-500 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                </motion.a>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-gray-200/60"
        >
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-100/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have transformed their lives through international education. 
              Our expert advisors are here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Start Your Application
                <FaArrowRight className="text-sm" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-700 px-8 py-3 rounded-xl font-semibold border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300"
              >
                Book a Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudyAbroadWork;