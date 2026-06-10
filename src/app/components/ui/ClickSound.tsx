"use client";

import { useEffect } from "react";

export default function ClickSound() {
  useEffect(() => {
    // Only initialize Audio on the client side
    const audio = new Audio("/click2.wav");
    audio.muted = false;
    audio.volume = 1.0;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Play sound if the clicked element is a button, an anchor tag, 
      // or explicitly styled as a pointer (custom buttons).
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".cursor-pointer")
      ) {
        audio.currentTime = 0;
        audio.play().catch((err) => {
          // Ignore errors caused by browser autoplay policies before user interaction
          console.debug("Audio play failed:", err);
        });
      }
    };

    window.addEventListener("click", handleClick);
    
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
