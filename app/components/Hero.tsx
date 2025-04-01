"use client";
import React from "react";
import { CodeXml, Monitor, Component } from "lucide-react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.section
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-[50%] max-lg:w-[85%] mx-auto text-center my-36 relative z-10 mb-64"
    >
      <div className="flex flex-col justify-center space-y-8 items-center z-10">
        <div className="relative">
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 lg:top-12 top-22 -z-10 text-revline-900 "
          >
            <Monitor className="w-10 h-10 lg:w-16 lg:h-16 xl:w-18 xl:h-18 opacity-50" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 lg:-top-12 -left-4 lg:left-0 -z-10 text-revline-900 "
          >
            <Component className="w-10 h-10 lg:w-16 lg:h-16 xl:w-18 xl:h-18 opacity-50" />
          </motion.div>
          <h1 className="text-7xl max-lg:text-5xl font-radley font-bold text-revline-900">
            Future-Proof Web Solutions, Built for Growth.
          </h1>
        </div>
        <div className="relative">
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-8 -top-2 -z-10 text-revline-900"
          >
            <CodeXml className="w-10 h-10 lg:w-16 lg:h-16 xl:w-18 xl:h-18 opacity-50" />
          </motion.div>
          <p className="text-revline-400 text-lg max-lg:text-base">
            We craft high-performance websites engineered for results. Whether
            you need a seamless eCommerce platform, a scalable SaaS app, or a
            lightning-fast business website—Revline delivers cutting-edge
            development with precision.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-6 py-4 rounded-lg bg-revline-400 hover:bg-revline-300 transition-colors duration-300 ease-out text-white cursor-pointer">
            Get Proposal
          </button>
          <button className="px-6 py-4 rounded-lg border border-revline-400  hover:bg-revline-100 transition-colors duration-300 ease-out text-revline-black-800 cursor-pointer">
            Schedule a call
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
