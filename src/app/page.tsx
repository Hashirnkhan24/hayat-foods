"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cashews from "@/components/Cashews";
import Pistachios from "@/components/Pistachios";
import Honey from "@/components/Honey";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isTransitioningRef = useRef(false);
  const touchStartYRef = useRef(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // prevent default browser scroll
      if (isTransitioningRef.current) return;

      const threshold = 25; // ignore minor accidental scroll shakes
      if (Math.abs(e.deltaY) < threshold) return;

      isTransitioningRef.current = true;
      
      if (e.deltaY > 0) {
        // Scroll Down -> Next Section
        setActiveIndex((prev) => Math.min(prev + 1, 3));
      } else {
        // Scroll Up -> Previous Section
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }

      // Throttle inputs for 1.4 seconds to let the transition complete smoothly
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 1400);
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isTransitioningRef.current) return;

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - touchEndY;
      
      const threshold = 40; // swipe offset threshold
      if (Math.abs(deltaY) < threshold) return;

      isTransitioningRef.current = true;

      if (deltaY > 0) {
        // Swipe Up (Scroll Down)
        setActiveIndex((prev) => Math.min(prev + 1, 3));
      } else {
        // Swipe Down (Scroll Up)
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }

      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 1400);
    };

    // Attach event listeners directly to window
    // passive: false is required to allow preventDefault()
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Map the activeIndex state to component props
  const heroOpacity = activeIndex === 0 ? 1 : 0;
  
  const cashewRadius = activeIndex >= 1 ? 150 : 0;
  const cashewTextOpacity = activeIndex === 1 ? 1 : 0;

  const pistachioRadius = activeIndex >= 2 ? 150 : 0;
  const pistachioTextOpacity = activeIndex === 2 ? 1 : 0;

  const honeyRadius = activeIndex >= 3 ? 150 : 0;
  const honeyTextOpacity = activeIndex === 3 ? 1 : 0;

  return (
    <>
      <Navbar />
      <main className="h-screen w-full overflow-hidden relative bg-brand-espresso select-none">
        {/* Section 1: Hero */}
        <Hero opacity={heroOpacity} />

        {/* Section 2: Cashews */}
        <Cashews radius={cashewRadius} textOpacity={cashewTextOpacity} />

        {/* Section 3: Pistachios */}
        <Pistachios radius={pistachioRadius} textOpacity={pistachioTextOpacity} />

        {/* Section 4: Honey */}
        <Honey radius={honeyRadius} textOpacity={honeyTextOpacity} />
      </main>
    </>
  );
}
