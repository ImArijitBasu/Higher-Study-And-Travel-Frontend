import React from "react";
import Link from "next/link";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { GiCommercialAirplane } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-white py-10 text-justify">
      {/* Top Blue Banner */}
      <div className="bg-[#8bd8f7] container mx-auto flex flex-col md:flex-row justify-around items-center px-6 md:px-16 py-8 rounded-2xl shadow-sm gap-6">
        <h2 className="text-xl md:text-2xl font-bold text-black text-center md:text-left">
          JOIN OUR COMMUNITY. CONNNECT WITH US ON SOCIAL
        </h2>
        <ul className="flex gap-6 text-2xl mt-4 md:mt-0">
          <Link href="#" className="hover:text-blue-700">
            <FaFacebookF />
          </Link>
          <Link href="#" className="hover:text-pink-500">
            <IoLogoInstagram />
          </Link>
          <Link href="#" className="hover:text-red-600">
            <FaYoutube />
          </Link>
          <Link href="#" className="hover:text-gray-700">
            <MdOutlineMail />
          </Link>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="grid max-w-11/12 mx-auto md:grid-cols-2 gap-10 px-6 md:px-16 mt-10 container">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2">
            {/* Logo */}
            <Link
              href={"/"}
              className="flex justify-start items-center text-xs md:text-xl uppercase font-extrabold text-black"
            >
              <GiCommercialAirplane className="text-2xl md:text-4xl mr-2 text-cyan-400" />
              Study & Travel
            </Link>
          </div>

          <h3 className="mt-6 font-bold text-gray-800">
            STUDY ABROAD FOR EVERYONE
          </h3>
          <p className="text-gray-600 mt-2 leading-relaxed">
            We&apos;re here to make studying abroad achievable, and we building a
            community of open-minded, connected, and culturally aware people
            ready to make a real impact in our ever-connected world.
          </p>

          <div className="flex flex-col sm:flex-row mt-10 gap-10">
            <div>
              <h4 className="font-bold mb-2">CONTACT US</h4>
              <p className="text-gray-600">+156-4844-456</p>
              <p className="text-gray-600">Info@studyabrod.com</p>
            </div>

            <div className="border-l-3 border-cyan-300 pl-6">
              <h4 className="font-bold mb-2">GET STARTED</h4>
              <ul className="space-y-1 text-gray-600">
                <li>
                  <Link href="#">Contact us</Link>
                </li>
                <li>
                  <Link href="#">Inquire Now</Link>
                </li>
                <li>
                  <Link href="#">Apply Now</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section - Newsletter */}
        <div>
          <h3 className="font-bold mb-2">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p className="text-gray-600 mb-5">
            Stay Up to date with the latest study abroad programs, news and
            promotions! No spam, just good content.
          </p>

          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="border border-cyan-300 rounded-full px-4 py-2 w-full focus:outline-none focus:border-cyan-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-cyan-300 rounded-full px-4 py-2 w-full focus:outline-none focus:border-cyan-400"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="border border-cyan-300 rounded-full px-4 py-2 w-full focus:outline-none focus:border-cyan-400"
            />

            <div className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-cyan-400 text-lg mt-1">*</span>
              <p>
                By checking this box, I consent to Study&Travel.com collecting
                and storing my data through the submission of this form, sending
                marketing communications, and I agree to the StudyAbroad.com{" "}
                <Link href="#" className="text-cyan-500 underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <button
              type="submit"
              className="bg-cyan-400 text-white font-semibold w-full py-2 rounded-full hover:bg-cyan-500 transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* copyright section */}
      <div
        className="mt-16 text-center py-5 text-sm text-black font-semibold"
        style={{ background: "linear-gradient(to right, #8bd8f7, #64cdf4)" }}
      >
        <p>
          © 2025 Study&Travel.com. All rights reserved.{" "}
          <Link href="#" className="ml-2 underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
