import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

function IconProfile() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
      <path d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
      <path d="M18 21a6 6 0 0 0-12 0" />
    </svg>
  );
}

function IconWater() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
      <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function IconVentilation() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5l5 5M14.5 9.5l-5 5" />
    </svg>
  );
}

function IconProblems() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

const features = [
  {
    title: "Plant Taxonomy",
    desc: "A curated list of every botanical species thriving inside your specific vessel.",
    icon: IconProfile,
  },
  {
    title: "Watering Guidelines",
    desc: "Predefined schedules detailing exactly when and how much to mist your ecosystem.",
    icon: IconWater,
  },
  {
    title: "Ventilation Schedules",
    desc: "Clear instructions on seal intervals to regulate moisture and airflow equilibrium.",
    icon: IconVentilation,
  },
  {
    title: "Diagnostics & Resolution",
    desc: "Practical solutions for common environmental issues, moss discoloration, and plant maintenance.",
    icon: IconProblems,
  },
];

export function CareCompanionSection() {
  return (
    <Section id="care" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Care Companion"
          title="Intelligent care, calibrated to your environment."
          description="Every Sylva Auris commission includes a dedicated companion guide. Linked directly to your vessel's unique light, humidity, and botanical profile to ensure lifelong stability."
          className="mb-12 lg:mb-16"
        />

        <div className="space-y-0 border-t border-border">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div 
                key={feat.title} 
                className="group grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4 py-8 border-b border-border transition-colors duration-300 hover:bg-cards/40 px-4 sm:px-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center border border-border bg-background text-gold shrink-0">
                    <Icon />
                  </div>
                  <h3 className="font-display text-lg tracking-[0.02em] text-foreground group-hover:text-gold transition-colors duration-300">
                    {feat.title}
                  </h3>
                </div>
                <p className="text-[13px] leading-[1.8] text-muted self-center">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        <a
          href="https://care.sylvaauris.in"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block border border-gold/40 px-8 py-3 text-[10px] uppercase tracking-[0.3em] text-gold transition-colors duration-300 hover:border-gold hover:text-foreground"
        >
          Access Care Companion
        </a>
      </div>
    </Section>
  );
}
