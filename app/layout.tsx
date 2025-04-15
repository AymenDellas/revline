import type { Metadata } from "next";
import { Poppins, Itim, Yatra_One, Radley } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// === Font Setup ===
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const radley = Radley({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-radley",
});
const itim = Itim({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-itim",
});
const yatraOne = Yatra_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yatra-one",
});

// === Metadata ===
export const metadata: Metadata = {
  title: "Revline | Web Design & Development",
  description: "Modern, responsive websites that perform — built by Revline.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${poppins.variable} 
          ${radley.variable} 
          ${itim.variable} 
          ${yatraOne.variable} 
          font-poppins antialiased overflow-x-hidden relative
        `}
      >
        {/* Background Glow Layer */}
        <div className="fixed inset-0 -z-10 h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(255,0,0,0.13)_0,rgba(255,0,0,0)_100%)]"></div>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
