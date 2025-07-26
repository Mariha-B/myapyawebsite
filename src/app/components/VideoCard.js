import Link from "next/link";

export default function VideoCard({ thumbnail, title, href, cta = "Watch now" }) {
  return (
    <div className="rounded-2xl bg-beige shadow-md overflow-hidden flex flex-col group transition-transform duration-200 hover:scale-105 hover:shadow-[8px_8px_0_0_var(--color-blue)]">
      <div className="aspect-video w-full bg-gray-200 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:brightness-90 transition"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base font-bold mb-2 [font-family:var(--font-league-spartan)] line-clamp-2">{title}</h3>
        <Link
          href={href}
          className="mt-auto flex items-center gap-1 text-blue font-semibold text-sm group-hover:underline"
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
