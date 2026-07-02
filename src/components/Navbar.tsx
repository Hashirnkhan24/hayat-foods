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
            className="md:hidden text-brand-cream/80 hover:text-brand-gold transition-colors p-2 rounded-lg"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-brand-espresso/90 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-gradient-to-b from-brand-cocoa to-brand-espresso p-6 border-l border-brand-caramel/20 flex flex-col justify-between">
          <div className="flex flex-col gap-6 mt-16">
            <Link
              href="#products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-brand-cream/80 hover:text-brand-gold text-lg font-medium tracking-wide transition-colors border-b border-brand-caramel/10 pb-2"
            >
              Our Products
            </Link>
            <Link
              href="#story"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-brand-cream/80 hover:text-brand-gold text-lg font-medium tracking-wide transition-colors border-b border-brand-caramel/10 pb-2"
            >
              Our Story
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-brand-cream/80 hover:text-brand-gold text-lg font-medium tracking-wide transition-colors border-b border-brand-caramel/10 pb-2"
            >
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-4 mt-auto">
            <Link
              href="#shop"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full text-sm font-semibold tracking-wider uppercase bg-brand-gold text-brand-espresso hover:bg-brand-amber transition-colors shadow-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
