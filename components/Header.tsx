"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../public/icons/logo_white.svg";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 px-24 h-[5.75rem] flex items-center justify-between">
      <Image src={Logo} alt="logo" width={110} height={110} />

      <div className="flex items-center">
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
    </header>
  );
}
