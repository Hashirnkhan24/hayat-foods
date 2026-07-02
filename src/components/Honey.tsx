"use client";

import Image from "next/image";

interface HoneyProps {
  radius: number;
  textOpacity: number;
}

export default function Honey({ radius, textOpacity }: HoneyProps) {
  const isOpen = radius > 0;

  return (
    <div
      className="absolute inset-0 w-full h-full bg-brand-espresso flex items-center justify-center"
      style={{
        clipPath: `circle(${radius}% at 50% 50%)`,
        zIndex: 30, // Stacked on top of Pistachios (z-20)
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "auto" : "none",
        transform: isOpen ? "scale(1)" : "scale(0.92)",
        transition: "clip-path 1.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/honey.svg"
          alt="Premium Organic Honey"
          fill
          priority
          className="object-cover"
        />
        {/* Subtle Dark Vignette Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/60 via-brand-espresso/15 to-brand-espresso/60 pointer-events-none"></div>
      </div>

      {/* Content Container (Text in Front) */}
      <div
        className="relative z-20 text-center px-4 select-none transition-all duration-[1200ms] ease-out transform"
        style={{
          opacity: textOpacity,
          transform: textOpacity === 1 ? "translate-y-0" : "translate-y-12",
          transition: "opacity 1.2s ease-out, transform 1.2s ease-out",
        }}
      >
        <h2 className="font-sans text-6xl sm:text-8xl md:text-9xl font-bold tracking-widest text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] uppercase">
          Honey
        </h2>
      </div>
    </div>
  );
}
