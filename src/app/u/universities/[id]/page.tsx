"use client";

import ApplyForm from "@/components/University/universityApplyFrom";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { 
  FaGraduationCap, 
  FaMapMarkerAlt, 
  FaDollarSign, 
  FaCalendarAlt,
  FaStar,
  FaBook,
  FaUsers,
  FaBuilding,
  FaHeart,
  FaShare,
  FaArrowLeft,
  FaGlobeAmericas,
  FaChartLine,
  FaUserTie,
  FaMicroscope,
  FaLaptopCode,
  FaHandshake,
  FaUniversity,
  FaHome,
  FaShieldAlt,
  FaBookOpen,
  FaFutbol
} from "react-icons/fa";

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
  const [activeTab, setActiveTab] = useState("description");
  const [isApplyFormOpen, setIsApplyFormOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [imageGallery, setImageGallery] = useState<string[]>([]);

  useEffect(() => {
    fetch("/university.json")
      .then((res) => res.json())
      .then((data: University[]) => {
        const uni = data.find((u) => u.id.toString() === params.id);
        if (uni) {
          setUniversity(uni);
          setCurrentImage(uni.image);
          generateImageGallery(uni);
        } else {
          setUniversity(null);
        }
      })
      .catch((err) => console.error("Error loading university:", err));
  }, [params.id]);

  const generateImageGallery = (uni: University) => {
    const baseImages = [
      uni.image,
      `/api/placeholder/800/600?text=${encodeURIComponent(uni.universityName + " Campus")}`,
      `/api/placeholder/800/600?text=${encodeURIComponent(uni.universityName + " Library")}`,
      `/api/placeholder/800/600?text=${encodeURIComponent(uni.universityName + " Students")}`,
      `/api/placeholder/800/600?text=${encodeURIComponent(uni.universityName + " Sports")}`,
    ];
    setImageGallery(baseImages);
  };

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 bg-white px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Universities
            </button>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 font-semibold transition-colors duration-200 bg-white px-4 py-2 rounded-lg hover:bg-red-50">
                <FaHeart className="w-4 h-4" />
                Save
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-semibold transition-colors duration-200 bg-white px-4 py-2 rounded-lg hover:bg-blue-50">
                <FaShare className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {university.universityName}
          </h1>
          <p className="text-xl text-gray-600 font-medium">{university.programName}</p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 mb-8">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section - 20% */}
            <div className="lg:w-/5 border-r border-gray-200">
              <div className="relative group">
                <img
                  src={currentImage}
                  alt={university.universityName}
                  className="w-full h-64 lg:h-80 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-2 rounded-full font-bold text-sm flex items-center gap-1">
                    <FaStar className="w-3 h-3" />
                    Rank #{university.worldRank}
                  </div>
                </div>
                {university.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </div>
                  </div>
                )}
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <FaUniversity className="w-4 h-4" />
                  Campus Gallery
                </h4>
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {imageGallery.map((img, index) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-200 ${
                        currentImage === img 
                          ? "ring-2 ring-blue-500 ring-offset-2 scale-105" 
                          : "hover:scale-105 opacity-80 hover:opacity-100"
                      }`}
                      onClick={() => setCurrentImage(img)}
                    >
                      <img
                        src={img}
                        alt={`${university.universityName} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Details Section - 80% */}
            <div className="lg:w-4/5 p-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center border border-blue-200">
                  <FaGraduationCap className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-blue-600">{university.degree}</div>
                  <div className="text-xs text-gray-600">Degree Level</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center border border-green-200">
                  <FaCalendarAlt className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-green-600">{university.intakeDate}</div>
                  <div className="text-xs text-gray-600">Next Intake</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center border border-purple-200">
                  <FaBook className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-purple-600">{university.entryScore}</div>
                  <div className="text-xs text-gray-600">Entry Requirement</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center border border-orange-200">
                  <FaChartLine className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-orange-600">#{university.worldRank}</div>
                  <div className="text-xs text-gray-600">World Ranking</div>
                </div>
              </div>

              {/* Location and Fee */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5 flex items-center gap-4 border border-blue-200">
                  <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold text-gray-900 text-lg">{university.location}</p>
                    <p className="text-sm text-gray-600">Beautiful campus environment</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-5 flex items-center gap-4 border border-green-200">
                  <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center">
                    <FaDollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tuition Fee</p>
                    <p className="font-semibold text-gray-900 text-lg">{university.tuitionFee}</p>
                    <p className="text-sm text-green-600 flex items-center gap-1">
                      <FaStar className="w-3 h-3" />
                      Scholarships available
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <button 
                  onClick={() => setIsApplyFormOpen(true)}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FaGraduationCap className="w-5 h-5" />
                  Apply Now
                </button>
                <button className="flex-1 border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-2">
                  <FaHeart className="w-5 h-5" />
                  Save for Later
                </button>
                <button className="flex-1 border-2 border-blue-300 text-blue-600 py-4 px-6 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2">
                  <FaUsers className="w-5 h-5" />
                  Request Info
                </button>
              </div>

              {/* Single Tab for Description */}
              <div className="border-t border-gray-200 pt-8">
                <nav className="flex space-x-8 mb-8">
                  <button
                    onClick={() => setActiveTab("description")}
                    className={`pb-4 text-lg font-medium transition-colors duration-200 border-b-2 ${
                      activeTab === "description"
                        ? "text-blue-600 border-blue-600"
                        : "text-gray-500 hover:text-gray-700 border-transparent"
                    }`}
                  >
                    Program Description
                  </button>
                </nav>

                <div className="space-y-8">
                  {/* Program Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <FaBookOpen className="w-6 h-6 text-blue-600" />
                      Program Overview
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-600 flex items-center gap-2">
                            <FaGraduationCap className="w-4 h-4" />
                            Degree Type
                          </span>
                          <span className="font-semibold">{university.degree}</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-600 flex items-center gap-2">
                            <FaCalendarAlt className="w-4 h-4" />
                            Duration
                          </span>
                          <span className="font-semibold">
                            {university.degree.includes("Bachelor") ? "3-4 years" : "1-2 years"}
                          </span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-600 flex items-center gap-2">
                            <FaChartLine className="w-4 h-4" />
                            World Ranking
                          </span>
                          <span className="font-semibold">#{university.worldRank}</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-600 flex items-center gap-2">
                            <FaMapMarkerAlt className="w-4 h-4" />
                            Location
                          </span>
                          <span className="font-semibold">{university.location}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <FaMicroscope className="w-5 h-5 text-purple-600" />
                          Program Specializations
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {specializations.map((spec, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">About the Program</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        The {university.programName} program at {university.universityName} is designed to provide 
                        students with comprehensive knowledge and practical skills in their chosen field. As a 
                        world-ranked institution at #{university.worldRank}, we offer an exceptional learning 
                        environment that fosters innovation, critical thinking, and professional development.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                            <FaLaptopCode className="w-5 h-5 text-green-600" />
                            Program Highlights
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Industry-relevant curriculum with latest trends
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Research opportunities with expert faculty
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              International exposure and global networking
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Career development and placement support
                            </li>
                          </ul>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                            <FaUserTie className="w-5 h-5 text-blue-600" />
                            Career Opportunities
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              High employment rate after graduation
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Strong alumni network worldwide
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Industry partnerships and internships
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Professional development workshops
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Campus Life */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <FaBuilding className="w-6 h-6 text-orange-600" />
                      Campus Life & Facilities
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border border-orange-200">
                        <FaHome className="w-8 h-8 text-orange-600 mb-3" />
                        <h4 className="font-semibold text-gray-900 mb-2">Accommodation</h4>
                        <p className="text-sm text-gray-700">
                          Modern on-campus housing with 24/7 security, high-speed internet, and recreational facilities. 
                          Various room options available to suit different budgets.
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-5 border border-cyan-200">
                        <FaShieldAlt className="w-8 h-8 text-cyan-600 mb-3" />
                        <h4 className="font-semibold text-gray-900 mb-2">Student Support</h4>
                        <p className="text-sm text-gray-700">
                          Comprehensive international student services, career counseling, health services, 
                          and academic support to ensure your success.
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-5 border border-pink-200">
                        <FaFutbol className="w-8 h-8 text-pink-600 mb-3" />
                        <h4 className="font-semibold text-gray-900 mb-2">Facilities</h4>
                        <p className="text-sm text-gray-700">
                          State-of-the-art libraries, research centers, sports complexes, and student centers 
                          equipped with modern technology and resources.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Admission Requirements */}
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <FaGraduationCap className="w-6 h-6 text-blue-600" />
                      Admission Requirements
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Application Details</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between py-2">
                            <span className="text-gray-600">Next Intake:</span>
                            <span className="font-semibold">{university.intakeDate}</span>
                          </div>
                          <div className="flex justify-between py-2">
                            <span className="text-gray-600">Entry Score:</span>
                            <span className="font-semibold">{university.entryScore}</span>
                          </div>
                          <div className="flex justify-between py-2">
                            <span className="text-gray-600">Application Fee:</span>
                            <span className="font-semibold">$50-100</span>
                          </div>
                          <div className="flex justify-between py-2">
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
                            Academic transcripts and certificates
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            English language proficiency proof
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            Statement of purpose
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            Letters of recommendation (2-3)
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            Passport copy and photographs
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Form Modal */}
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