"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { AiOutlineDoubleRight, AiFillStar, AiFillHeart } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { FaCompass, FaMapMarkerAlt, FaCalendarDays, FaPlane, FaUmbrellaBeach } from "react-icons/fa6";
import Link from "next/link";

const travelPackages = [
  {
    id: 1,
    title: "Rome Historical Journey",
    location: "Italy",
    image: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/ancient-rome-hero?_a=BAVAZGID0",
    rating: 4.9,
    reviews: 1247,
    price: "$1,299",
    days: "7 Days",
    featured: true,
    description: "Explore ancient ruins and Renaissance art in the Eternal City",
    highlights: ["Colosseum Tour", "Vatican Museums", "Roman Forum", "Gelato Tasting"]
  },
  {
    id: 2,
    title: "Kyoto Temple Tour",
    location: "Japan",
    image: "https://www.hertz.com/content/dam/hertz/global/blog-articles/planning-a-trip/kyoto-japan/kyoto-header.jpg",
    rating: 4.8,
    reviews: 892,
    price: "$1,099",
    days: "6 Days",
    featured: false,
    description: "Discover traditional temples and serene gardens",
    highlights: ["Fushimi Inari", "Kinkaku-ji Temple", "Geisha District", "Tea Ceremony"]
  },
  {
    id: 3,
    title: "Egypt Pyramids Adventure",
    location: "Egypt",
    image: "https://egyptescapes.com/wp-content/uploads/2022/12/egypt-adventures.jpg",
    rating: 4.7,
    reviews: 1563,
    price: "$899",
    days: "5 Days",
    featured: true,
    description: "Uncover ancient mysteries and majestic pyramids",
    highlights: ["Giza Pyramids", "Nile Cruise", "Valley of Kings", "Camel Ride"]
  },
  {
    id: 4,
    title: "Machu Picchu Trek",
    location: "Peru",
    image: "https://rezkit-tour-images.b-cdn.net/01h7ywwd7at70t98wdj69emng5/images/01H8Y65RZZBDRHYNE92FQK8FHF.jpg?width=1920&height=700&crop=2096%2C764%2C19%2C556",
    rating: 4.9,
    reviews: 734,
    price: "$1,499",
    days: "8 Days",
    featured: false,
    description: "Hike through ancient Incan trails to the lost city",
    highlights: ["Inca Trail", "Sun Gate", "Sacred Valley", "Local Markets"]
  },
];

// Custom Travel Logo Component
const TravelLogo = () => (
  <motion.div
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ duration: 1, type: "spring", stiffness: 200 }}
    className="relative"
  >
    {/* Outer Ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border-4 border-blue-500/20 rounded-full"
    />
    
    {/* Middle Ring */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute inset-2 border-3 border-cyan-500/30 rounded-full"
    />
    
    {/* Inner Content */}
    <div className="relative w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl">
      {/* Compass Icon */}
      <motion.div
        animate={{ 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaCompass className="text-white text-3xl" />
      </motion.div>
      
      {/* Floating Dots */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            rotate: [0, 360],
            x: Math.cos(i * 90 * Math.PI / 180) * 30,
            y: Math.sin(i * 90 * Math.PI / 180) * 30,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
        />
      ))}
    </div>
    
    {/* Glow Effect */}
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl -z-10"
    />
  </motion.div>
);

