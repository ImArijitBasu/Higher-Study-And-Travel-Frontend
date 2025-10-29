import React from "react";
import CarouselSlider from "./CarouselSlider";
import { Button } from "../ui/button";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const MainBanner = () => {
  return (
    <div className=" flex xl:flex-row justify-center items-center mt-10 flex-col-reverse container mx-auto">
      <div className="xl:mr-10 w-full ">
        <div className="">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold capitalize xl:leading-16 mt-5 xl:mt-0">
            study abroad <br /> & explore the world
          </h1>
          <h2 className="capitalize text-3xl xl:text-5xl leading-24 font-semibold text-gray-600 xl:text-black">
            all in one platform
          </h2>
        </div>
        <div className="">
          {/* search  */}
          <div className="w-full  relative rounded-full bg-gray-200 shadow-md shadow-gray-400 flex items-center px-4 my-10">
            <input
              type="text"
              placeholder="Search for Universities or Destinations"
              className="w-full bg-transparent outline-none py-2 border-none"
            />
            <FaSearch className="text-gray-500 ml-2" />
          </div>
          {/* buttons  */}
          <div className=" flex gap-5">
            <Button className="bg-[#56c4f8] hover:bg-[#47b0e5] text-black  rounded-full px-6 capitalize text-md">
              find universities <AiOutlineDoubleRight size={20} />
            </Button>
            <Button className="bg-[#56c4f8] hover:bg-[#47b0e5] text-black  rounded-full px-6 capitalize text-md">
              explore travel packages <AiOutlineDoubleRight size={20} />
            </Button>
          </div>
        </div>
      </div>
      <CarouselSlider />
    </div>
  );
};

export default MainBanner;
