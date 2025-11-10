"use client";

import ScholarshipsSection from "@/components/Scrollership/ScholarshipSection";
import SciBanner from "@/components/Scrollership/sciBanner";
import SciFilterSection from "@/components/Scrollership/sciFilter";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";

const scholarships = [
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
      image: "https://images.shiksha.com/mediadata/images/1533214461phpjrUmK2_g.jpg",
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
      image: "https://edunirvana.in/wp-content/uploads/2025/07/corpus-christi-1600x0-c-default.jpg",
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuoB3sW-PS0XDMxY_eJ_ERzvRkPL6p1C2YLg&s",
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
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Continetal_Group_Of_institutes.jpg/1200px-Continetal_Group_Of_institutes.jpg",
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
      image: "https://studyinsweden.se/transformations/2013/10/KTH-Borgg%C3%A5rden_Jann-Lipka-870x579-1.jpg-1920x.jpg",
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
      image: "https://webapi.easternuni.edu.bd/media/slider/Pc/7114ebc0832446b4b82ee532281fb458.webp",
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
      image: "https://www.splashtravels.com/storage/app/media/splashtravels/2025/2/21/top%20universities%20world%20og.jpg",
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

export default function ScholarshipsPageClient() {
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
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#80deea] pb-20 mt-20">
      {/* Banner */}
      <SciBanner />

      {/* Search Bar */}
        <div className="w-full max-w-xl mx-auto mt-5">
          <div className="relative flex items-center bg-white rounded-full  shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl focus-within:shadow-xl">
            <input
              type="text"
              placeholder="Search Universities"
              className="w-full py-3 px-5 text-gray-700 text-base placeholder-gray-400 focus:outline-none transition-all duration-200 border-4 rounded-full "
            />
            <button className="absolute right-2 text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200">
              <FaSearch />
            </button>
          </div>
        </div>

      {/* Filter Section */}
      <div className="w-11/12 mx-auto mt-10">
        <SciFilterSection />
      </div>

      {/* Scholarship Cards - Same design as ScholarshipSection */}
      <section className="w-9/12 mx-auto  mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
        {scholarships.map((scholarship, index) => (
          <motion.div
            key={scholarship.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
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
                  <p className="text-xs font-semibold text-gray-900">
                    {scholarship.university.split(' ')[0]}
                  </p>
                </div>
              </div>

              {/* Flag & Country */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 shadow-lg">
                <img
                  src={scholarship.flag}
                  alt={scholarship.country}
                  className="w-5 h-4 rounded-sm"
                />
                <span className="text-xs font-medium text-gray-900">
                  {scholarship.country.split(' ')[0]}
                </span>
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
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg mt-4">
                See Details
              </button>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}