// Enhanced 3D Card Component with Reduced Lift
const TravelCard3D = ({ pkg, index }: { pkg: typeof travelPackages[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Reduced rotation for subtler effect
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), {
    stiffness: 300,
    damping: 30
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), {
    stiffness: 300,
    damping: 30
  });

  const scale = useSpring(1, { stiffness: 400, damping: 30 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct * 200);
    y.set(yPct * 200);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    scale.set(1.02); // Reduced from 1.05 to 1.02
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
      }}
      initial={{ 
        opacity: 0, 
        y: 80,
        scale: 0.9
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        scale: 1
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="cursor-pointer group relative"
    >
      {/* Magnetic Field Lines */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 border-2 border-blue-400/20 rounded-3xl -z-10"
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ pathLength: 0 }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
                className="absolute inset-0 border border-blue-400/10 rounded-3xl"
                style={{
                  transform: `scale(${0.8 + i * 0.05})`,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 relative h-full backdrop-blur-sm">
        
        {/* Holographic Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.4 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-emerald-500/10 rounded-3xl -z-10 transition-opacity duration-500"
        />

        {/* Floating Destination Particles */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    x: Math.cos(i * 90 * Math.PI / 180) * 30,
                    y: Math.sin(i * 90 * Math.PI / 180) * 30,
                  }}
                  exit={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    ease: "easeOut"
                  }}
                  className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full z-20"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: -4,
                    marginTop: -4,
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Image Container with Parallax */}
        <div className="relative h-72 overflow-hidden rounded-t-3xl">
          <motion.img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover"
            whileHover={{ 
              scale: 1.1, // Reduced from 1.15 to 1.1
            }}
            transition={{ duration: 0.8 }}
          />

          {/* Animated Gradient Overlay */}
          <motion.div
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 0.4 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-500"
          />

          {/* Featured Badge with Pulse */}
          {pkg.featured && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.3, type: "spring" }}
              className="absolute top-6 left-6 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-3 rounded-2xl font-bold shadow-2xl"
              whileHover={{
                scale: 1.05, // Reduced from 1.1
                transition: { type: "spring", stiffness: 400 }
              }}
              animate={{
                boxShadow: [
                  "0 10px 30px rgba(245, 158, 11, 0.3)",
                  "0 15px 40px rgba(245, 158, 11, 0.5)",
                  "0 10px 30px rgba(245, 158, 11, 0.3)",
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <AiFillStar className="text-white" />
                </motion.div>
                <span>Featured</span>
              </div>
            </motion.div>
          )}

          {/* Like Button */}
          <motion.button
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl z-20"
          >
            <motion.div
              animate={{ 
                scale: isLiked ? [1, 1.3, 1] : 1,
                color: isLiked ? "#ef4444" : "#6b7280"
              }}
              transition={{ duration: 0.3 }}
            >
              <AiFillHeart className="text-xl" />
            </motion.div>
          </motion.button>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
            className="absolute bottom-6 left-145 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl flex items-center gap-2 shadow-2xl"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AiFillStar className="text-amber-400 text-lg" />
            </motion.div>
            <span className="font-bold text-gray-900">{pkg.rating}</span>
            <span className="text-gray-600 text-sm">({pkg.reviews})</span>
          </motion.div>

          {/* Title & Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.7 }}
            className="absolute bottom-6 right-6 left-6 "
          >
            <motion.h3
              className="text-2xl font-bold text-white mb-3 drop-shadow-2xl leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              {pkg.title}
            </motion.h3>
            <motion.div 
              className="flex items-center text-white/90 bg-black/40 backdrop-blur-sm rounded-xl px-4 py-3 w-fit"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <IoLocationOutline className="mr-3 text-cyan-300 text-lg" />
              </motion.div>
              <span className="font-semibold text-lg">{pkg.location}</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Card Content */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-b-3xl">
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.9 }}
            className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed"
          >
            {pkg.description}
          </motion.p>

          {/* Price and Duration */}
          <div className="flex items-center justify-between mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-baseline gap-2"
            >
              <motion.span
                className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0%", "100%", "0%"] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity 
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                {pkg.price}
              </motion.span>
              <span className="text-gray-600 text-sm">/person</span>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }} // Reduced rotation
              className="bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 px-4 py-3 rounded-2xl text-sm font-bold border border-blue-200 flex items-center gap-3"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <FaCalendarDays className="text-blue-500" />
              </motion.div>
              <span className="font-semibold">{pkg.days}</span>
            </motion.div>
          </div>

          {/* Highlights with Staggered Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 1.1 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {pkg.highlights.slice(0, 3).map((highlight, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.15 + 1.3 + i * 0.1,
                  type: "spring" 
                }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-2 rounded-xl text-xs font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                {highlight}
              </motion.span>
            ))}
          </motion.div>

          {/* Action Button with Liquid Fill */}
          <motion.button
            whileHover={{ 
              scale: 1.03, // Reduced from 1.05
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-2xl transition-all duration-300 relative overflow-hidden group/btn shadow-xl"
          >
            {/* Liquid Fill Background */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl"
              transition={{ duration: 0.3 }}
            />
            
            {/* Floating Particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -20, 0], // Reduced movement
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: i * 0.3
                }}
                className="absolute w-1.5 h-1.5 bg-white rounded-full"
                style={{
                  left: `${20 + i * 20}%`,
                  bottom: "15%",
                }}
              />
            ))}
            
            <span className="relative z-10 flex items-center justify-center gap-3 text-lg font-semibold">
              <FaUmbrellaBeach className="text-lg" />
              Explore Package
              <motion.div
                animate={{ x: [0, 4, 0] }} // Reduced movement
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <AiOutlineDoubleRight className="text-lg" />
              </motion.div>
            </span>

            {/* Shine Effect */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
            />
          </motion.button>
        </div>

        {/* Magnetic Border Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.95
          }}
          className="absolute inset-0 border-3 border-transparent bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-emerald-500/30 rounded-3xl -z-10 transition-all duration-500 blur-md"
        />
      </div>
    </motion.div>
  );
};

export default function TopTravelPackages() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          y: [-20, 20, -20], // Reduced movement
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          y: [20, -20, 20], // Reduced movement
          x: [5, -5, 5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-200/30 rounded-full blur-3xl"
      />

      {/* Floating Travel Icons */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0], // Reduced movement
            x: [0, Math.sin(i) * 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
          className="absolute text-blue-300/20 z-0"
          style={{
            left: `${10 + i * 20}%`,
            top: `${10 + i * 15}%`,
          }}
        >
          <FaPlane size={24} /> {/* Smaller icon */}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Enhanced Header with Custom Logo */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Logo and Title Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center mb-8"
          >
            <TravelLogo />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                Wander<span className="text-blue-600">Lust</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto" />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Curated{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Adventures
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover handpicked destinations that transform ordinary trips into extraordinary memories
          </motion.p>
        </motion.div>

        {/* Enhanced Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {travelPackages.map((pkg, index) => (
            <TravelCard3D key={pkg.id} pkg={pkg} index={index} />
          ))}
        </motion.div>

        {/* Enhanced CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center flex justify-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }} // Reduced movement
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Link
              href="u/travel"
              className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold px-16 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 flex items-center gap-4 overflow-hidden"
            >
              {/* Morphing Gradient */}
              <motion.div
                animate={{
                  background: [
                    "linear-gradient(45deg, #2563eb, #0891b2, #0ea5e9)",
                    "linear-gradient(45deg, #0ea5e9, #2563eb, #0891b2)",
                    "linear-gradient(45deg, #0891b2, #0ea5e9, #2563eb)",
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0"
              />
              
              {/* 3D Shine Effect */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12"
              />
              
              <span className="relative z-10 text-lg font-semibold">Explore All Destinations</span>
              <motion.div
                animate={{ x: [0, 6, 0], rotate: [0, 8, 0] }} // Reduced movement
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10"
              >
                <AiOutlineDoubleRight size={24} />
              </motion.div>

              {/* Floating Particles */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -20, 0], // Reduced movement
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                  className="absolute w-1.5 h-1.5 bg-white rounded-full"
                  style={{
                    left: `${15 + i * 20}%`,
                    bottom: "20%",
                  }}
                />
              ))}
            </Link>

            {/* Outer Glow */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1], // Reduced scale
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-xl -z-10"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}