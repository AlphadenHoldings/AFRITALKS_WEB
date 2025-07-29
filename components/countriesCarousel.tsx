"use client";
import { motion, PanInfo } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

interface Country {
  id: number;
  image: string;
  isCenter?: boolean;
}

const CountriesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(4); // Start with center item (PAPPS)

  const countries: Country[] = [
    { id: 1, image: "/icons/flag.svg" },
    { id: 2, image: "/icons/flag2.svg" },
    { id: 3, image: "/icons/flag3.svg" },
    { id: 4, image: "/icons/flag4.svg" },
    {
      id: 5,
      image:
        "https://papss.com/wp-content/themes/papss/assets/images/logo-2.svg",
    },
    { id: 6, image: "/icons/flag5.svg" },
    { id: 7, image: "/icons/flag6.svg" },
    { id: 8, image: "/icons/flag7.svg" },
    { id: 9, image: "/icons/flag8.svg" },
    { id: 10, image: "/icons/flag9.svg" },
  ];

  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    // No need to do anything during drag, just for smooth interaction
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50; // Minimum swipe distance

    if (info.offset.x > threshold && currentIndex > 0) {
      // Swiped right - go to previous item
      setCurrentIndex((prev) => prev - 1);
    } else if (
      info.offset.x < -threshold &&
      currentIndex < countries.length - 1
    ) {
      // Swiped left - go to next item
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full h-[10rem] flex lg:hidden items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto">
        {/* Main container for flags */}
        <div className="relative flex items-center justify-center">
          {/* Background circle for center item */}
          <div
            className="absolute w-24 h-24 rounded-full z-0"
            style={{
              backgroundColor: "#3C0C7014",
            }}
          />

          {/* Draggable container */}
          <motion.div
            className="relative w-full h-32 flex items-center justify-center cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
          >
            {/* Flags arranged in curved formation */}
            {countries.map((country, index) => {
              const distanceFromCenter = index - currentIndex;
              const isCenter = index === currentIndex;

              // Only show items that are close to center (for performance)
              if (Math.abs(distanceFromCenter) > 2) return null;

              // Calculate curved positioning
              const xOffset = distanceFromCenter * 110; // Horizontal spacing
              const yOffset = Math.abs(distanceFromCenter) * 8; // Slight curve effect
              const scale = isCenter ? 1.8 : 1.5; // Center item larger
              const opacity = isCenter ? 1 : 0.8;

              return (
                <motion.div
                  key={country.id}
                  className="absolute flex items-center justify-center"
                  animate={{
                    x: xOffset,
                    y: yOffset,
                    scale: scale,
                    opacity: opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  style={{
                    zIndex: isCenter ? 20 : 10,
                  }}
                >
                  {isCenter ? (
                    // ANY center item gets larger scale and styling
                    <div className="relative">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-xl">
                        <Image
                          src={country.image}
                          alt={`Center item ${country.id}`}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    // Regular flag items
                    <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
                      <Image
                        src={country.image}
                        alt={`Flag ${country.id}`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Optional: Dots indicator */}

        {/* Optional: Instructions */}
      </div>
    </div>
  );
};

export default CountriesCarousel;
