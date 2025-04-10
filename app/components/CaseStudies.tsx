"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projectShowcases } from "@/lib/data";
// Hypothetical project showcase data - purely demonstrative of capabilities

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(projectShowcases[0]);

  return (
    <motion.section
      id="case-studies"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center space-y-12 py-20 w-full "
    >
      <div className="text-center">
        <h1 className="text-revline-900 text-5xl font-bold font-itim">
          Concept Projects
        </h1>
        <p className="text-revline-400 text-lg mt-4 max-w-2xl mx-auto">
          Explore our demonstration projects that showcase our design philosophy
          and technical capabilities.
        </p>
      </div>

      {/* Project Selection */}
      <div className="flex flex-wrap gap-4 justify-center">
        {projectShowcases.map((project) => (
          <motion.button
            key={project.id}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeProject.id === project.id
                ? "bg-revline-400 text-revline-white-500 shadow-lg"
                : "bg-revline-100 text-revline-900 hover:bg-revline-200"
            }`}
            onClick={() => setActiveProject(project)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {project.title}
          </motion.button>
        ))}
      </div>

      {/* Featured Project */}
      <div className="w-[90%] 2xl:w-[65%] relative">
        <div className="w-[300px] h-[300px] rounded-full bg-revline-200 blur-[100px] absolute -z-10 top-0 left-0"></div>
        <div className="w-[300px] h-[300px] rounded-full bg-revline-200 blur-[100px] absolute -z-10 bottom-0 right-0"></div>

        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/30 backdrop-blur-3xl border border-revline-200 rounded-[2rem] p-8 shadow-xl"
        >
          {/* Project Visualization */}
          <div
            style={{
              backgroundImage: `url(${activeProject.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="rounded-xl overflow-hidden bg-revline-100 h-[400px] flex items-center justify-center relative"
          ></div>

          {/* Project Details */}
          <div className="flex flex-col space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-revline-900 font-radley">
                {activeProject.title}
              </h2>
              <p className="text-revline-400 mt-2">
                {activeProject.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-revline-900">
                Technology Stack
              </h3>
              <p className="text-revline-400 mt-1">
                {activeProject.technologies}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-revline-900">
                Key Features
              </h3>
              <ul className="mt-2 space-y-2">
                {activeProject.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-revline-400 mr-2"></div>
                    <span className="text-revline-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={activeProject.link}
              className="mt-auto flex items-center space-x-2 w-fit px-6 py-3 rounded-lg bg-revline-400 hover:bg-revline-300 transition-colors duration-300 ease-out text-revline-white-500"
            >
              <span>View Project Details</span>
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] 2xl:w-[65%]">
        {projectShowcases.map((project, index) => (
          <motion.div
            key={project.id}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="border border-revline-200 bg-white/30 backdrop-blur-3xl rounded-[30px] overflow-hidden hover:-translate-y-2 transition-all duration-300 ease-out hover:shadow-xl shadow-revline-900/20 cursor-pointer"
            onClick={() => setActiveProject(project)}
          >
            <div
              className={`h-40 flex items-center justify-center relative ${project.color} bg-opacity-30 `}
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute top-3 left-3 bg-revline-900 text-white px-3 py-1 rounded-lg text-xs">
                {project.category}
              </div>
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-bold text-revline-900 text-xl">
                {project.title}
              </h3>
              <p className="text-revline-400 text-sm line-clamp-2">
                {project.description}
              </p>
              <div className="pt-2 flex justify-between items-center">
                <div className="flex space-x-1">
                  {project.features.slice(0, 1).map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-revline-100 text-revline-900 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <ArrowUpRight size={16} className="text-revline-900" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Link
        href="/projects"
        className="flex items-center space-x-2 px-6 py-4 rounded-lg border border-revline-400 hover:bg-revline-100 transition-colors duration-300 ease-out text-revline-black-800"
      >
        <span>Explore Our Capabilities</span>
        <ArrowUpRight size={20} />
      </Link>
    </motion.section>
  );
};

export default ProjectShowcase;
