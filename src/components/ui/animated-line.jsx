"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";

export const AnimatedLines = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const height = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        window.innerHeight
      );
      setSvgHeight(height);
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    window.addEventListener('scroll', updateHeight);
    
    // Update height periodically to catch dynamic content changes
    const interval = setInterval(updateHeight, 1000);
    
    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('scroll', updateHeight);
      clearInterval(interval);
    };
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [100, svgHeight * 0.8]),
    {
      stiffness: 400,
      damping: 80,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, svgHeight - 150]),
    {
      stiffness: 400,
      damping: 80,
    },
  );

  return (
    <div ref={ref}>
      {/* Left Animated Line */}
      <div className="fixed top-20 left-5 lg:left-7.5 xl:left-10 z-50 pointer-events-none">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="border-purple-400 flex h-8 w-8 items-center justify-center rounded-full border-2 shadow-lg bg-n-8/90 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.7,
            }}
            className="h-4 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="block ml-1.5"
          aria-hidden="true"
        >
          <motion.path
            d={`M 10 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.3"
            strokeWidth="2"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 10 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#left-animated-gradient)"
            strokeWidth="4"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="left-animated-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC" stopOpacity="0.8"></stop>
              <stop offset="0.325" stopColor="#6344F5" stopOpacity="1"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      {/* Right Animated Line */}
      <div className="fixed top-20 right-5 lg:right-7.5 xl:right-10 z-50 pointer-events-none">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="border-purple-400 flex h-8 w-8 items-center justify-center rounded-full border-2 shadow-lg bg-n-8/90 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.7,
            }}
            className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-lg"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="block ml-1.5"
          aria-hidden="true"
        >
          <motion.path
            d={`M 10 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.3"
            strokeWidth="2"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 10 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#right-animated-gradient)"
            strokeWidth="4"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="right-animated-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC" stopOpacity="0.8"></stop>
              <stop offset="0.325" stopColor="#6344F5" stopOpacity="1"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}; 