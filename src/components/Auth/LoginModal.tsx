"use client";
import { FC } from "react";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Blur Background */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white p-6 rounded-2xl shadow-xl w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
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
            className="bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
