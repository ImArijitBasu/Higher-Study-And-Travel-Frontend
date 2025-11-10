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
      "Start by browsing study abroad programs that align with your academic goals and personal interests. Whether you dream of studying art in Italy or language and culture in South Korea, there’s an exciting world of opportunities waiting for you.",
    linkText: "BROWSE PROGRAMS",
    linkUrl: "#browse",
  },
  {
    icon: <FaGraduationCap className="text-3xl text-emerald-600" />,
    title: "Pick a Program",
    description:
      "Once you’ve explored your options, select a program that best fits your aspirations. Consider factors like course offerings, location, and cultural experiences to make an informed decision.",
    linkText: "TALK TO AN ADVISOR",
    linkUrl: "#advisor",
  },
  {
    icon: <FaCheckSquare className="text-3xl text-emerald-600" />,
    title: "Submit an Application",
    description:
      "Fill out our simple and easy online application, then keep an eye on your email for a response from one of our advisors.",
    linkText: "APPLY NOW",
    linkUrl: "#apply",
  },
  {
    icon: <FaWallet className="text-3xl text-emerald-600" />,
    title: "Funding Your Program",
    description:
      "Make studying abroad even more affordable by exploring scholarships, grants, and financial aid options.",
    linkText: "EXPLORE FUNDING OPTIONS",
    linkUrl: "#funding",
  },
  {
    icon: <FaSuitcase className="text-3xl text-emerald-600" />,
    title: "Prepare to Travel",
    description:
      "Once accepted, start preparing for your adventure! This includes applying for a visa, booking your travel, and packing essentials for your new home away from home.",
    linkText: "THINGS YOU'LL NEED",
    linkUrl: "#travel",
  },
  {
    icon: <FaPlaneDeparture className="text-3xl text-emerald-600" />,
    title: "Embark on Your Journey",
    description:
      "Immerse yourself in a new culture, challenge yourself, and create unforgettable memories. Studying abroad is a transformative journey—make the most of every moment!",
    linkText: "HEAR FROM OUR ALUMNI",
    linkUrl: "#alumni",
  },
];

const StudyAbroadWork: React.FC = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">
        HOW STUDY ABROAD WORKS
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 max-w-6xl mx-auto container">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-gray-700 px-4"
          >
            {/* Jumping Icon */}
            <motion.div
              className="mb-4"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2, // stagger effect
              }}
            >
              {step.icon}
            </motion.div>

            <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
            <p className="text-sm leading-relaxed mb-4">{step.description}</p>
            <a
              href={step.linkUrl}
              className="text-yellow-600 font-semibold text-sm uppercase tracking-wide hover:underline"
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
