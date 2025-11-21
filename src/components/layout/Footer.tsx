"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF, FaYoutube, FaTwitter, FaLinkedin, FaPaperPlane,
  FaGlobe, FaMapMarkerAlt, FaChevronRight, FaGraduationCap,
  FaUniversity, FaPassport, FaRocket, FaCompass, FaHeart,
  FaPlane, FaMap, FaLanguage, FaUsers
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineMail, MdPhone, MdLocationOn, MdFlight, MdSchool } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CompactDarkFooter() {
  const [form, setForm] = useState({ 
    firstName: "",
    lastName: "",
    email: "" 
  });
  const [loading, setLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentHeaderText, setCurrentHeaderText] = useState(0);

  const headerTexts = [
    "Transform your future through international education",
    "Discover life-changing study abroad experiences",
    "Your journey to global academic excellence starts here",
    "Bridge cultures, build careers, create memories",
    "Where education meets global adventure",
    "Unlock world-class learning opportunities abroad"
  ];

  // Rotate header text every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeaderText((prev) => (prev + 1) % headerTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

  const submit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email) {
      return toast.error("All fields are required");
    }
    if (!validateEmail(form.email)) {
      return toast.error("Please provide a valid email");
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubscribed(true);
      setForm({ firstName: "", lastName: "", email: "" });
      toast.success("Welcome to our global education community!");
    }, 800);
  };

  return (
    <footer className="relative bg-blue-950 text-white overflow-hidden min-h-[540px]">
      <ToastContainer
        position="top-right"
        theme="dark"
        autoClose={2000}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Responsive Header Section */}
        <div className="text-center mb-10">
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative mb-3 sm:mb-0"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300">
                <FaGlobe className="text-xl text-white" />
              </div>
            </motion.div>
            <div className="text-center sm:text-left">
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-white"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Global Education & Travel Pathways
              </motion.h2>
              <motion.p
                className="text-blue-200 text-sm mt-2 flex items-center justify-center sm:justify-start gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <FaHeart className="text-rose-400 animate-pulse text-xs" />
                Study Smart • Travel Wide • Grow Beyond
              </motion.p>
            </div>
          </motion.div>

          <div className="h-12 flex items-center justify-center mt-4 mb-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentHeaderText}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="text-base sm:text-lg text-blue-100 font-light text-center max-w-2xl leading-relaxed px-2"
                transition={{ duration: 0.5 }}
              >
                {headerTexts[currentHeaderText]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Responsive Stats with Icons */}
          <motion.div
            className="grid grid-cols-2 sm:flex sm:justify-center gap-6 sm:gap-8 lg:gap-10 mt-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {[
              { number: "50+", label: "Global Destinations", icon: FaMap, color: "text-blue-400" },
              { number: "10K+", label: "Students Empowered", icon: FaUsers, color: "text-cyan-400" },
              { number: "98%", label: "Success Stories", icon: FaGraduationCap, color: "text-green-400" },
              { number: "24/7", label: "Student Support", icon: FaHeart, color: "text-rose-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative inline-block mb-3">
                  <div className={`p-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all duration-300 ${stat.color} group-hover:scale-110`}>
                    <stat.icon className="text-lg" />
                  </div>
                </div>
                <div className={`font-bold text-lg sm:text-xl mb-1 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 text-xs group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Responsive Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-sm lg:text-[15px] mb-3 hover:text-blue-300 transition-colors duration-300 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400 text-sm" />
              GLOBAL CONTACT
            </h3>
            <div className="space-y-3 text-gray-300 text-xs lg:text-[13px]">
              <div className="flex items-center gap-2 group hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5">
                <MdPhone className="text-blue-400 text-sm group-hover:text-blue-300 transition-colors duration-300" />
                <div>
                  <div className="font-semibold">+1 (555) 123-4567</div>
                  <div className="text-blue-300 text-[11px]">International Helpline</div>
                </div>
              </div>
              <div className="flex items-center gap-2 group hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5">
                <MdOutlineMail className="text-blue-400 text-sm group-hover:text-blue-300 transition-colors duration-300" />
                <div>
                  <div className="font-semibold">admissions@globaledupathways.com</div>
                  <div className="text-blue-300 text-[11px]">Priority Response</div>
                </div>
              </div>
              <div className="flex items-start gap-2 group hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5">
                <FaGlobe className="text-blue-400 text-sm mt-0.5 group-hover:text-blue-300 transition-colors duration-300" />
                <div>
                  <div className="font-semibold">Worldwide Offices</div>
                  <div className="text-blue-300 text-[11px]">NY • London • Singapore • Sydney</div>
                </div>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-sm lg:text-[15px] mb-3 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2">
              <FaUniversity className="text-cyan-400 text-sm" />
              ACADEMIC PROGRAMS
            </h3>
            <ul className="space-y-2 text-gray-300 text-xs lg:text-[13px]">
              {[
                { name: "Bachelor's Degrees Abroad", icon: FaGraduationCap },
                { name: "Master's & PhD Programs", icon: MdSchool },
                { name: "Language Immersion Courses", icon: FaLanguage },
                { name: "Summer Study Programs", icon: FaCompass }
              ].map((program, index) => (
                <li key={index} className="group">
                  <Link href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 p-1 rounded hover:bg-white/5">
                    <program.icon className="text-cyan-400 text-xs group-hover:text-cyan-300 transition-colors duration-300" />
                    <span className="flex-1">{program.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-sm lg:text-[15px] mb-3 hover:text-green-300 transition-colors duration-300 flex items-center gap-2">
              <FaHeart className="text-green-400 text-sm" />
              STUDENT SUPPORT
            </h3>
            <ul className="space-y-2 text-gray-300 text-xs lg:text-[13px]">
              {[
                "Visa & Immigration Guidance",
                "Scholarship Opportunities",
                "Housing & Accommodation",
                "Cultural Integration",
                "Career Counseling",
                "24/7 Emergency Support"
              ].map((link, index) => (
                <li key={index} className="group">
                  <Link href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 p-1 rounded hover:bg-white/5">
                    <FaChevronRight className="text-green-400 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 lg:col-span-1">
            <h3 className="font-bold text-white text-sm lg:text-[15px] mb-3 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2">
              <FaPaperPlane className="text-purple-400 text-sm" />
              GLOBAL INSIGHTS
            </h3>
            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-3"
                >
                  <p className="text-blue-200 text-xs leading-relaxed">
                    Get exclusive access to scholarship opportunities and program updates.
                  </p>
                  <form onSubmit={submit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="w-full rounded px-3 py-2 bg-white/5 border border-white/10 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-white text-xs hover:border-white/20 transition-all duration-300"
                        type="text"
                      />
                      <input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="w-full rounded px-3 py-2 bg-white/5 border border-white/10 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-white text-xs hover:border-white/20 transition-all duration-300"
                        type="text"
                      />
                    </div>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded px-3 py-2 bg-white/5 border border-white/10 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-white text-xs hover:border-white/20 transition-all duration-300"
                      type="email"
                    />
                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded py-3 text-xs font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white  transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2 hover:scale-105 transform shadow-lg shadow-purple-500/25"
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {loading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="flex items-center gap-2"
                        >
                          <FaPaperPlane className="text-xs" />
                          Joining...
                        </motion.div>
                      ) : (
                        <>
                          <FaPaperPlane className="text-xs" />
                          Get Global Updates
                        </>
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/30"
                >
                  <FaGlobe className="text-purple-400 text-lg mx-auto mb-2" />
                  <p className="text-white text-sm font-semibold mb-1">Welcome Aboard!</p>
                  <p className="text-purple-300 text-xs">Check your email for exclusive content</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Responsive Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-gray-500 text-sm text-center md:text-left hover:text-gray-400 transition-colors duration-300 order-2 md:order-1">
              <p>© {new Date().getFullYear()} Global Education & Travel Pathways.</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 order-1 md:order-2 mb-4 md:mb-0">
              {[
                { icon: FaFacebookF, href: "#", color: "hover:bg-blue-600", label: "Facebook" },
                { icon: IoLogoInstagram, href: "#", color: "hover:bg-pink-600", label: "Instagram" },
                { icon: FaTwitter, href: "#", color: "hover:bg-sky-500", label: "Twitter" },
                { icon: FaLinkedin, href: "#", color: "hover:bg-blue-700", label: "LinkedIn" },
                { icon: FaYoutube, href: "#", color: "hover:bg-red-600", label: "YouTube" }
              ].map((SocialIcon, index) => (
                <a
                  key={index}
                  href={SocialIcon.href}
                  className={`p-3 bg-gray-800 rounded-lg text-gray-400 ${SocialIcon.color} hover:text-white transition-all duration-300 hover:scale-110 transform`}
                >
                  <SocialIcon.icon className="text-sm" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-gray-500 text-sm order-3">
              <Link href="#" className="hover:text-blue-300 transition-colors duration-300 hover:underline">Privacy</Link>
              <Link href="#" className="hover:text-blue-300 transition-colors duration-300 hover:underline">Terms</Link>
              <Link href="#" className="hover:text-blue-300 transition-colors duration-300 hover:underline">Compliance</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Accent Line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600" />
    </footer>
  );
}