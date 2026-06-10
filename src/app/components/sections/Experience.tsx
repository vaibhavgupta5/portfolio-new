"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experienceData = [
  {
    company: "Longani Consulting (giani.ai)",
    type: "Remote / UAE-based",
    website: "https://giani.ai",
    duration: "Jun 2025 - Present",
    role: "Full Stack Engineer",
    description:
      "Developed a full-stack web application and a production-ready PowerPoint Add-in using Office.js, TypeScript, and Flask. Implemented Generative AI (RAG-based) solutions for document intelligence, improving client productivity by 40%.",
    logo: "https://wellfound.com/cdn-cgi/image/width=140,height=140,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.wellfound.com/startups/i/10491784-950de72d7e85dbb71458ebd2455e0a07-medium_jpg.jpg?buster=1744453647",
  },
  {
    company: "Direct AI (directai.app)",
    type: "Remote / UK-based",
    website: "https://directai.app",
    duration: "Nov 2025 - Dec 2025",
    role: "Full Stack Intern",
    description:
      "Built and deployed a production-ready AI video generation SaaS using Next.js, Node.js, and Redis. Developed end-to-end workflows combining AI-generated media, and improved processing speed and reliability via concurrent job queues and rate limiting.",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHG5zf93SWGgA/company-logo_100_100/B4DZgAcj6DH0AU-/0/1752354145248?e=1782950400&v=beta&t=hYFWeFYQFEirDdoPcloJfusQmZqfXbItsiIjp40DKks",
  },
  {
    company: "ECell KIET",
    type: "Student Organization",
    website: "https://e-cell.in",
    duration: "Oct 2024 - Present",
    role: "Full Stack Developer",
    description:
      "Built a Devfolio-like registration system from scratch, enhancing user experience and automating workflows. Scaled to support 2,000+ participants.",
    logo: "https://firebasestorage.googleapis.com/v0/b/endevaour-2023.appspot.com/o/webassets%2Fblack%20logo%20br.png?alt=media&token=d45e4438-bc54-47dd-9d9c-14f4d41991d1", // Optional
  },
  {
    company: "Freelance",
    type: "Client Projects",
    website: "https://github.com/vaibhavgupta5", // or your portfolio link
    duration: "Jan 2024 - Present",
    role: "Full Stack Developer",
    description:
      "Completed 25+ freelance projects across domains like e-commerce, landing pages, admin panels, and dynamic web apps using MERN stack and Next.js. Delivered high-performance, fully responsive solutions tailored to client needs.",
    logo: "https://cdn-icons-png.flaticon.com/512/921/921347.png", // Optional generic freelance icon
  },
];

export default function ExperienceSection() {
  return (
    <section className="text-white pt-30 md:px-4  md:max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 font-medium mb-2">
          <h2 className="text-2xl font-bold">My Experience</h2>
        </div>
        <p className="text-[#999999] font-medium text-sm ">
          Worked across diverse environments to build scalable web apps.{" "}
        </p>

        <div className="w-full border-b border-dashed border-[#202021] my-6"></div>

        <div className="space-y-6">
          {experienceData.map((exp, i) => (
            <motion.div
              key={i}
              className="bg-[#0A0A0B] border border-[#202021] md:px-8 px-4 py-6 rounded-2xl flex flex-col gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <div className="flex md:flex-row flex-col  justify-between items-center">
                <div className="flex md:w-[70%] w-full items-center gap-3">
                  <div className="md:w-[10%] w-[20%]     flex items-center justify-center">
                    {exp.logo ? (
                      <Image
                        src={exp.logo || "/default-logo.png"}
                        alt={`${exp.company} logo`}
                        className="m-0 p-0 bg-white  rounded-xl"
                        width={500}
                        height={500}
                      />
                    ) : (
                      <p className="text-2xl font-bold text-[#141415]">
                        {exp.company.charAt(0).toUpperCase()}
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="font-semibold    text-lg">
                      {exp.company}
                    </div>
                    <div className="text-xs bg-[#141415] text-[#999999] rounded-full px-2 py-0.5 inline-block mt-1 font-semibold">
                      {exp.type}
                    </div>
                  </div>
                </div>
                <div className="md:text-right mt-4 md:mt-0 md:w-[30%] w-full font-semibold text-white/80">
                  {exp.duration}
                </div>
              </div>

              <div className="bg-[#050505] border border-[#202021]  rounded-xl px-4 py-3">
                <div className="font-semibold mb-1 text-white/80 text-md">
                  {exp.role}
                </div>
                <div className="text-[#999999] text-sm leading-relaxed whitespace-pre-line space-y-2">
                  {exp.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
