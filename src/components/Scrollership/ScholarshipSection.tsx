"use client";

import React from "react";
import { AiOutlineDoubleRight, AiFillStar } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

interface Scholarship {
  id: number;
  image: string;
  title: string;
  university: string;
  field: string;
  country: string;
  degree: string;
  deadline: string;
  amount: string;
  flag: string;
  rating: number;
  eligibility: string;
}

export default function ScholarshipsSection({ limit }: { limit?: number }) {
  const scholarships: Scholarship[] = [
    {
      id: 1,
      image: "https://static.sliit.lk/wp-content/uploads/2024/10/28052224/University-of-Melbourne.jpg",
      title: "Harvard Global Excellence Scholarship",
      university: "Harvard University",
      field: "Computer Science",
      country: "United States",
      degree: "Bachelor's",
      deadline: "Dec 15, 2025",
      amount: "$45,000",
      flag: "https://flagcdn.com/w40/us.png",
      rating: 4.9,
      eligibility: "Minimum 3.8 GPA, leadership experience",
    },
    {
      id: 2,
      image: "https://image-static.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg",
      title: "Stanford Engineering Fellowship",
      university: "Stanford University",
      field: "Mechanical Engineering",
      country: "United States",
      degree: "Master's",
      deadline: "Jan 20, 2026",
      amount: "$35,000",
      flag: "https://flagcdn.com/w40/us.png",
      rating: 4.8,
      eligibility: "Engineering background, research potential",
    },
    {
      id: 3,
      image: "https://www.meridean.org/assets/img/university/16905355981672387200243744.jpg",
      title: "Oxford International Humanities Award",
      university: "University of Oxford",
      field: "Humanities & Arts",
      country: "United Kingdom",
      degree: "PhD",
      deadline: "Feb 28, 2026",
      amount: "Fully Funded",
      flag: "https://flagcdn.com/w40/gb.png",
      rating: 4.9,
      eligibility: "Research proposal, academic publications",
    },
    {
      id: 4,
      image: "https://dxp.plus/cdn-cgi/image/w=3840,q=90,f=webp,fit=contain/https://us-cdn.dxp.plus/4e7f1e24-6b44-4103-9287-7bfb88f988b8/Oxford%20City.jpg.preview.png",
      title: "Tokyo Tech Innovation Scholarship",
      university: "University of Tokyo",
      field: "Artificial Intelligence",
      country: "Japan",
      degree: "Master's",
      deadline: "Mar 10, 2026",
      amount: "$28,000",
      flag: "https://flagcdn.com/w40/jp.png",
      rating: 4.7,
      eligibility: "STEM background, programming skills",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&w=800&q=80",
      title: "ETH Zurich Science Scholarship",
      university: "ETH Zurich",
      field: "Biotechnology",
      country: "Switzerland",
      degree: "PhD",
      deadline: "Apr 05, 2026",
      amount: "$52,000",
      flag: "https://flagcdn.com/w40/ch.png",
      rating: 4.8,
      eligibility: "Lab experience, research publications",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      title: "Cambridge Business Leadership Award",
      university: "University of Cambridge",
      field: "Business Administration",
      country: "United Kingdom",
      degree: "MBA",
      deadline: "May 15, 2026",
      amount: "$40,000",
      flag: "https://flagcdn.com/w40/gb.png",
      rating: 4.9,
      eligibility: "3+ years work experience, leadership",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1576495199011-ebf36cd8c9f5?auto=format&fit=crop&w=800&q=80",
      title: "MIT Technology Innovation Grant",
      university: "MIT",
      field: "Robotics & Automation",
      country: "United States",
      degree: "Master's",
      deadline: "Jun 30, 2026",
      amount: "$38,000",
      flag: "https://flagcdn.com/w40/us.png",
      rating: 4.9,
      eligibility: "Engineering projects, innovation portfolio",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
      title: "National University of Singapore Award",
      university: "NUS",
      field: "Data Science",
      country: "Singapore",
      degree: "Bachelor's",
      deadline: "Jul 25, 2026",
      amount: "$25,000",
      flag: "https://flagcdn.com/w40/sg.png",
      rating: 4.6,
      eligibility: "Strong math background, coding experience",
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1541336187922-bffa57ef2d55?auto=format&fit=crop&w=800&q=80",
      title: "University of Toronto Excellence Fund",
      university: "University of Toronto",
      field: "Environmental Science",
      country: "Canada",
      degree: "Master's",
      deadline: "Aug 12, 2026",
      amount: "$32,000",
      flag: "https://flagcdn.com/w40/ca.png",
      rating: 4.7,
      eligibility: "Environmental projects, research interest",
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1583324113626-70b8f5b2ad36?auto=format&fit=crop&w=800&q=80",
      title: "University of Melbourne Research Scholarship",
      university: "University of Melbourne",
      field: "Medical Research",
      country: "Australia",
      degree: "PhD",
      deadline: "Sep 08, 2026",
      amount: "$48,000",
      flag: "https://flagcdn.com/w40/au.png",
      rating: 4.7,
      eligibility: "Medical background, research experience",
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1551524164-6ca64fb04d0d?auto=format&fit=crop&w=800&q=80",
      title: "Technical University of Munich Scholarship",
      university: "TUM",
      field: "Renewable Energy",
      country: "Germany",
      degree: "Master's",
      deadline: "Oct 20, 2026",
      amount: "$30,000",
      flag: "https://flagcdn.com/w40/de.png",
      rating: 4.6,
      eligibility: "Engineering degree, sustainability interest",
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1577512627231-7834437bfaa2?auto=format&fit=crop&w=800&q=80",
      title: "Seoul National University Scholarship",
      university: "Seoul National University",
      field: "Computer Engineering",
      country: "South Korea",
      degree: "Bachelor's",
      deadline: "Nov 15, 2026",
      amount: "$22,000",
      flag: "https://flagcdn.com/w40/kr.png",
      rating: 4.5,
      eligibility: "High school top 10%, math proficiency",
    }
  ];

  const displayedScholarships = limit
    ? scholarships.slice(0, limit)
    : scholarships;

  const getDeadlineColor = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 30) return "text-red-600 bg-red-50 border border-red-200";
    if (diffDays < 60) return "text-orange-600 bg-orange-50 border border-orange-200";
    return "text-green-600 bg-green-50 border border-green-200";
  };

  return (
    <section className="py-10 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Featured <span className="text-blue-600">Scholarships</span>
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Discover exclusive scholarship opportunities from top universities worldwide
        </p>
      </div>

      {/* Scholarships Grid with Better Gaps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {displayedScholarships.map((scholarship, index) => (
          <motion.div
            key={scholarship.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 mx-2"
          >
            {/* Image Section */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={scholarship.image}
                alt={scholarship.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* University Badge */}
              <div className="absolute top-4 left-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
                  <p className="text-xs font-semibold text-gray-900">{scholarship.university.split(' ')[0]}</p>
                </div>
              </div>

              {/* Flag & Country */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 shadow-lg">
                <img
                  src={scholarship.flag}
                  alt={scholarship.country}
                  className="w-5 h-4 rounded-sm"
                />
                <span className="text-xs font-medium text-gray-900">{scholarship.country.split(' ')[0]}</span>
              </div>

              {/* Rating */}
              <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-black/80 rounded-full px-3 py-1.5">
                <AiFillStar className="text-yellow-400 text-sm" />
                <span className="text-white text-sm font-semibold">
                  {scholarship.rating.toFixed(1)}
                </span>
              </div>
            </div>

            {/* Content with Better Spacing */}
            <div className="p-6 space-y-4">
              {/* Title & Field */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900 line-clamp-2 leading-tight">
                  {scholarship.title}
                </h3>
                <p className="text-blue-600 font-semibold text-sm">
                  {scholarship.field} • {scholarship.degree}
                </p>
              </div>

              {/* Eligibility */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500 uppercase font-semibold">Eligibility</p>
                <p className="text-sm text-gray-700 line-clamp-2 leading-relaxed">
                  {scholarship.eligibility}
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase font-semibold">Amount</p>
                  <p className="text-lg font-bold text-gray-900">{scholarship.amount}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase font-semibold">Deadline</p>
                  <span className={`text-sm font-semibold px-2 py-1 rounded-full ${getDeadlineColor(scholarship.deadline)}`}>
                    {scholarship.deadline}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700  text-white py-3 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg mt-4">
                See Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Explore More Button */}
      {limit && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-20"
        >
          <Link
            href="u/scholarships"
            className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600  text-white px-10 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Explore All Scholarships</span>
            <AiOutlineDoubleRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </Link>
        </motion.div>
      )}
    </section>
  );
}