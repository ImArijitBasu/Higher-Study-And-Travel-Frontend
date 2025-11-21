"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { PiGlobe } from "react-icons/pi";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FooterSexy() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validateEmail = (email:string) => /^\S+@\S+\.\S+$/.test(email);

  const submit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.email) return toast.error("First name and email are required");
    if (!validateEmail(form.email)) return toast.error("Please provide a valid email");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setForm({ firstName: "", lastName: "", email: "" });
      toast.success("Thanks for subscribing!");
    }, 900);
  };

  return (
    <footer className="relative bg-gradient-to-b from-cyan-50 via-emerald-50 to-cyan-100 py-12 overflow-hidden ">
      <ToastContainer position="top-right" theme="light" />

      {/* Animated Globe Background */}
      <motion.div
        className="absolute text-cyan-100/20 text-[40rem] -top-64 -left-64 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <PiGlobe />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full mx-auto px-6 md:px-16"
      >
        {/* Top CTA */}
        <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-lg md:text-2xl font-extrabold text-white">
              JOIN OUR COMMUNITY
            </h2>
            <p className="text-white/90 mt-1 max-w-xl">
              Connect with students and travellers. Tips, scholarships and travel hacks straight to your inbox.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 text-white rounded-full px-4 py-2 backdrop-blur-sm transition">
              <FaFacebookF /> <span className="hidden sm:inline">Facebook</span>
            </Link>
            <Link href="#" className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 text-white rounded-full px-4 py-2 backdrop-blur-sm transition">
              <IoLogoInstagram /> <span className="hidden sm:inline">Instagram</span>
            </Link>
            <Link href="#" className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 text-white rounded-full px-4 py-2 backdrop-blur-sm transition">
              <FaYoutube /> <span className="hidden sm:inline">YouTube</span>
            </Link>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 items-start">
          {/* Branding & Info */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="p-2 rounded-2xl bg-gradient-to-tr from-cyan-200 to-emerald-200 shadow-md">
                <GiCommercialAirplane className="text-3xl text-cyan-500 transform -rotate-12" />
              </div>
              <span className="font-extrabold text-xl md:text-2xl text-cyan-700">Study & Travel</span>
            </Link>

            <p className="mt-4 text-gray-700">
              We make studying abroad achievable. We build a community of open minded people ready to make an impact in an ever-connected world.
            </p>

            <div className="mt-6 flex gap-4 text-2xl text-cyan-600">
              <Link href="#" className="hover:text-emerald-500 transition"><FaFacebookF /></Link>
              <Link href="#" className="hover:text-emerald-500 transition"><IoLogoInstagram /></Link>
              <Link href="#" className="hover:text-emerald-500 transition"><FaYoutube /></Link>
              <Link href="#" className="hover:text-emerald-500 transition"><MdOutlineMail /></Link>
            </div>

            <div className="mt-6 text-sm text-gray-700 space-y-1">
              <div>
                <strong>Contact</strong>
                <div>+156-4844-456</div>
                <div>info@studyabrod.com</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-bold mb-3 text-cyan-700">GET STARTED</h4>
            <ul className="space-y-2 text-cyan-600">
              <li><Link href="#" className="hover:text-emerald-500 transition">Contact us</Link></li>
              <li><Link href="#" className="hover:text-emerald-500 transition">Inquire Now</Link></li>
              <li><Link href="#" className="hover:text-emerald-500 transition">Apply Now</Link></li>
              <li><Link href="#" className="hover:text-emerald-500 transition">Scholarships</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1 bg-white/60 border border-cyan-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-2 text-cyan-700">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <p className="text-cyan-600 mb-4 text-sm">No spam. Useful tips, scholarships and travel deals.</p>

            <form onSubmit={submit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" className="w-full rounded-full px-4 py-2 border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
                <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" className="w-full rounded-full px-4 py-2 border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
              </div>

              <input name="email" value={form.email} onChange={handleChange} placeholder="Email address" className="w-full rounded-full px-4 py-2 border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300" type="email" />

              <label className="flex items-start gap-3 text-sm text-cyan-600">
                <input type="checkbox" className="mt-1" />
                <span>I consent to Study&Travel collecting my data and sending marketing communications. See our <Link href="#" className="text-emerald-500 underline">Privacy Policy</Link>.</span>
              </label>

              <button type="submit" disabled={loading} className="w-full rounded-full py-2 font-semibold bg-cyan-500 text-white hover:bg-emerald-500 transition disabled:opacity-60">{loading ? "Joining..." : "Subscribe"}</button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright + Wave */}
        <div className="mt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cyan-700">
            <div>© {new Date().getFullYear()} Study&Travel.com. All rights reserved.</div>
            <div className="space-x-4">
              <Link href="#" className="underline hover:text-emerald-500">Privacy Policy</Link>
              <Link href="#" className="underline hover:text-emerald-500">Terms</Link>
            </div>
          </div>

          <svg className="mt-6 w-full" viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 C 200 80 400 0 720 20 C 1040 40 1240 10 1440 50 L1440 100 L0 100 Z" fill="rgba(16, 185, 129,0.12)" />
          </svg>
        </div>
      </motion.div>
    </footer>
  );
}
