import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";

import Cta from "./components/Cta";

const page = () => {
  return (
    <main className="scroll-smooth">
      <Hero />
      <Services />
      <CaseStudies />

      <Cta />
    </main>
  );
};

export default page;
