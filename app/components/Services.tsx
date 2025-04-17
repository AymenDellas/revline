"use client";
import React, { useState } from "react";
import { services } from "../../lib/data";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Patterns */}
      

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <span className="text-revline-400 font-medium tracking-wider uppercase text-sm">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-itim text-revline-900 mt-4 mb-6">
            What we offer
          </h2>
          <p className="text-revline-600 text-lg">
            Transforming ideas into exceptional digital experiences with our comprehensive suite of services
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {services.map((service: Service, index: number) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-revline-100"
            >
              {/* Service Card Content */}
              <div className="flex items-start space-x-6">
                {/* Icon Container */}
                <div
                  className={`bg-gradient-to-br from-revline-900 to-revline-300 p-4 rounded-xl transform group-hover:scale-110 transition-transform duration-500`}
                >
                  <service.icon size={32} className="text-white" />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-revline-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-revline-600 mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {service.description}
                  </p>
                  
                  {/* CTA Link */}
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-revline-900 font-medium group/link"
                  >
                    <span className="relative">
                      {service.cta}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-revline-400 group-hover/link:w-full transition-all duration-300" />
                    </span>
                    <ChevronRight 
                      size={18} 
                      className="ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300" 
                    />
                  </Link>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className={`absolute top-0 right-0 w-32 h-32  opacity-5 rounded-bl-[100px] transition-opacity duration-300 group-hover:opacity-10`} />
              
              {/* Hover Indicator */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-revline-400 rounded-t-full"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
