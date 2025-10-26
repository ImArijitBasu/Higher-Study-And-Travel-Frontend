// "use client";
// import { useState } from "react";
// import LoginModal from "../Auth/LoginModal";
// import SignupModal from "../Auth/SignupModal";


// const AuthToggle = () => {
//   const [activeTab, setActiveTab] = useState<"login" | "signup">("signup");
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isSignupOpen, setIsSignupOpen] = useState(false);

//   return (
//     <div className="relative flex items-center justify-center">
//       {/* Toggle Button */}
//       <div className="flex rounded-full border border-gray-300 bg-white shadow-sm overflow-hidden">
//         <button
//           onClick={() => {
//             setActiveTab("login");
//             setIsLoginOpen(true);
//           }}
//           className={`px-3 py-2 text-xs md:text-sm font-semibold transition-all rounded-full ${
//             activeTab === "login"
//               ? "bg-sky-500 text-white"
//               : "text-black hover:bg-gray-100"
//           }`}
//         >
//           LOGIN
//         </button>
//         <button
//           onClick={() => {
//             setActiveTab("signup");
//             setIsSignupOpen(true);
//           }}
//           className={`px-3 py-2 text-sm font-semibold transition-all rounded-full ${
//             activeTab === "signup"
//               ? "bg-sky-500 text-white"
//               : "text-black hover:bg-gray-100"
//           }`}
//         >
//           SIGN UP
//         </button>
//       </div>

//       {/* Modals */}
//       {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
//       {isSignupOpen && <SignupModal onClose={() => setIsSignupOpen(false)} />}
//     </div>
//   );
// };

// export default AuthToggle;
// "use client";
// import { useEffect, useState } from "react";
// import LoginModal from "../Auth/LoginModal";
// import SignupModal from "../Auth/SignupModal";
// import axios from "axios";
// import Link from "next/link";


// const AuthToggle = () => {
//   const [user, setUser] = useState<any>(null);

//   // Component mount হলে backend থেকে fetch করবে
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/users");
//         // Example: ধরলাম first user logged in
//         if (res.data && res.data.length > 0) {
//           setUser(res.data[0]);
//         }
//       } catch (err) {
//         console.error(err);
//         setUser(null);
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await axios.post("http://localhost:5000/api/auth/logout"); // optional
//       setUser(null); // Navbar auto update
//     } catch (err) {
//       console.error(err);
//     }
//   };


//   const [activeTab, setActiveTab] = useState<"login" | "signup">("signup");
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isSignupOpen, setIsSignupOpen] = useState(false);

//   return (
//     <div className="relative flex items-center justify-center">
//       {/* Toggle Button */}
//       <div className="flex rounded-full border border-gray-300 bg-white shadow-sm overflow-hidden">
//         {user ? (
//           <>
//             <Link href="/profile">{user.name}</Link>
//              <button
//              onClick={handleLogout}
            
//               className={`px-3 py-2 text-xs md:text-sm font-semibold transition-all rounded-full ${activeTab === "logout"
//                   ? "bg-sky-500 text-white"
//                   : "text-black hover:bg-gray-100"
//                 }`}
//             >
//               LOGOUT
//             </button>
//             {/* <button >Logout</button> */}
//           </>
//         ) : (
//           <>
//             <button
//               onClick={() => {
//                 setActiveTab("login");
//                 setIsLoginOpen(true);
//               }}
//               className={`px-3 py-2 text-xs md:text-sm font-semibold transition-all rounded-full ${activeTab === "login"
//                   ? "bg-sky-500 text-white"
//                   : "text-black hover:bg-gray-100"
//                 }`}
//             >
//               LOGIN
//             </button>
//             <button
//               onClick={() => {
//                 setActiveTab("signup");
//                 setIsSignupOpen(true);
//               }}
//               className={`px-3 py-2 text-sm font-semibold transition-all rounded-full ${activeTab === "signup"
//                   ? "bg-sky-500 text-white"
//                   : "text-black hover:bg-gray-100"
//                 }`}
//             >
//               SIGN UP
//             </button>
//           </>
//         )}

//       </div>

//       {/* Modals */}
//       {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
//       {isSignupOpen && <SignupModal onClose={() => setIsSignupOpen(false)} />}
//     </div>
//   );
// };

// export default AuthToggle;
"use client";
import { useEffect, useState } from "react";
import LoginModal from "../Auth/LoginModal";
import SignupModal from "../Auth/SignupModal";
import Link from "next/link";
import axios from "axios";

const AuthToggle = () => {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"login" | "signup">("signup");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // Component mount হলে backend থেকে fetch
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users");
        if (res.data && res.data.length > 0) {
          setUser(res.data[0]); // প্রথম user ধরলাম
        }
      } catch (err) {
        console.error(err);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  // Logout
  const handleLogout = () => {
    setUser(null); // Navbar auto update
    // optional: backend logout call
    // await axios.post("http://localhost:5000/api/auth/logout");
  };



  return (
    <div className="relative flex items-center justify-center">
      <div className="flex rounded-full border border-gray-300 bg-white shadow-sm overflow-hidden">
        {user ? (
          <>
            <Link href="/profile" className="px-3 py-2 text-sm font-semibold">
              {user.name}
            </Link>
            <button
              onClick={handleLogout}
              className="px-3 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-00 rounded-full"
            >
              LOGOUT
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                setActiveTab("login");
                setIsLoginOpen(true);
              }}
              className={`px-3 py-2 text-xs md:text-sm font-semibold transition-all rounded-full ${
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
          </>
        )}
      </div>

      {/* Modals */}
     {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
     {isSignupOpen && <SignupModal onClose={() => setIsSignupOpen(false)} />}
    </div>
  );
};

export default AuthToggle;
