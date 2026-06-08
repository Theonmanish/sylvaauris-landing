import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,110,0.12)_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(45,74,62,0.35)_0%,_transparent_50%)]" />

      <Container className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-16 sm:min-h-[calc(100vh-5rem)] sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold">
              Premium Living Terrariums
            </p>
            <h1 className="font-display text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              Where stillness becomes sculpture.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Sylva Auris crafts enclosed botanical worlds for discerning
              interiors—each vessel a quiet monument to balance, light, and time.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="#collection">Explore Collection</Button>
              <Button href="#contact" variant="secondary">
                Request Consultation
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl shadow-black/40">
              <div className="flex h-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-forest/40 via-background to-surface p-8 text-center">
                <div className="h-32 w-32 rounded-full border border-gold/30 bg-gold/5" />
                <p className="text-xs uppercase tracking-[0.25em] text-muted">
                  Hero Image Placeholder
                </p>
                <p className="max-w-xs text-sm text-muted/80">
                  Replace with a high-resolution terrarium photograph in{" "}
                  <code className="text-gold/80">public/images</code>
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-surface-elevated/90 px-5 py-4 backdrop-blur sm:block">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">
                Handcrafted
              </p>
              <p className="mt-1 font-display text-lg text-foreground">
                Since 2018
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
