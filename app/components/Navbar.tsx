"use client";
import React, { useState } from "react";
import { Phone, ScrollText } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className=" lg:w-[95%] xl:w-[80%] 2xl:w-[70%] mx-auto  m-4 p-4 rounded-lg  backdrop-blur-lg hidden lg:flex sticky top-4 z-50 ">
        <div className="flex items-center justify-between w-full pr-4">
          <Link href="/" className="cursor-pointer">
            <img
              src="/revline.svg"
              alt="RevLinkne logo"
              draggable="false"
              className="w-36"
            />
          </Link>

          <ul className="flex space-x-6 ">
            <a href="/#case-studies" className="relative group">
              <p className="z-10 group-hover:translate-x-0.5 transition-all duration-300 ease-out group-hover:text-revline-400">
                Case Studies
              </p>
              <span className="absolute w-[5px] h-[5px] bg-revline-400 rounded-full top-1/2 -translate-y-1/2 -left-0 opacity-0  group-hover:-left-2 group-hover:opacity-100 transition-all duration-200 ease-out -z-10"></span>
            </a>
            <Link href="/agency" className="relative group">
              <p className="z-10 group-hover:translate-x-0.5 transition-all duration-300 ease-out group-hover:text-revline-400">
                Agency
              </p>
              <span className="absolute w-[5px] h-[5px] bg-revline-400 rounded-full top-1/2 -translate-y-1/2 -left-0 opacity-0  group-hover:-left-2 group-hover:opacity-100 transition-all duration-200 ease-out -z-10"></span>
            </Link>
            <Link href="/contact" className="relative group">
              <p className="z-10 group-hover:translate-x-0.5 transition-all duration-300 ease-out group-hover:text-revline-400">
                Contact
              </p>
              <span className="absolute w-[5px] h-[5px] bg-revline-400 rounded-full top-1/2 -translate-y-1/2 -left-0 opacity-0  group-hover:-left-2 group-hover:opacity-100 transition-all duration-200 ease-out -z-10"></span>
            </Link>
            <a href="/#services" className="relative group">
              <p className="z-10 group-hover:translate-x-0.5 transition-all duration-300 ease-out group-hover:text-revline-400">
                Services
              </p>
              <span className="absolute w-[5px] h-[5px] bg-revline-400 rounded-full top-1/2 -translate-y-1/2 -left-0 opacity-0  group-hover:-left-2 group-hover:opacity-100 transition-all duration-200 ease-out -z-10"></span>
            </a>
            <Link href="/agency/#process" className="relative group">
              <p className="z-10 group-hover:translate-x-0.5 transition-all duration-300 ease-out group-hover:text-revline-400">
                Process
              </p>
              <span className="absolute w-[5px] h-[5px] bg-revline-400 rounded-full top-1/2 -translate-y-1/2 -left-0 opacity-0  group-hover:-left-2 group-hover:opacity-100 transition-all duration-200 ease-out -z-10"></span>
            </Link>
          </ul>
          <ul className="flex items-center space-x-4 text-revline-white">
            <Link
              href="/proposal"
              className="flex items-center space-x-1 hover:text-revline-400 transition-colors duration-300 ease-out"
            >
              <ScrollText size={16} />
              <li>Get proposal</li>
            </Link>
            <Link
              href="/contact"
              className="flex items-center space-x-1 p-2 rounded-lg bg-revline-400 hover:bg-revline-300 active:bg-revline-400 text-revline-white-50 transition-colors duration-200 ease-out"
            >
              <Phone size={16} />
              <li>Schedule a call</li>
            </Link>
          </ul>
        </div>
      </nav>
      <nav className="flex justify-between items-center lg:hidden mx-4 my-4 z-50 ">
        <Link href="/" className="z-[99] cursor-pointer">
          <img
            src="/revline.svg"
            alt="RevLinkne logo"
            draggable="false"
            className="w-36"
          />
        </Link>
        <div className="z-[99] ">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`relative cursor-pointer w-6 h-5 rounded-lg `}
          >
            <div
              className={`w-6 h-0.5 bg-black absolute rounded-full  transition-all duration-300 ease-out ${
                isOpen
                  ? "rotate-45 translate-y-2 bg-revline-white-500"
                  : "rotate-0 translate-y-0  bg-revline-black-800"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-black absolute rounded-full top-2 ${
                isOpen
                  ? "opacity-0 bg-revline-white-500"
                  : "opacity-100 bg-revline-black-800"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-black absolute rounded-full top-4 transition-all duration-300 ease-out ${
                isOpen
                  ? "-rotate-45 -translate-y-2 bg-revline-white-500"
                  : "rotate-0 translate-y-0 bg-revline-black-800"
              }`}
            ></div>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "h-screen" : "h-0"
          } absolute inset-0 bg-revline-black-800 transition-all duration-500 ease-out text-revline-white-500 overflow-hidden z-50 overflow-y-hidden`}
        >
          <ul className="flex flex-col space-y-6 mx-8 my-32 text-4xl w-full underline underline-offset-8">
            <Link href="/case_studies" className="relative group ">
              <p className="z-10 group-hover:translate-x-2 transition-all duration-300 ease-out group-hover:text-revline-400">
                Case Studies
              </p>
            </Link>
            <Link href="/agency" className="relative group">
              <p className="z-10 group-hover:translate-x-2 transition-all duration-300 ease-out group-hover:text-revline-400">
                Agency
              </p>
            </Link>
            <Link href="/contact" className="relative group">
              <p className="z-10 group-hover:translate-x-2 transition-all duration-300 ease-out group-hover:text-revline-400">
                Contact
              </p>
            </Link>
            <Link href="/services" className="relative group">
              <p className="z-10 group-hover:translate-x-2 transition-all duration-300 ease-out group-hover:text-revline-400">
                Services
              </p>
            </Link>
            <Link href="/process" className="relative group">
              <p className="z-10 group-hover:translate-x-2 transition-all duration-300 ease-out group-hover:text-revline-400">
                Process
              </p>
            </Link>
          </ul>
          <ul className="flex flex-col space-y-6 mx-8 mt-32 text-3xl">
            <Link
              href="/proposal"
              className="flex items-center space-x-2 justify-center hover:text-revline-400 transition-colors duration-300 ease-out"
            >
              <ScrollText size={30} />
              <li>Get proposal</li>
            </Link>
            <Link
              href="/contact"
              className="flex items-center space-x-2 p-2 justify-center rounded-lg bg-revline-400 hover:bg-revline-300 active:bg-revline-400 text-revline-white-50 transition-colors duration-200 ease-out"
            >
              <Phone size={30} />
              <li>Schedule a call</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
