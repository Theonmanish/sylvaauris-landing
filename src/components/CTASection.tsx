import { Button } from "./ui/Button";
import { Section } from "./ui/Section";

export function CTASection() {
  return (
    <Section id="contact" className="pb-20 sm:pb-24 lg:pb-32">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-forest/30 via-surface-elevated to-background px-6 py-16 text-center sm:px-12 sm:py-20 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(201,169,110,0.08)_0%,_transparent_70%)]" />

        <div className="relative mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Begin Your Commission
          </p>
          <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Let us compose your living landscape.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Share your space, your light, and your vision. Our studio will respond
            with a tailored proposal—no purchase required at this stage.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="mailto:studio@sylvaauris.com">studio@sylvaauris.com</Button>
            <Button href="#collection" variant="secondary">
              View Collection
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
