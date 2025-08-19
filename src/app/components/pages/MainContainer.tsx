"use client";

import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import ScheduleCallButton from "../ui/ScheduleCallButton";
import AnimatedSection from "../framer/AnimatedSection";
import ExperienceSection from "../sections/Experience";
import StackSection from "../sections/MyStacks";
import MyServices from "../sections/MyServices";
import MyWorks from "../sections/MyWorks";
import MyEducationSection from "../sections/MyEducation";
import { motion } from "framer-motion";
import { useCurrPage } from "@/lib/store";

export function Counter({ end }: { end: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= end) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < end) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 500 / end);

    return () => clearInterval(interval);
  }, [count, end]);

  return <p className="text-2xl font-bold text-white">{count}+</p>;
}

function MainContainer() {
  const { setPage } = useCurrPage();
  return (
    <div>
      <section className=" md:w-[90%] mx-auto  md:py-10  md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center items-start gap-10">
          <motion.div
            className="rounded-2xl overflow-hidden bg-[#111] p-2"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/me.png"
              alt="Vaibhav Gupta"
              width={250}
              height={250}
              className="rounded-lg object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 font-medium text-[#999999]">
            <p className=" mb-1 font-bold">👋 Hello I Am</p>
            <h1 className="text-2xl text-white md:text-3xl font-bold mb-3">
              Vaibhav Gupta
            </h1>
            <p className=" text-sm mb-6 max-w-xl">
              Experienced full‑stack web developer from Uttar Pradesh, with a
              passion for building complex, unique, and user‑friendly
              applications using Next.js, TypeScript, Prisma, and modern web
              technologies, and a proven track record of delivering robust,
              scalable solutions.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button
                className="bg-[#141415] border border-[#202021] text-white px-8 py-3 rounded-xl flex items-center gap-2 hover:bg-transparent cursor-pointer transition"
                onClick={() => setPage("contact")}
              >
                <Mail size={18} /> CONTACT ME
              </button>
              <ScheduleCallButton />
            </div>
          </div>
        </div>
        <AnimatedSection>
          <div className="mt-12 w-[90%] mx-auto border-t border-dashed border-b pb-8 border-[#202021] pt-8 grid grid-cols-2 md:grid-cols-4 text-center gap-y-6">
            <div>
              <Counter end={25} />
              <p className="text-[#999999] text-sm mt-1">Happy Clients</p>
            </div>
            <div>
              <Counter end={2} />
              <p className="text-[#999999] text-sm mt-1">Years of Experience</p>
            </div>
            <div>
              <Counter end={8} />
              <p className="text-[#999999] text-sm mt-1">Projects Delivered</p>
            </div>
            <div>
              <Counter end={7} />
              <p className="text-[#999999] text-sm mt-1">Hackathons Attended</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <ExperienceSection />
        </AnimatedSection>
        <AnimatedSection>
          <StackSection />
        </AnimatedSection>
        <AnimatedSection>
          <MyServices />
        </AnimatedSection>
        <AnimatedSection>
          <MyWorks />
        </AnimatedSection>
        <AnimatedSection>
          <MyEducationSection />
        </AnimatedSection>
      </section>
    </div>
  );
}

export default MainContainer;
