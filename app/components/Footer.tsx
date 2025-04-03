import { Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-revline-900 text-white py-12 rounded-t-4xl">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Company Info */}
        <div>
          <img src="/revlinelogo.svg" alt="" />
          <p className="text-sm mt-2 opacity-80">
            Elevating brands with top-tier web solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <a href="/#services" className="hover:opacity-100">
                Services
              </a>
            </li>
            <li>
              <a href="/#case-studies" className="hover:opacity-100">
                Case Studies
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:opacity-100">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <Link href="/#services" className="hover:opacity-100">
                Web Design
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:opacity-100">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:opacity-100">
                E-Commerce Solutions
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <p className="text-sm opacity-80 font-semibold">
            revlineagency@gmail.com
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href="#"
              className="hover:opacity-100 flex items-center space-x-1"
            >
              <Linkedin />
              <p>Linkedin</p>
            </Link>
            <Link
              href="#"
              className="hover:opacity-100 flex items-center space-x-1"
            >
              <Instagram />
              <p>Instagram</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm opacity-60 mt-8  pt-6">
        © {new Date().getFullYear()} Revline. All Rights Reserved.
      </div>
    </footer>
  );
}
