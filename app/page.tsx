"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import heroImage from "/public/hero_image.png";
import AppleIcon from "/public/icons/apple_fill.svg";
import GoogleIcon from "/public/icons/google_play_fill.svg";
import Instant_Message from "/public/instant_messaging.png";
import Payments from "/public/payments.png";
import Stories from "/public/stories.png";
import Utilities from "/public/utilities.png";
import Iphone from "/public/iphone.png";
import Countries from "/public/countries.png";
import Secure from "/public/secure.png";
import Secure_Icon from "/public/icons/secure.svg";
import Biometric_Icon from "/public/icons/biometric.svg";
import Privacy_Icon from "/public/icons/privacy.svg";
import Testimonials from "/public/testimonial.png";
import Base_Map from "/public/map-base.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="h-screen w-full flex flex-col lg:flex-row from-[#140C42] to-[#0A071A] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] text-white">
        <div className="flex flex-col gap-y-8 lg:pl-40 px-3 lg:px-0 mt-[30%] lg:mt-[18%] w-full lg:w-[50%]">
          <h1 className="font-inter text-[2.75rem] lg:text-[3.375rem] font-[600] leading-[4rem] text-[#F5F3FF]">
            Connect Africa, <br /> pay seamlessly.
          </h1>
          <p className="text-[#F5F3FFB2] font-inter font-[400] text-[1rem]">
            The all-in-one social platform powered by PAPPS for{" "}
            <br className="hidden lg:flex" /> cross-border payments, messaging,
            stories, and digital <br className="hidden lg:flex" /> utilities
            across Africa.
          </p>
          <div className="flex items-center gap-x-3">
            <button className="bg-[#694BF1] px-5 py-2.5 rounded-full font-inter font-semibold text-[.8rem] flex items-center gap-x-1">
              <Image src={AppleIcon} alt="Google Icon" width={20} height={20} />
              <span className="hidden lg:flex">Download on iOS</span>
              <span className="flex lg:hidden">App Store</span>
            </button>
            <button className="bg-[#694BF1] px-5 py-2.5 rounded-full font-inter font-semibold text-[.8rem] flex items-center gap-x-1">
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
        </div>
        <div className="w-full lg:w-[50%] h-full">
          <Image
            src={heroImage}
            alt="africa_image_for_hero_section"
            width={2448}
            height={3244}
            className="w-[93%] h-full flex ml-auto object-cover object-[0%_10%]"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="h-full min-h-screen py-14">
        <h1 className="font-inter font-semibold text-[2rem] lg:text-[3rem] text-center w-[80%] lg:w-full mx-auto">
          Everything you need in <span className="text-[#694BF1]"> one</span>{" "}
          app
        </h1>
        <h4 className="text-[#6A7687] text-center font-inter font-normal text-[1rem] w-[88%] lg:w-full mx-auto">
          From instant messaging to cross-border payments, AfriTalks brings
          together all the tools you need to <br className="hidden lg:flex" />{" "}
          connect and transact across Africa.
        </h4>

        <div className="grid grid-col-1 lg:grid-cols-2 w-fit mx-auto mt-10 gap-5">
          <Image
            src={Instant_Message}
            width={1800}
            height={1800}
            alt="instant message"
            className="h-[23.75rem] lg:h-[33.1rem] w-[22rem] lg:w-[32.75rem]"
          />
          <Image
            src={Payments}
            width={1800}
            height={1800}
            alt="instant message"
            className="h-[23.75rem] lg:h-[33.1rem] w-[22rem] lg:w-[32.75rem]"
          />
          <Image
            src={Utilities}
            width={1800}
            height={1800}
            alt="instant message"
            className="h-[23.75rem] lg:h-[33.1rem] w-[22rem] lg:w-[32.75rem]"
          />
          <Image
            src={Stories}
            width={1800}
            height={1800}
            alt="instant message"
            className="h-[23.75rem] lg:h-[33.1rem] w-[22rem] lg:w-[32.75rem]"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="h-screen min-h-screen w-fit flex flex-col lg:flex-row mx-auto justify-center mt-20">
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
          <div className="mt-10 lg:mt-5 space-y-10">
            {howitworks.map((data) => (
              <div className="flex items-start space-x-5" key={data.id}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#F5F3FF] flex flex-col items-center h-[70vh] lg:h-fit pt-20 pb-32 mt-14 lg:mt-0 space-y-5 lg:px-40">
        <h1 className="text-[#122231] font-inter font-semibold text-[2rem] lg:text-[2.75rem]">
          Powered by <span className="text-[#694BF1]"> PAPPS</span>
        </h1>
        <p className="text-[#6A7687] text-center w-[97%] lg:w-[75%] font-inter font-normal text-[1rem]">
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

        <div className="absolute top-[22rem] lg:top-[26rem] flex flex-col items-center text-center gap-y-4">
          <h3 className="text-[#6A7687] font-inter font-normal">
            AfriTalks is currently available in 15 African countries <br /> with
            more being added regularly.
          </h3>

          <button className=" bg-[#694BF1] text-[#F5F3FF] font-inter font-normal px-5 py-3 rounded-full">
            View all
          </button>
        </div>
      </section>

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

          <div className="mt-8 space-y-10">
            {secure.map((data) => (
              <div className="flex items-start space-x-5" key={data.id}>
                <Image src={data.icon} width={50} height={50} alt={data.name} />
                <div className="flex flex-col space-y-2">
                  <h1 className="text-[#122231] font-inter font-semibold text-[1.18rem]">
                    {data.name}
                  </h1>
                  <h6 className="text-[#6A7687] text-[0.8rem] font-inter font-normal">
                    {data.desc}
                  </h6>
                </div>
              </div>
            ))}
          </div>
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

        <div className="flex flex-col lg:flex-row justify-between space-y-5 mt-10 lg:mx-32">
          {stats.map((data) => (
            <div
              key={data.rate}
              className="h-[6.75rem] border-l-2 border-[#694BF1] flex flex-col justify-between pl-5 py-2"
            >
              <h1 className="leading-none text-[#122231] font-inter font-medium text-[2.75rem]">
                {data.rate}
              </h1>
              <p className="leading-none  text-[#6A7687] font-inter font-normal text-[0.9rem]">
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
        <div className="mx-40 mt-10 hidden lg:flex">
          <Image
            src={Testimonials}
            alt="testimonials"
            width={1800}
            height={1800}
            className="w-full h-full"
          />
        </div>
      </section>

      <section className="w-full h-full bg-[#F9FAFB]">
        <div
          className="bg-[#0A071A] h-[25.5rem] mx-5 lg:mx-40 mb-20 rounded-3xl flex flex-col items-center justify-center bg-cover bg-top lg:bg-center"
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
        </div>
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
