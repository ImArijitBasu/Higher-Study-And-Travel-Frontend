"use client";
import { UniversitiesSection } from "@/components/University/university_section";
import { FaSearch } from "react-icons/fa";

const Page = () => {
    return (
        <div className="w-full flex flex-col items-center mt-20">
            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-[64px] font-bold text-center mb-10">
                Find Your Dream University
            </h1>

            {/* Search Bar */}
            <div className="relative flex items-center justify-between bg-gray-100 shadow-md rounded-full px-4"
                style={{ width: "449px", height: "50px" }}>
                <input
                    type="text"
                    placeholder="Search Universities"
                    className="w-full  bg-transparent outline-none border-0 border-none text-gray-700 text-base px-2"
                />
                <FaSearch className="text-gray-500 text-lg cursor-pointer" />
            </div>

            {/* Filter Section */}
            {/* <div className="flex items-center justify-center gap-3 mt-10 flex-wrap md:flex-nowrap">
                <select className="border-2 border-blue-400 px-10 py-3 rounded-xl bg-white text-gray-700 focus:outline-none text-base">
                    <option>Country</option>
                </select>
                <select className="border-2 border-blue-400 px-10 py-3 rounded-xl bg-white text-gray-700 focus:outline-none text-base">
                    <option>Program</option>
                </select>
                <select className="border-2 border-blue-400 px-10 py-3 rounded-xl bg-white text-gray-700 focus:outline-none text-base">
                    <option>Degree</option>
                </select>
                <select className="border-2 border-blue-400 px-10 py-3 rounded-xl bg-white text-gray-700 focus:outline-none text-base">
                    <option>Tuition Rang</option>
                </select>
                <select className="border-2 border-blue-400 px-10 py-3 rounded-xl bg-white text-gray-700 focus:outline-none text-base">
                    <option>Application Deadline</option>
                </select>
            </div> */}

            {/* Filter Section */}
            <div className="w-11/12 mx-auto mt-10">
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    <select className="min-w-[160px] md:min-w-[180px] lg:min-w-[200px] border-2 border-blue-400 px-6 py-3 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition text-base">
                        <option>Country</option>
                    </select>
                    <select className="min-w-[160px] md:min-w-[180px] lg:min-w-[200px] border-2 border-blue-400 px-6 py-3 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition text-base">
                        <option>Program</option>
                    </select>
                    <select className="min-w-[160px] md:min-w-[180px] lg:min-w-[200px] border-2 border-blue-400 px-6 py-3 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition text-base">
                        <option>Degree</option>
                    </select>
                    <select className="min-w-[160px] md:min-w-[180px] lg:min-w-[200px] border-2 border-blue-400 px-6 py-3 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition text-base">
                        <option>Tuition Range</option>
                    </select>
                    <select className="min-w-[160px] md:min-w-[180px] lg:min-w-[200px] border-2 border-blue-400 px-6 py-3 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition text-base">
                        <option>Application Deadline</option>
                    </select>
                </div>
            </div>


            {/* university section  */}
            <UniversitiesSection></UniversitiesSection>
        </div>
    );
};

export default Page;
