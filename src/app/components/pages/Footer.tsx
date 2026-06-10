"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <footer className="w-full relative overflow-hidden flex flex-col items-center justify-center mt-[-6vw] pb-4">
      <div 
        ref={ref}
        className="w-full flex justify-center items-center relative cursor-default py-10"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className="text-[16.5vw] leading-none font-bold text-black/10 dark:text-white/10 tracking-tighter select-none">
          VAIBHAV
        </h1>

        <motion.h1
          className="absolute text-[16.5vw] leading-none font-bold text-black/40 dark:text-white/40 tracking-tighter select-none pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            WebkitMaskImage: useMotionTemplate`radial-gradient(300px circle at ${springX}px ${springY}px, black 0%, transparent 100%)`,
            maskImage: useMotionTemplate`radial-gradient(300px circle at ${springX}px ${springY}px, black 0%, transparent 100%)`,
          }}
        >
          VAIBHAV
        </motion.h1>
      </div>

      <div className="w-full px-6 mx-auto mt-4 border-t border-[#202021] pt-6 pb-2 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-[#999999]">
        <p>© 2026 Vaibhav Gupta. All rights reserved.</p>
        <p className="mt-2 md:mt-0">
          Made by{" "}
          <a
            href="https://github.com/vaibhavgupta5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium hover:underline cursor-pointer"
          >
            Vaibhav
          </a>
        </p>
      </div>
    </footer>
  );
}
