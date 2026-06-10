"use client";

import { ArrowRight, Github, Link } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import AnimatedSection from "../framer/AnimatedSection";
import DetailedProject from "../sections/DetailedProject";

import showcaseData from "@/data/showcaseData.json";
export default function WorkPageSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const displayedData = showAll ? showcaseData : showcaseData.filter((item) => item.best);

  const handleLinkClick = (url: string) => {
    const audio = new Audio("/click2.wav");
    audio.play().catch(() => {});
    window.open(url, "_blank");
  };

  const handleOpenProject = (index: number) => {
    const audio = new Audio("/click2.wav");
    audio.play().catch(() => {});
    setSelectedProjectIndex(index);
  };

  return (
    <section className="md:w-[90%] text-white mx-auto md:py-10 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 font-medium mb-2">
          <h2 className="text-2xl font-bold">Dev Work Showcase</h2>
        </div>
        <p className="text-[#999999] font-medium text-sm">
          A glimpse into my best web projects—clean, functional, and modern.
        </p>

        <div className="w-full border-b border-dashed border-[#202021] my-6"></div>

        <div className="space-y-2">
          {displayedData.map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#0A0A0B] border  justify-center items-center h-full border-[#202021] rounded-2xl p-4 flex flex-col md:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="w-full md:w-1/2 cursor-pointer" onClick={() => handleOpenProject(i)}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={500}
                  className="rounded-xl object-cover w-full cursor-pointer"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-between gap-1">
                <div>
                  <div className="text-xl flex items-center cursor-pointer gap-2 text-white/80 font-semibold">
                    <p className="mr-2 hover:underline transition-all" onClick={() => handleOpenProject(i)}>{item.title}</p>
                    {item.github && (
                      <Github
                        className="cursor-pointer p-1 border border-[#202021] text-[#999999] duration-500 hover:bg-black bg-[#141415] rounded-full"
                        onClick={(e) => { e.stopPropagation(); handleLinkClick(item.github || ""); }}
                      />
                    )}
                    {item.link && (
                      <Link
                        className="cursor-pointer p-1 text-[#999999] border border-[#202021] duration-500 hover:bg-black bg-[#141415] rounded-full"
                        onClick={(e) => { e.stopPropagation(); handleLinkClick(item.link || ""); }}
                      ></Link>
                    )}
                  </div>
                  <div className="flex flex-wrap border-t-1 border-b-1 py-3 border-[#202021] border-dashed gap-2 text-xs text-[#999999] font-medium my-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="after:content-['•'] last:after:content-[''] after:mx-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-[#999999]">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <AnimatedSection>
            <div
              className=" flex w-full rounded-lg text-sm gap-2 items-center group justify-between group-hover:bg-[#141415] transition-all duration-300 p-3 cursor-pointer mt-4"
              onClick={() => setShowAll(!showAll)}
            >
              <p>{showAll ? "Show less" : "Load all projects"}</p>
              <ArrowRight
                size={16}
                className={`text-[#999999] transition-all duration-500 ${showAll ? "rotate-270" : "group-hover:rotate-315"}`}
              />
            </div>
          </AnimatedSection>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProjectIndex !== null && (
          <DetailedProject
            project={displayedData[selectedProjectIndex]}
            onClose={() => setSelectedProjectIndex(null)}
            onNext={() => setSelectedProjectIndex((prev) => (prev! + 1) % displayedData.length)}
            onPrev={() => setSelectedProjectIndex((prev) => (prev! - 1 + displayedData.length) % displayedData.length)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
