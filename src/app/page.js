'use client'
import TopNav from "./components/TopNav";
import InfoCard from "./components/InfoCard";
import VideoCard from "./components/VideoCard";
import { useRef, useState } from "react";
import { FaYoutube, FaBookOpen, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const videos = [
    {
      thumbnail: "https://img.youtube.com/vi/MkaPJJnh5LM/hqdefault.jpg",
      title: "HTTP vs HTTPS",
      href: "https://youtu.be/MkaPJJnh5LM?si=fcHW9w3mgBoGufRC",
    },
    {
      thumbnail: "https://img.youtube.com/vi/XQe94QP73gU/hqdefault.jpg",
      title: "Best Coding Resources For Beginners",
      href: "https://youtu.be/XQe94QP73gU?si=IY80v2jWASno9Y0l",
    },
    {
      thumbnail: "https://img.youtube.com/vi/9DccQUs_A_o/hqdefault.jpg",
      title: "What is an Endpoint?",
      href: "https://youtu.be/9DccQUs_A_o?si=aBGWV7ExC_NzN-5Z",
    },
    {
      thumbnail: "https://img.youtube.com/vi/ITWDhjLzRvo/hqdefault.jpg",
      title: "What is JSON?",
      href: "https://youtu.be/ITWDhjLzRvo?si=3amarB3UjfgQaXzt",
    },
    {
      thumbnail: "https://img.youtube.com/vi/qMxuthTIQq4/hqdefault.jpg",
      title: "What is an LLM? Explained Simple",
      href: "https://youtu.be/qMxuthTIQq4?si=7hV0v8zcp9ScZ2Qr",
    },
    {
      thumbnail: "https://img.youtube.com/vi/F3c67kWXTAY/hqdefault.jpg",
      title: "What are Websockets?",
      href: "https://youtu.be/F3c67kWXTAY?si=rIIW6kkPcTg0R8oq",
    },
    {
      thumbnail: "https://img.youtube.com/vi/up692rct844/hqdefault.jpg",
      title: "What is an API?",
      href: "https://youtu.be/up692rct844?si=_QTFdZDallO5AdZg",
    },
  ];
  const carouselRef = useRef(null);
  // Hide scrollbars utility (Tailwind plugin or custom CSS)
  // .scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  return (
    <main className="bg-offwhite min-h-screen flex flex-col">
      <TopNav />
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative w-full h-[60vw] min-h-[320px] lg:h-[520px] xl:h-[800px] flex flex-col items-center justify-center bg-black text-white"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/video_roll.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center gap-4 md:gap-6 lg:gap-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight drop-shadow-lg [font-family:var(--font-league-spartan)]">Hi, I'm Mya.</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light drop-shadow [font-family:var(--font-inter)]">Software Developer. YouTuber. Explainer of Things That Don't Make Sense - Until They Do.</p>
        </div>
      </motion.section>

      <motion.section
        id="how-can-i-help-you"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="py-8 md:py-14 lg:py-20 px-6 md:px-6 lg:px-12 flex flex-col items-center"
      >
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-10 [font-family:var(--font-league-spartan)]">How Can I Help You?</h2>
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl justify-center">
          <InfoCard
            className="w-full md:w-1/2 lg:w-1/4 min-h-[180px] md:min-h-[220px] lg:min-h-[320px] xl:min-h-[400px]"
            icon={<FaYoutube size={32} />}
            title="Watch Videos"
            description="Bite-sized, clear explainer videos on tech topics."
            href="https://www.youtube.com/@MyaPya"
            cta="Watch now"
          />
          <InfoCard
            className="w-full md:w-1/2 lg:w-1/4 min-h-[180px] md:min-h-[220px] lg:min-h-[320px] xl:min-h-[400px]"
            icon={<FaBookOpen size={32} />}
            title="Read Guides"
            description="Step-by-step written guides for deeper learning."
            href="https://subscribepage.io/freeapiguide"
            cta="Read more"
          />
          <InfoCard
            className="w-full md:w-1/2 lg:w-1/4 min-h-[180px] md:min-h-[220px] lg:min-h-[320px] xl:min-h-[400px]"
            icon={<FaUsers size={32} />}
            title="Join Community"
            description="Connect with others, ask questions, and grow together."
            href="https://discord.gg/Sq4wxqFsZP"
            cta="Join now"
          />
          <InfoCard
            className="w-full md:w-1/2 lg:w-1/4 min-h-[180px] md:min-h-[220px] lg:min-h-[320px] xl:min-h-[400px]"
            icon={<FaCalendarAlt size={32} />}
            title="Sign up for Workshops"
            description="Get early access and be the first to know when new API workshops are announced."
            href="https://subscribepage.io/apiworkshop"
            cta="Sign up"
          />
        </div>
      </motion.section>

      <motion.section
        id="the-story-so-far"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        className="py-8 md:py-14 lg:py-20 px-6 md:px-6 lg:px-12 flex flex-col items-center bg-beige"
      >
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-10 [font-family:var(--font-league-spartan)]">The Story So Far</h2>
        <div className="max-w-2xl lg:max-w-6xl text-center text-primary [font-family:var(--font-inter)] text-base md:text-lg lg:text-xl">
          <p className="mb-2">
            I changed careers into tech with no idea what I was stepping into. It was exciting – but overwhelming.<br />
            I kept hearing <span className="font-bold text-accent-blue">terms I didn’t fully understand</span> and constantly felt like I was <span className="font-bold text-accent-blue">playing catch-up</span>.
          </p>
          <div className="flex justify-center my-4">
            <span className="inline-block w-16 h-1 rounded-full bg-accent-blue/80"></span>
          </div>
          <p className="mb-2">
            To make sense of it all, I started creating short, <span className="font-bold text-accent-blue">clear explainer videos</span> – and quickly realised they weren’t just helping me. They were helping other people in tech who didn’t have time to sit through hour-long tutorials.
          </p>
          <p className="font-bold text-primary mt-4">My goal is to make tech more accessible.</p>
          <p className="text-sm md:text-lg text-primary mt-1">To ask the question we’re all thinking but are too afraid to ask–</p>
          <p className="italic text-xl lg:text-2xl font-bold text-accent-pink mt-2">“But what does that actually mean?”</p>
        </div>
      </motion.section>

      <motion.section
        id="watch-my-most-popular-videos"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.18 }}
        className="py-2 md:py-4 lg:py-6 px-6 flex flex-col items-center"
      >
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-10 [font-family:var(--font-league-spartan)]">Watch my most popular videos</h2>
        <div className="w-full max-w-2xl lg:max-w-6xl relative overflow-visible">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto md:overflow-x-hidden scrollbar-hide scroll-smooth transition-all duration-300 overflow-visible items-stretch min-h-[400px] h-[400px] lg:h-[480px] xl:h-[540px]"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              overflowY: 'visible',
            }}
          >
            {videos.map((video, idx) => (
              <div
                key={idx}
                className="lg:pl-2 flex-shrink-0 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[320px] xl:w-[380px] overflow-visible min-h-[320px] h-full flex"
                style={{ maxWidth: '380px' }}
              >
                <VideoCard {...video} />
              </div>
            ))}
          </div>
          {/* Arrows below on mobile, sides on desktop */}
          <div className="flex md:hidden justify-center gap-6 mt-2">
            <button
              aria-label="Scroll left"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-beige text-primary border border-primary/10 hover:bg-accent-pink hover:text-white transition shadow"
              onClick={() => {
                if (carouselRef.current) carouselRef.current.scrollBy({ left: -240 * 2.5, behavior: 'smooth' });
              }}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              aria-label="Scroll right"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-beige text-primary border border-primary/10 hover:bg-accent-pink hover:text-white transition shadow"
              onClick={() => {
                if (carouselRef.current) carouselRef.current.scrollBy({ left: 240 * 2.5, behavior: 'smooth' });
              }}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
          {/* Side arrows for md and up */}
          <button
            aria-label="Scroll left"
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-beige text-primary border border-primary/10 hover:bg-accent-pink hover:text-white transition absolute left-0 top-1/2 -translate-y-1/2 z-10 shadow"
            style={{ transform: 'translateY(-50%) translateX(-50%)' }}
            onClick={() => {
              if (carouselRef.current) carouselRef.current.scrollBy({ left: -240 * 2.5, behavior: 'smooth' });
            }}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            aria-label="Scroll right"
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-beige text-primary border border-primary/10 hover:bg-accent-pink hover:text-white transition absolute right-0 top-1/2 -translate-y-1/2 z-10 shadow"
            style={{ transform: 'translateY(-50%) translateX(50%)' }}
            onClick={() => {
              if (carouselRef.current) carouselRef.current.scrollBy({ left: 240 * 2.5, behavior: 'smooth' });
            }}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </motion.section>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 bg-accent-pink text-white rounded-full shadow-lg p-3 md:p-4 hover:bg-accent-blue transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-pink"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      )} 
      {/* Footer */}
      <footer className="py-6 md:py-8 px-2 md:px-4 text-center text-xs bg-beige text-primary/60 mt-auto [font-family:var(--font-inter)]">
        <div className="mb-1">
          For business enquiries: <a href="mailto:contact@myapya.com" className="underline hover:text-accent-pink">contact@myapya.com</a>
        </div>
        <div className="mb-1">
          &copy; MyaPya {new Date().getFullYear()}
        </div>
      </footer>
    </main>
  );
}
