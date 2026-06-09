import { BUILT_FOR_AUDIENCES } from "@/lib/constants";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

export function BuiltForSection() {
  return (
    <Section className="bg-surface border-t border-border">
      <SectionHeading
        eyebrow="Placement Venues"
        title="Botanical art, scaled to belong."
        description="Each terrarium is thoughtfully composed to complement the light, scale, and character of its destination."
        align="center"
        className="mx-auto"
      />

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:mt-24">
        {BUILT_FOR_AUDIENCES.map((audience) => (
          <article key={audience.title} className="flex flex-col">
            <h3 className="font-display text-2xl tracking-[0.02em] text-foreground">
              {audience.title}
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed text-white/60">
              {audience.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
