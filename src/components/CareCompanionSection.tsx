import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

// Custom 1px stroke icons for Care Companion features
function IconProfile() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
      <path d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
      <path d="M18 21a6 6 0 0 0-12 0" />
    </svg>
  );
}

function IconWater() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
      <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function IconVentilation() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5l5 5M14.5 9.5l-5 5" />
    </svg>
  );
}

function IconRisk() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function IconClimate() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </svg>
  );
}

function IconSeason() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function IconProblems() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

const features = [
  {
    title: "Plant Profiles",
    desc: "Detailed botanical inventory of each species coexisting in your ecosystem.",
    icon: IconProfile,
  },
  {
    title: "Watering Instructions",
    desc: "Sensor-calibrated schedules telling you precisely when and how much to mist.",
    icon: IconWater,
  },
  {
    title: "Ventilation Guidance",
    desc: "Step-by-step instructions on seal duration to regulate humidity equilibrium.",
    icon: IconVentilation,
  },
  {
    title: "Risk Indicators",
    desc: "Proactive warnings for light deficiencies, thermal spikes, or excess condensation.",
    icon: IconRisk,
  },
  {
    title: "Climate Zone Awareness",
    desc: "Algorithmic adjustments based on your geographic region and home ambient temperature.",
    icon: IconClimate,
  },
  {
    title: "Seasonal Recommendations",
    desc: "Custom advice for natural autumn resting phases and spring acceleration.",
    icon: IconSeason,
  },
  {
    title: "Diagnostics & Support",
    desc: "Immediate solutions for moss discolouration, mold mitigation, or plant pruning.",
    icon: IconProblems,
  },
];

export function CareCompanionSection() {
  return (
    <Section id="care" className="border-t border-border bg-surface">
      <div className="grid gap-16 lg:grid-cols-12 lg:items-start lg:gap-24">
        
        {/* Left: Sticky Phone Mockup Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="relative mx-auto max-w-[320px] border border-border bg-background p-4 shadow-2xl">
            {/* Phone Screen Container */}
            <div className="relative aspect-[9/19] w-full overflow-hidden border border-border bg-cards p-5 font-mono text-[11px] text-muted">
              
              {/* Screen Top Bar */}
              <div className="mb-8 flex items-center justify-between text-[9px] text-subtle border-b border-border/40 pb-3">
                <span>SA / COMPANION v1.4</span>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                  <span>CONNECTED</span>
                </div>
              </div>

              {/* Terrarium Model Reference */}
              <div className="mb-6">
                <span className="text-[9px] uppercase tracking-[0.25em] text-subtle block">Linked Device</span>
                <span className="font-display text-lg tracking-[0.05em] text-foreground block mt-1">Verdant Atrium</span>
                <span className="text-[9px] text-gold mt-0.5 block">No. 0042 / Signature Series</span>
              </div>

              {/* Status Box */}
              <div className="border border-border p-4 bg-background mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-subtle">System Status</span>
                  <span className="text-gold tracking-[0.1em] text-[9px] uppercase">Stable</span>
                </div>
                <div className="space-y-2 text-[10px]">
                  <div className="flex justify-between">
                    <span className="text-subtle">Humidity</span>
                    <span className="text-foreground">82% R.H.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-subtle">Ambient Temp</span>
                    <span className="text-foreground">21.8°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-subtle">Luminosity</span>
                    <span className="text-foreground">1,240 Lux</span>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="border border-border p-4 bg-background">
                <span className="text-[9px] uppercase tracking-[0.2em] text-subtle block mb-2">Stewardship Guidance</span>
                <p className="text-[10px] leading-relaxed text-muted">
                  Next active hydration cycle required in <span className="text-gold">14 days</span>. Keep seal closed.
                </p>
              </div>

              {/* Screen Footer UI */}
              <div className="absolute bottom-5 left-5 right-5 border-t border-border/40 pt-4 flex justify-between text-[8px] text-subtle">
                <span>DIAGNOSTICS</span>
                <span>SYSTEM CALIBRATION</span>
              </div>

            </div>
            {/* Gallery Label style underneath mockup */}
            <div className="mt-4 text-center">
              <p className="text-[10px] uppercase tracking-[0.3em] text-subtle">
                Software Companion Interface
              </p>
              <p className="text-[9px] text-subtle/60 mt-1">
                Linked via unique hardware engraving
              </p>
            </div>
          </div>
        </div>

        {/* Right: Apple-style Features Grid Column */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <SectionHeading
            eyebrow="Care Companion"
            title="Intelligent care, calibrated to your environment."
            description="Every Sylva Auris commission includes a dedicated companion guide. Linked directly to your vessel's unique light, humidity, and botanical profile to ensure lifelong stability."
            className="mb-12 lg:mb-16"
          />

          <div className="space-y-0 border-t border-border">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={feat.title} 
                  className="group grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4 py-8 border-b border-border transition-colors duration-300 hover:bg-cards/40 px-4 sm:px-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center border border-border bg-background text-gold shrink-0">
                      <Icon />
                    </div>
                    <h3 className="font-display text-lg tracking-[0.02em] text-foreground group-hover:text-gold transition-colors duration-300">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-[13px] leading-[1.8] text-muted self-center">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </Section>
  );
}
