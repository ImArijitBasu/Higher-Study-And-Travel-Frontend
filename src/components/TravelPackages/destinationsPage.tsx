"use client";
import React, { useState } from "react";
import DestinationCard from "./destinationcard";
import { FiSearch, FiFilter, FiGrid, FiList, FiChevronDown } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

const DestinationsPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const destinations = [
    {
      image: "/Travel.jpg",
      title: "London Study Tour",
      price: "$1,500",
      days: "7",
      rating: 4.5,
      country: "United Kingdom",
      university: "University of London",
      duration: "2 weeks",
      type: "Summer Program",
      features: ["Campus Tour", "Cultural Activities", "Academic Sessions", "Museum Visits"],
      discount: "10% off",
      students: 250,
      language: "English",
      level: "Beginner",
      description: "Immerse yourself in London's rich academic culture with this comprehensive study tour featuring visits to top universities and cultural landmarks.",
      highlights: ["University of London Campus Tour", "British Museum Visit", "Thames River Cruise", "Academic Workshops"]
    },
    {
      image: "/Travel.jpg",
      title: "Tokyo Language Immersion Program",
      price: "$2,200",
      days: "14",
      rating: 4.8,
      country: "Japan",
      university: "Tokyo University",
      duration: "2 weeks",
      type: "Language Course",
      features: ["Language Classes", "Cultural Workshops", "City Exploration", "Temple Visits"],
      bestseller: true,
      students: 180,
      language: "Japanese",
      level: "All Levels",
      description: "Master Japanese language skills while experiencing Tokyo's vibrant culture through immersive classes and cultural activities.",
      highlights: ["Daily Language Classes", "Traditional Tea Ceremony", "Akihabara Tech Tour", "Mount Fuji Day Trip"]
    },
    {
      image: "/Travel.jpg",
      title: "New York Business Leadership Program",
      price: "$1,800",
      days: "10",
      rating: 4.3,
      country: "USA",
      university: "Columbia University",
      duration: "10 days",
      type: "Executive Education",
      features: ["Business Seminars", "Networking Events", "Company Visits", "Case Studies"],
      students: 300,
      language: "English",
      level: "Advanced",
      description: "Develop leadership skills and business acumen through intensive workshops and networking with industry leaders in New York City.",
      highlights: ["Wall Street Trading Floor Tour", "Columbia Business School Workshops", "Startup Pitch Sessions", "Networking Dinners"]
    },
    {
      image: "/Travel.jpg",
      title: "Berlin Tech Innovation & AI Course",
      price: "$1,200",
      days: "21",
      rating: 4.6,
      country: "Germany",
      university: "Technical University Berlin",
      duration: "3 weeks",
      type: "Tech Program",
      features: ["Startup Visits", "Tech Workshops", "Innovation Labs", "AI Projects"],
      discount: "15% off",
      students: 165,
      language: "English",
      level: "Intermediate",
      description: "Explore Berlin's thriving tech scene with hands-on workshops in AI, machine learning, and innovation at one of Europe's top tech universities.",
      highlights: ["AI Lab Sessions", "Berlin Startup Hub Tour", "Tech Museum Visit", "Project Presentation Day"]
    },
    {
      image: "/Travel.jpg",
      title: "Sydney Marine Biology Research Expedition",
      price: "$3,000",
      days: "30",
      rating: 4.7,
      country: "Australia",
      university: "University of Sydney",
      duration: "1 month",
      type: "Science Program",
      features: ["Field Research", "Lab Work", "Marine Conservation", "Data Analysis"],
      bestseller: true,
      students: 120,
      language: "English",
      level: "Intermediate",
      description: "Conduct real marine biology research in Sydney's unique ecosystems with expert guidance from leading marine scientists.",
      highlights: ["Great Barrier Reef Research", "Marine Lab Sessions", "Conservation Projects", "Research Paper Opportunity"]
    },
    {
      image: "/Travel.jpg",
      title: "Paris Art & Design Master Workshop",
      price: "$1,600",
      days: "14",
      rating: 4.4,
      country: "France",
      university: "Paris College of Art",
      duration: "2 weeks",
      type: "Art Program",
      features: ["Museum Tours", "Studio Work", "Design Workshops", "Gallery Visits"],
      students: 200,
      language: "French/English",
      level: "All Levels",
      description: "Unleash your creativity in the world's art capital with master classes, museum tours, and hands-on studio sessions in Paris.",
      highlights: ["Louvre Museum Private Tour", "Eiffel Tower Sketching", "Montmartre Art Sessions", "Final Exhibition"]
    },
    {
      image: "/Travel.jpg",
      title: "Singapore Global Leadership Program",
      price: "$2,500",
      days: "21",
      rating: 4.9,
      country: "Singapore",
      university: "National University of Singapore",
      duration: "3 weeks",
      type: "Leadership Program",
      features: ["Leadership Training", "Case Studies", "Asian Business", "Cultural Immersion"],
      students: 95,
      language: "English",
      level: "Advanced",
      description: "Develop global leadership competencies in Asia's business hub with intensive training and cross-cultural business exposure.",
      highlights: ["NUS Business School Seminars", "Singapore Corporate Visits", "Cultural Exchange Programs", "Leadership Project"]
    },
    {
      image: "/Travel.jpg",
      title: "Toronto Engineering & Robotics Intensive",
      price: "$2,100",
      days: "28",
      rating: 4.5,
      country: "Canada",
      university: "University of Toronto",
      duration: "4 weeks",
      type: "Engineering Program",
      features: ["Lab Sessions", "Industry Visits", "Research Projects", "Robotics Workshop"],
      students: 220,
      language: "English",
      level: "Intermediate",
      description: "Gain hands-on engineering experience in robotics and automation at one of Canada's top engineering schools.",
      highlights: ["Robotics Lab Access", "Toronto Tech Company Tours", "Engineering Challenges", "Project Demo Day"]
    },
    {
      image: "/Travel.jpg",
      title: "Seoul K-Pop & Digital Culture Experience",
      price: "$1,400",
      days: "10",
      rating: 4.2,
      country: "South Korea",
      university: "Seoul National University",
      duration: "10 days",
      type: "Cultural Program",
      features: ["K-Pop Workshops", "Cultural Tours", "Language Basics", "Digital Media"],
      discount: "5% off",
      students: 150,
      language: "Korean/English",
      level: "Beginner",
      description: "Dive into Korean pop culture and digital innovation with exclusive workshops and behind-the-scenes experiences in Seoul.",
      highlights: ["K-Pop Dance Classes", "K-Drama Set Visit", "Korean Language Crash Course", "Digital Media Workshop"]
    }
  ];

  const filteredDestinations = destinations.filter(dest =>
    dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Study <span className="text-blue-600">Destinations</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore {destinations.length}+ carefully curated study programs at world-class universities worldwide
          </p>

            {/* Search Bar */}
                  <div className="w-full max-w-xl mx-auto mt-5">
                    <div className="relative flex items-center bg-white rounded-full  shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl focus-within:shadow-xl">
                      <input
                        type="text"
                        placeholder="Search Scholarships"
                        className="w-full py-3 px-5 text-gray-700 text-base placeholder-gray-400 focus:outline-none transition-all duration-200 border-4 rounded-full "
                      />
                      <button className="absolute right-2 text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200">
                        <FaSearch />
                      </button>
                    </div>
                  </div>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-white px-4 py-2 rounded-xl border border-gray-300 shadow-sm">
              <span className="font-semibold text-gray-700">{filteredDestinations.length} Programs</span>
            </div>
            
            <button className="lg:hidden flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
              <FiFilter className="text-lg" />
              Filters
            </button>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort By */}
            <div className="flex items-center gap-2">
              <span className="text-gray-600 font-medium hidden sm:block">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="duration">Duration</option>
                </select>
                <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid" 
                    ? "bg-white text-blue-600 shadow-sm" 
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <FiGrid className="text-lg" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list" 
                    ? "bg-white text-blue-600 shadow-sm" 
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <FiList className="text-lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className={`${
          viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "space-y-6"
        }`}>
          {filteredDestinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} viewMode={viewMode} />
          ))}
        </div>

        {/* Load More Section */}
        {filteredDestinations.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-200 shadow-sm hover:shadow-md">
              Load More Programs
            </button>
            <p className="text-gray-500 mt-4">
              Showing {filteredDestinations.length} of {destinations.length}+ quality programs
            </p>
          </div>
        )}

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No programs found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search terms or filters</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationsPage;