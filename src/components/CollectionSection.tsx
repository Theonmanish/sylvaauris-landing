import { COLLECTION_ITEMS } from "@/lib/constants";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

export function CollectionSection() {
  return (
    <Section id="collection" className="border-t border-border/60 bg-surface">
      <SectionHeading
        eyebrow="The Collection"
        title="Curated worlds, composed to endure."
        description="Three signature forms—each a distinct dialogue between glass, stone, and living green. Placeholder names and descriptions for layout demonstration."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
        {COLLECTION_ITEMS.map((item, index) => (
          <article
            key={item.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-colors duration-300 hover:border-gold/30"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-forest/30 to-background">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs uppercase tracking-[0.25em] text-muted/60">
                  Image {index + 1}
                </span>
              </div>
              <div className="absolute left-4 top-4 rounded-full border border-gold/30 bg-background/80 px-3 py-1 text-xs uppercase tracking-wider text-gold backdrop-blur">
                {item.tag}
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="font-display text-2xl text-foreground transition-colors group-hover:text-gold">
                {item.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                {item.description}
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-gold/70">
                View Details — Placeholder
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
