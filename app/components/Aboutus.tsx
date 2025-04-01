"use client";
import React from "react";
import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";
const Aboutus = () => {
  return (
    <motion.section
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center space-y-8 py-20 w-[60%] max-lg:w-[85%] mx-auto"
    >
      <SectionTitle badge="OUR STORY" title="Get to Know Revline" />
      <div className="flex flex-col lg:flex-row items-center justify-between space-x-8">
        <div className="flex flex-col space-y-8 w-full max-lg:my-4 ">
          <div>
            <h1 className="my-2 text-3xl font-bold font-radley border-l-4 rounded-sm border-revline-800 text-revline-900 pl-2 ">
              Why We Exist
            </h1>
            <p className="font-itim font-semibold text-lg">
              The digital world is evolving fast, but too many businesses
              struggle with outdated websites and poor online experiences. At
              Revline, we exist to bridge that gap—delivering sleek,
              high-performance websites that don’t just look good but drive real
              results.
            </p>
          </div>
          <div>
            <h1 className="my-2 text-3xl font-bold font-radley border-l-4 rounded-sm border-revline-800 text-revline-900 pl-2">
              Our Vision
            </h1>
            <p className="font-itim font-semibold text-lg">
              We’re not just another web development agency. Our vision is to
              set a new standard for modern, scalable, and conversion-focused
              websites—helping businesses establish a strong digital presence
              effortlessly.
            </p>
          </div>
          <div>
            <h1 className="my-2 text-3xl font-bold font-radley border-l-4 rounded-sm border-revline-800 text-revline-900 pl-2">
              Who We Help
            </h1>
            <p className="font-itim font-semibold text-lg">
              From startups looking for their first online presence to
              established brands wanting a fresh, modern revamp, we build
              solutions that match your goals. Whether it's a landing page or an
              e-commerce store, we make sure your website works as hard as you
              do.
            </p>
          </div>
        </div>
        <div>
          <img src="/aboutusimage.svg" alt="" />
        </div>
      </div>
    </motion.section>
  );
};

export default Aboutus;
