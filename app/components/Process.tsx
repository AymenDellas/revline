"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { processSteps } from "@/lib/data";

const Process = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionTitle badge="OUR PROCESS" title="How We Work" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            We follow a proven methodology that ensures your project is delivered on time,
            on budget, and exceeds your expectations every step of the way.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 relative"
        >
          {/* Connecting Line */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-[1px] h-[calc(100%-150px)] bg-gradient-to-b from-revline-400 to-revline-900 hidden md:block" />
          
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={stepVariants}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10 md:static md:translate-x-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-revline-400 to-revline-900 flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
              </div>
              
              {/* Step Card */}
              <div className="mt-8 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 group h-full flex flex-col">
                <h3 className="text-xl font-bold text-revline-900 mb-3 group-hover:text-revline-400 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <div className="w-12 h-0.5 bg-gray-200 group-hover:bg-revline-400 transition-colors duration-300 mb-4"></div>
                
                <p className="text-gray-700 leading-relaxed flex-grow">
                  {step.description}
                </p>
                
                {/* Visual indicator for active state */}
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-revline-400/50 to-transparent rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
