import { WHY_FEATURES } from "@/lib/constants";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

// Custom 1px stroke-weight icons matching B&O/Leica minimalist aesthetic
function IconEcosystem() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true" className="text-gold">
      <path d="M12 3a9 9 0 0 1 9 9v7H3v-7a9 9 0 0 1 9-9Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 10v6" strokeLinecap="round" />
      <path d="M9 13a3 3 0 0 1 6 0" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="3" y1="19" x2="21" y2="19" strokeLinecap="round" />
    </svg>
  );
}

function IconHandcrafted() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true" className="text-gold">
      <path d="M19 21h-6.28a2 2 0 0 1-1.68-.91l-4.12-6.18a2 2 0 0 1 0-2.22l4.12-6.18A2 2 0 0 1 12.72 5H19" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="15" y1="5" x2="15" y2="21" strokeLinecap="round" />
      <line x1="11" y1="12" x2="17" y2="12" strokeLinecap="round" />
    </svg>
  );
}

function IconEndure() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true" className="text-gold">
      <polygon points="12 2 2 12 12 22 22 12" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="2" x2="12" y2="22" strokeLinecap="round" />
      <line x1="2" y1="12" x2="22" y2="12" strokeLinecap="round" />
    </svg>
  );
}

function IconGuidance() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true" className="text-gold">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="1.5" />
      <line x1="12" y1="11" x2="12" y2="7" strokeLinecap="round" />
    </svg>
  );
}

const icons = [IconEcosystem, IconHandcrafted, IconEndure, IconGuidance];

export function WhySylvaAurisSection() {
  return (
    <Section id="philosophy" className="border-t border-border bg-background">
      <div className="max-w-3xl mb-24 lg:mb-32 whitespace-pre-line">
        <SectionHeading
          eyebrow="The Philosophy"
          title="Designed for longevity. Crafted for stewardship."
          description={`We believe nature deserves a more enduring place within modern interiors. Rather than creating disposable decor, we focus on living ecosystems that evolve with time, encouraging a slower and more meaningful connection with the natural world.

              Every Sylva Auris terrarium is composed through four movements: the vessel that frames it, the landscape that grounds it, the life that animates it, and the care that sustains it. Together they form an enduring ecosystem designed to mature beautifully over time.`}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
        {WHY_FEATURES.map((feature, i) => {
          const Icon = icons[i];
          return (
            <article
              key={feature.title}
              className="flex flex-col md:even:mt-16"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center">
                <Icon />
              </div>
              <h3 className="font-display text-2xl tracking-[0.01em] text-foreground">
                {feature.title}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.8] text-muted max-w-lg">
                {feature.description}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
