import Link from "next/link";

export default function InfoCard({ icon, title, description, href, cta = "Go here", className = "" }) {
  return (
    <Link
      href={href}
      className={`group block rounded-2xl bg-beige p-6 md:p-8 lg:p-10 shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-[8px_8px_0_0_var(--color-accent-pink)] focus:scale-105 focus:shadow-[8px_8px_0_0_var(--color-accent-pink)] outline-none min-h-[180px] md:min-h-[220px] lg:min-h-[320px] xl:min-h-[400px] ${className}`}
    >
      <div className="flex flex-col justify-between items-start gap-3 h-full w-full">
        <div>
          <div className="text-3xl md:text-4xl lg:text-5xl mb-2">{icon}</div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 lg:mb-4 [font-family:var(--font-league-spartan)]">{title}</h3>
          <p className="text-sm md:text-base lg:text-lg text-primary/80 mb-3 [font-family:var(--font-inter)]">{description}</p>
        </div>
        <span className="flex items-center gap-1 text-accent-pink font-semibold text-sm md:text-base lg:text-lg group-hover:underline group-focus:underline mt-auto">
          {cta}
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="inline-block ml-1"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </div>
    </Link>
  );
}
