"use client";

import { Button } from "flowbite-react";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const partners = [
    {id: 1,src: "https://i.ibb.co.com/8gbx0LYH/1673348187512-University-of-North-Alabama-removebg-preview.png", name: "University of North Alabama", external: true},
    { id: 2, src: "https://i.ibb.co.com/Nn9GKwvx/1673348289922-Arkansas-State-University-removebg-preview.png", name: "Arkansas State University", external: true },
    { id: 3, src: "https://i.ibb.co.com/Q3v7yqQj/16733478214980wust-removebg-preview.png", name: "Washington University Science & Tech", external: true },
    { id: 4, src: "https://i.ibb.co.com/ccqHCJMX/16733480954766img002-removebg-preview.png", name: "Cybersecurity Audit", external: true },
    { id: 5, src: "https://i.ibb.co.com/7x3wp0VD/16733481038773pnt-removebg-preview.png", name: "PeopleNTech", external: true },
    { id: 6, src: "https://i.ibb.co.com/nNvZvKxw/16733481134105nrb-removebg-preview.png", name: "NRB Connect", external: true },
    { id: 7, src: "https://i.ibb.co.com/HDwzZXtw/16733481542711-Wright-State-University-removebg-preview.png", name: "Wright State University", external: true },
    { id: 8, src: "https://i.ibb.co.com/C3kMQPpn/16733481681802-Western-Illinois-University-logo-removebg-preview.png", name: "Western Illinois University", external: true },
    { id: 9, src: "https://i.ibb.co.com/cKb7z4Dt/16733481752996-Washington-State-University-removebg-preview.png", name: "Washington State University", external: true },
    { id: 10, src: "https://i.ibb.co.com/60yYd06K/16733481817684-University-of-South-Florida-removebg-preview.png", name: "University of South Florida", external: true },
    { id: 11, src: "https://i.ibb.co.com/SwMjyXDG/16733482058101-University-Of-New-Haven-removebg-preview.png", name: "University of New Haven", external: true },
    { id: 12, src: "https://i.ibb.co.com/C5vkdMjV/16733482109140-Saint-Peter-s-University-removebg-preview.png", name: "Saint Peter's University", external: true },
    { id: 13, src: "https://i.ibb.co.com/k2CG0bzw/16733482171494-Saint-Louis-University-removebg-preview.png", name: "Saint Louis University", external: true },
    { id: 14, src: "https://i.ibb.co.com/ksQGcDWJ/16733482267136-Minnesota-State-University-removebg-preview.png", name: "Minnesota State University", external: true },
    { id: 15, src: "https://i.ibb.co.com/3Y0Q7ch6/16733482355824-Glendale-Community-College-removebg-preview.png", name: "Glendale Community College", external: true },
    { id: 16, src: "https://i.ibb.co.com/TBPbVQ0W/16733482409957-Eastern-Illinois-University-removebg-preview.png", name: "Eastern Illinois University", external: true },
    { id: 17, src: "https://i.ibb.co.com/HfGvhwxz/16733482486396-De-Paul-University-removebg-preview.png", name: "DePaul University", external: true },
    { id: 18, src: "https://i.ibb.co.com/7NCHtH92/16733482635138-Dakota-State-University-removebg-preview.png", name: "Dakota State University", external: true },
    { id: 19, src: "https://i.ibb.co.com/jv1SNpXZ/16733482692874-Central-Michigan-University-removebg-preview.png", name: "Central Michigan University", external: true },
    { id: 20, src: "https://i.ibb.co.com/N2RNs51j/16733482751513-Berkeley-College-removebg-preview.png", name: "Berkeley College", external: true },
];

// CountUp Component for animated numbers
const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start > end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  );
};

