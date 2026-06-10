"use client";


import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubMap() {
  return (
    <section className="text-white mt-24  max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 font-medium mb-2">
          <h2 className="text-2xl font-bold">Open Source Contributions</h2>
        </div>
        <p className="text-[#999999] font-medium text-sm">
          My daily coding activity and open-source contributions on GitHub.
        </p>

        <div className="w-full border-b border-dashed border-[#202021] my-6"></div>

        <motion.div
          className="bg-[#0A0A0B] border border-[#202021] p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <div className="w-full max-w-full overflow-x-auto flex justify-start md:justify-center overflow-hidden custom-scrollbar">
            <GitHubCalendar 
              username="vaibhavgupta5" 
              colorScheme="dark"
              blockSize={10.9}
              blockMargin={3}
              fontSize={12}
              showMonthLabels={true}
              theme={{
                dark: ['#141415', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
