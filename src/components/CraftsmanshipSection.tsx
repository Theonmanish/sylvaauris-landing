import { CRAFTSMANSHIP_STEPS } from "@/lib/constants";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

export function CraftsmanshipSection() {
  return (
    <Section id="craft">
      <SectionHeading
        eyebrow="Craftsmanship"
        title="Three movements. One enduring composition."
        description="From raw material to sealed atmosphere, each stage is performed by hand in our atelier. Process details are placeholder content."
      />

      <div className="mt-12 space-y-6 lg:mt-16">
        {CRAFTSMANSHIP_STEPS.map((step, index) => (
          <article
            key={step.step}
            className="grid gap-6 rounded-2xl border border-border bg-surface-elevated/50 p-6 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-8 sm:p-8 lg:grid-cols-[120px_1fr_280px]"
          >
            <p className="font-display text-4xl text-gold/60 sm:text-5xl">
              {step.step}
            </p>
            <div>
              <h3 className="font-display text-2xl text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {step.description}
              </p>
            </div>
            <div className="hidden aspect-video overflow-hidden rounded-xl border border-border bg-gradient-to-br from-forest/20 to-background lg:block">
              <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.2em] text-muted/60">
                Step {index + 1}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
