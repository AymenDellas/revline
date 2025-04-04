"use client";
import React from "react";
import { services } from "../../lib/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
const Services = () => {
  interface Service {
    title: string;
    description: string;
    icon: any;
    cta: string;
    link: string;
    color: string;
    span: string;
  }
  return (
    <motion.section
      id="services"
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center space-y-8 py-20"
    >
      <div>
        <h1 className="text-revline-900 text-5xl font-bold font-itim">
          What we offer
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 w-[90%] 2xl:w-[65%] relative my-12">
        <div className="w-[300px] h-[300px] rounded-full bg-revline-200 blur-[100px] absolute"></div>
        <div className="w-[300px] h-[300px] rounded-full bg-revline-200 blur-[100px] absolute bottom-0 right-40"></div>
        {services.map((service: Service, index: number) => {
          return (
            <motion.div
              key={index}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className=" group border border-revline-200 w-fit bg-white  flex flex-col space-y-4 rounded-lg p-4  hover:-translate-y-2 transition-all duration-300 ease-out relative overflow-hidden hover:shadow-2xl shadow-revline-900/30"
            >
              <span
                className={`absolute w-6 h-6 top-0 right-0  rounded-bl-4xl ${service.span}`}
              ></span>
              <div className="flex items-center space-x-2 text-2xl text-revline-900 font-bold">
                <div className={`${service.color} p-2 rounded-lg`}>
                  <service.icon size={40} />
                </div>
                <h1>{service.title}</h1>
              </div>
              <p className="text-revline-300 text-lg">{service.description}</p>
              <Link
                href={`${service.link}`}
                className="mt-auto flex items-center space-x-2 w-fit  text-revline-900 group- hover:text-revline-400 transition-colors duration-300 ease-out relative"
              >
                {service.cta}
                <ArrowUpRight size={20} />
                <span className="w-0 group-hover:w-full  bg-revline-400 h-0.5 absolute bottom-0 rounded-full transition-all duration-300 ease-out"></span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Services;
