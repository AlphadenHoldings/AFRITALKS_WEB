"use client";

import CountriesCarousel from "@/components/countriesCarousel";
import GoogleTranslate from "@/components/GoogleTranslate";
import { TestimonialCard } from "@/components/testimonialCard";
import "@/utils/i18n/index";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Instant_Message from "/public/Background-connect.svg";
import Stories from "/public/Background-lifestyle.svg";
import Payments from "/public/background-payment.svg";
import Utilities from "/public/Background-utilies.svg";
import Countries from "/public/countries.png";
import heroImage from "/public/hero_image.png";
import AppleIcon from "/public/icons/apple_fill.svg";
import Biometric_Icon from "/public/icons/biometric.svg";
import GoogleIcon from "/public/icons/google_play_fill.svg";
import Privacy_Icon from "/public/icons/privacy.svg";
import Secure_Icon from "/public/icons/secure.svg";
import Iphone from "/public/iphone.png";
import Base_Map from "/public/map-base.png";
import Secure from "/public/secure.png";

export default function Home() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

  // Create testimonial data from i18n
  const createTestimonials = () => {
    const testimonialData = [];
    for (let i = 1; i <= 9; i++) {
      testimonialData.push({
        id: i,
        name: t(`testimonials.users.${i}.name`),
        location: t(`testimonials.users.${i}.location`),
        remark: t(`testimonials.users.${i}.remark`),
      });
    }
    return testimonialData;
  };

  const testimonials = createTestimonials();
  const column1 = testimonials.slice(0, 3);
  const column2 = testimonials.slice(3, 6);
  const column3 = testimonials.slice(6, 8);

  const handleMouseEnter = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  const stagesimages = [
    { src: Instant_Message, key: "instantMessaging" },
    { src: Payments, key: "crossBorderPayments" },
    { src: Utilities, key: "digitalUtilities" },
    { src: Stories, key: "socialStories" },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />

      {/* Hero Section */}
      <section className="h-full lg:h-screen w-full flex flex-col lg:flex-row from-[#140C42] to-[#0A071A] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] text-white">
        <motion.div
          className="flex flex-col gap-y-8 lg:pl-40 px-3 lg:px-0 mt-[30%] lg:mt-[18%] w-full lg:w-[60%] z-[10]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h1
            className="font-inter text-[2.75rem] lg:text-[3.375rem] font-[600] leading-[4rem] tracking-[-0.035em] text-[#F5F3FF]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("home.hero.title.part1")} <br /> {t("home.hero.title.part2")}
          </motion.h1>

          <motion.p
            className="text-[#F5F3FFB2] font-inter font-[400] text-[1rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t("home.hero.subtitle")}
          </motion.p>

          <motion.div
            className="flex items-center gap-x-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button className="bg-[#694BF1] px-5 py-2.5 rounded-full font-inter font-semibold text-[.8rem] flex items-center gap-x-1">
              <Image src={AppleIcon} alt="Apple Icon" width={20} height={20} />
              <span className="hidden lg:flex text-white">
                {t("home.hero.buttons.ios")}
              </span>
              <span className="flex lg:hidden text-white">
                {t("home.hero.buttons.appStore")}
              </span>
            </button>
            <button className="bg-[#694BF1] px-5 py-2.5 rounded-full font-inter font-semibold text-[.8rem] flex items-center gap-x-1">
              <Image
                src={GoogleIcon}
                alt="Google Icon"
                width={20}
                height={20}
              />
              <span className="hidden lg:flex text-white">
                {t("home.hero.buttons.android")}
              </span>
              <span className="flex lg:hidden text-white">
                {t("home.hero.buttons.playStore")}
              </span>
            </button>
          </motion.div>
        </motion.div>

        <div className="w-full lg:w-[50%] h-full">
          <Image
            src={heroImage}
            alt="africa_image_for_hero_section"
            width={2448}
            height={3244}
            className="w-[93%] h-full flex ml-auto z-[-1] object-cover object-[0%_10%]"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-[85rem] mx-auto text-center mb-12 md:mb-16">
          <h1 className="font-inter font-semibold text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] leading-tight mb-4">
            {t("home.features.title.part1")}{" "}
            <span className="text-[#694BF1]">
              {t("home.features.title.highlight")}{" "}
            </span>
            {t("home.features.title.part2")}
          </h1>
          <h4 className="text-[#6A7687] font-inter text-[1rem] md:text-[1.125rem] max-w-[60rem] mx-auto">
            {t("home.features.subtitle")}
          </h4>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 w-fit mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {stagesimages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full md:w-[32.75rem] h-[24rem] md:h-[33.125rem] relative">
                <Image
                  src={image.src}
                  alt={t(`home.features.images.${image.key}`)}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  width={524}
                  height={530}
                  priority={index < 2}
                />
                <div className="absolute inset-0 transition-all duration-300" />
                <div className="absolute top-[1.3rem] lg:top-[2.5rem] left-[1rem] lg:left-[2.5rem] right-[1rem] lg:right-[2.5rem] flex flex-col gap-[0.75rem]">
                  <h2 className="text-[#F5F3FF] font-inter w-full font-medium text-[1.3rem] md:text-[2.25rem] leading-tight tracking-[-0.03em]">
                    {t(`home.sections.${image.key}.title`)}
                  </h2>
                  <p className="text-[#F5F3FF]/90 font-inter text-[0.8rem] lg:text-[1rem] leading-[1.5] w-[75%] lg:w-full">
                    {t(`home.sections.${image.key}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="h-full w-fit flex flex-col lg:flex-row mx-auto justify-center py-28">
        <div className="w-full lg:w-[45%]">
          <Image
            src={Iphone}
            alt="how it works"
            width={1800}
            height={1800}
            className="w-[20rem] lg:w-[25rem] h-[23rem] lg:h-[30rem] flex mx-auto"
          />
        </div>
        <div className="w-[90%] mx-auto mt-10 lg:mt-0 lg:w-[40%] flex flex-col">
          <h1 className="font-inter font-semibold text-[2rem] lg:text-[2.75rem]">
            {t("home.howItWorks.title.part1")}{" "}
            <span className="text-[#694BF1]">
              {t("home.howItWorks.title.highlight")}
            </span>
          </h1>
          <h5 className="text-[#6A7687] font-inter font-normal text-[1rem]">
            {t("home.howItWorks.subtitle")}
          </h5>
          <motion.div
            className="mt-10 lg:mt-5 space-y-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {howitworks.map((data) => (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: data.id * 0.15,
                  ease: "easeOut",
                }}
                className="flex items-start space-x-5"
                key={data.id}
              >
                <h1 className="bg-[#694BF1] rounded-full h-[2.25rem] w-[2.25rem] min-w-[2.25rem] flex-shrink-0 flex items-center justify-center text-white font-inter font-medium">
                  {data.id}
                </h1>
                <div className="flex flex-col space-y-2">
                  <h1 className="text-[#122231] font-inter font-semibold text-[1.18rem]">
                    {t(`home.howItWorks.steps.${data.id}.title`)}
                  </h1>
                  <h6 className="text-[#6A7687] text-[0.8rem] font-inter font-normal">
                    {t(`home.howItWorks.steps.${data.id}.desc`)}
                  </h6>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative bg-[#F5F3FF] flex flex-col items-center h-full lg:h-fit pt-20 pb-20 lg:pb-32 mt-28 lg:mt-0 space-y-5 lg:px-40 overflow-hidden"
      >
        <h1 className="text-[#122231] text-center font-inter font-semibold text-[2rem] lg:text-[2.75rem]">
          {t("home.papps.title.part1")}{" "}
          <span className="text-[#694BF1]">
            {t("home.papps.title.highlight")}
          </span>
        </h1>
        <p className="text-[#6A7687] text-center w-[92%] lg:w-[75%] font-inter font-normal text-[1rem]">
          {t("home.papps.subtitle")}
        </p>

        <Image
          src={Countries}
          alt="countries"
          width={2000}
          height={2000}
          className="hidden lg:flex lg:w-full"
        />

        <CountriesCarousel />

        <div className="lg:absolute lg:top-[26rem] flex flex-col items-center text-center gap-y-4">
          <h3 className="text-[#6A7687] text-[0.9rem] w-[80%] lg:w-full text-center font-inter font-normal">
            {t("home.papps.availability")}
          </h3>

          <button className=" bg-[#694BF1] text-[#F5F3FF] font-inter font-normal px-5 py-3 rounded-full">
            {t("home.papps.viewAll")}
          </button>
        </div>
      </motion.section>

      <section className="h-full w-fit flex flex-col lg:flex-row mx-auto lg:px-40 py-28 gap-x-5">
        <div className="w-full lg:w-[50%] px-5 lg:px-0">
          <h1 className="text-[#122231] font-inter font-semibold text-[2rem] lg:text-[2.75rem]">
            {t("home.security.title.part1")} <br />{" "}
            <span className="text-[#694BF1]">
              {" "}
              {t("home.security.title.highlight")}{" "}
            </span>
          </h1>
          <p className="text-[#6A7687] text-[1rem] w-[90%] font-inter font-normal">
            {t("home.security.subtitle")}
          </p>

          <motion.div
            className="mt-8 space-y-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {secure.map((data) => (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: data.id * 0.15,
                  ease: "easeOut",
                }}
                className="flex items-start space-x-5"
                key={data.id}
              >
                <Image src={data.icon} width={50} height={50} alt={data.name} />
                <div className="flex flex-col space-y-2">
                  <h1 className="text-[#122231] font-inter font-semibold text-[1.18rem]">
                    {t(`home.security.features.${data.id}.name`)}
                  </h1>
                  <h6 className="text-[#6A7687] text-[0.8rem] font-inter font-normal">
                    {t(`home.security.features.${data.id}.desc`)}
                  </h6>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="w-full lg:w-[50%] flex m-auto mt-10 lg:mt-0">
          <Image
            src={Secure}
            alt="secure"
            width={1900}
            height={1900}
            className="w-[22rem] lg:w-[33rem] h-[19rem] lg:h-[29rem] mx-auto"
          />
        </div>
      </section>

      <section className="w-full h-full mt-10 mb-40 pl-4 flex flex-col mx-auto">
        <h1 className="text-[#122231] font-inter font-semibold text-[2rem] lg:text-[2.75rem] lg:text-center w-[90%] lg:w-full">
          {t("home.connecting.title.part1")}{" "}
          <span className="text-[#694BF1]">
            {" "}
            {t("home.connecting.title.highlight")}{" "}
          </span>{" "}
          {t("home.connecting.title.part2")}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10 lg:mx-32">
          {stats.map((data) => (
            <div
              key={data.rate}
              className="h-[6.75rem] border-l-2 border-[#694BF1] flex flex-col justify-between pl-6 py-3"
            >
              <h1 className="leading-none text-[#122231] font-inter font-medium text-[2.75rem]">
                {data.rate}
              </h1>
              <p className="leading-none text-[#6A7687] font-inter font-normal text-[0.9rem]">
                {t(`home.stats.labels.${data.state}`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full h-full py-20 pb-40 bg-[#F9FAFB]">
        <h1 className="text-[2rem] lg:text-[2.75rem] font-inter font-semibold text-center leading-[2.3rem] lg:leading-[3rem] w-[80%] mx-auto lg:w-full">
          {t("home.trusted.title.part1")}{" "}
          <span className="text-[#694BF1]">
            {" "}
            {t("home.trusted.title.highlight")}{" "}
          </span>{" "}
          <br /> {t("home.trusted.title.part2")}
        </h1>
        <p className="text-[#6A7687] font-inter font-normal text-[1rem] text-center w-[90%] mx-auto mt-5">
          {t("home.trusted.subtitle")}
        </p>
        <div className="lg:mx-30 mt-10 flex mx-auto justify-center relative overflow-hidden h-[36rem]">
          {/* faders */}
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-[#F9FAFB] to-transparent z-10"></div>

          <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-[#F9FAFB] to-transparent z-10"></div>

          {/* mobile */}
          <div className="flex-1 lg:hidden flex justify-center mx-auto overflow-hidden h-full w-full">
            <motion.div
              animate={isHovered ? {} : { y: [-500, 500] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex flex-col"
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`col1-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>
          </div>

          {/* desktop */}
          <div
            className="lg:flex gap-3 h-full hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex-1 overflow-hidden">
              <motion.div
                animate={isHovered ? {} : { y: [-500, 500] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
                className="flex flex-col"
              >
                {[...column1, ...column1, ...column1].map(
                  (testimonial, index) => (
                    <TestimonialCard
                      key={`col1-${testimonial.id}-${index}`}
                      testimonial={testimonial}
                    />
                  )
                )}
              </motion.div>
            </div>

            <div className="flex-1 overflow-hidden">
              <motion.div
                animate={isHovered ? {} : { y: [100, -500] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
                className="flex flex-col"
              >
                {[...column2, ...column2, ...column2].map(
                  (testimonial, index) => (
                    <TestimonialCard
                      key={`col2-${testimonial.id}-${index}`}
                      testimonial={testimonial}
                    />
                  )
                )}
              </motion.div>
            </div>

            <div className="flex-1 overflow-hidden">
              <motion.div
                animate={isHovered ? {} : { y: [-500, 200] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                  delay: 2,
                }}
                className="flex flex-col"
              >
                {[...column3, ...column3, ...column3, ...column3].map(
                  (testimonial, index) => (
                    <TestimonialCard
                      key={`col3-${testimonial.id}-${index}`}
                      testimonial={testimonial}
                    />
                  )
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-full bg-[#F9FAFB]" id="download">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#0A071A] h-[25.5rem] mx-3 px-5 lg:px-0 lg:mx-40 mb-20 rounded-3xl flex flex-col items-center justify-center bg-cover bg-top lg:bg-center"
          style={{ backgroundImage: `url(${Base_Map.src})` }}
        >
          <h1 className="text-[1.75rem] lg:text-[2.5rem] font-semibold font-inter bg-gradient-to-r from-[#FFFFFF] to-[#939299] text-transparent bg-clip-text text-center">
            {t("home.downloadCta.title")}
          </h1>
          <p className="text-[#F5F3FF] font-light text-[1rem] font-inter mt-2 text-center">
            {t("home.downloadCta.subtitle")}
          </p>
          <div className="flex items-center gap-x-3 mt-5 lg:mt-10">
            <button className="bg-[#694BF1] text-white px-6 py-2 rounded-full font-inter font-semibold text-[.8rem] flex items-center gap-x-1">
              <Image src={AppleIcon} alt="Google Icon" width={20} height={20} />
              <span className="hidden lg:flex">
                {t("home.downloadCta.buttons.ios")}
              </span>
              <span className="flex lg:hidden">
                {t("home.downloadCta.buttons.appStore")}
              </span>
            </button>
            <button className="bg-[#694BF1] text-white px-6 py-2 rounded-full font-inter font-semibold text-[.8rem] flex items-center gap-x-1">
              <Image
                src={GoogleIcon}
                alt="Google Icon"
                width={20}
                height={20}
              />
              <span className="hidden lg:flex">
                {" "}
                {t("home.downloadCta.buttons.android")}{" "}
              </span>
              <span className="flex lg:hidden">
                {" "}
                {t("home.downloadCta.buttons.playStore")}{" "}
              </span>
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
      <GoogleTranslate />
    </div>
  );
}

const howitworks = [
  {
    id: 1,
    name: "Download & Register",
    desc: "Download the app and create your account",
  },
  {
    id: 2,
    name: "Verify & Setup",
    desc: "Complete identity verification and link your payment methods.",
  },
  {
    id: 3,
    name: "Connect & Transact",
    desc: "Send money, pay bills, and access services across Africa with just a few taps.",
  },
];

const secure = [
  {
    id: 1,
    icon: Secure_Icon,
    name: "End-to-End Encryption",
    desc: "All messages and transactions are encrypted using military grade security protocols.",
  },
  {
    id: 2,
    icon: Biometric_Icon,
    name: "Biometric Authentication",
    desc: "Secure your account with fingerprint, face recognition, or PIN protection.",
  },
  {
    id: 3,
    icon: Privacy_Icon,
    name: "Privacy First",
    desc: "We never share your personal data with third parties without your consent.",
  },
];

const stats = [
  {
    rate: "1.5M+",
    state: "activeUsers",
  },
  {
    rate: "15",
    state: "countries",
  },
  {
    rate: "$1.1M+",
    state: "transactions",
  },
  {
    rate: "99.9%",
    state: "uptime",
  },
];
