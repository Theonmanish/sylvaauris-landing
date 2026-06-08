import Image from "next/image";
import { COLLECTION_ITEMS } from "@/lib/constants";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

const IMAGE_MAP: Record<string, string> = {
  "Micro Terrariums": "/micro.png",
  "Jar Terrariums": "/jar.png",
  "Bowl Terrariums": "/bowl.png",
  "Cube Terrariums": "/cube.png",
};

function CollectionCard({ item }: { item: (typeof COLLECTION_ITEMS)[number] }) {
  return (
    <article className="group flex w-[260px] flex-col bg-cards border border-border transition-colors duration-500 hover:border-gold/30 md:w-auto">
      <div className="relative aspect-[3/4] w-full bg-background px-4 pb-4">
        <Image
          src={IMAGE_MAP[item.name]}
          alt={item.name}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 260px, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="flex flex-col p-5 sm:p-8">
        <h3 className="font-display text-lg tracking-[0.02em] text-foreground transition-colors duration-300 group-hover:text-gold md:text-xl">
          {item.name}
        </h3>
        <p className="mt-3 text-[12px] leading-relaxed text-muted line-clamp-2 md:text-[13px]">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export function CollectionSection() {
  return (
    <Section id="collection" className="border-t border-border bg-surface">
      <SectionHeading
        eyebrow="The Collection"
        title="Curated botanical systems."
        description="Four essential vessels engineered for light, moisture, and botanical harmony. Composed individually by hand."
      />

      {/* Mobile marquee — visible below md */}
      <div className="mt-16 overflow-hidden md:hidden">
        <div className="animate-marquee flex w-max gap-6 py-4">
          {[...COLLECTION_ITEMS, ...COLLECTION_ITEMS].map((item, idx) => (
            <CollectionCard key={`${item.name}-${idx}`} item={item} />
          ))}
        </div>
      </div>

      {/* Desktop grid — visible md and above */}
      <div className="mt-16 hidden gap-8 sm:grid-cols-2 md:grid lg:mt-24 lg:grid-cols-4 lg:gap-6">
        {COLLECTION_ITEMS.map((item) => (
          <CollectionCard key={item.name} item={item} />
        ))}
      </div>

      <div className="mt-16 flex justify-center lg:mt-20">
        <a
          href="/gallery"
          className="inline-flex items-center justify-center px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] transition-colors duration-300 border border-gold/60 text-gold hover:border-gold hover:bg-gold/6"
        >
          Browse the Collection
        </a>
      </div>
    </Section>
  );
}
