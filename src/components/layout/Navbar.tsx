import Link from "next/link";
import React from "react";
import AuthToggle from "../ui/AuthToggle";
import { PiAirplaneTiltFill } from "react-icons/pi";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="capitalize text-md font-semibold">
        <Link href="/u/universities">Universities</Link>
      </li>
      <li className="capitalize text-md font-semibold">
        <Link href="/u/scholarships">scholarships</Link>
      </li>
      <li className="capitalize text-md font-semibold">
        <Link href="/u/travel">travel</Link>
      </li>
      <li className="capitalize text-md font-semibold">
        <Link href="/u/blogs">blog</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="fixed top-0 z-50 navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xs md:text-xl uppercase font-extrabold">
            <PiAirplaneTiltFill className="text-lg md:text-4xl text-cyan-400" /> Study &
            travel
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <AuthToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
