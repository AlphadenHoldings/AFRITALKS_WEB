"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../public/icons/logo_white.svg";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 px-16 h-[5.75rem] flex items-center justify-between">
      <Image src={Logo} alt="logo" width={100} height={100} className="" />

      <div className="flex items-center">
        <ul className="flex items-center space-x-10 font-inter font-semibold text-white">
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
        <button className="px-4 py-2 rounded-full text-white font-inter font-semibold ml-8 bg-[#694BF1]">
          Download now
        </button>
      </div>
    </header>
  );
}