function PartnersSection() {
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes partners-marquee {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-15px);
        }
      }
      
      @keyframes pulse-glow {
        0%, 100% {
          box-shadow: 0 0 25px rgba(34, 211, 238, 0.4);
        }
        50% {
          box-shadow: 0 0 35px rgba(34, 211, 238, 0.8);
        }
      }
      
      @keyframes shimmer {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
      
      @keyframes bounce-subtle {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }
      
      .animate-pulse-glow {
        animation: pulse-glow 3s ease-in-out infinite;
      }
      
      .animate-bounce-subtle {
        animation: bounce-subtle 2s ease-in-out infinite;
      }
      
      .partner-card {
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        background: linear-gradient(145deg, #ffffff, #f8fafc);
        border: 1px solid #e2e8f0;
      }
      
      .partner-card:hover {
        transform: translateY(-12px) scale(1.08);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        border-color: #22d3ee;
      }
      
      .partner-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #22d3ee, #0d9488, #22d3ee);
        background-size: 200% 100%;
        border-radius: 8px 8px 0 0;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .partner-card:hover::before {
        opacity: 1;
        animation: shimmer 2s infinite;
      }
      
      .partner-tooltip {
        opacity: 0;
        transform: translateY(15px) scale(0.9);
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        pointer-events: none;
      }
      
      .partner-card:hover .partner-tooltip {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      
      .image-container {
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        filter: grayscale(30%);
      }
      
      .partner-card:hover .image-container {
        filter: grayscale(0%);
        transform: scale(1.15) rotate(2deg);
      }
      
      .shine-effect {
        position: absolute;
        top: 0;
        left: -100%;
        width: 50%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.6),
          transparent
        );
        transition: left 0.8s ease;
        z-index: 10;
      }
      
      .partner-card:hover .shine-effect {
        left: 100%;
      }
      
      .stats-card {
        transition: all 0.4s ease;
        background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
        border: 1px solid #f1f5f9;
      }
      
      .stats-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        border-color: #22d3ee;
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const PartnersMarquee = ({ 
    partnersList, 
    direction = 'forwards', 
    speed = '70s',
    className = '' 
  }: { 
    partnersList: typeof partners; 
    direction?: string;
    speed?: string;
    className?: string;
  }) => {
    const itemWidth = '200px';
    const itemGap = '50px';

    return (
      <div
        className={`max-w-full overflow-hidden ${className}`}
        style={{
          '--speed': speed,
          '--partners-gap': itemGap,
        } as React.CSSProperties}
      >
        <div
          className="w-max flex"
          style={{
            animation: `partners-marquee var(--speed) linear infinite ${direction}`,
          } as React.CSSProperties}
        >
          {/* Multiple duplicates for seamless looping */}
          {[...partnersList, ...partnersList, ...partnersList, ...partnersList].map((partner, index) => (
            <div
              key={index}
              className="partner-card flex-shrink-0 flex flex-col justify-center items-center rounded-3xl shadow-xl relative overflow-hidden group"
              style={{
                width: itemWidth,
                height: '140px',
                marginRight: itemGap,
              }}
            >
              {/* Shine effect */}
              <div className="shine-effect" />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-teal-600/0 group-hover:from-cyan-500/5 group-hover:to-teal-600/5 transition-all duration-500" />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full rounded-3xl bg-gradient-to-r animate-pulse-glow" style={{padding: '2px'}}>
                  <div className="w-full h-full rounded-2xl bg-white" />
                </div>
              </div>
              
              {/* Logo container */}
              <div className="w-4/5 h-4/5 relative z-10 image-container">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain transition-all duration-500"
                  unoptimized={partner.external}
                  sizes="180px"
                />
              </div>
              
              {/* Enhanced Tooltip */}
              <div className="partner-tooltip absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-sm font-semibold py-2 px-4 rounded-full text-center z-20 shadow-2xl min-w-max">
                {partner.name}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-600 rotate-45"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16  relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-cyan-300/50 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-20 h-20 bg-teal-300/50 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-cyan-200/60 rounded-full animate-float" style={{animationDelay: '2.5s'}}></div>
      <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-teal-200/50 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      
      {/* Gradient orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-300/60 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-300/50 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Enhanced Animated header */}
        <div className="animate-fade-in-up mb-16">
          <div className="inline-block animate-bounce-subtle mb-6">
            <div className="bg-white text-cyan-700 text-sm font-bold py-2 px-6 rounded-full shadow-lg border border-cyan-200">
              Trusted Worldwide
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold  mb-6">
            Our <span className="text-cyan-800">Prestigious</span> Partners
          </h2>
          <p className="text-xl md:text-2xl text-cyan-800 max-w-4xl mx-auto mb-8 font-light leading-relaxed">
            Collaborating with leading educational institutions and organizations worldwide to deliver exceptional learning experiences
          </p>
          <div className="w-32 h-2 bg-cyan-600 mx-auto rounded-full mb-12 shadow-lg"></div>
        </div>

        {/* Enhanced Stats section with counting numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-5xl mx-auto">
          <div className="stats-card rounded-2xl p-8 text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl font-bold text-cyan-600 mb-4 ">
              <CountUp end={20} duration={2000} suffix="+" />
            </div>
            <div className="text-gray-700 font-semibold text-lg mb-2">University Partners</div>
            <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="stats-card rounded-2xl p-8 text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="text-4xl font-bold text-cyan-600 mb-4">
              <CountUp end={50} duration={2000} suffix="K+" />
            </div>
            <div className="text-gray-700 font-semibold text-lg mb-2">Students Impacted</div>
            <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="stats-card rounded-2xl p-8 text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="text-4xl font-bold text-cyan-600 mb-4">
              <CountUp end={15} duration={2000} suffix="+" />
            </div>
            <div className="text-gray-700 font-semibold text-lg mb-2">Years of Excellence</div>
            <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Marquee sections */}
        <div className="space-y-10 lg:space-y-14 mb-20">
          <PartnersMarquee 
            partnersList={partners} 
            direction="forwards" 
            speed="120s"
            className="h-[160px]"
          />
          
          <PartnersMarquee 
            partnersList={partners} 
            direction="reverse" 
            speed="110s"
            className="h-[160px]"
          />
          
          <PartnersMarquee 
            partnersList={partners} 
            direction="forwards" 
            speed="130s"
            className="h-[160px]"
          />
        </div>

        {/* Enhanced CTA Section */}
        <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-16 border border-white shadow-2xl max-w-5xl mx-auto relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-100 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-500 rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Join Our Network?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Become part of our growing community of educational.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:-translate-y-2 shadow-2xl hover:shadow-3xl border-0"
                >
                  Partner With Us
                </Button>
                <Button 
                  outline 
                  className="border-2 border-cyan-500 text-cyan-600 hover:border-cyan-600 hover:text-cyan-700 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:-translate-y-2 shadow-lg hover:shadow-xl"
                >
                  Learn More
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6">
                <div className="flex items-center text-cyan-600">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm font-semibold">Quick Onboarding</span>
                </div>
                <div className="flex items-center text-teal-600">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-3 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-sm font-semibold">24/7 Support</span>
                </div>
                <div className="flex items-center text-cyan-600">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3 animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="text-sm font-semibold">Dedicated Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;