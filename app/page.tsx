"use client";

import { TestimonialCard } from "@/components/testimonialCard";
import { testimonials } from "@/json/testimonial";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Countries from "/public/countries.png";
import heroImage from "/public/hero_image.png";
import AppleIcon from "/public/icons/apple_fill.svg";
import Biometric_Icon from "/public/icons/biometric.svg";
import GoogleIcon from "/public/icons/google_play_fill.svg";
import Privacy_Icon from "/public/icons/privacy.svg";
import Secure_Icon from "/public/icons/secure.svg";
import Instant_Message from "/public/instant_messaging.png";
import Iphone from "/public/iphone.png";
import Base_Map from "/public/map-base.png";
import Payments from "/public/payments.png";
import Secure from "/public/secure.png";
import Stories from "/public/stories.png";
import Utilities from "/public/utilities.png";
import CountriesCarousel from "@/components/countriesCarousel";

export default function Home() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

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
    { src: Instant_Message, alt: "instant message" },
    { src: Payments, alt: "payments" },
    { src: Utilities, alt: "utilities" },
    { src: Stories, alt: "stories" },
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
            className="font-inter text-[2.75rem] lg:text-[3.375rem] font-[600] leading-[4rem] text-[#F5F3FF]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            How Africa <br /> connects seamlessly
          </motion.h1>

          <motion.p
            className="text-[#F5F3FFB2] font-inter font-[400] text-[1rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            The all-in-one social platform for cross-border{" "}
            <br className="lg:flex hidden" /> payments, messaging, e-commerce,
            lifestyle, and digital <br className="lg:flex hidden" /> utilities
            across Africa.
          </motion.p>

          <motion.div
            className="flex items-center gap-x-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button className="bg-[#694BF1] px-5 py-2.5 rounded-full font-inter font-semibold text-[.8rem] flex items-center gap-x-1">
              <Image src={AppleIcon} alt="Apple Icon" width={20} height={20} />
              <span className="hidden lg:flex text-white">Download on iOS</span>
              <span className="flex lg:hidden text-white">App Store</span>
            </button>
            <button className="bg-[#694BF1] px-5 py-2.5 rounded-full font-inter font-semibold text-[.8rem] flex items-center gap-x-1">
              <Image
                src={GoogleIcon}
                alt="Google Icon"
                width={20}
                height={20}
              />
              <span className="hidden lg:flex text-white">
                Download on Android
              </span>
              <span className="flex lg:hidden text-white">PlayStore</span>
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
      <section className="h-full min-h-screen py-14">
        <h1 className="font-inter font-semibold text-[2rem] lg:text-[2.8rem] text-center w-[80%] lg:w-full mx-auto">
          Everything you need in <span className="text-[#694BF1]"> one</span>{" "}
          app
        </h1>
        <h4 className="text-[#6A7687] text-center font-inter font-normal text-[1rem] w-[88%] lg:w-full mx-auto mt-5">
          From instant messaging to cross-border payments, AfriTalks brings
          together all the tools you need to <br className="hidden lg:flex" />{" "}
          connect and transact across Africa.
        </h4>

        <motion.div
          className="grid grid-col-1 lg:grid-cols-2 w-fit px-5 sm:px-0 mx-auto lg:mx-auto mt-10 gap-5"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {stagesimages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <Image
                src={image.src}
                width={1800}
                height={1800}
                alt={image.alt}
                className="h-[21rem] lg:h-[33.1rem] w-[22rem] lg:w-[32.75rem]"
              />
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
            How Africhat <span className="text-[#694BF1]">Works</span>
          </h1>
          <h5 className="text-[#6A7687] font-inter font-normal text-[1rem]">
            Getting started with Africa's most comprehensive social and payment
            platform is simple and secure.
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
                    {data.name}
                  </h1>
                  <h6 className="text-[#6A7687] text-[0.8rem] font-inter font-normal">
                    {data.desc}
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
          Cross border payment powered by{" "}
          <span className="text-[#694BF1]">PAPPS</span>
        </h1>
        <p className="text-[#6A7687] text-center w-[92%] lg:w-[75%] font-inter font-normal text-[1rem]">
          The Pan African Payment and Settlement System (PAPSS) enables instant,
          secure, and cost-effective cross-border payments across participating
          African countries, making AfriTalks the future of continental
          connectivity.
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
            AfriTalks is currently available in 15 African countries{" "}
            <br className="hidden lg:block" /> with more being added regularly.
          </h3>

          <button className=" bg-[#694BF1] text-[#F5F3FF] font-inter font-normal px-5 py-3 rounded-full">
            View all
          </button>
        </div>
      </motion.section>

      <section className="h-full w-fit flex flex-col lg:flex-row mx-auto lg:px-40 py-28 gap-x-5">
        <div className="w-full lg:w-[50%] px-5 lg:px-0">
          <h1 className="text-[#122231] font-inter font-semibold text-[2rem] lg:text-[2.75rem]">
            High-end level <br />{" "}
            <span className="text-[#694BF1]"> security</span>
          </h1>
          <p className="text-[#6A7687] text-[1rem] w-[90%] font-inter font-normal">
            We use the same security standards as major banks to protect your
            data and money, ensuring every transaction is safe and secure.
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
                    {data.name}
                  </h1>
                  <h6 className="text-[#6A7687] text-[0.8rem] font-inter font-normal">
                    {data.desc}
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
          Connecting <span className="text-[#694BF1]"> Africa.</span> One user
          at a time
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
                {data.state}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full h-full py-20 pb-40 bg-[#F9FAFB]">
        <h1 className="text-[2rem] lg:text-[2.75rem] font-inter font-semibold text-center leading-[2.3rem] lg:leading-[3rem] w-[80%] mx-auto lg:w-full">
          Trusted by <span className="text-[#694BF1]"> communities</span> <br />{" "}
          across Africa
        </h1>
        <p className="text-[#6A7687] font-inter font-normal text-[1rem] text-center w-[90%] mx-auto mt-5">
          Whether you’re chatting with loved ones, sending money across borders,
          or sharing moments <br className="hidden lg:flex" /> through short
          videos, AfriTalks keeps you seamlessly connected.
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
            The future of African communication.
          </h1>
          <p className="text-[#F5F3FF] font-light text-[1rem] font-inter mt-2 text-center">
            Talk, share, and send — across <br className="flex lg:hidden" /> any
            border.
          </p>
          <div className="flex items-center gap-x-3 mt-5 lg:mt-10">
            <button className="bg-[#694BF1] text-white px-6 py-2 rounded-full font-inter font-semibold text-[.8rem] flex items-center gap-x-1">
              <Image src={AppleIcon} alt="Google Icon" width={20} height={20} />
              <span className="hidden lg:flex">Download on iOS</span>
              <span className="flex lg:hidden">App Store</span>
            </button>
            <button className="bg-[#694BF1] text-white px-6 py-2 rounded-full font-inter font-semibold text-[.8rem] flex items-center gap-x-1">
              <Image
                src={GoogleIcon}
                alt="Google Icon"
                width={20}
                height={20}
              />
              <span className="hidden lg:flex"> Download on Android</span>
              <span className="flex lg:hidden"> PlayStore</span>
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
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
    state: "Active Users",
  },
  {
    rate: "15",
    state: "Countries",
  },
  {
    rate: "$1.1M+",
    state: "Transactions",
  },
  {
    rate: "99.9%",
    state: "Uptime",
  },
];
