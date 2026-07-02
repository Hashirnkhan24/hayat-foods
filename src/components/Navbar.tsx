"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Hayat Foods Logo"
                fill
                sizes="48px"
                className="object-cover rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-widest text-brand-gold uppercase leading-none">
                Hayat
              </span>
              <span className="text-[9px] tracking-[0.25em] text-brand-cream/80 uppercase leading-none mt-1">
                Gourmet Bites
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#products"
              className="text-brand-cream/80 hover:text-brand-gold font-medium text-sm tracking-wide transition-colors duration-200"
            >
              Our Products
            </Link>
            <Link
              href="#story"
              className="text-brand-cream/80 hover:text-brand-gold font-medium text-sm tracking-wide transition-colors duration-200"
            >
              Our Story
            </Link>
            <Link
              href="#contact"
              className="text-brand-cream/80 hover:text-brand-gold font-medium text-sm tracking-wide transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-5">
            <button
              aria-label="Search"
              className="text-brand-cream/80 hover:text-brand-gold transition-colors duration-200 p-1.5 rounded-full hover:bg-brand-espresso/30"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              aria-label="Cart"
              className="relative text-brand-cream/80 hover:text-brand-gold transition-colors duration-200 p-1.5 rounded-full hover:bg-brand-espresso/30"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="absolute top-0 right-0 w-2 h-2 bg-brand-amber rounded-full"></span>
            </button>
            <Link
              href="#shop"
              className="px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-espresso transition-all duration-300 shadow-[0_0_15px_rgba(235,177,91,0.1)] hover:shadow-[0_0_20px_rgba(235,177,91,0.3)]"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 relative w-10 h-10 flex flex-col items-center justify-center text-brand-cream/80 hover:text-brand-gold focus:outline-none"
            aria-label="Toggle Menu"
          >
            {/* Morphing Hamburger Lines */}
            <div className="w-6 h-4.5 flex flex-col justify-between relative">
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 transform origin-left ${
                  isMobileMenuOpen ? "rotate-[42deg] translate-x-[3px] translate-y-[-1px]" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 transform origin-left ${
                  isMobileMenuOpen ? "-rotate-[42deg] translate-x-[3px] translate-y-[1px]" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-brand-espresso/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-8">
          <Link
            href="#products"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-brand-cream hover:text-brand-gold text-2xl font-serif font-bold tracking-widest transition-colors duration-300"
          >
            Our Products
          </Link>
          <Link
            href="#story"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-brand-cream hover:text-brand-gold text-2xl font-serif font-bold tracking-widest transition-colors duration-300"
          >
            Our Story
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-brand-cream hover:text-brand-gold text-2xl font-serif font-bold tracking-widest transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Action Button */}
        <div className="mt-4 flex flex-col items-center gap-6">
          <Link
            href="#shop"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3 rounded-full text-xs font-semibold tracking-wider uppercase border border-brand-gold text-brand-gold bg-brand-gold/5 hover:bg-brand-gold hover:text-brand-espresso transition-all duration-300 shadow-[0_0_15px_rgba(235,177,91,0.15)]"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
}
