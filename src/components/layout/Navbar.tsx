"use client";

import Link from "next/link";
import React from "react";
import AuthToggle from "../ui/AuthToggle";
import { GiCommercialAirplane } from "react-icons/gi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // get current path

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/u/destinations" },
    { name: "Universities", href: "/u/universities" },
    { name: "Scholarships", href: "/u/scholarships" },
    { name: "Travel", href: "/u/travel" },
    { name: "Blog", href: "/u/blogs" },
  ];

  return (
    <div>
      <div className="fixed top-0 z-50 w-full navbar px-6 shadow-md" style={{ backgroundColor: '#0f172a' }}>
        {/* Left Side */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-light text-[18px] ${pathname === link.href ? 'text-cyan-300' : 'text-black'} hover:text-cyan-300 transition-colors duration-300`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <Link
            href={"/"}
            className="flex justify-center items-center text-xs md:text-xl uppercase font-extrabold text-white"
          >
            <GiCommercialAirplane className="text-2xl md:text-4xl mr-2 text-cyan-400" />
            Study & Travel
          </Link>
        </div>

        {/* Center Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-8">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-light text-[18px] ${
                    pathname === link.href ? 'text-cyan-300' : 'text-white'
                  } hover:text-cyan-300 transition-colors duration-300`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end">
          <AuthToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
