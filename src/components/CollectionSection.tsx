import { COLLECTION_ITEMS } from "@/lib/constants";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

export function CollectionSection() {
  return (
    <Section id="collection" className="border-t border-border bg-surface">
      <SectionHeading
        eyebrow="The Collection"
        title="Curated botanical systems."
        description="Four essential vessels engineered for light, moisture, and botanical harmony. Composed individually by hand."
      />

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-6">
        {COLLECTION_ITEMS.map((item) => (
          <article
            key={item.name}
            className="group flex flex-col bg-cards border border-border transition-colors duration-500 hover:border-gold/30"
          >
            {/* Large Image Placeholder */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-background border-b border-border">
              {/* Camera-sensor crosshair motif for Leica-inspired product presentation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-12 w-12 flex items-center justify-center">
                  <div className="absolute h-px w-6 bg-gold/15 transition-all duration-500 group-hover:w-8" />
                  <div className="absolute w-px h-6 bg-gold/15 transition-all duration-500 group-hover:h-8" />
                  <div className="h-1 w-1 bg-gold/30" />
                </div>
              </div>

              {/* Tag / Series Code */}
              <span className="absolute left-6 top-6 text-[9px] uppercase tracking-[0.3em] text-muted/60">
                {item.tag}
              </span>
            </div>

            {/* Minimal Copy */}
            <div className="flex flex-col p-6 sm:p-8">
              <h3 className="font-display text-xl tracking-[0.02em] text-foreground transition-colors duration-300 group-hover:text-gold">
                {item.name}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted line-clamp-2">
                {item.description}
              </p>
              
              <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.25em] text-subtle">
                  Atelier Built
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold/70 group-hover:text-gold transition-colors duration-300">
                  Request Info
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
