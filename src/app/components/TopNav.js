'use client'

import { useState } from "react";

export default function TopNav() {
  const [open, setOpen] = useState(false);
  return (

    <nav className="w-full flex items-center justify-between px-4 py-3 bg-transparent relative">
      {/* Logo and Title */}
      <div className="flex items-center z-20">
        <img src="/logo.png" alt="MyaPya Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight [font-family:var(--font-league-spartan)]">MyaPya.com</span>
      </div>

      {/* Social Icons (right-aligned on desktop, below nav on mobile when open) */}
      <div className="flex items-center gap-3 z-10">
        <a href="https://instagram.com" aria-label="Instagram" className="hover:text-accent">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg>
        </a>
        <a href="https://youtube.com" aria-label="YouTube" className="hover:text-accent">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="4" stroke="currentColor" strokeWidth="2"/><polygon points="10,9 16,12 10,15" fill="currentColor"/></svg>
        </a>
        <a href="https://discord.com" aria-label="Discord" className="hover:text-purple">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" stroke="currentColor" strokeWidth="2"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/></svg>
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
        <a href="#help" className="hover:text-accent-pink font-inter py-2 md:py-0">How can I help you?</a>
        <a href="#story" className="hover:text-accent-pink font-inter py-2 md:py-0">My Story</a>
        <a href="#videos" className="hover:text-accent-pink font-inter py-2 md:py-0">Watch</a>
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
            <a href="#help" className="hover:text-accent-pink" onClick={() => setOpen(false)}>How can I help you?</a>
            <a href="#story" className="hover:text-accent-pink" onClick={() => setOpen(false)}>My Story</a>
            <a href="#videos" className="hover:text-accent-pink" onClick={() => setOpen(false)}>Watch</a>
          </nav>
        </div>
      )}
    </nav>
  );
}
