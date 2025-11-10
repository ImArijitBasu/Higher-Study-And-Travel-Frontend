"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Globe2,
  SearchCheck,
  FileSignature,
  PlaneTakeoff,
  MapPin,
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <SearchCheck className="w-10 h-10 text-indigo-600" />,
    title: "Explore Top Destinations",
    description:
      "Discover the best universities and travel locations tailored to your and goals around the world.",
    bg: "from-indigo-100 to-indigo-200",
  },
  {
    id: 2,
    icon: <FileSignature className="w-10 h-10 text-green-600" />,
    title: "Apply Seamlessly",
    description:
      "Complete your application online with ease. Upload your documents and let us handle the hard part.",
    bg: "from-green-100 to-green-200",
  },
  {
    id: 3,
    icon: <PlaneTakeoff className="w-10 h-10 text-cyan-600" />,
    title: "Begin Your Journey",
    description:
      "Pack your essentials and prepare for a life-changing academic or travel experience abroad.",
    bg: "from-cyan-100 to-cyan-200",
  },
  {
    id: 4,
    icon: <MapPin className="w-10 h-10 text-rose-600" />,
    title: "Settle & Succeed",
    description:
      "Arrive confidently, explore new cultures, and make the most out of your global opportunity.",
    bg: "from-rose-100 to-rose-200",
  },
];

export default function WorkSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 text-center">
      {/* Header */}
      <div className="mb-16">
        <div className="flex justify-center items-center gap-3 mb-3">
          <Globe2 className="w-8 h-8 text-blue-600" />
          <h2 className="text-4xl font-extrabold text-gray-900">
            How <span className="text-blue-600">It Works</span>
          </h2>
        </div>
        <p className="text-gray-800 text-base max-w-3xl mx-auto">
          Follow these easy steps to make your dream of studying or traveling abroad a reality.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="border-none shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl bg-white p-6 hover:-translate-y-2">
              <CardContent className="flex flex-col items-center space-y-5">
                <motion.div
                  className={`p-6 rounded-full bg-gradient-to-br ${step.bg} flex items-center justify-center shadow-inner`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  {step.icon}
                </motion.div>

                <h3 className="text-lg font-semibold text-gray-800 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
