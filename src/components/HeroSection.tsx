import Image from "next/image";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[96vh] items-center pt-16 sm:pt-20 bg-surface overflow-hidden">
      
      {/* ── Forced Visibility Texture Layer ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]">
        <Image
          src="/paper-texture.webp" 
          alt="Texture"
          fill
          className="object-cover brightness-150 contrast-125" // Increased brightness/contrast
          priority
        />
      </div>

      {/* ── Soft Linear Vignette ── */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),transparent_20%,transparent_80%,rgba(0,0,0,0.4))]" />

      <Container className="w-full py-16 sm:py-20 lg:py-0 relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
          
          <div className="flex flex-col justify-center">
            <p className="mb-7 text-[10px] font-medium uppercase tracking-[0.45em] text-gold">
              Premium Living Terrariums
            </p>

            <h1 className="font-display text-[4rem] leading-[1.0] tracking-[-0.01em] text-foreground sm:text-[5.5rem] lg:text-[6.5rem]">
              Nature.<br />Curated To Endure.
            </h1>

            <div className="mt-3 h-px w-16 bg-gold/30" />

            <p className="mt-8 max-w-[28rem] text-[15px] leading-[1.85] text-muted">
              Precision-crafted terrariums paired with interactive care guidance 
              designed for long-term ecosystem health.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/gallery">Explore Collections</Button>
              <a
                href="https://care.sylvaauris.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] transition-colors duration-300 border border-border text-muted hover:border-border/80 hover:text-foreground"
              >
                Discover Care Companion
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative aspect-[3/4] w-full max-h-[35vh] md:max-h-none">
              <Image
                src="/terrarium.webp"
                alt="Premium living terrarium"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}