"use client";

import ApplyForm from "@/components/University/universityApplyFrom";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


interface University {
  id: number;
  universityName: string;
  programName: string;
  location: string;
  worldRank: string;
  degree: string;
  intakeDate: string;
  entryScore: string;
  tuitionFee: string;
  image: string;
  featured?: boolean;
}

export default function UniversityDetailsPage() {
  const params = useParams();
  const [university, setUniversity] = useState<University | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [isApplyFormOpen, setIsApplyFormOpen] = useState(false);

  useEffect(() => {
    fetch("/university.json")
      .then((res) => res.json())
      .then((data: University[]) => {
        const uni = data.find((u) => u.id.toString() === params.id);
        setUniversity(uni || null);
      })
      .catch((err) => console.error("Error loading university:", err));
  }, [params.id]);

  // Generate mock specializations based on program name
  const getSpecializations = (programName: string) => {
    if (programName.toLowerCase().includes("commerce")) {
      return ["Accounting", "Finance", "Marketing", "Management", "International Business"];
    } else if (programName.toLowerCase().includes("science") || programName.toLowerCase().includes("engineering")) {
      return ["Computer Science", "Data Analytics", "Software Engineering", "AI & Machine Learning"];
    } else if (programName.toLowerCase().includes("arts")) {
      return ["Literature", "History", "Philosophy", "Political Science"];
    }
    return ["Core Courses", "Elective Modules", "Research Projects"];
  };

  if (!university) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 font-medium">Loading university details...</p>
        </div>
      </div>
    );
  }

  const specializations = getSpecializations(university.programName);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">{university.universityName}</h1>
          <p className="text-lg text-gray-600">{university.programName} Program Overview</p>
          <div className="mt-4 w-28 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 mx-auto rounded-full shadow-md"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 mb-8">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-2/5 relative group">
              <img
                src={university.image}
                alt={university.universityName}
                className="w-full h-80 lg:h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                  World Rank #{university.worldRank}
                </div>
              </div>
              {university.featured && (
                <div className="absolute top-4 left-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    Featured
                  </div>
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="lg:w-3/5 p-8 space-y-6">
              {/* Program Info */}
              <h2 className="text-3xl font-bold text-gray-900">{university.programName}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Join the prestigious {university.programName} program at {university.universityName}, 
                ranked #{university.worldRank} worldwide. This {university.degree.toLowerCase()} offers 
                comprehensive education in {university.location}.
              </p>

              {/* Key Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center shadow-md">
                  <div className="text-2xl font-bold text-blue-600">{university.degree}</div>
                  <div className="text-xs text-gray-600 mt-1">Degree Level</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center shadow-md">
                  <div className="text-2xl font-bold text-green-600">{university.intakeDate}</div>
                  <div className="text-xs text-gray-600 mt-1">Next Intake</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center shadow-md">
                  <div className="text-2xl font-bold text-purple-600">{university.entryScore}</div>
                  <div className="text-xs text-gray-600 mt-1">Entry Requirement</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center shadow-md">
                  <div className="text-2xl font-bold text-orange-600">{university.worldRank}</div>
                  <div className="text-xs text-gray-600 mt-1">World Ranking</div>
                </div>
              </div>

              {/* Key Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-5 flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold text-gray-900">{university.location}</p>
                    <p className="text-sm text-gray-600">Beautiful campus environment</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-5 flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tuition Fee</p>
                    <p className="font-semibold text-gray-900">{university.tuitionFee}</p>
                    <p className="text-sm text-green-600">Scholarships available</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => setIsApplyFormOpen(true)}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  Apply Now
                </button>
                <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-2xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                  Save for Later
                </button>
                <button className="flex-1 border-2 border-blue-300 text-blue-600 py-3 px-6 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300">
                  Request Info
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
          {/* Tab Headers */}
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto">
              {["overview", "programs", "admissions", "campus"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 min-w-0 px-6 py-4 text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab
                      ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Program Overview</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Degree Type</span>
                        <span className="font-semibold">{university.degree}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-semibold">
                          {university.degree.includes("Bachelor") ? "3-4 years" : "1-2 years"}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">World Ranking</span>
                        <span className="font-semibold">#{university.worldRank}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Location</span>
                        <span className="font-semibold">{university.location}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Program Specializations</h3>
                    <div className="flex flex-wrap gap-2">
                      {specializations.map((spec, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "programs" && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Program Structure</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Core Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Industry-relevant curriculum
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Research opportunities
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        International exposure
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Career development support
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Learning Outcomes</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        Practical skills development
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        Critical thinking abilities
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        Global perspective
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        Professional networking
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "admissions" && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Admission Requirements</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Application Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Next Intake:</span>
                        <span className="font-semibold">{university.intakeDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Entry Score:</span>
                        <span className="font-semibold">{university.entryScore}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Application Fee:</span>
                        <span className="font-semibold">$50-100</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Decision Timeline:</span>
                        <span className="font-semibold">4-6 weeks</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Required Documents</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Academic transcripts
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        English proficiency proof
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Statement of purpose
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Letters of recommendation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "campus" && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Campus Life</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Accommodation</h4>
                    <p className="text-sm text-gray-700">On-campus housing available with modern amenities and 24/7 security.</p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Support</h4>
                    <p className="text-sm text-gray-700">Comprehensive international student services and career counseling.</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Facilities</h4>
                    <p className="text-sm text-gray-700">State-of-the-art libraries, research centers, and sports facilities.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Universities
          </button>
        </div>
      </div>

      {/* Apply Form Modal - এই অংশটি যোগ করুন */}
      {university && (
        <ApplyForm
          university={university}
          isOpen={isApplyFormOpen}
          onClose={() => setIsApplyFormOpen(false)}
        />
      )}
    </div>
  );
}