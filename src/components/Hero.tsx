"use client";

import Image from "next/image";

interface HeroProps {
  opacity: number;
}

export default function Hero({ opacity }: HeroProps) {
  return (
    <div 
      className="absolute inset-0 w-full h-full bg-radial-gourmet flex items-center justify-center select-none transition-opacity duration-1000"
      style={{ opacity, pointerEvents: opacity === 1 ? "auto" : "none" }}
    >
      {/* Decorative ambient glowing orbs (studio lights) */}
      <div className="absolute top-[20%] left-[10%] w-[35rem] h-[35rem] rounded-full bg-brand-gold/10 blur-[120px] mix-blend-screen animate-pulse-slow"></div>
      <div className="absolute bottom-[10%] right-[5%] w-[40rem] h-[40rem] rounded-full bg-brand-amber/15 blur-[150px] mix-blend-screen animate-float"></div>
      
      {/* Subtly animated overlay texture */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-brand-gold)_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        {/* Logo in a full rounded circle */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-brand-gold/35 bg-white p-0.5 shadow-[0_8px_30px_rgb(0,0,0,0.3)] mb-6 transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/logo.png"
            alt="Hayat Foods Brand Logo"
            fill
            sizes="(max-width: 640px) 96px, 112px"
            className="object-cover rounded-full"
            priority
          />
        </div>

        {/* Main Headline */}
        <h1 className="font-sans text-6xl sm:text-8xl md:text-9xl font-bold tracking-wide text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] select-none mb-6">
          Hayat Foods
        </h1>

        {/* Subtle Gold Brand Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-brand-gold/30 bg-brand-espresso/20 backdrop-blur-sm">
          <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.25em] text-brand-gold uppercase">
            Est. 1998 • Organic Gourmet Bites
          </span>
        </div>
      </div>

      {/* Minimalist Bottom Indicator */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex flex-col items-center">
        <div className="w-16 h-[1px] bg-brand-gold/40 mb-3"></div>
        <p className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-brand-cream/60 uppercase">
          Directly Sourced • Gently Roasted • Handpacked
        </p>
      </div>
    </div>
  );
}
