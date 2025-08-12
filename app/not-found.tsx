"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-16 font-inter">
      <div className="text-center max-w-screen-sm mx-auto">
        <h1
          className="text-[8rem] sm:text-[10rem] md:text-[12rem] font-bold leading-none tracking-tighter transition-all"
          style={{
            background: "linear-gradient(180deg, #000000 0%, #333333 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {" "}
          404{" "}
        </h1>

        <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mt-2 sm:mt-4">
          Page Not Found
        </h2>

        <p className="mt-3 sm:mt-4 font-inter text-base sm:text-lg text-gray-600 max-w-lg mx-auto font-light px-4">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="font-inter hover:scale-105 inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 mt-6 sm:mt-8 text-sm sm:text-base font-medium text-white bg-black rounded-lg sm:rounded-xl hover:bg-gray-900 transition-all duration-200"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
