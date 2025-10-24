"use client";
import Image from "next/image";
import { FC } from "react";
import planeBg from "../../../public/plane-bg.jpg";
import boyImg from "../../../public/boy.jpg";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { FaGoogle, FaTwitter } from "react-icons/fa";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Blur Background */}
      <div
  className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 animate-[fadeBg_0.3s_ease-out_forwards]"
  onClick={onClose}
></div>


      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-xl w-[90%] md:w-[850px] max-w-4xl overflow-hidden flex flex-col md:flex-row
  opacity-0 scale-95 animate-[fadeIn_0.3s_ease-out_forwards]"
      >
        {/* Left: Form Section */}
        <div
          className="relative flex-1 flex flex-col justify-center p-8 bg-cover bg-center"
          style={{ backgroundImage: `url(${planeBg.src})` }}
        >
          <div className="absolute inset-0 bg-white/80"></div>

          <div className="relative z-10 text-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <PiAirplaneTiltFill className="text-4xl text-cyan-400" />
              <span className="font-semibold text-gray-800">
                STUDY & TRAVEL
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-sky-500 mb-4">
              Login
            </h2>

            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Email"
                className="border rounded-md p-2 focus:outline-sky-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="border rounded-md p-2 focus:outline-sky-500"
              />

              <button
                type="submit"
                className="bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 transition font-semibold"
              >
                Login
              </button>
            </form>

            <p className="text-gray-700 mt-4 text-sm">
              Don’t have an account?{" "}
              <span className="text-sky-500 cursor-pointer hover:underline">
                Sign Up
              </span>
            </p>

            <div className="mt-5 text-sm font-semibold text-gray-700">
              Continue With
            </div>
            <div className="flex justify-center gap-3 mt-2">
              <button className="border rounded-full p-2 hover:bg-gray-100">
                <FaGoogle />
              </button>
              <button className="border rounded-full p-2 hover:bg-gray-100">
                <FaTwitter />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Girl Image */}
        <div className="hidden md:block flex-1">
          <Image
            src={boyImg}
            alt="Student"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
