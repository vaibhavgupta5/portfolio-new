'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';

export default function ScheduleCallButton() {
  const originalText = 'SCHEDULE CALL';
  const [text, setText] = useState(originalText);

  const handleMouseEnter = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let iteration = 0;

    const interval = setInterval(() => {
      setText(() =>
        originalText
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < iteration) return originalText[i];
            return chars[Math.floor(Math.random() * 26)];
          })
          .join('')
      );

      iteration += 1 / 2; // speed control
      if (iteration >= originalText.length) clearInterval(interval);
    }, 40);
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      className="border border-[#202021] hover:bg-[#141415] bg-[#0A0A0B] text-white px-8 py-3 rounded-xl flex cursor-pointer items-center gap-2 transition font-mono tracking-wider"
      onClick={() => window.open('https://calendly.com/vaibhavgupta111/15min', '_blank')}
    >
      <Calendar size={18} />
      <span>{text}</span>
    </button>
  );
}
