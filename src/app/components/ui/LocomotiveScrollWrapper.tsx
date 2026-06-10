"use client";

import { useEffect } from "react";

export default function LocomotiveScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let locomotiveScroll: { destroy: () => void } | null = null;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll = new LocomotiveScroll();
    })();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
