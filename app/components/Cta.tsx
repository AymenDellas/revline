"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const Cta = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="shadow-lg my-36 text-center flex flex-col items-center w-[90%] lg:w-[60%] mx-auto rounded-xl space-y-4 p-8 bg-gradient-to-r from-revline-900  to-revline-800 text-revline-50"
    >
      <h1 className="font-bold font-itim text-5xl">
        Ready to Transform Your Digital Presence?
      </h1>
      <p className="w-[90%] lg:w-[70%]">
        Let's discuss how Revline can help you achieve your business goals with
        a custom web solution designed for performance and growth.
      </p>
      <Link
        href="/contact"
        className="px-6 py-4 flex items-center space-x-2 bg-revline-700 text-revline-50 rounded-lg hover:bg-revline-700/40 transition-colors duration-300 ease-out w-fit"
      >
        <p>Start Your Project</p>
        <ArrowRight size={20} />
      </Link>
    </motion.section>
  );
};

export default Cta;
