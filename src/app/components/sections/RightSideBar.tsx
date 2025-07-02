"use client";
import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import React from "react";

function RightSideBar() {
  return (
    <aside className="md:w-[14%]  w-full mb-16 md:mb-0 md:h-screen sticky border-l-1 md:flex flex-row  md:flex-col items-center justify-center border-[#202021] top-0 bg-gray-100 dark:bg-[#050505]">
      <div className="flex md:h-[95vh] w-full md:pl-8 flex-col justify-center md:items-start p-4">
        <div className="flex gap-4 md:flex-col justify-center items-start ">
          <div
            className="flex gap-4 group justify-center items-center"
            onClick={() =>
              window.open("https://github.com/vaibhavgupta5", "_blank")
            }
          >
            <Github
              className={
                "text-[#999999] cursor-pointer group bg-[#0A0A0B] hover:bg-[#141415] border-1  border-[#202021] h-12 w-12 p-3 rounded-xl  dark:text-[#999999]"
              }
              size={24}
            />
          </div>
          <div
            className="flex gap-4 group justify-center items-center"
            onClick={() =>
              window.open("https://www.linkedin.com/in/vaibhav9705/", "_blank")
            }
          >
            <Linkedin
              className={
                "text-[#999999] cursor-pointer group bg-[#0A0A0B] hover:bg-[#141415] border-1  border-[#202021] h-12 w-12 p-3 rounded-xl  dark:text-[#999999]"
              }
              size={24}
            />
          </div>

          <div
            className="flex gap-4 group justify-center items-center"
            onClick={() =>
              window.open("https://www.instagram.com/vaixbhav._/", "_blank")
            }
          >
            <Instagram
              className={
                "text-[#999999] cursor-pointer group bg-[#0A0A0B] hover:bg-[#141415] border-1  border-[#202021] h-12 w-12 p-3 rounded-xl  dark:text-[#999999]"
              }
              size={24}
            />
          </div>

          <div
            className="flex gap-4 group justify-center items-center"
            onClick={() =>
              window.open("https://x.com/vaixbhav_", "_blank")
            }
          >
            <Twitter
              className={
                "text-[#999999] cursor-pointer group bg-[#0A0A0B] hover:bg-[#141415] border-1  border-[#202021] h-12 w-12 p-3 rounded-xl  dark:text-[#999999]"
              }
              size={24}
            />
          </div>

          
        </div>
      </div>
    </aside>
  );
}

export default RightSideBar;
