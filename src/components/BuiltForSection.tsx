import { BUILT_FOR_AUDIENCES } from "@/lib/constants";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

export function BuiltForSection() {
  return (
    <Section className="bg-surface">
      <SectionHeading
        eyebrow="Built For"
        title="Commissioned for spaces with a point of view."
        description="Whether a private residence or a flagship interior, Sylva Auris adapts scale, palette, and ecology to the environment."
        align="center"
        className="mx-auto"
      />

      <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
        {BUILT_FOR_AUDIENCES.map((audience) => (
          <article
            key={audience.title}
            className="group relative overflow-hidden rounded-2xl border border-border p-6 sm:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative">
              <h3 className="font-display text-2xl text-foreground">
                {audience.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {audience.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
