"use client";
import React from "react";
import { UniversityCard } from "./universityCard";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Link from "next/link";

export function UniversitiesSection() {
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
    tuitionFee: "AUD52360 (2025)",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.NIRiOFTeIGlcW5-oPF6MBQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    tuitionFee: "USD55000 (2025)",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.NIRiOFTeIGlcW5-oPF6MBQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    tuitionFee: "USD48000 (2025)",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.NIRiOFTeIGlcW5-oPF6MBQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    tuitionFee: "GBP40000 (2025)",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.NIRiOFTeIGlcW5-oPF6MBQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 5,
    universityName: "Massachusetts Institute of Technology",
    programName: "Master of Science",
    location: "Cambridge, USA",
    worldRank: "4",
    degree: "Master Degree",
    intakeDate: "12.09.2026",
    entryScore: "IELTS 7.0",
    tuitionFee: "USD53000 (2025)",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.NIRiOFTeIGlcW5-oPF6MBQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    tuitionFee: "GBP42000 (2025)",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.NIRiOFTeIGlcW5-oPF6MBQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 7,
    universityName: "University of California, Berkeley",
    programName: "Master of Computer Science",
    location: "California, USA",
    worldRank: "6",
    degree: "Master Degree",
    intakeDate: "20.08.2026",
    entryScore: "IELTS 6.5",
    tuitionFee: "USD47000 (2025)",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.NIRiOFTeIGlcW5-oPF6MBQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];



  return (
    <section className="container py-12 mx-auto">
      <div className=" px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Featured Universities
          </h2>
          <p className="text-gray-600 text-sm">
            Find top-ranked universities and explore their study programs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((uni) => (
           
            <UniversityCard key={uni.id} {...uni} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/universities"
            className="inline-flex items-center gap-2 bg-[#0097A7] hover:bg-[#007f8f] text-white font-semibold py-3 px-8 rounded-full transition-all"
          >
            View All Universities
            <AiOutlineDoubleRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}