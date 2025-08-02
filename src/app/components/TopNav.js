'use client'

import { useState } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

export default function TopNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex justify-center">
      <nav className="w-full max-w-6xl flex items-center pl-1 pr-4 justify-between py-3 bg-transparent relative">
      {/* Logo and Title */}
      <div className="flex items-center z-20">
        <img src="./logo.png" alt="MyaPya Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight [font-family:var(--font-league-spartan)]">MyaPya.com</span>
      </div>

      {/* Social Icons (right-aligned on desktop, below nav on mobile when open) */}
      <div className="flex items-center gap-3 z-10">
        <a href="https://instagram.com/itsmyapya" aria-label="Instagram" className="hover:text-accent-pink">
          <FaInstagram size={22} />
        </a>
        <a href="https://youtube.com/@myapya" aria-label="YouTube" className="hover:text-accent">
          <FaYoutube size={22} />
        </a>
        <a href="discord.gg/Sq4wxqFsZP" aria-label="Discord" className="hover:text-purple">
          <SiDiscord size={22} />
        </a>
      </div>

      {/* Hamburger for mobile */}
      <button
        className="md:hidden z-20"
        aria-label="Open navigation menu"
        onClick={() => setOpen(true)}
      >
        <span className="block w-6 h-0.5 bg-primary mb-1"></span>
        <span className="block w-6 h-0.5 bg-primary mb-1"></span>
        <span className="block w-6 h-0.5 bg-primary"></span>
      </button>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-6 text-base font-medium font-inter">
        <a href="#how-can-i-help-you" className="hover:text-accent-pink font-inter py-2 md:py-0">How can I help you?</a>
        <a href="#the-story-so-far" className="hover:text-accent-pink font-inter py-2 md:py-0">My Story</a>
        <a href="#watch-my-most-popular-videos" className="hover:text-accent-pink font-inter py-2 md:py-0">Watch</a>
      </div>

      {/* Mobile Fullscreen Menu */}
      {open && (
        <div className="fixed inset-0 bg-offwhite text-primary flex flex-col items-center justify-center z-40 transition-all">
          <button
            className="absolute top-6 right-6 text-3xl font-bold text-primary focus:outline-none"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
          <nav className="flex flex-col gap-8 text-2xl font-inter font-medium">
            <a href="#how-can-i-help-you" className="hover:text-accent-pink" onClick={() => setOpen(false)}>How can I help you?</a>
            <a href="#the-story-so-far" className="hover:text-accent-pink" onClick={() => setOpen(false)}>My Story</a>
            <a href="#watch-my-most-popular-videos" className="hover:text-accent-pink" onClick={() => setOpen(false)}>Watch</a>
          </nav>
        </div>
      )}
      </nav>
    </div>
  );
}
