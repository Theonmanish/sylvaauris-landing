import { BUILT_FOR_AUDIENCES } from "@/lib/constants";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

// Custom 1px stroke-weight icons representing each venue category
function IconHome() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true" className="text-gold">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconOffice() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true" className="text-gold">
      <rect x="2" y="3" width="20" height="14" rx="1" ry="1" />
      <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round" />
      <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round" />
    </svg>
  );
}

function IconGift() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true" className="text-gold">
      <polyline points="20 12 20 22 4 22 4 12" strokeLinejoin="round" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCafe() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true" className="text-gold">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" strokeLinejoin="round" />
      <line x1="6" y1="1" x2="6" y2="4" strokeLinecap="round" />
      <line x1="10" y1="1" x2="10" y2="4" strokeLinecap="round" />
      <line x1="14" y1="1" x2="14" y2="4" strokeLinecap="round" />
    </svg>
  );
}

function IconReception() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true" className="text-gold">
      <rect x="4" y="16" width="16" height="5" strokeLinejoin="round" />
      <line x1="6" y1="16" x2="6" y2="6" strokeLinecap="round" />
      <line x1="18" y1="16" x2="18" y2="6" strokeLinecap="round" />
      <line x1="12" y1="16" x2="12" y2="6" strokeLinecap="round" />
      <rect x="3" y="3" width="18" height="3" strokeLinejoin="round" />
    </svg>
  );
}

const icons = [IconHome, IconOffice, IconGift, IconCafe, IconReception];

export function BuiltForSection() {
  return (
    <Section className="bg-surface border-t border-border">
      <SectionHeading
        eyebrow="Commission Venues"
        title="Botanical art, scaled to belong."
        description="We compositionally adapt each terrarium to visual parameters of light, airflow, and surrounding scale."
        align="center"
        className="mx-auto"
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-5 lg:gap-4">
        {BUILT_FOR_AUDIENCES.map((audience, i) => {
          const Icon = icons[i];
          return (
            <article
              key={audience.title}
              className="group flex flex-col bg-cards border border-border p-6 sm:p-8 transition-colors duration-500 hover:border-gold/30"
            >
              <div className="mb-6 flex h-9 w-9 items-center justify-center border border-border bg-background">
                <Icon />
              </div>
              <h3 className="font-display text-xl tracking-[0.01em] text-foreground transition-colors duration-300 group-hover:text-gold">
                {audience.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                {audience.description}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
