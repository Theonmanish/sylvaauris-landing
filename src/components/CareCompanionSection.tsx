import { CARE_FEATURES } from "@/lib/constants";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

export function CareCompanionSection() {
  return (
    <Section
      id="care"
      className="border-y border-border/60 bg-surface"
    >
      <SectionHeading
        eyebrow="Care Companion"
        title="Stewardship beyond the studio."
        description="Every Sylva Auris piece arrives with guidance—and remains supported for the life of its ecosystem. Placeholder service descriptions."
        align="center"
        className="mx-auto"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
        {CARE_FEATURES.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-border bg-background p-6 sm:p-8"
          >
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/5">
              <span className="h-2 w-2 rounded-full bg-gold" />
            </div>
            <h3 className="font-display text-xl text-foreground">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
