"use client";
import { ArrowUp, Circle } from "lucide-react";
import React, { useEffect, useState } from "react";

function getISTTime(): string {
  const now = new Date();

  // Convert to IST (UTC+5:30)
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist = new Date(utc + 5.5 * 60 * 60 * 1000);

  // Format as 24-hour HH:mm:ss
  const hours = ist.getHours().toString().padStart(2, "0");
  const minutes = ist.getMinutes().toString().padStart(2, "0");
  const seconds = ist.getSeconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

function LeftSideBar() {
  const [time, setTime] = useState(getISTTime());
  const [isScrolled, setIsScrolled] = useState(false);
  const separators = ["|", "X", "@", "#", "$"];
  const [sepIndex, setSepIndex] = useState(0);
  const [shuffledIndices, setShuffledIndices] = useState<number[]>([]);

  useEffect(() => {
    const pipeInterval = setInterval(() => {
      setSepIndex((prev) => (prev + 1) % separators.length);
    }, 500);
    return () => clearInterval(pipeInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getISTTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const indices = Array.from({ length: 41 }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    setShuffledIndices(indices);
  }, []);

  const marqueeItems = [
    <div key="work" className="flex items-center">
      <Circle className="text-[#6DD33D] fill-[#6DD33D] animate-pulse p-1 mr-1 w-4 h-4" />
      <span>Open for Work</span>
    </div>,
      "Building Scalable Apps",
  `Local Time (IST) ${time}`,
  "Full Stack Developer",
  "React & Next.js",
  "AI & Web Enthusiast",

  "CEO of console.log()",
  "Works on my machine™",
  "Ship now, patch later",
  "Coffee → Code → Repeat",
  "Chai > Documentation",
  "Professional Bug Creator",
  "⚡ Ctrl + S enthusiast",

  "Placement arc loading...",
  "Resume sent × 247",
  "Waiting for recruiter reply...",
  "Bro trust the process",
  "Malik hire kr lo na 🥺",
  "TMKC",
"Andi Bandi Shandi",
  "Kal karenge, pakka.",
  "Pehle code, baad mein sleep.",
  "Jugaad Driven Development",
  "Mummy kehti hai engineer hu.",
  "Ye bug meri galti nahi lagti.",
  "Code chal gaya, sawaal mat pucho.",
  "Aaj production nahi tutega.",
  "Git push aur bhag.",
  "Bhagwan bharose deployment.",
  "Sab moh maya hai.",

  "Task failed successfully.",
  "404 Motivation Not Found.",
  "Loading brain.exe...",
  "Touching grass... soon™",
  "print('hope')",
  "Risk hai to ishq hai.",
  "Zindagi ek infinite loop hai.",
  "Ek aur side project kya hi bigaad dega.",

  "¯\\_(ツ)_/¯",
  "(╯°□°）╯︵ ┻━┻",
  "┌( ಠ_ಠ)┘",
  "🗿",
  ];

  return (
    <aside className="md:w-[14%] w-full end-0 fixed md:h-screen md:sticky  border-r-1 flex md:flex-col md:items-center md:justify-center border-[#202021] top-0 bg-gray-100 md:dark:bg-[#050505] dark:bg-transparent">
      <div className="flex md:h-[95vh] h-auto w-full  md:flex-col justify-between items-end p-4 pr-8 overflow-hidden relative">
        <div className="hidden md:flex flex-grow items-center justify-end w-full relative overflow-hidden pointer-events-none mb-4">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 60s linear infinite;
            }
          `}</style>
          <div className="relative w-8 h-full flex items-center justify-center">
            <div className="-rotate-90 absolute flex items-center justify-center w-[200vh]">
              <div className="flex animate-marquee w-max text-[10px] lg:text-xs text-[#999999] font-semibold tracking-wider">
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="flex gap-8 items-center pr-8 whitespace-nowrap"
                  >
                    {(shuffledIndices.length > 0 ? shuffledIndices : marqueeItems.map((_, idx) => idx)).map(
                      (itemIndex, index) => {
                        const item = marqueeItems[itemIndex];
                        return (
                          <React.Fragment key={index}>
                            {typeof item === "string" ? (
                              <span>{item}</span>
                            ) : (
                              item
                            )}
                            <span className="inline-block w-4 text-center transition-opacity duration-200">
                              {separators[sepIndex]}
                            </span>
                          </React.Fragment>
                        );
                      }
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="md:flex group cursor-pointer flex-col justify-center hidden items-center mt-auto z-10 pr-1"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp
            className={`transition-colors duration-300 ${isScrolled ? "text-black dark:text-white" : "text-[#999999] dark:text-[#999999]"}`}
            size={24}
          />
          <h1 className="group-hover:text-[#999999] scale-75 bg-transparent text-transparent   group-hover:scale-100  group-hover:right-20 group-hover:flex transition-all ease-in-out duration-500 group-hover:bg-[#141415] p-2 px-3 rounded-xl group-hover:dark:text-white absolute right-10 ">
            Top
          </h1>
        </div>
      </div>
    </aside>
  );
}

export default LeftSideBar;
