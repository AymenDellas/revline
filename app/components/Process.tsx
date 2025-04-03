"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { processSteps } from "@/lib/data";

const Process = () => {
  return (
    <motion.section
      id="process"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center space-y-8 py-20 w-[60%] max-lg:w-[85%] mx-auto"
    >
      <SectionTitle badge="Our Process" title="How We Work" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {processSteps.map((step, index) => {
          return (
            <motion.div
              key={index}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="flex flex-col items-center space-y-4 bg-white border-t-6 rounded-lg text-revline-900 border-revline-900 shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out p-4 group"
            >
              <span className="p-6 rounded-full w-14 h-14 bg-revline-100 flex justify-center items-center">
                {step.number}
              </span>
              <div className="relative">
                <h2 className="font-bold text-xl group-hover:text-revline-400 transition-colors duration-300 ease-out">
                  {step.title}
                </h2>
                <span className="absolute w-0 group-hover:w-full h-0.5 bg-revline-400 rounded-full transition-all duration-300 ease-out bottom-0" />
              </div>
              <p className="text-gray-800 text-center group-hover:text-revline-900 transition-colors duration-300 ease-out">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Process;
