"use client";
import React, { useRef, useEffect, useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Link from "next/link";

export function UniversitiesSection({ limit }) {
  const [isVisible, setIsVisible] = useState(false);
  const [universities, setUniversities] = useState([]);
  const [particlePositions, setParticlePositions] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("/university.json")
      .then((res) => res.json())
      .then((data) => setUniversities(data))
      .catch((err) => console.error("Failed to fetch universities:", err));
  }, []);

  // Client-side only particle positions
  useEffect(() => {
    const positions = Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${15 + Math.random() * 10}s`
    }));
    setParticlePositions(positions);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const displayedUniversities = limit
    ? universities.slice(0, limit)
    : universities;

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-10 blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-10 blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-5 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-11/12 relative z-10">
        {/* Enhanced Header with Stunning Design */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 animate-fade-in-delayed"></div>

            {/* Main title with gradient and effects */}
            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                <span className="block transform transition-all duration-700 delay-300"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(-30px)'
                  }}>
                  Featured
                </span>
                <span className="block text-cyan-500 bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 font-black tracking-tighter transform transition-all duration-700 delay-500"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)'
                  }}>
                  Universities
                </span>
              </h2>

              {/* Underline effect */}
              <div className="relative h-1 w-24 mx-auto mt-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 transform transition-all duration-1000 delay-700"
                  style={{
                    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)'
                  }}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 transform transition-all duration-1000 delay-800"
                  style={{
                    transform: isVisible ? 'translateX(0)' : 'translateX(100%)'
                  }}></div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-0 animate-bounce-in delay-1000"></div>
            <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-cyan-500 rounded-full opacity-0 animate-bounce-in delay-1200"></div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light transform transition-all duration-1000 delay-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-20px)'
            }}>
            Partnering with world-class institutions to provide exceptional educational opportunities globally.
          </p>
        </div>

        {/* Universities Grid with Staggered Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedUniversities.map((uni, index) => (
            <div
              key={uni.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden group relative border border-white/50"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? 'translateY(0) scale(1)'
                  : 'translateY(50px) scale(0.9)',
                transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`
              }}
            >
              {/* Image Container */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={uni.image}
                  alt={uni.universityName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated Rank Badge */}
                <div className="absolute top-4 right-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg hover:shadow-blue-300 transition-shadow duration-300">
                    Rank #{uni.worldRank}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {uni.universityName}
                </h3>
                <p className="text-gray-600 mb-2 transform group-hover:translate-x-1 transition-transform duration-300">
                  {uni.programName}
                </p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span className="transform group-hover:-translate-y-1 transition-transform duration-300">
                    {uni.location}
                  </span>
                  <span className="transform group-hover:-translate-y-1 transition-transform duration-300 delay-100">
                    World Rank: {uni.worldRank}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-semibold transform group-hover:scale-105 transition-transform duration-300">
                    {uni.tuitionFee}
                  </span>
                  {/* Fixed Details Button */}
                  <Link 
                    href={`/u/universities/${uni.id}`} 
                    className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2.5 rounded-xl font-semibold transform transition-all duration-500 flex items-center gap-2 shadow-lg hover:shadow-blue-300 group/btn hover:scale-105 hover:-translate-y-0.5"
                  >
                    <span className="relative z-10 transform group-hover/btn:translate-x-1 transition-transform duration-300">
                      Details
                    </span>
                    <AiOutlineDoubleRight className="relative z-10 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                    
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    
                    {/* Pulse Ring Effect */}
                    <div className="absolute inset-0 border-2 border-white rounded-xl opacity-0 group-hover/btn:opacity-100 group-hover/btn:scale-110 transition-all duration-500"></div>
                    
                    {/* Ripple Effect Container */}
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 group-hover/btn:scale-150 transition-all duration-500 ease-out rounded-full transform origin-center"></div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Floating Elements on Hover */}
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-300"></div>
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Button with Premium Animation */}
        {limit && (
          <div className="mt-16 text-center transform transition-all duration-1000 delay-800"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
            }}>
            <div className="relative inline-block">
              {/* Background Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-purple-500/30 rounded-2xl blur-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

              <Link
                href="/u/universities"
                className="relative inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold px-12 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group overflow-hidden"
              >
                <span className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-300">
                  Browse All Universities
                </span>
                <AiOutlineDoubleRight size={24} className="relative z-10 transform group-hover:translate-x-3 group-hover:scale-110 transition-transform duration-300" />

                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Floating Particles on Hover - Fixed */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float-particles"
                      style={{
                        left: `${20 + i * 30}%`,
                        bottom: '10%',
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>

                {/* Border Animation */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-20"></div>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Floating Particles - Fixed with client-side only rendering */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particlePositions.map((position, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-float"
            style={{
              left: position.left,
              top: position.top,
              animationDelay: position.animationDelay,
              animationDuration: position.animationDuration
            }}
          />
        ))}
      </div>
    </section>
  );
}