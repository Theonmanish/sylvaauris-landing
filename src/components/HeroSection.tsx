import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

/**
 * BotanicalCorner — a delicate SVG line-art motif.
 * Designed for top-left origin. Rotate via className for other corners.
 * L-bracket + curved stem + single small leaf. Very low opacity.
 */
function BotanicalCorner({ className }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Corner L-bracket */}
      <path
        d="M0 16 L0 0 L16 0"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      {/* Botanical stem curving inward */}
      <path
        d="M2 2 Q16 16 26 36"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      {/* Small leaf */}
      <path
        d="M10 12 Q18 6 20 15 Q14 18 10 12Z"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[96vh] items-center pt-16 sm:pt-20">
      <Container className="w-full py-16 sm:py-20 lg:py-0">
        <div className="grid items-center gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">

          {/* ── Left column: Copy ── */}
          <div className="flex flex-col">
            <p className="mb-7 text-[10px] font-medium uppercase tracking-[0.45em] text-gold">
              Premium Living Terrariums
            </p>

            <h1 className="font-display text-[4rem] leading-[1.0] tracking-[-0.01em] text-foreground sm:text-[5.5rem] lg:text-[6.5rem]">
              Nature.<br />Engineered.
            </h1>

            <div className="mt-3 h-px w-16 bg-gold/30" />

            <p className="mt-8 max-w-[28rem] text-[15px] leading-[1.85] text-muted">
              Precision-crafted terrariums paired with intelligent care guidance
              designed for long-term ecosystem health.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#collection">Explore Collections</Button>
              <Button href="#care" variant="secondary">
                Discover Care Companion
              </Button>
            </div>

            {/* Metadata strip */}
            <div className="mt-14 flex items-start gap-8 border-t border-border pt-8">
              {(
                [
                  ["Est.", "2018"],
                  ["Method", "By Hand"],
                  ["Access", "Commission Only"],
                ] as const
              ).map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <span className="text-[9px] uppercase tracking-[0.35em] text-subtle">
                    {label}
                  </span>
                  <span className="text-[12px] tracking-[0.08em] text-muted">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: Image placeholder ── */}
          <div className="relative">
            {/* Main image frame */}
            <div className="relative aspect-[3/4] w-full border border-border bg-cards">

              {/* Botanical corner accents */}
              <BotanicalCorner className="absolute left-4 top-4 text-gold/22" />
              <BotanicalCorner className="absolute right-4 top-4 rotate-90 text-gold/22" />
              <BotanicalCorner className="absolute bottom-4 right-4 rotate-180 text-gold/22" />
              <BotanicalCorner className="absolute bottom-4 left-4 -rotate-90 text-gold/22" />

              {/* Crosshair focal point */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                <div className="relative flex h-10 w-10 items-center justify-center">
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gold/18" />
                  <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gold/18" />
                  <div className="h-1.5 w-1.5 rounded-full bg-gold/30" />
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-subtle">
                    Terrarium Photograph
                  </p>
                  <p className="font-display text-[11px] italic tracking-[0.05em] text-subtle/50">
                    Replace with high-resolution image
                  </p>
                </div>
              </div>

              {/* Caption bar — mimics a gallery label */}
              <div className="absolute bottom-0 left-0 right-0 border-t border-border px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-subtle/70">
                    Verdant Atrium
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-subtle/70">
                    Signature Series — No. 001
                  </span>
                </div>
              </div>
            </div>

            {/* Floating detail badge — anchored to bottom-left of frame */}
            <div className="absolute -bottom-5 -left-5 hidden border border-border bg-background px-5 py-4 sm:block">
              <p className="text-[9px] uppercase tracking-[0.3em] text-gold">
                Handcrafted
              </p>
              <p className="mt-1.5 font-display text-xl tracking-[0.05em] text-foreground">
                Since 2018
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
