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


  const displayedUniversities = limit
    ? universities.slice(0, limit)
    : universities;

  return (
    <section className="container py-12 mx-auto">
      <div className="px-4">
        {/* Header */}
        <div className="text-left mb-10 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Featured Universities
            </h2>
            <p className="text-green-600 text-sm">
              Find top-ranked universities and explore their study programs.
            </p>
          </div>



        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedUniversities.map((uni) => (
            <UniversityCard key={uni.id} {...uni} />
          ))}
        </div>
        <div className="  flex justify-center mt-10 ">
          {limit && (
            <Link
              href="u/universities"
              className="bg-[#56c4f8] w-40 flex justify-between hover:bg-[#47b0e5] text-black  rounded-full px-6 py-2 "
            >
              See All <AiOutlineDoubleRight size={20}/>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
