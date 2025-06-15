"use client";
import { Circle } from "lucide-react";
import React, { useEffect, useState } from "react";
import MainContainer from "./components/pages/MainContainer";
import { useCurrPage } from "@/lib/store";
import ContactSection from "./components/pages/ContactSection";
import AnimatedSection from "./components/framer/AnimatedSection";
import WorkPageSection from "./components/pages/WorkSection";
import Image from "next/image";

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

function Page() {
  const [time, setTime] = useState(getISTTime());
  const { page } = useCurrPage();
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getISTTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full text-[#999999] h-full">
      <div className="flex md:h-[12vh] h-[11vh] w-full border-[#202021] border-b-1 justify-between font-bold px-8 py-5 text-gray-800 dark:text-gray-200">
        <Image
          className="rounded-full  md:hidden border-2 border-[#202021]"
          src="https://avatars.githubusercontent.com/u/109146556?v=4"
          alt="Description"
          width={55}
          height={50}
        />
        <div className="text-sm flex justify-center items-center bg-[#141415] py-4 text-[#999999] border-[#202021] border-1 px-8 rounded-full font-semibold ">
          <Circle className="text-[#6DD33D] fill-[#6DD33D] animate-pulse p-1 mr-1" />
          <p>Open for Work</p>
        </div>

        <div className="text-sm hidden md:flex gap-2 justify-center items-center  text-[#999999] font-semibold ">
          <p>Local Time (IST)</p>
          <span className="text-sm flex justify-center items-center bg-[#141415] p-3 px-4  border-[#202021] border-1  rounded-full font-semibold text-gray-300">
            {time}
          </span>
        </div>
      </div>
      <div className="flex-grow p-8">
        {page === "home" && <MainContainer />}
        {page === "work" && <WorkPageSection />}
        {page === "contact" && (
          <AnimatedSection>
            <ContactSection />
          </AnimatedSection>
        )}
      </div>
      <div className="flex h-[12vh]  w-full border-[#202021] border-t-1 justify-between font-bold px-8 py-5 text-gray-800 dark:text-gray-200">
        <div className="text-sm hidden md:flex justify-center items-center bg-[#141415] text-[#999999] border-[#202021] border-1 px-8 rounded-full font-semibold ">
          <Circle className="text-[#6DD33D] fill-[#6DD33D] animate-pulse p-1 mr-1" />
          <p>Open for Work</p>
        </div>

        <div className="text-sm flex gap-2 justify-center items-center  text-[#999999] font-semibold ">
          <p>Local Time (IST)</p>
          <span className="text-sm flex justify-center items-center bg-[#141415] p-3 px-4  border-[#202021] border-1  rounded-full font-semibold text-gray-300">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Page;
