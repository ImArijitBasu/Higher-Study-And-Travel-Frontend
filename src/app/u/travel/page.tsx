// "use client";


import DestinationsPage from "@/components/TravelPackages/destinationsPage";
import TriBanner from "@/components/TravelPackages/triBanner";

import { FaSearch } from "react-icons/fa";

export const metadata = {
  title: "Scholarships | Study & Travel Portal",
  description: "Find and explore top Scholarships.",
};
export default function TravelsPage() {
  return (
    <>
      <div className="w-full flex flex-col items-center mt-20">
        {/* Title */}
        <TriBanner/>

        {/* Search Bar */}
        {/* <div className="w-full max-w-xl mx-auto mt-5">
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
        </div> */}

        {/* Filters */}
        {/* <div className="w-11/12 mx-auto mt-10">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              "Country",
              "Program",
              "Degree",
              "Tuition Range",
              "Application Deadline",
            ].map((label) => (
              <select
                key={label}
                className="min-w-[160px] md:min-w-[180px] lg:min-w-[200px] border-2 border-blue-400 px-6 py-3 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition text-base"
              >
                <option>{label}</option>
              </select>
            ))}
          </div>
        </div> */}
        {/* <SciFilterSection/> */}

        {/* University Section */}
        <DestinationsPage/>
      </div>
    </>
  );
}
