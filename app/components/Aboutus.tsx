"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import SectionTitle from "./SectionTitle";

const Aboutus = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const codeVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        delay: 0.3 
      } 
    }
  };

  // Array of dummy code lines for the animated code visual
  const codeLines = [
    { type: "comment", content: "// Revline's approach to web development" },
    { type: "import", content: "import { Performance, Design, Conversion } from 'revline';" },
    { type: "blank", content: "" },
    { type: "class", content: "class RevlineProject {" },
    { type: "property", content: "  client: Client;" },
    { type: "property", content: "  goals: string[];" },
    { type: "property", content: "  timeline: Date;" },
    { type: "blank", content: "" },
    { type: "method", content: "  constructor(client, goals) {" },
    { type: "code", content: "    this.client = client;" },
    { type: "code", content: "    this.goals = goals;" },
    { type: "code", content: "    this.timeline = new Date();" },
    { type: "code", content: "  }" },
    { type: "blank", content: "" },
    { type: "method", content: "  planDesign() {" },
    { type: "code", content: "    return new Design.Modern({" },
    { type: "code", content: "      responsive: true," },
    { type: "code", content: "      accessible: true," },
    { type: "code", content: "      conversion: optimized" },
    { type: "code", content: "    });" },
    { type: "code", content: "  }" },
    { type: "blank", content: "" },
    { type: "method", content: "  develop() {" },
    { type: "code", content: "    const tech = selectBestTech(this.client.needs);" },
    { type: "code", content: "    const codebase = new CleanArchitecture(tech);" },
    { type: "code", content: "    return codebase.optimize();" },
    { type: "code", content: "  }" },
    { type: "blank", content: "" },
    { type: "method", content: "  launch() {" },
    { type: "code", content: "    return new Promise(resolve => {" },
    { type: "code", content: "      const site = this.develop();" },
    { type: "code", content: "      const analytics = setupTracking();" },
    { type: "code", content: "      resolve({ site, analytics });" },
    { type: "code", content: "    });" },
    { type: "code", content: "  }" },
    { type: "closing", content: "}" },
    { type: "blank", content: "" },
    { type: "export", content: "export default new RevlineProject(you, yourGoals);" },
  ];

  return (
    <section ref={containerRef} className="py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <SectionTitle badge="OUR STORY" title="Get to Know Revline" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div 
              variants={sectionVariants}
              className="space-y-12"
            >
              <motion.div 
                variants={itemVariants}
                className="group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-1.5 h-12 bg-revline-800 rounded mr-4 transform group-hover:scale-y-110 transition-transform duration-300" />
                  <h2 className="text-2xl sm:text-3xl font-bold font-radley text-revline-900">
                    Why We Exist
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed pl-6 border-l border-gray-200">
                  The digital world is evolving fast, but too many businesses
                  struggle with outdated websites and poor online experiences. At
                  Revline, we exist to bridge that gap—delivering sleek,
                  high-performance websites that don't just look good but drive real
                  results.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-1.5 h-12 bg-revline-800 rounded mr-4 transform group-hover:scale-y-110 transition-transform duration-300" />
                  <h2 className="text-2xl sm:text-3xl font-bold font-radley text-revline-900">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed pl-6 border-l border-gray-200">
                  We're not just another web development agency. Our vision is to
                  set a new standard for modern, scalable, and conversion-focused
                  websites—helping businesses establish a strong digital presence
                  effortlessly.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-1.5 h-12 bg-revline-800 rounded mr-4 transform group-hover:scale-y-110 transition-transform duration-300" />
                  <h2 className="text-2xl sm:text-3xl font-bold font-radley text-revline-900">
                    Who We Help
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed pl-6 border-l border-gray-200">
                  From startups looking for their first online presence to
                  established brands wanting a fresh, modern revamp, we build
                  solutions that match your goals. Whether it's a landing page or an
                  e-commerce store, we make sure your website works as hard as you
                  do.
                </p>
              </motion.div>
            </motion.div>

            {/* Interactive Code Visual */}
            <motion.div 
              variants={codeVariants}
              className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl bg-[#1E1E2E] font-mono text-sm"
            >
              {/* Terminal Header */}
              <div className="bg-[#313244] h-8 flex items-center px-4 text-white">
                <div className="mr-2 w-3 h-3 rounded-full bg-red-500"></div>
                <div className="mr-2 w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="mr-4 w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs opacity-80">revline-project.ts</span>
              </div>
              
              {/* Line Numbers */}
              <div className="absolute left-0 top-8 bottom-0 w-10 flex flex-col bg-[#181825] text-[#6c7086] text-right">
                {codeLines.map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.03 }}
                    className="px-2 h-6 text-xs"
                  >
                    {index + 1}
                  </motion.div>
                ))}
              </div>
              
              {/* Code Content */}
              <div className="absolute left-10 right-0 top-8 bottom-0 overflow-auto p-4 text-[#cdd6f4]">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.03 }}
                    className="h-6"
                  >
                    <span className={`
                      ${line.type === 'comment' ? 'text-[#6c7086]' : ''}
                      ${line.type === 'import' || line.type === 'export' ? 'text-[#89b4fa]' : ''}
                      ${line.type === 'class' || line.type === 'method' ? 'text-[#f38ba8]' : ''}
                      ${line.type === 'property' ? 'text-[#f9e2af]' : ''}
                      ${line.type === 'code' ? 'text-[#a6e3a1]' : ''}
                      ${line.type === 'closing' ? 'text-[#f38ba8]' : ''}
                    `}>
                      {line.content}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Code Editor Cursor */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [1, 0, 1, 0, 1],
                  transition: { 
                    repeat: Infinity,
                    duration: 1.2
                  }
                }}
                className="absolute left-[calc(10px+4rem)] top-[calc(8px+15.5rem)] w-2 h-6 bg-[#f9e2af]"
              />
              
              {/* Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#cba6f7]/10 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutus;
