"use client";

import { ArrowRight, Github, Link, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCurrPage } from "@/lib/store";
import AnimatedSection from "../framer/AnimatedSection";

const showcaseData = [
  {
    title: "Endeavour Website",
    image:
      "https://github.com/vaibhavgupta5/portfolio/blob/main/public/Screenshot%202025-06-15%20142007.png?raw=true", // Replace with actual preview if available
    description:
      "Full-stack event website with Devfolio-style team registration system.",
    tags: ["React", "MongoDB", "Node.js", "Tailwind"],
    link: "http://e-cell.in/endeavour",
    linkLabel: "Visit Site",
  },
  {
    title: "AI Health Monitoring",
    image:
      "https://github.com/vaibhavgupta5/portfolio/blob/main/public/carelink.jpg?raw=true",
    description:
      "Real-time health dashboard with wearable data, AI predictions, and file uploads.",
    tags: ["Next.js", "Socket.io", "MongoDB", "Healthcare"],
    link: "https://carelink-xyy.vercel.app",
    github: "https://github.com/vaibhavgupta5/Patient_Dashboard",
    linkLabel: "Live Demo",
  },
  {
    title: "Rail Kavach",
    image:
      "https://github.com/vaibhavgupta5/portfolio/blob/main/public/Screenshot%202025-04-06%20111750.png?raw=true",
    description:
      "Railway safety system with AI-based animal detection and real-time alerts.",
    tags: ["AI", "Computer Vision", "Flask", "Next.js"],
    link: "https://rail-web.vercel.app/",
    github: "https://github.com/vaibhavgupta5/RailKavach---Hack",
    linkLabel: "View Project",
  },
  {
    title: "Anonimy NGL",
    image:
      "https://github.com/vaibhavgupta5/portfolio/blob/main/public/ngl.jpg?raw=true",
    description:
      "An anonymous messaging platform inspired by NGL, built with authentication and session handling.",
    tags: ["Next.js", "NextAuth", "Tailwind"],
    link: "https://anonimy-ngl.vercel.app/",
    linkLabel: "Try Now",
    github: "https://github.com/vaibhavgupta5/Anonimy-NGL",
  },
  {
    title: "IdeaTEX",
    image:
      "https://github.com/vaibhavgupta5/portfolio/blob/main/public/ideatex.jpg?raw=true",
    description:
      "Landing page for E-Cell KIET’s flagship ideathon, with smooth scroll animations and modern UI.",
    tags: ["React", "Framer Motion", "Tailwind"],
    link: "https://e-cell.in/ideatex/",
    linkLabel: "Visit Site",
    github: "https://github.com/vaibhavgupta5/ideaTEX-React",
  },
];

export default function MyWorks() {
  const { setPage } = useCurrPage();
  return (
    <section className="text-white pt-30 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 font-medium mb-2">
          <Rocket size={22} />
          <h2 className="text-2xl font-bold">Dev Work Showcase</h2>
        </div>
        <p className="text-[#999999] font-medium text-sm">
          A glimpse into my best web projects—clean, functional, and modern.
        </p>

        <div className="w-full border-b border-dashed border-[#202021] my-6"></div>

        <div className="space-y-2">
          {showcaseData.map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#0A0A0B] border  justify-center items-center h-full border-[#202021] rounded-2xl p-4 flex flex-col md:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={500}
                  className="rounded-xl object-cover w-full"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-between gap-1">
                <div>
                  <div className="text-xl flex items-center cursor-pointer gap-2 text-white/80 font-semibold">
                    <p className="mr-2">{item.title}</p>
                    {item.github && (
                      <Github
                        className="p-1 border border-[#202021] text-[#999999] duration-500 hover:bg-black bg-[#141415] rounded-full"
                        onClick={() => window.open(item.github, "_blank")}
                      />
                    )}
                    {item.link && (
                      <Link
                        className="p-1 text-[#999999] border border-[#202021] duration-500 hover:bg-black bg-[#141415] rounded-full"
                        onClick={() => window.open(item.link, "_blank")}
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
              onClick={() => {setPage("work")
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <p>View more work!</p>
              <ArrowRight
                size={16}
                className="text-[#999999] transition-all  duration-500 group-hover:rotate-315 "
              />
            </div>
          </AnimatedSection>
        </div>
      </motion.div>
    </section>
  );
}
