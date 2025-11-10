"use client";
import React from "react";
import { UniversityCard } from "./universityCard";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Link from "next/link";

export function UniversitiesSection({ limit }) {
  const universities = [
    {
      id: 1,
      universityName: "The University of Melbourne",
      programName: "Bachelor of Commerce",
      location: "Parkville, Australia",
      worldRank: "39",
      degree: "Bachelor Degree",
      intakeDate: "02.03.2026",
      entryScore: "IELTS 6.5",
      tuitionFee: "AUD 52,360",
      image: "https://static.sliit.lk/wp-content/uploads/2024/10/28052224/University-of-Melbourne.jpg",
      featured: true,
    },
    {
      id: 2,
      universityName: "Harvard University",
      programName: "Bachelor of Science",
      location: "Cambridge, USA",
      worldRank: "1",
      degree: "Bachelor Degree",
      intakeDate: "10.09.2026",
      entryScore: "IELTS 7.0",
      tuitionFee: "USD 55,000",
      image: "https://image-static.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg",
    },
    {
      id: 3,
      universityName: "Stanford University",
      programName: "Master of Engineering",
      location: "California, USA",
      worldRank: "3",
      degree: "Master Degree",
      intakeDate: "15.08.2026",
      entryScore: "IELTS 6.5",
      tuitionFee: "USD 48,000",
      image: "https://www.meridean.org/assets/img/university/16905355981672387200243744.jpg",
    },
    {
      id: 4,
      universityName: "University of Oxford",
      programName: "Bachelor of Arts",
      location: "Oxford, UK",
      worldRank: "2",
      degree: "Bachelor Degree",
      intakeDate: "05.10.2026",
      entryScore: "IELTS 7.5",
      tuitionFee: "GBP 40,000",
      image: "https://dxp.plus/cdn-cgi/image/w=3840,q=90,f=webp,fit=contain/https://us-cdn.dxp.plus/4e7f1e24-6b44-4103-9287-7bfb88f988b8/Oxford%20City.jpg.preview.png",
    },
    {
      id: 5,
      universityName: "MIT",
      programName: "Master of Science",
      location: "Cambridge, USA",
      worldRank: "4",
      degree: "Master Degree",
      intakeDate: "12.09.2026",
      entryScore: "IELTS 7.0",
      tuitionFee: "USD 53,000",
      image: "https://images.shiksha.com/mediadata/images/1533214461phpjrUmK2_g.jpg",
    },
    {
      id: 6,
      universityName: "University of Cambridge",
      programName: "Bachelor of Engineering",
      location: "Cambridge, UK",
      worldRank: "5",
      degree: "Bachelor Degree",
      intakeDate: "15.10.2026",
      entryScore: "IELTS 7.5",
      tuitionFee: "GBP 42,000",
      image: "https://edunirvana.in/wp-content/uploads/2025/07/corpus-christi-1600x0-c-default.jpg",
    },
    {
      id: 7,
      universityName: "Global University of Science",
      programName: "Master of Computer Science",
      location: "Berlin, Germany",
      worldRank: "18",
      degree: "Master Degree",
      intakeDate: "01.09.2026",
      entryScore: "GRE 320, TOEFL 105",
      tuitionFee: "EUR 35,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuoB3sW-PS0XDMxY_eJ_ERzvRkPL6p1C2YLg&s",
    },
    {
      id: 8,
      universityName: "Continental College of Engineering",
      programName: "Bachelor of Mechanical Engineering",
      location: "Paris, France",
      worldRank: "22",
      degree: "Bachelor Degree",
      intakeDate: "10.09.2026",
      entryScore: "SAT 1500, TOEFL 100",
      tuitionFee: "EUR 32,000",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Continetal_Group_Of_institutes.jpg/1200px-Continetal_Group_Of_institutes.jpg",
    },
    {
      id: 9,
      universityName: "Royal University of Technology",
      programName: "Master in Data Science",
      location: "Stockholm, Sweden",
      worldRank: "15",
      degree: "Master Degree",
      intakeDate: "05.10.2026",
      entryScore: "IELTS 7.5, GRE 315",
      tuitionFee: "SEK 280,000",
      image: "https://studyinsweden.se/transformations/2013/10/KTH-Borgg%C3%A5rden_Jann-Lipka-870x579-1.jpg-1920x.jpg",
    },
    {
      id: 10,
      universityName: "Pacific Institute of Innovation",
      programName: "Bachelor of Electrical Engineering",
      location: "Tokyo, Japan",
      worldRank: "20",
      degree: "Bachelor Degree",
      intakeDate: "20.09.2026",
      entryScore: "TOEFL 100, SAT 1450",
      tuitionFee: "JPY 3,500,000",
      image: "https://faithoverseas.com/wp-content/uploads/2024/04/Asia-Pacific-University-of-Technology-Innovation.jpg",
    },
    {
      id: 11,
      universityName: "Eastern Global University",
      programName: "Master in Artificial Intelligence",
      location: "Seoul, South Korea",
      worldRank: "25",
      degree: "Master Degree",
      intakeDate: "01.11.2026",
      entryScore: "GRE 320, IELTS 7.0",
      tuitionFee: "KRW 40,000,000",
      image: "https://webapi.easternuni.edu.bd/media/slider/Pc/7114ebc0832446b4b82ee532281fb458.webp",
    },
    {
      id: 12,
      universityName: "Imperial Institute of Technology",
      programName: "Bachelor of Engineering",
      location: "London, UK",
      worldRank: "12",
      degree: "Bachelor Degree",
      intakeDate: "15.10.2026",
      entryScore: "IELTS 7.5",
      tuitionFee: "GBP 42,000",
      image: "https://www.splashtravels.com/storage/app/media/splashtravels/2025/2/21/top%20universities%20world%20og.jpg",
    },

  ];

  const displayedUniversities = limit
    ? universities.slice(0, limit)
    : universities;

  return (
    <section className="w-full py-20 bg-gray-50 relative">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 max-w-11/12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Featured Universities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Partnering with world-class institutions to provide exceptional educational opportunities globally.
          </p>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedUniversities.map((uni) => (
            <div
              key={uni.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 overflow-hidden group"
            >
              <div className="relative w-full h-56">
                <img
                  src={uni.image}
                  alt={uni.universityName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{uni.universityName}</h3>
                <p className="text-gray-600 mb-2">{uni.programName}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{uni.location}</span>
                  <span>World Rank: {uni.worldRank}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-semibold">{uni.tuitionFee}</span>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-1">
                    Details<AiOutlineDoubleRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {limit && (
          <div className="mt-16 text-center">
            <Link
              href="/u/universities"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Browse All Universities
              <AiOutlineDoubleRight size={20} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
