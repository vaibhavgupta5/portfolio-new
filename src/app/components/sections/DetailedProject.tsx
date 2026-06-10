"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Github, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  image: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  github?: string;
}

interface DetailedProjectProps {
  project: Project;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function DetailedProject({ project, onClose, onNext, onPrev }: DetailedProjectProps) {

  const handleLinkClick = (url: string) => {
    const audio = new Audio("/click2.wav");
    audio.play().catch(() => {});
    window.open(url, "_blank");
  };

  const playHoverSound = () => {
    const audio = new Audio("/click1.wav");
    audio.play().catch(() => {});
  };

  const playClickSound = () => {
    const audio = new Audio("/click2.wav");
    audio.play().catch(() => {});
  };

  // Prevent scrolling when overlay is active & listen for ESC key
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        playClickSound();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);


  const [activeTab, setActiveTab] = useState<'details' | 'image' | 'description'>('details');

  const toggleTab = (tab: 'details' | 'image' | 'description') => {
    if (activeTab !== tab) {
      playClickSound();
      setActiveTab(tab);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 md:inset-y-0 md:left-[14%] md:right-[14%] z-50 flex flex-col bg-[#050505] text-white md:border-l md:border-r border-[#202021] overflow-hidden"
    >
      {/* Mobile Close Button */}
      <div className="md:hidden flex justify-end p-4 shrink-0 border-b border-[#202021]">
        <div 
          className="p-2 bg-[#0A0A0B] border border-[#202021] rounded-full cursor-pointer text-white"
          onClick={() => { playClickSound(); onClose(); }}
        >
          <X size={20} />
        </div>
      </div>

      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        {/* Left Pane - Content */}
        <div className={`w-full md:w-[50%] ${activeTab === 'details' ? 'flex-grow overflow-y-auto' : 'shrink-0'} md:flex-grow-0 md:h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-[#202021] relative`}>
          
          {/* Details Accordion Header (Mobile) */}
          <div 
            className="md:hidden flex items-center justify-between cursor-pointer bg-[#0A0A0B] p-4 rounded-xl border border-[#202021] mb-2"
            onClick={() => toggleTab('details')}
          >
            <h3 className="text-white font-bold tracking-widest uppercase m-0 text-sm">PROJECT DETAILS</h3>
            {activeTab === 'details' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>

          <div className={`flex-grow flex-col justify-center pt-2 md:pt-0 ${activeTab === 'details' ? 'flex' : 'hidden md:flex'}`}>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-[5vw] leading-[1.1] font-bold tracking-tighter mb-8 uppercase"
            >
              {project.title}
            </motion.h1>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap border-t border-b py-6 border-[#202021] border-dashed gap-x-6 gap-y-3 text-xs md:text-sm text-[#999999] font-medium uppercase tracking-widest mb-10"
            >
              {project.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              {project.link && (
                <div 
                  className="flex items-center justify-between border border-[#202021] hover:bg-white hover:text-black transition-colors duration-300 p-5 cursor-pointer group"
                  onClick={() => handleLinkClick(project.link!)}
                  onMouseEnter={playHoverSound}
                >
                  <span className="font-bold tracking-widest uppercase text-sm">{project.linkLabel || "VISIT WEBSITE"}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              )}
              {project.github && (
                <div 
                  className="flex items-center justify-between border border-[#202021] hover:bg-white hover:text-black transition-colors duration-300 p-5 cursor-pointer group"
                  onClick={() => handleLinkClick(project.github!)}
                  onMouseEnter={playHoverSound}
                >
                  <span className="font-bold tracking-widest uppercase text-sm">VIEW SOURCE</span>
                  <Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
              )}
            </motion.div>
          </div>

          {/* Navigation Arrows (Desktop Only) */}
          <div className="hidden md:flex gap-4 mt-8 md:mt-auto pt-4 md:pt-0 w-full pb-4 md:pb-0">
            <div 
              className="p-4 rounded-full border border-[#202021] hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer flex items-center justify-center bg-transparent"
              onClick={() => { playClickSound(); onPrev(); }}
            >
              <ArrowLeft size={24} />
            </div>
            <div 
              className="p-4 rounded-full border border-[#202021] hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer flex items-center justify-center bg-transparent"
              onClick={() => { playClickSound(); onNext(); }}
            >
              <ArrowRight size={24} />
            </div>
          </div>
        </div>

        {/* Right Pane - Visuals */}
        <div className={`w-full md:w-[50%] ${['image', 'description'].includes(activeTab) ? 'flex-grow overflow-y-auto' : 'shrink-0'} md:flex-grow-0 md:h-full flex flex-col p-6 md:p-8 gap-4 md:gap-6 bg-transparent relative`}>
          {/* Close Button Container (Desktop Only) */}
          <div className="hidden md:flex justify-end w-full shrink-0">
            <div 
              className="p-3 bg-[#0A0A0B] hover:bg-[#202021] border border-[#202021] rounded-full cursor-pointer transition-colors duration-300 text-white inline-flex"
              onClick={() => { playClickSound(); onClose(); }}
            >
              <X size={24} />
            </div>
          </div>

          {/* Image Accordion Header (Mobile) */}
          <div 
            className="md:hidden flex items-center justify-between cursor-pointer bg-[#0A0A0B] p-4 rounded-xl border border-[#202021]"
            onClick={() => toggleTab('image')}
          >
            <h3 className="text-white font-bold tracking-widest uppercase m-0 text-sm">PROJECT PREVIEW</h3>
            {activeTab === 'image' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>

          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`w-full relative bg-[#0A0A0B] rounded-2xl border border-[#202021] overflow-hidden min-h-[250px] md:min-h-[300px] ${activeTab === 'image' ? 'flex-grow flex' : 'hidden md:flex'}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain p-4 md:p-8"
              priority
            />
          </motion.div>

          {/* Description Accordion Header (Mobile) */}
          <div 
            className="md:hidden flex items-center justify-between cursor-pointer bg-[#0A0A0B] p-4 rounded-xl border border-[#202021]"
            onClick={() => toggleTab('description')}
          >
            <h3 className="text-white font-bold tracking-widest uppercase m-0 text-sm">DESCRIPTION</h3>
            {activeTab === 'description' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>

          {/* Description Box */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`w-full shrink-0 bg-[#0A0A0B] rounded-2xl border border-[#202021] p-6 md:p-8 text-[#999999] ${activeTab === 'description' ? 'block' : 'hidden md:block'}`}
          >
            <h3 className="hidden md:block text-white font-bold tracking-widest uppercase mb-4 text-sm md:text-base">DESCRIPTION</h3>
            <p className="leading-relaxed text-sm md:text-base">
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows (Mobile Only - Fixed at Bottom) */}
      <div className="md:hidden flex gap-4 p-4 border-t border-[#202021] bg-[#0A0A0B] shrink-0">
        <div 
          className="flex-1 py-3 rounded-xl border border-[#202021] hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer flex items-center justify-center bg-[#141415]"
          onClick={() => { playClickSound(); onPrev(); }}
        >
          <ArrowLeft size={20} />
        </div>
        <div 
          className="flex-1 py-3 rounded-xl border border-[#202021] hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer flex items-center justify-center bg-[#141415]"
          onClick={() => { playClickSound(); onNext(); }}
        >
          <ArrowRight size={20} />
        </div>
      </div>
    </motion.div>
  );
}
