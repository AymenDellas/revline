"use client";
import React from "react";
import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";
import { Check, Send, Phone, Mail } from "lucide-react";
import { faq, whyWorkWithUs } from "@/lib/data";

const Contact = () => {
  return (
    <motion.section
      id="services"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-col space-y-8 py-20 mx-auto"
    >
      <SectionTitle
        badge="CONTACT"
        title="Let’s Build Something Great Together"
      />
      <div className="flex flex-col justify-center max-lg:items-center lg:flex-row space-x-12 px-4">
        <div className="space-y-4 mx-4">
          <article className="bg-revline-black-50 p-8 rounded-lg h-fit space-y-4">
            <h2 className="text-3xl font-bold text-revline-black-700 ">
              Get In Touch
            </h2>

            <div className="flex items-center space-x-2">
              <span className="text-revline-900 bg-revline-100 rounded-lg p-4 border-l-4 shadow-sm">
                <Phone />
              </span>
              <span>
                <p>Call Us</p>
                <p className="text-gray-600">+213 540329004</p>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-revline-900 bg-revline-100 rounded-lg p-4 border-l-4 shadow-sm">
                <Mail />
              </span>
              <span>
                <p>Email Us</p>
                <p className="text-gray-600">@revlineagency@gmail.com</p>
              </span>
            </div>
          </article>
          <article className="rounded-lg p-8 h-fit bg-revline-400 text-white space-y-4">
            <h2 className="font-bold text-2xl ">Why Work With Us ?</h2>
            {whyWorkWithUs.map((feature, index) => {
              return (
                <div key={index} className="flex items-center space-x-1">
                  <Check />
                  <p>{feature}</p>
                </div>
              );
            })}
          </article>
        </div>
        <form className="bg-revline-black-50 rounded-lg p-8 space-y-8 max-lg:w-full w-[70%] max-lg:m-4">
          <div className="flex items-center space-x-4 justify-between w-full">
            <div>
              <label htmlFor="fullName" className="text-sm text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                className="block bg-revline-white-50 outline-none rounded-lg py-2 focus:ring-3 ring-revline-200 transition-all px-4 duration-300 ease-out w-full"
              />
            </div>
            <div>
              <label htmlFor="CompanyName" className="text-sm text-gray-700">
                Company/Business Name
              </label>
              <input
                type="text"
                name="CompanyName"
                className="block bg-revline-white-50 outline-none rounded-lg py-2 focus:ring-3 ring-revline-200 transition-all px-4 duration-300 ease-out w-full"
              />
            </div>
          </div>

          <label htmlFor="email" className="text-sm text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="block bg-revline-white-50 outline-none rounded-lg py-2 focus:ring-3 ring-revline-200 transition-all px-4 duration-300 ease-out w-full"
          />

          <label htmlFor="budget" className="text-sm text-gray-700">
            Project Budget
          </label>
          <select
            id="budget"
            name="budget"
            required
            className="block bg-revline-white-50  outline-none rounded-lg py-3 focus:ring-3 ring-revline-200 transition-all px-4 duration-300 ease-out w-full"
          >
            <option value="" disabled selected>
              Select your budget range
            </option>
            <option value="15000">&lt; 15,000 دج</option>
            <option value="30000">15,000 - 30,000 دج</option>
            <option value="50000">30,000 - 50,000 دج</option>
            <option value="50000plus">&gt; 50,000 دج</option>
          </select>

          <label htmlFor="projectType" className="text-sm text-gray-700">
            Project Type*
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            className="block bg-revline-white-50 outline-none rounded-lg py-3 focus:ring-3 ring-revline-200 transition-all px-4 duration-300 ease-out w-full"
          >
            <option value="" disabled selected>
              Select project type
            </option>
            <option value="website">Website Design & Development</option>
            <option value="ecommerce">E-Commerce Website</option>
            <option value="webapp">Web Application</option>
            <option value="redesign">Website Redesign</option>
            <option value="maintenance">Website Maintenance</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="details" className="text-sm text-gray-700">
            Project details
          </label>
          <textarea
            rows={5}
            name="details"
            placeholder="Enter your project details..."
            className="block bg-revline-white-50 outline-none rounded-lg py-2 focus:ring-3 ring-revline-200 transition-all px-4 duration-300 ease-out w-full"
          ></textarea>
          <button
            type="submit"
            className="flex items-center space-x-2 px-8 py-2 bg-revline-400 text-revline-white-50 cursor-pointer rounded-lg my-4 hover:bg-revline-300 transition-colors duration-300 ease-out"
          >
            <p>Send</p>
            <Send size={18} />
          </button>
        </form>
      </div>
      <article>
        <div className="flex flex-col text-center my-20">
          <h2 className="font-bold text-3xl text-revline-black-700">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700">Have questions? We've got answers.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-[90%] lg:w-[70%] xl:w-[50%] mx-auto">
          {faq.map((qa, index) => {
            return (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg space-y-4 bg-revline-900"
              >
                <h2 className="text-2xl font-bold text-white">{qa.que}</h2>
                <p className="text-revline-50">{qa.answer}</p>
              </div>
            );
          })}
        </div>
      </article>
    </motion.section>
  );
};

export default Contact;
