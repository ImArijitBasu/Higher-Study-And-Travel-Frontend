"use client";
import { useState } from "react";
import LoginModal from "../Auth/LoginModal";
import SignupModal from "../Auth/SignupModal";


const AuthToggle = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("signup");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      {/* Toggle Button */}
      <div className="flex rounded-full border border-gray-300 bg-white shadow-sm overflow-hidden">
        <button
          onClick={() => {
            setActiveTab("login");
            setIsLoginOpen(true);
          }}
          className={`px-3 py-2 text-sm font-semibold transition-all rounded-full ${
            activeTab === "login"
              ? "bg-sky-500 text-white"
              : "text-black hover:bg-gray-100"
          }`}
        >
          LOGIN
        </button>
        <button
          onClick={() => {
            setActiveTab("signup");
            setIsSignupOpen(true);
          }}
          className={`px-3 py-2 text-sm font-semibold transition-all rounded-full ${
            activeTab === "signup"
              ? "bg-sky-500 text-white"
              : "text-black hover:bg-gray-100"
          }`}
        >
          SIGN UP
        </button>
      </div>

      {/* Modals */}
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
      {isSignupOpen && <SignupModal onClose={() => setIsSignupOpen(false)} />}
    </div>
  );
};

export default AuthToggle;
