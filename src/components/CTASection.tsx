import { Section } from "./ui/Section";

export function CTASection() {
  return (
    <Section id="contact" className="border-t border-border bg-background pb-32 sm:pb-40">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-gold mb-8">
          The Atelier
        </p>

        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[1.02] tracking-[-0.02em] text-foreground">
          Bring Nature Indoors.
        </h2>

        <p className="mt-8 text-[15px] sm:text-[17px] leading-[1.8] text-muted max-w-xl mx-auto font-sans">
          Handcrafted living ecosystems designed to thrive.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center">
          <a
            href="mailto:sylvaauris@gmail.com?subject=Atelier%20Commission%20Inquiry"
            className="border border-gold/60 text-gold hover:border-gold hover:bg-gold/6 px-10 py-4 text-[11px] font-medium uppercase tracking-[0.25em] transition-colors duration-300"
          >
            Inquire About A Terrarium
          </a>
        </div>
      </div>
    </Section>
  );
}
