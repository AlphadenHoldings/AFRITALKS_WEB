"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../public/icons/logo_white.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 px-3 lg:px-24 h-[5.75rem] flex items-center justify-between z-50">
        <Image src={Logo} alt="logo" width={110} height={110} />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center space-x-10 font-inter font-medium text-white text-[0.875rem]">
            <li>
              <Link href={"/services"}>Products</Link>
            </li>
            <li>
              <Link href={"/about"}>Company</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
          <button className="px-4 py-2 text-[0.875rem] rounded-full text-white font-inter font-semibold ml-10 bg-[#694BF1]">
            Download now
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 z-50"
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </header>

      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white transform transition-transform duration-300 z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center w-8 h-8 ml-auto mt-3 mr-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              <li>
                <Link
                  href="/services"
                  onClick={toggleMenu}
                  className="block text-gray-800 font-inter font-medium text-lg hover:text-[#694BF1] transition-colors py-2"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={toggleMenu}
                  className="block text-gray-800 font-inter font-medium text-lg hover:text-[#694BF1] transition-colors py-2"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={toggleMenu}
                  className="block text-gray-800 font-inter font-medium text-lg hover:text-[#694BF1] transition-colors py-2"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="p-6 border-t border-gray-100">
            <Link href={"#download"}>
              <button
                onClick={toggleMenu}
                className="w-full px-6 py-3 text-white font-inter font-semibold rounded-full bg-[#694BF1] hover:bg-[#5a3ed1] transition-colors"
              >
                Download now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
