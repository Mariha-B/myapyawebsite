import Link from "next/link";

export default function VideoCard({ thumbnail, title, href, cta = "Watch now" }) {
  return (
    <div className="rounded-2xl bg-beige shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex flex-col group transition-shadow duration-200 hover:bg-emerald-700/30 hover:shadow-[0_4px_16px_0_rgba(0,0,0,0.10)] focus:shadow-[0_4px_16px_0_rgba(0,0,0,0.10)] outline-none overflow-hidden">
      <div className="aspect-video w-full bg-gray-200 rounded-t-2xl transition-transform duration-200 group-hover:scale-105 will-change-transform origin-center p-0 m-0 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover object-center transition group-hover:brightness-90 rounded-t-2xl p-0 m-0"
          style={{ display: 'block', background: 'transparent' }}
        />
      </div>
      <div className="p-10 flex flex-col flex-1 transition-transform duration-200 group-hover:scale-105 will-change-transform origin-center">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 [font-family:var(--font-league-spartan)] line-clamp-2">{title}</h3>
        <Link
          href={href}
          className="mt-auto flex items-center gap-1 font-semibold text-sm group-hover:underline group-focus:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {cta}
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="inline-block ml-1"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
      </div>
    </div>
  );
}
