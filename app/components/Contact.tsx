"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Check, Send, Phone, Mail, Loader, CheckCircle, ChevronDown, HelpCircle } from "lucide-react";
import { faq, whyWorkWithUs } from "@/lib/data";

type FormData = {
  fullName: string;
  companyName: string;
  email: string;
  budget: string;
  projectType: string;
  details: string;
};

type FormErrors = {
  fullName?: string;
  companyName?: string;
  email?: string;
  budget?: string;
  projectType?: string;
  details?: string;
};

// Form steps
enum FormStep {
  PersonalInfo = 1,
  ProjectDetails = 2,
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    budget: "",
    projectType: "",
    details: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [currentStep, setCurrentStep] = useState<FormStep>(FormStep.PersonalInfo);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const detailsRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const validateCurrentStep = () => {
    let newErrors: FormErrors = {};
    let isValid = true;

    if (currentStep === FormStep.PersonalInfo) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required";
        isValid = false;
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
        isValid = false;
      }
    } else if (currentStep === FormStep.ProjectDetails) {
      if (!formData.budget) {
        newErrors.budget = "Please select a budget range";
        isValid = false;
      }

      if (!formData.projectType) {
        newErrors.projectType = "Please select a project type";
        isValid = false;
      }

      if (!formData.details.trim()) {
        newErrors.details = "Please provide project details";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(FormStep.ProjectDetails);
      
      // Focus the details textarea in the next step
      setTimeout(() => {
        if (detailsRef.current) {
          detailsRef.current.focus();
        }
      }, 100);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(FormStep.PersonalInfo);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateCurrentStep()) {
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
        setCurrentStep(FormStep.PersonalInfo);
        
        // Scroll to top of form
        if (formRef.current) {
          formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
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

  // Track character count for details
  const detailsCharCount = formData.details.length;
  const maxDetailsChars = 500;

  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="contact"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-col space-y-8 py-20 mx-auto"
    >
      <SectionTitle
        badge="CONTACT"
        title="Let's Build Something Great Together"
      />
      
      <div className="flex flex-col justify-center max-lg:items-center lg:flex-row space-x-0 lg:space-x-12 px-4 max-lg:w-full lg:w-[90%] xl:w-[75%] 2xl:w-[65%] mx-auto">
        {/* Left column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 mx-4 lg:w-[30%]"
        >
          <article className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 h-fit space-y-4 transition-all hover:shadow-xl duration-300">
            <h2 className="text-2xl font-bold text-revline-black-700 border-b pb-2">
              Get In Touch
            </h2>

            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }} 
              className="flex items-center space-x-3 group"
            >
              <span className="text-white bg-gradient-to-r from-revline-900 to-revline-400 rounded-full p-3 shadow-md group-hover:shadow-lg transition-all duration-300">
                <Phone className="w-5 h-5" />
              </span>
              <span>
                <p className="text-sm font-medium text-gray-500">Call Us</p>
                <a href="tel:+213676366092" className="text-revline-900 hover:text-revline-400 transition-colors">+213 676 366 092</a>
              </span>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }} 
              className="flex items-center space-x-3 group"
            >
              <span className="text-white bg-gradient-to-r from-revline-900 to-revline-400 rounded-full p-3 shadow-md group-hover:shadow-lg transition-all duration-300">
                <Mail className="w-5 h-5" />
              </span>
              <span>
                <p className="text-sm font-medium text-gray-500">Email Us</p>
                <a href="mailto:revlineagency@gmail.com" className="text-revline-900 hover:text-revline-400 transition-colors">revlineagency@gmail.com</a>
              </span>
            </motion.div>
          </article>
          
          <article className="rounded-lg p-8 h-fit bg-gradient-to-br from-revline-400 to-revline-900 text-white shadow-lg">
            <h2 className="font-bold text-xl border-b border-white/20 pb-2 mb-4">Why Work With Us?</h2>
            <div className="space-y-3">
              {whyWorkWithUs.map((feature, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-2 group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="mt-1 flex-shrink-0"
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                  <p className="text-white/90 group-hover:text-white transition-colors duration-200">{feature}</p>
                </motion.div>
              ))}
            </div>
          </article>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-lg:w-full lg:w-[60%] max-lg:m-4"
        >
          <form
            ref={formRef}
            className="bg-white rounded-lg p-8 space-y-6 shadow-lg border border-gray-100"
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xvgkglab"
            method="POST"
          >
            {/* Form Success Message */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg flex items-center space-x-3 mb-4"
                >
                  <CheckCircle size={24} className="text-green-500" />
                  <div>
                    <h3 className="font-medium">Message sent successfully!</h3>
                    <p>Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form Error Message */}
            <AnimatePresence>
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg"
                >
                  {submitError}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form Progress Bar */}
            <div className="relative mb-8">
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "50%" }}
                  animate={{ width: currentStep === FormStep.PersonalInfo ? "50%" : "100%" }}
                  className="h-full bg-gradient-to-r from-revline-400 to-revline-800"
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span className={currentStep === FormStep.PersonalInfo ? "text-revline-400 font-medium" : ""}>
                  Personal Information
                </span>
                <span className={currentStep === FormStep.ProjectDetails ? "text-revline-400 font-medium" : ""}>
                  Project Details
                </span>
              </div>
            </div>

            {/* Form Steps */}
            <AnimatePresence mode="wait">
              {currentStep === FormStep.PersonalInfo ? (
                <motion.div
                  key="step1"
                  variants={formVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <h3 className="text-xl font-medium text-revline-900">Tell us about yourself</h3>
                  
                  <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
                    <div className="w-full">
                      <label
                        htmlFor="fullName"
                        className="text-sm text-gray-700 block mb-1 font-medium"
                      >
                        Full Name*
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your name"
                        autoFocus
                        className={`block bg-gray-50 outline-none rounded-lg py-3 focus:ring-3 ring-revline-200 transition-all px-4 duration-300 ease-out w-full border ${
                          errors.fullName ? "border-red-400" : "border-gray-200"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <span className="mr-1">⚠</span> {errors.fullName}
                        </p>
                      )}
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="companyName"
                        className="text-sm text-gray-700 block mb-1 font-medium"
                      >
                        Company Name <span className="text-gray-400">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="block bg-gray-50 outline-none rounded-lg py-3 focus:ring-3 ring-revline-200 transition-all px-4 duration-300 ease-out w-full border border-gray-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`block bg-gray-50 outline-none rounded-lg py-3 focus:ring-3 ring-revline-200 transition-all px-4 duration-300 ease-out w-full border ${
                        errors.email ? "border-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <span className="mr-1">⚠</span> {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="w-full md:w-auto px-8 py-3 bg-revline-400 text-white font-medium rounded-lg hover:bg-revline-300 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                    >
                      <span>Next: Project Details</span>
                      <ChevronDown className="ml-2 rotate-270 w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  variants={formVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <h3 className="text-xl font-medium text-revline-900">Tell us about your project</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="budget"
                        className="text-sm text-gray-700 block mb-1 font-medium"
                      >
                        Project Budget*
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={`block bg-gray-50 outline-none rounded-lg py-3 focus:ring-3 ring-revline-200 transition-all px-4 duration-300 ease-out w-full border ${
                          errors.budget ? "border-red-400" : "border-gray-200"
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
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <span className="mr-1">⚠</span> {errors.budget}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="projectType"
                        className="text-sm text-gray-700 block mb-1 font-medium"
                      >
                        Project Type*
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className={`block bg-gray-50 outline-none rounded-lg py-3 focus:ring-3 ring-revline-200 transition-all px-4 duration-300 ease-out w-full border ${
                          errors.projectType ? "border-red-400" : "border-gray-200"
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
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <span className="mr-1">⚠</span> {errors.projectType}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label
                      htmlFor="details"
                      className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                      Project Details*
                    </label>
                    <textarea
                      ref={detailsRef}
                      rows={5}
                      name="details"
                      id="details"
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className={`block bg-gray-50 outline-none rounded-lg py-3 focus:ring-3 ring-revline-200 transition-all px-4 duration-300 ease-out w-full border ${
                        errors.details ? "border-red-400" : "border-gray-200"
                      }`}
                      maxLength={maxDetailsChars}
                    ></textarea>
                    <div className="flex justify-between items-center mt-1 text-xs text-gray-500">
                      <div>
                        {errors.details && (
                          <p className="text-red-500 text-sm flex items-center">
                            <span className="mr-1">⚠</span> {errors.details}
                          </p>
                        )}
                      </div>
                      <div className={detailsCharCount > maxDetailsChars * 0.8 ? "text-orange-500" : ""}>
                        {detailsCharCount}/{maxDetailsChars} characters
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-grow flex items-center justify-center space-x-2 px-8 py-3 bg-revline-400 text-white font-medium rounded-lg hover:bg-revline-300 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader size={20} className="animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Request</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full mt-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-revline-black-700 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We've got answers. If you don't see what you're looking for, feel free to contact us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto px-4">
          {faq.map((qa, index) => (
            <div
              key={index}
              className="mb-4"
            >
              <div
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className={`p-5 rounded-lg cursor-pointer transition-all duration-300 flex items-center justify-between ${
                  expandedFaq === index ? "bg-revline-900 text-white shadow-xl" : "bg-white border border-gray-200 shadow-md hover:shadow-lg"
                }`}
              >
                <h3 className={`text-xl font-medium ${expandedFaq === index ? "text-white" : "text-revline-900"}`}>
                  {qa.que}
                </h3>
                <div className={`transform transition-transform duration-300 ${expandedFaq === index ? "rotate-180" : ""}`}>
                  <ChevronDown className={`${expandedFaq === index ? "text-white" : "text-revline-400"}`} />
                </div>
              </div>
              
              {expandedFaq === index && (
                <div
                  className="bg-white border-x border-b border-gray-200 rounded-b-lg p-5 text-gray-700 shadow-inner transition-all duration-300 overflow-hidden"
                >
                  {qa.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
                  