"use client";
import React from "react";
import MainContainer from "./components/pages/MainContainer";
import ContactSection from "./components/pages/ContactSection";
import AnimatedSection from "./components/framer/AnimatedSection";
import Header from "./components/sections/Header";
import Footer from "./components/pages/Footer";
import CursorGlow from "./components/ui/CursorGlow";
// import Image from "next/image";


function Page() {

  return (
    <div className="flex flex-col w-full text-[#999999] h-full">
      <CursorGlow />
      <Header />
      <div className="flex-grow md:pt-8 pt-0 p-8 flex flex-col gap-32">
        <MainContainer />
        <section id="contact">
          <AnimatedSection>
            <ContactSection />
          </AnimatedSection>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Page;
