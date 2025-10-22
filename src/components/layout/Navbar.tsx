import Link from "next/link";
import React from "react";
import AuthToggle from "../ui/AuthToggle";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link href="/blog">universities</Link>
      </li>
      <li>
        <Link href="/blog">scholarships</Link>
      </li>
      <li>
        <Link href="/blog">travel</Link>
      </li>
      <li>
        <Link href="/blog">blog</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
          <a className="btn btn-ghost text-xl uppercase font-extrabold">
            Study & travel
          </a>
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
