"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";
import { Check, Send, Phone, Mail, Loader, CheckCircle } from "lucide-react";
import { faq, whyWorkWithUs } from "@/lib/data";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    budget: "",
    projectType: "",
    details: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget range";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    if (!formData.details.trim()) {
      newErrors.details = "Please provide project details";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/xvgkglab", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        // Reset form after successful submission
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          budget: "",
          projectType: "",
          details: "",
        });
      } else {
        const errorData = await response.json();
        setSubmitError(
          errorData.message || "Failed to submit form. Please try again."
        );
      }
    } catch (error) {
      setSubmitError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
        title="Let's Build Something Great Together"
      />
      <div className="flex flex-col justify-center max-lg:items-center lg:flex-row space-x-12 px-4 max-lg:w-full lg:w-[90%] xl:w-[75%] 2xl:w-[65%] mx-auto">
        <div className="space-y-4 mx-4">
          <article className="bg-revline-black-50 p-8 rounded-lg h-fit space-y-4">
            <h2 className="text-3xl font-bold text-revline-black-700">
              Get In Touch
            </h2>

            <div className="flex items-center space-x-2">
              <span className="text-revline-900 bg-revline-100 rounded-lg p-4 border-l-4 shadow-sm">
                <Phone />
              </span>
              <span>
                <p>Call Us</p>
                <p className="text-gray-600">+213 676366092</p>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-revline-900 bg-revline-100 rounded-lg p-4 border-l-4 shadow-sm">
                <Mail />
              </span>
              <span>
                <p>Email Us</p>
                <p className="text-gray-600">revlineagency@gmail.com</p>
              </span>
            </div>
          </article>
          <article className="rounded-lg p-8 h-fit bg-revline-400 text-white space-y-4">
            <h2 className="font-bold text-2xl">Why Work With Us?</h2>
            {whyWorkWithUs.map((feature, index) => (
              <div key={index} className="flex items-center space-x-1">
                <Check />
                <p>{feature}</p>
              </div>
            ))}
          </article>
        </div>
        <form
          className="bg-revline-black-50 rounded-lg p-8 space-y-4 max-lg:w-full w-[70%] max-lg:m-4"
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xvgkglab"
          method="POST"
        >
          {submitSuccess && (
            <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded flex items-center space-x-2 mb-4">
              <CheckCircle size={20} />
              <span>
                Your message has been sent successfully! We'll get back to you
                soon.
              </span>
            </div>
          )}

          {submitError && (
            <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded mb-4">
              {submitError}
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
            <div className="w-full">
              <label
                htmlFor="fullName"
                className="text-sm text-gray-700 block mb-1"
              >
                Full Name*
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`block bg-revline-white-50 outline-none rounded-lg py-2 focus:ring-3 ring-revline-200 transition-all px-4 duration-300 ease-out w-full ${
                  errors.fullName ? "border-2 border-red-400" : ""
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="companyName"
                className="text-sm text-gray-700 block mb-1"
              >
                Company/Business Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="block bg-revline-white-50 outline-none rounded-lg py-2 focus:ring-3 ring-revline-200 transition-all px-4 duration-300 ease-out w-full"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm text-gray-700 block mb-1">
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`block bg-revline-white-50 outline-none rounded-lg py-2 focus:ring-3 ring-revline-200 transition-all px-4 duration-300 ease-out w-full ${
                errors.email ? "border-2 border-red-400" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="budget"
              className="text-sm text-gray-700 block mb-1"
            >
              Project Budget*
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`block bg-revline-white-50 outline-none rounded-lg py-3 focus:ring-3 ring-revline-200 transition-all px-4 duration-300 ease-out w-full ${
                errors.budget ? "border-2 border-red-400" : ""
              }`}
            >
              <option value="" disabled>
                Select your budget range
              </option>
              <option value="500">$500 - $1,000</option>
              <option value="1000">$1,000 - $2,500</option>
              <option value="2500">$2,500 - $5,000</option>
              <option value="5000">$5,000+</option>
            </select>
            {errors.budget && (
              <p className="text-red-500 text-sm mt-1">{errors.budget}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="projectType"
              className="text-sm text-gray-700 block mb-1"
            >
              Project Type*
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`block bg-revline-white-50 outline-none rounded-lg py-3 focus:ring-3 ring-revline-200 transition-all px-4 duration-300 ease-out w-full ${
                errors.projectType ? "border-2 border-red-400" : ""
              }`}
            >
              <option value="" disabled>
                Select project type
              </option>
              <option value="website">Website Design & Development</option>
              <option value="ecommerce">E-Commerce Website</option>
              <option value="webapp">Web Application</option>
              <option value="redesign">Website Redesign</option>
              <option value="maintenance">Website Maintenance</option>
              <option value="other">Other</option>
            </select>
            {errors.projectType && (
              <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="details"
              className="text-sm text-gray-700 block mb-1"
            >
              Project details*
            </label>
            <textarea
              rows={5}
              name="details"
              id="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Enter your project details..."
              className={`block bg-revline-white-50 outline-none rounded-lg py-2 focus:ring-3 ring-revline-200 transition-all px-4 duration-300 ease-out w-full ${
                errors.details ? "border-2 border-red-400" : ""
              }`}
            ></textarea>
            {errors.details && (
              <p className="text-red-500 text-sm mt-1">{errors.details}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center space-x-2 px-8 py-2 bg-revline-400 text-revline-white-50 cursor-pointer rounded-lg hover:bg-revline-300 transition-colors duration-300 ease-out disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader size={18} className="animate-spin" />
                <p>Sending...</p>
              </>
            ) : (
              <>
                <p>Send</p>
                <Send size={18} />
              </>
            )}
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
          {faq.map((qa, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg space-y-4 bg-revline-900"
            >
              <h2 className="text-2xl font-bold text-white">{qa.que}</h2>
              <p className="text-revline-50">{qa.answer}</p>
            </div>
          ))}
        </div>
      </article>
    </motion.section>
  );
};

export default Contact;
