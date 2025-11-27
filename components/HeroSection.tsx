"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

// Column 1 images (scrolls up)
const column1Images = [
  "https://framerusercontent.com/images/uQjKePTDLsLavwXCbiGMnh6M0.png",
  "https://framerusercontent.com/images/nuTexo2AXVnBHmMPZHHnpmis9I.jpg",
  "https://framerusercontent.com/images/hEtjLV8UxMFLHngghG3uh3y2mI.jpg",
  "https://framerusercontent.com/images/IzZVOZ8tjxV74vOoGwqSqGBKO0.png",
  "https://framerusercontent.com/images/tXPA826BRaOgrYHgtCG9XAWgTk.jpg",
  "https://framerusercontent.com/images/h70LeZ7oR20P084W3colLKjs1Y.jpg",
  "https://framerusercontent.com/images/9jHPYEou6H4diBnoc8pM9iGT4.jpg",
  "https://framerusercontent.com/images/2NFLHviqrXTEAV1o4Wg9r9XaZco.jpg",
];

// Column 2 images (scrolls down)
const column2Images = [
  "https://framerusercontent.com/images/KQVS9xzOhIjPe4bnvIsgCUL5Wg4.png",
  "https://framerusercontent.com/images/F169bRebhAT0SYGBfN1v53qpo.png",
  "https://framerusercontent.com/images/SwQbKxaMoCslafYGWpYj6XRnhg.jpg",
  "https://framerusercontent.com/images/dG0dONnU6oMKJ39q3gUw3GjAJEc.jpg",
  "https://framerusercontent.com/images/kwdfFUaWQ0pRmIyx5lKhY7fg.jpg",
  "https://framerusercontent.com/images/dXxJJzSuBuBGx66w2RylB0Bu5Dk.jpg",
  "https://framerusercontent.com/images/HXQv13QVjogvio7qw5PjjBjLo.jpg",
  "https://framerusercontent.com/images/EtztAZdk07jIL8CNf0zGGUPpAWE.jpg",
];

export default function HeroSection() {
  const [isColumn1Paused, setIsColumn1Paused] = useState(false);
  const [isColumn2Paused, setIsColumn2Paused] = useState(false);

  return (
    <section className="hero relative min-h-screen bg-gradient-to-br from-soft-white via-white to-accent/5 pt-16 lg:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-screen items-center gap-12 lg:grid-cols-2 lg:gap-16 py-12 lg:py-0">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 pt-20 lg:pt-0">
            {/* Badge */}
            <div className="inline-flex items-center">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-primary border border-blue-100">
                ✨ Next-Gen Design Studio
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black tracking-tight text-primary sm:text-6xl lg:text-7xl leading-[1.1]">
              CREATIVITY
              <br />
              POWERED BY
              <br />
              <span className="text-highlight">TALENT + AI</span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-lg leading-relaxed text-gray-600 sm:text-xl">
              Transform your ideas into reality with our innovative blend of
              human creativity and artificial intelligence. Experience design
              that's both cutting-edge and authentic.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center h-10 rounded-full bg-[#1a1a1a] hover:bg-[#1a1a1a]/90 px-4 text-sm font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                style={{ color: "#ffffff" }}
              >
                Let's Chat
                <svg
                  className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </Link>

              <Link
                href="/projects"
                className="group inline-flex items-center justify-center h-10 rounded-full border-2 border-primary bg-white px-4 text-sm font-semibold text-primary transition-all duration-300 hover:bg-soft-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                View Portfolio
                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-4xl font-black text-primary">500+</div>
                <div className="text-[15px] text-gray-600 mt-1">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary">98%</div>
                <div className="text-[15px] text-gray-600 mt-1">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary">24/7</div>
                <div className="text-[15px] text-gray-600 mt-1">
                  AI-Powered Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Multi-Column Portfolio Carousel */}
          <div className="relative flex items-center justify-center lg:justify-end overflow-hidden">
            <div className="w-full max-w-lg lg:max-w-none h-[600px] overflow-hidden">
              <div className="flex gap-4 h-full">
                {/* Column 1 - Scrolls Up */}
                <div
                  className="flex-1 overflow-hidden"
                  onMouseEnter={() => setIsColumn1Paused(true)}
                  onMouseLeave={() => setIsColumn1Paused(false)}
                >
                  <motion.div
                    className="flex flex-col gap-4"
                    animate={{
                      y: [
                        "0%",
                        "0%",
                        "-8.33%",
                        "-8.33%",
                        "-16.67%",
                        "-16.67%",
                        "-25%",
                        "-25%",
                        "-33.33%",
                        "-33.33%",
                        "-41.67%",
                        "-41.67%",
                        "-50%",
                        "-50%",
                      ],
                    }}
                    transition={{
                      y: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 28,
                        ease: "easeInOut",
                        times: [
                          0, 0.07, 0.14, 0.21, 0.29, 0.36, 0.43, 0.5, 0.57,
                          0.64, 0.71, 0.79, 0.86, 0.93,
                        ],
                      },
                    }}
                    style={{
                      animationPlayState: isColumn1Paused
                        ? "paused"
                        : "running",
                    }}
                  >
                    {/* Render twice for seamless loop */}
                    {[...column1Images, ...column1Images].map((src, index) => (
                      <motion.div
                        key={`col1-${index}`}
                        className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-lg group cursor-pointer"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <img
                          src={src}
                          alt={`Portfolio ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {/* Replace gradient overlay with corner badges/images */}
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute top-2 left-2 rounded-md bg-white/90 px-2 py-1 text-[11px] font-semibold text-primary shadow-sm">
                            Showcase
                          </div>
                          <img
                            src="/badge-star.png"
                            alt="Featured"
                            className="absolute bottom-2 right-2 h-6 w-6 drop-shadow-lg"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Column 2 - Scrolls Down */}
                <div
                  className="flex-1 overflow-hidden"
                  onMouseEnter={() => setIsColumn2Paused(true)}
                  onMouseLeave={() => setIsColumn2Paused(false)}
                >
                  <motion.div
                    className="flex flex-col gap-4"
                    animate={{
                      y: [
                        "-50%",
                        "-50%",
                        "-41.67%",
                        "-41.67%",
                        "-33.33%",
                        "-33.33%",
                        "-25%",
                        "-25%",
                        "-16.67%",
                        "-16.67%",
                        "-8.33%",
                        "-8.33%",
                        "0%",
                        "0%",
                      ],
                    }}
                    transition={{
                      y: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 28,
                        ease: "easeInOut",
                        times: [
                          0, 0.07, 0.14, 0.21, 0.29, 0.36, 0.43, 0.5, 0.57,
                          0.64, 0.71, 0.79, 0.86, 0.93,
                        ],
                      },
                    }}
                    style={{
                      animationPlayState: isColumn2Paused
                        ? "paused"
                        : "running",
                    }}
                  >
                    {/* Render twice for seamless loop */}
                    {[...column2Images, ...column2Images].map((src, index) => (
                      <motion.div
                        key={`col2-${index}`}
                        className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-lg group cursor-pointer"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <img
                          src={src}
                          alt={`Portfolio ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {/* Replace gradient overlay with corner badges/images */}
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute top-2 left-2 rounded-md bg-white/90 px-2 py-1 text-[11px] font-semibold text-primary shadow-sm">
                            Showcase
                          </div>
                          <img
                            src="/badge-star.png"
                            alt="Featured"
                            className="absolute bottom-2 right-2 h-6 w-6 drop-shadow-lg"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Floating tilted images removed */}
    </section>
  );
}
