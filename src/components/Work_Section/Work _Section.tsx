"use client";

import { CardContent } from "@/components/ui/card";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Using React Icons instead of Lucide for better compatibility
import { 
  FaGlobe, 
  FaSearch, 
  FaFileAlt, 
  FaPlaneDeparture, 
  FaMapMarkerAlt,
  FaArrowRight,
  FaUsers,
  FaCheckCircle,
  FaStar,
  FaClock
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaSearch className="w-6 h-6" />,
    title: "Explore Top Destinations",
    description: "Discover the best universities and travel locations tailored to your goals around the world.",
    bgGradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
    hoverGradient: "bg-gradient-to-r from-blue-600 to-cyan-600",
    color: "text-blue-600",
    borderColor: "border-blue-200",
    delay: 0.1,
  },
  {
    id: 2,
    icon: <FaFileAlt className="w-6 h-6" />,
    title: "Apply Seamlessly",
    description: "Complete your application online with ease. Upload your documents and let us handle the hard part.",
    bgGradient: "bg-gradient-to-r from-emerald-500 to-green-500",
    hoverGradient: "bg-gradient-to-r from-emerald-600 to-green-600",
    color: "text-emerald-600",
    borderColor: "border-emerald-200",
    delay: 0.2,
  },
  {
    id: 3,
    icon: <FaPlaneDeparture className="w-6 h-6" />,
    title: "Begin Your Journey",
    description: "Pack your essentials and prepare for a life-changing academic or travel experience abroad.",
    bgGradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    hoverGradient: "bg-gradient-to-r from-purple-600 to-pink-600",
    color: "text-purple-600",
    borderColor: "border-purple-200",
    delay: 0.3,
  },
  {
    id: 4,
    icon: <FaMapMarkerAlt className="w-6 h-6" />,
    title: "Settle & Succeed",
    description: "Arrive confidently, explore new cultures, and make the most out of your global opportunity.",
    bgGradient: "bg-gradient-to-r from-orange-500 to-red-500",
    hoverGradient: "bg-gradient-to-r from-orange-600 to-red-600",
    color: "text-orange-600",
    borderColor: "border-orange-200",
    delay: 0.4,
  },
];

