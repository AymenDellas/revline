"use client";
import React from "react";
import { CodeXml, Monitor, Component, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const floatingIconVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [0, -10, 0],
      rotate: [0, -5, 0],
      
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-[min(90%,1200px)] mx-auto text-center py-24 md:py-36 relative z-10"
      role="banner"
      aria-label="Hero Section"
    >
      <div className="flex flex-col justify-center space-y-8 items-center">
        <div className="relative max-w-4xl">
          <motion.div
            variants={floatingIconVariants}
            initial="initial"
            animate="animate"
            className="absolute right-0 lg:top-12 top-22 -z-10 text-revline-900"
          >
            <Monitor className="w-10 h-10 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20" />
          </motion.div>
          <motion.div
            variants={floatingIconVariants}
            initial="initial"
            animate="animate"
            className="absolute top-0 lg:-top-12 -left-4 lg:left-0 -z-10 text-revline-900"
          >
            <Component className="w-10 h-10 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20" />
          </motion.div>
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-anybody font-bold text-revline-900 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Websites That Convert.{" "}
            <span className="text-revline-400">Code That Performs.</span>
          </motion.h1>
        </div>

        <motion.div 
          className="relative max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div
            variants={floatingIconVariants}
            initial="initial"
            animate="animate"
            className="absolute -left-8 -top-2 -z-10 text-revline-900"
          >
            <CodeXml className="w-10 h-10 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20" />
          </motion.div>
          <p className="text-revline-400 text-base sm:text-lg lg:text-xl leading-relaxed">
            We build responsive landing pages and business sites with modern UI,
            sharp code, and smooth UX — no bloat, no templates.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            href="/contact"
            className="flex items-center justify-center space-x-2 px-6 py-4 rounded-lg bg-revline-400 hover:bg-revline-300 shadow-lg hover:shadow-xl transition-all duration-300 ease-out text-white cursor-pointer group w-full sm:w-auto"
          >
            <span className="font-medium">Get Started Today</span>
            <Send
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-out"
            />
          </Link>
          <Link
            href="/#case_studies"
            className="px-6 py-4 rounded-lg border-2 border-revline-400 hover:bg-revline-100 transition-all duration-300 ease-out text-revline-black-800 cursor-pointer w-full sm:w-auto font-medium"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;