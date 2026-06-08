import { WHY_FEATURES } from "@/lib/constants";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

export function WhySylvaAurisSection() {
  return (
    <Section id="philosophy">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="order-2 lg:order-1">
          <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-gradient-to-tr from-forest/25 via-background to-gold/5">
            <div className="flex h-full items-center justify-center p-8 text-center">
              <p className="max-w-xs text-sm leading-relaxed text-muted">
                Philosophy visual placeholder — ideal for a studio portrait or
                detail shot of terrarium craftsmanship.
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Why Sylva Auris"
            title="Botanical art for spaces that breathe intention."
            description="We believe a terrarium should feel inevitable—as though it has always belonged in the room. Every commission begins with listening."
          />

          <ul className="mt-10 space-y-8">
            {WHY_FEATURES.map((feature) => (
              <li key={feature.title} className="border-l border-gold/30 pl-6">
                <h3 className="font-display text-xl text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