const stats = [
  { icon: <FaUsers className="w-5 h-5" />, value: 50000, label: "Students Helped", suffix: "+" },
  { icon: <FaCheckCircle className="w-5 h-5" />, value: 98, label: "Success Rate", suffix: "%" },
  { icon: <FaGlobe className="w-5 h-5" />, value: 80, label: "Countries", suffix: "+" },
  { icon: <FaStar className="w-5 h-5" />, value: 4.9, label: "Student Rating", suffix: "/5" },
];
type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};
// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "" }:AnimatedCounterProps) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 40,
  });
  
  const displayValue = useTransform(spring, (current) => {
    if (value % 1 === 0) {
      return Math.round(current).toLocaleString() + suffix;
    } else {
      return current.toFixed(1) + suffix;
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

export default function WorkSection() {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const statsRef = useRef(null);
  const statsSectionInView = useInView(statsRef, { once: true, threshold: 0.1 });

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
    hidden: { y: 60, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateX: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      y: -12,
      scale: 1.03,
      rotateX: 5,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const iconContainerVariants = {
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
      scale: 1.15,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" 
           style={{ animation: 'pulse-slow 6s ease-in-out infinite' }}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
           style={{ animation: 'pulse-slower 8s ease-in-out infinite' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-200/10 to-pink-200/10 rounded-full blur-3xl"
           style={{ animation: 'rotate-slow 20s linear infinite' }}></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header with Better Animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 mb-8"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Trusted by 50,000+ Students Worldwide
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center gap-4 mb-6"
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-600"></div>
            <motion.div
              animate={floatAnimation}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full opacity-20 blur-lg animate-pulse"></div>
              <FaGlobe className="w-12 h-12 text-blue-600 relative z-10" />
            </motion.div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-emerald-600"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Your Journey to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
              Global Education
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Follow our proven 4-step process to transform your dream of studying abroad into reality. 
            From exploration to settlement, we guide you every step of the way.
          </motion.p>
        </motion.div>

        {/* Enhanced Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 relative"
        >
          {/* Animated Connection Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={sectionInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
            className="hidden lg:block absolute top-16 left-8 right-8 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-emerald-200 rounded-full -z-10"
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={{itemVariants}}
              custom={index}
              className="relative group"
            >
              {/* Step Number with Animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={sectionInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.6, delay: step.delay, type: "spring" }}
                className="absolute -top-3 -left-3 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100 z-20 group-hover:shadow-2xl transition-all duration-300"
              >
                <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  0{step.id}
                </span>
              </motion.div>

              <motion.div
                variants={{cardVariants}}
                whileHover="hover"
                className={`relative h-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100/80 overflow-hidden group-hover:border-blue-200/50 transition-all duration-500 ${step.borderColor} group-hover:${step.borderColor.replace('200', '300')}`}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 ${step.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                <CardContent className="flex flex-col items-center text-center space-y-6 p-8 relative z-10 h-full">
                  {/* Enhanced Icon Container */}
                  <motion.div
                    variants={{iconContainerVariants}}
                    whileHover="hover"
                    className={`p-5 rounded-2xl ${step.bgGradient} group-hover:${step.hoverGradient} shadow-2xl flex items-center justify-center relative overflow-hidden group/icon transition-all duration-500`}
                  >
                    {/* Icon Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full group-hover/icon:translate-x-full transition-transform duration-700"></div>
                    
                    {/* Icon */}
                    <div className="text-white relative z-10">
                      {step.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4 flex-1">
                    <motion.h3
                      whileHover={{ scale: 1.05 }}
                      className={`text-xl font-bold ${step.color} group-hover:${step.color.replace('600', '700')} transition-colors duration-300`}
                    >
                      {step.title}
                    </motion.h3>
                    
                    <motion.p
                      whileHover={{ scale: 1.02 }}
                      className="text-gray-600 leading-relaxed text-sm font-light group-hover:text-gray-700 transition-colors duration-300"
                    >
                      {step.description}
                    </motion.p>
                  </div>

                  {/* Animated CTA */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: step.delay + 0.5 }}
                    className={`flex items-center gap-2 text-sm font-semibold ${step.color} group-hover:${step.color.replace('600', '700')} transition-colors duration-300 cursor-pointer`}
                  >
                    <span>Learn more</span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <FaArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                </CardContent>

                {/* Enhanced Hover Border Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl ${step.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                  style={{ margin: '-1px' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Stats Section with Counting Animation */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={statsSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100/80 p-12 mb-16"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            animate={statsSectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Trusted by Students Worldwide
          </motion.h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={statsSectionInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1, type: "spring" }}
                className="text-center group"
              >
                <motion.div
                  animate={pulseAnimation}
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Icon Background Shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <div className="text-white relative z-10">
                    {stat.icon}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={statsSectionInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                  className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2 min-h-[48px] flex items-center justify-center"
                >
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                    duration={2 + index * 0.5}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={statsSectionInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                  className="text-sm text-gray-600 font-medium uppercase tracking-wider group-hover:text-gray-700 transition-colors duration-300"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-16 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 mx-auto group relative overflow-hidden"
          >
            {/* Button Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            <span className="relative z-10">Start Your Journey Today</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10"
            >
              <FaPlaneDeparture className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" />
            </motion.div>
          </motion.button>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="text-gray-500 text-sm mt-6 flex items-center justify-center gap-2"
          >
            <FaClock className="w-4 h-4" />
            Average processing time: 2-4 weeks
          </motion.p>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full opacity-20"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Add CSS animations directly in style tags for safety */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes rotate-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
}