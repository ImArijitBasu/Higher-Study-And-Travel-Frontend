"use client";

import { FC, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaGoogle, FaTwitter } from "react-icons/fa";

interface LoginModalProps {
  onClose: () => void;
  onOpenRegister?: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ onClose, onOpenRegister }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(
        "https://higher-study-and-travel-website-bac.vercel.app/api/auth/login",
        formData,
        { withCredentials: true }
      );

      // Login success
      toast.success("Login Successful! 🎉", { position: "top-center" });

      // Save token and user info in localStorage
      localStorage.setItem("hst_token", res.data.token);
      // localStorage.setItem("hst_user", JSON.stringify(res.data.user));

      console.log("LOGIN SUCCESS:", res.data);

      onClose(); // Close modal
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Login failed!", {
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Login to your Account
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Welcome back! Please enter your details.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition disabled:opacity-60"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-5 text-sm text-gray-600">
          Don’t have an account?{" "}
          <button
            onClick={onOpenRegister}
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </button>
        </p>

        <div className="mt-6 text-sm font-semibold text-center text-gray-700">
          Or continue with
        </div>

        <div className="flex justify-center gap-3 mt-3">
          <button className="border rounded-full p-2 hover:bg-gray-100 text-gray-700">
            <FaGoogle />
          </button>
          <button className="border rounded-full p-2 hover:bg-gray-100 text-gray-700">
            <FaTwitter />
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full text-center text-blue-600 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
