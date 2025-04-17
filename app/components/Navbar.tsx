"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Phone, ScrollText, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return pathname === '/' && path.includes(pathname);
    }
    return pathname === path;
  };

  const navLinks = [
    { href: "/agency", label: "Agency" },
    { href: "/contact", label: "Contact" },
    { href: "/#services", label: "Services" },
    { href: "/agency/#process", label: "Process" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`lg:w-[95%] xl:w-[80%] 2xl:w-[70%] mx-auto m-4 p-4 rounded-lg hidden lg:flex sticky top-4 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 shadow-lg backdrop-blur-md" : "bg-transparent"
        }`}
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between w-full pr-4">
          <Link href="/" className="cursor-pointer" aria-label="Revline Home">
            <img
              src="/revline.svg"
              alt="Revline logo"
              draggable="false"
              className="w-36"
            />
          </Link>

          <ul className="flex space-x-6" role="navigation">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="relative group py-2 px-1 inline-block">
                  <span className={`z-10 transition-all duration-300 ease-out group-hover:text-revline-400 ${
                    isActive(link.href) ? "text-revline-400 font-medium" : ""
                  }`}>
                    {link.label}
                  </span>
                  <span className={`absolute w-[5px] h-[5px] bg-revline-400 rounded-full top-1/2 -translate-y-1/2 -left-0 transition-all duration-200 ease-out -z-10 ${
                    isActive(link.href) ? "opacity-100 -left-2" : "opacity-0 group-hover:-left-2 group-hover:opacity-100"
                  }`}></span>
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-revline-400/50 rounded-full"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4 text-revline-white">
            <Link
              href="/#case_studies"
              className="flex items-center space-x-1 hover:text-revline-400 transition-colors duration-300 ease-out group"
              aria-label="View our case studies"
            >
              <ScrollText size={16} className="group-hover:rotate-3 transition-transform duration-300" />
              <span>Our Work</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center space-x-1 p-2 rounded-lg bg-revline-400 hover:bg-revline-300 active:bg-revline-400 text-revline-white-50 transition-all duration-200 ease-out shadow-md hover:shadow-lg"
              aria-label="Start your project with us"
            >
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              <span>Start Your Project</span>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <nav className="flex justify-between items-center lg:hidden mx-4 my-4 z-50 relative">
        <Link href="/" className="z-[99] cursor-pointer" aria-label="Revline Home">
          <img
            src="/revline.svg"
            alt="Revline logo"
            draggable="false"
            className="w-36"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-[99] p-2 focus:outline-none focus:ring-2 focus:ring-revline-400 rounded-lg"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="text-revline-white-500" size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="text-revline-black-800" size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 bg-revline-black-800 text-revline-white-500 z-40 overflow-hidden flex flex-col"
            >
              <div className="flex flex-col justify-between h-full py-24 px-8">
                <motion.ul 
                  className="flex flex-col space-y-6 text-4xl"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                    },
                    closed: {}
                  }}
                >
                  {[
                    { href: "/#case-studies", label: "Case Studies" },
                    ...navLinks
                  ].map((link, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        open: { y: 0, opacity: 1 },
                        closed: { y: 50, opacity: 0 }
                      }}
                    >
                      <Link href={link.href} className="group block">
                        <div className="flex items-center space-x-3">
                          <span className={`w-1 h-8 rounded-full transition-all duration-300 ${
                            isActive(link.href) ? "bg-revline-400" : "bg-transparent group-hover:bg-revline-400/50"
                          }`}></span>
                          <span className="group-hover:translate-x-2 transition-all duration-300 ease-out group-hover:text-revline-400">
                            {link.label}
                          </span>
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-auto mb-12"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center space-x-2 p-4 w-full rounded-lg bg-revline-400 hover:bg-revline-300 text-revline-white-50 transition-all duration-300 ease-out shadow-lg"
                  >
                    <ArrowRight size={20} />
                    <span className="text-lg font-medium">Start Your Project</span>
                  </Link>
                  
                  <div className="mt-8 text-center text-revline-white-500/70 text-sm">
                    <p>© 2023 Revline. All rights reserved.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
