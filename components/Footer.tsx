"use client";

import Image from "next/image";
import Link from "next/link";
import Facebook from "/public/icons/facebook.svg";
import Instagram from "/public/icons/instagram.svg";
import Linkedin from "/public/icons/linkedin.svg";
import Logo from "/public/icons/logo_black.svg";
import X from "/public/icons/x.svg";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#F9FAFB] text-black">
      <div className="px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-12 max-w-6xl mx-auto">
          <div className="md:col-span-3 space-y-4">
            <Image src={Logo} width={100} height={100} alt="logo" />
            <p className="text-[#122231B2] text-[0.87rem] font-inter leading-relaxed mb-6">
              {t("footer.description")}
            </p>
            <div className="flex space-x-5">
              <Image
                src={X}
                alt={t("footer.social.x")}
                width={20}
                height={20}
              />
              <Image
                src={Facebook}
                alt={t("footer.social.facebook")}
                width={20}
                height={20}
              />
              <Image
                src={Instagram}
                alt={t("footer.social.instagram")}
                width={20}
                height={20}
              />
              <Image
                src={Linkedin}
                alt={t("footer.social.linkedin")}
                width={20}
                height={20}
              />
            </div>
            {/* <div>
              <LanguageSwitcher />
            </div> */}
          </div>

          <div className="md:col-span-2 flex gap-x-8 md:gap-x-20">
            <div className="flex-1">
              <h3 className="text-[.87rem] font-inter font-semibold mb-6">
                {t("footer.sections.products.title")}
              </h3>
              <ul className="space-y-4">
                <li className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem] cursor-pointer">
                  {t("footer.sections.products.messaging")}
                </li>
                <li className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem] cursor-pointer">
                  {t("footer.sections.products.payments")}
                </li>
                <li className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem] cursor-pointer">
                  {t("footer.sections.products.videos")}
                </li>
                <li className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem] cursor-pointer">
                  {t("footer.sections.products.utilities")}
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <h3 className="text-[.87rem] font-inter font-semibold mb-6">
                {t("footer.sections.company.title")}
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem]"
                  >
                    {t("footer.sections.company.aboutUs")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem]"
                  >
                    {t("footer.sections.company.careers")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem]"
                  >
                    {t("footer.sections.company.faqs")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem]"
                  >
                    {t("footer.sections.company.support")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2 w-[60%] lg:w-[70%]">
            <h3 className="text-[.87rem] font-inter font-semibold mb-6">
              {t("footer.sections.contact.title")}
            </h3>
            <ul className="flex flex-col space-y-5">
              <li className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem] cursor-pointer">
                {t("footer.sections.contact.address")}
              </li>
              <li className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem] cursor-pointer">
                {t("footer.sections.contact.phone")}
              </li>
              <li className="text-[#122231B2] font-inter font-500 font-medium text-[0.8rem] cursor-pointer">
                {t("footer.sections.contact.email")}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between lg:items-center max-w-6xl mx-auto">
            <p className="text-[#9CA3AF] text-[0.87rem] font-inter font-normal mb-4 md:mb-0">
              {t("footer.legal.copyright", { year: new Date().getFullYear() })}
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-[#9CA3AF] font-inter font-normal text-[0.87rem] transition-colors"
              >
                {t("footer.legal.privacyPolicy")}
              </Link>
              <Link
                href="#"
                className="text-[#9CA3AF] font-inter font-normal text-[0.87rem] transition-colors"
              >
                {t("footer.legal.termsOfService")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
