import React from "react";
import Hero from "@/Components/Hero";
import WhyUs from "@/Components/WhyUs";
import Service from "@/Components/Service";
import About from "@/Components/About";
import Contact from "@/Components/Contact";
import TrustedBrands from "@/Components/TrustedBrands";
import ContactBanner from "@/Components/Banner";

const page = () => {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <WhyUs />
      <Service />
      <ContactBanner />
      <About />
      <Contact />
    </>
  );
};

export default page;
