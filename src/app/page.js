'use client'
import TopNav from "./components/TopNav";
import InfoCard from "./components/InfoCard";
import VideoCard from "./components/VideoCard";

export default function Home() {
  return (
    <main className="bg-offwhite min-h-screen flex flex-col">
      <TopNav />
      <section className="relative w-full h-[60vw] min-h-[320px] lg:h-[520px] xl:h-[800px] flex flex-col items-center justify-center bg-black text-white">
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
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center gap-4 md:gap-6 lg:gap-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight drop-shadow-lg [font-family:var(--font-league-spartan)]">Hi, I'm Mya.</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light drop-shadow [font-family:var(--font-inter)]">Software Developer. YouTuber. Explainer of Things That Don't Make Sense – Until They Do.</p>
        </div>
      </section>

      <section className="py-8 md:py-14 lg:py-20 px-6 md:px-6 lg:px-12 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 [font-family:var(--font-league-spartan)]">How Can I Help You?</h2>
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl justify-center">
          <InfoCard
            className="min-h-[180px] md:min-h-[220px] lg:min-h-[320px] xl:min-h-[400px]"
            icon={<svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><polygon points="10,8 16,12 10,16" fill="currentColor"/></svg>}
            title="Watch Videos"
            description="Bite-sized, clear explainer videos on tech topics."
            href="#videos"
            cta="Watch now"
          />
          <InfoCard
            className="min-h-[180px] md:min-h-[220px] lg:min-h-[320px] xl:min-h-[400px]"
            icon={<svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="2"/></svg>}
            title="Read Guides"
            description="Step-by-step written guides for deeper learning."
            href="#guides"
            cta="Read more"
          />
          <InfoCard
            className="min-h-[180px] md:min-h-[220px] lg:min-h-[320px] xl:min-h-[400px]"
            icon={<svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="4" stroke="currentColor" strokeWidth="2"/><circle cx="8" cy="12" r="1" fill="currentColor"/><circle cx="16" cy="12" r="1" fill="currentColor"/></svg>}
            title="Join Community"
            description="Connect with others, ask questions, and grow together."
            href="#community"
            cta="Join now"
          />
        </div>
      </section>

      <section className="py-8 md:py-14 lg:py-20 px-6 md:px-6 lg:px-12 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 [font-family:var(--font-league-spartan)]">The Story So Far</h2>
        <div className="max-w-2xl lg:max-w-4xl text-center text-primary [font-family:var(--font-inter)] text-base md:text-lg lg:text-2xl">
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
          <p className="text-sm text-primary mt-1">To ask the question we’re all thinking but are too afraid to ask–</p>
          <p className="italic text-xl font-bold text-accent-pink mt-2">“But what does that actually mean?”</p>
        </div>
      </section>

      <section className="py-10 md:py-16 lg:py-24 px-6 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 [font-family:var(--font-league-spartan)]">Watch my most popular videos</h2>
        <div className="w-full max-w-2xl lg:max-w-5xl overflow-x-auto">
          <div className="flex gap-4 min-w-[600px] md:min-w-0">
            <VideoCard
              thumbnail="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
              title="Dev culture is a club-and I'm not in it"
              href="https://youtube.com/watch?v=dQw4w9WgXcQ"
            />
            <VideoCard
              thumbnail="https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg"
              title="Type Safety in the Real World"
              href="https://youtube.com/watch?v=3JZ_D3ELwOQ"
            />
            <VideoCard
              thumbnail="https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg"
              title="Framework Wars: What Actually Matters?"
              href="https://youtube.com/watch?v=aqz-KE-bpKQ"
            />
             <VideoCard
              thumbnail="https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg"
              title="Framework Wars: What Actually Matters?"
              href="https://youtube.com/watch?v=aqz-KE-bpKQ"
            />
             <VideoCard
              thumbnail="https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg"
              title="Framework Wars: What Actually Matters?"
              href="https://youtube.com/watch?v=aqz-KE-bpKQ"
            />
             <VideoCard
              thumbnail="https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg"
              title="Framework Wars: What Actually Matters?"
              href="https://youtube.com/watch?v=aqz-KE-bpKQ"
            />
          </div>
          <button
            aria-label="Scroll right"
            className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full bg-beige text-primary border border-primary/10 hover:bg-accent-pink hover:text-white transition ml-2"
            onClick={() => {
              document.getElementById('video-carousel').scrollBy({ left: 320, behavior: 'smooth' });
            }}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>

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
