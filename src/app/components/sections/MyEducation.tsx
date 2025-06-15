'use client';

import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'KIET Group of Institutions',
    degree: 'B.Tech in Computer Science & Engineering',
    duration: '2024 - 2028',
    location: 'Ghaziabad, India',
    highlights: [
      'Focused on full-stack development, system design, and real-world projects',
      'Active member of E-Cell and ACM Student Chapter',
      'Participated in 7+ national hackathons; winner at Microsoft Office, Gurugram',
    ],
  },
  {
    institution: 'Lucknow Public College',
    degree: 'Senior Secondary (ISC)',
    duration: '2022 - 2024',
    location: 'Lucknow, India',
    highlights: ['Completed PCM with Computer Science', 'Secured 94.75% overall'],
  },
];

export default function MyEducationSection() {
  return (
    <section className="text-white pt-30 md:px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 font-medium mb-2">
          <GraduationCap size={22} />
          <h2 className="text-2xl font-bold">My Education</h2>
        </div>
        <p className="text-[#999999] font-medium text-sm">
          A journey of academic growth, hands-on learning, and exploration.
        </p>

        <div className="w-full border-b border-dashed border-[#202021] my-6"></div>

        <div className="space-y-6">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              className="bg-[#0A0A0B] border border-[#202021] px-6 py-5 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-lg font-semibold">{edu.institution}</div>
                  <div className="text-sm text-[#999999]">{edu.degree}</div>
                  <div className="text-xs text-[#666666] mt-1">{edu.location}</div>
                </div>
                <div className="text-sm font-semibold text-white/80">
                  {edu.duration}
                </div>
              </div>
              <ul className="list-disc list-inside text-sm text-[#cccccc] mt-2 space-y-1">
                {edu.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
