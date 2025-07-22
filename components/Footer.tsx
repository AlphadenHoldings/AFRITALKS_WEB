"use client";

import Image from "next/image";
import Link from "next/link";
import Facebook from "../public/icons/facebook.svg";
import Instagram from "../public/icons/instagram.svg";
import Linkedin from "../public/icons/linkedin.svg";
import Logo from "../public/icons/logo_black.svg";
import X from "../public/icons/X.svg";

export default function Footer() {
  return (
    <footer className="bg-[#F9FAFB] text-black">
      <div className="px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 max-w-6xl mx-auto">
          <div className="md:col-span-3 space-y-4">
            <Image src={Logo} width={100} height={100} alt="logo" />
            <p className="text-[#122231B2] text-lg leading-relaxed mb-6">
              The ultimate social media and seamless <br /> cross-border
              payments platform for Africa
            </p>
            <div className="flex space-x-5">
              <Image src={X} alt="x" width={20} height={20} />
              <Image src={Facebook} alt="x" width={20} height={20} />
              <Image src={Instagram} alt="x" width={20} height={20} />
              <Image src={Linkedin} alt="x" width={20} height={20} />
            </div>
          </div>

          <div>
            <h3 className="text-[.87rem] font-inter font-semibold mb-6">
              Products
            </h3>
            <ul className="space-y-4">
              <li className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem] cursor-pointer">
                Messaging
              </li>
              <li className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem] cursor-pointer">
                Payments
              </li>
              <li className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem] cursor-pointer">
                Videos
              </li>
              <li className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem] cursor-pointer">
                Utilities
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[.87rem] font-inter font-semibold mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem]"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem]"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem]"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[.87rem] font-inter font-semibold mb-6">
              Contact
            </h3>
            <ul className="flex flex-col space-y-5">
              <li className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem] cursor-pointer">
                5th Floor, 11A Oko Awo Street, Victoria Island, Lagos
              </li>
              <li className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem] cursor-pointer">
                0700AFRITALKS
              </li>
              <li className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem] cursor-pointer">
                info@afritalks.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
            <p className="text-[#9CA3AF] font-inter font-normal mb-4 md:mb-0">
              © {new Date().getFullYear()} AfriTalks. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-[#9CA3AF] font-inter font-normal text-[0.87rem] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-[#9CA3AF] font-inter font-normal text-[0.87rem] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
