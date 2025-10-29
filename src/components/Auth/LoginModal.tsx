"use client";
import Image from "next/image";
import { FC, useState } from "react";
import axios from "axios";
import planeBg from "../../../public/plane-bg.jpg";
import boyImg from "../../../public/boy.jpg";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      console.log("✅ Login successful:", res.data);

      toast.success("Login Successful! 🎉", {
        position: "top-center",
      });

      onClose();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "Failed to connect to server!",
          { position: "top-center" }
        );
      } else {
        toast.error("Something went wrong!", { position: "top-center" });
      }
      console.error("❌ Login error:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Blur Background */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 animate-[fadeBg_0.3s_ease-out_forwards]"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl w-[90%] md:w-[850px] max-w-4xl overflow-hidden flex flex-col md:flex-row opacity-0 scale-95 animate-[fadeIn_0.3s_ease-out_forwards]">
        {/* Left: Form Section */}
        <div
          className="relative flex-1 flex flex-col justify-center p-8 bg-cover bg-center"
          style={{ backgroundImage: `url(${planeBg.src})` }}
        >
          <div className="absolute inset-0 bg-white/80"></div>

          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <PiAirplaneTiltFill className="text-4xl text-cyan-400" />
              <span className="font-semibold text-gray-800">
                STUDY & TRAVEL
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-sky-500 mb-4">
              Login
            </h2>

            <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md p-2 focus:outline-sky-500"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border rounded-md p-2 focus:outline-sky-500"
                required
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

        {/* Right: Image Section */}
        <div className="hidden md:block flex-1">
          <Image
            src={boyImg}
            alt="Traveler"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
