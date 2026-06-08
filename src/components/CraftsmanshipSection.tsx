"use client";

import React, { useState } from "react";
import { CRAFTSMANSHIP_STEPS } from "@/lib/constants";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

// Custom detailed metadata for each step to display in the interactive blueprint
const STEP_BLUEPRINTS = [
  {
    title: "Material Selection",
    subtitle: "PHASE 01 // ATELIER INVENTORY",
    metrics: [
      { label: "GLASS TYPE", val: "Boro-Silicate Crystal" },
      { label: "MOSS SPECIES", val: "Leucobryum Glaucum" },
      { label: "MINERALS", val: "Black Volcanic Basalt" },
    ],
  },
  {
    title: "Hardscape Design",
    subtitle: "PHASE 02 // GEOMETRIC TOPOGRAPHY",
    metrics: [
      { label: "DRAINAGE LAYER", val: "Inert Pumice 2-4mm" },
      { label: "SUBSTRATE MIX", val: "Activated Charcoal & Clay" },
      { label: "STONE GRADE", val: "Sieved Volcanic Slate" },
    ],
  },
  {
    title: "Plant Placement",
    subtitle: "PHASE 03 // SPECIMEN CALIBRATION",
    metrics: [
      { label: "ACCENT FLORA", val: "Ficus Pumila & Ferns" },
      { label: "PLANTING DEPTH", val: "12mm to 18mm" },
      { label: "TOOL SPEC", val: "250mm Surgical Forceps" },
    ],
  },
  {
    title: "Ecosystem Balancing",
    subtitle: "PHASE 04 // METRIC EQUILIBRIUM",
    metrics: [
      { label: "MICRO-FAUNA", val: "Collembola (Active)" },
      { label: "EQUILIBRIUM", val: "80% - 85% Humidity" },
      { label: "ATMO-SEAL", val: "Silicon Glass Lock" },
    ],
  },
];

export function CraftsmanshipSection() {
  const [activeStep, setActiveStep] = useState(0);

  const activeBlueprint = STEP_BLUEPRINTS[activeStep];

  return (
    <Section id="craft" className="border-t border-border bg-background">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
        
        {/* Left Column: Timeline list */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <SectionHeading
            eyebrow="Craftsmanship"
            title="Four movements. One enduring composition."
            description="From raw geological elements to balanced micro-climates, each movement is executed with deliberate care and technical precision."
            className="mb-12"
          />

          <div className="space-y-4">
            {CRAFTSMANSHIP_STEPS.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveStep(idx);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className={`w-full text-left p-6 border transition-all duration-500 cursor-pointer select-none outline-none ${
                    isActive
                      ? "border-gold/30 bg-cards"
                      : "border-border hover:border-border/80 bg-transparent"
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={`font-display text-2xl transition-colors duration-500 ${
                        isActive ? "text-gold" : "text-subtle"
                      }`}
                    >
                      {step.step}
                    </span>
                    <div>
                      <h3
                        className={`font-display text-xl transition-colors duration-500 ${
                          isActive ? "text-foreground" : "text-muted/80"
                        }`}
                      >
                        {step.title}
                      </h3>
                      {isActive && (
                        <p className="mt-3 text-[13px] leading-[1.7] text-muted animate-fadeIn">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Large Dynamic Blueprint Mockup */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <div className="relative w-full aspect-[4/3] border border-border bg-cards p-8 flex flex-col justify-between font-mono text-[10px] text-muted">
            
            {/* Blueprint Header */}
            <div className="flex justify-between items-start border-b border-border/60 pb-4">
              <div>
                <span className="text-gold tracking-[0.2em] uppercase block">
                  {activeBlueprint.subtitle}
                </span>
                <span className="font-display text-lg tracking-[0.05em] text-foreground mt-1 block">
                  {activeBlueprint.title}
                </span>
              </div>
              <span className="text-subtle">SA / SPECS v3.01</span>
            </div>

            {/* Blueprint Core Visual (Leica grid & crosshairs) */}
            <div className="relative flex-1 my-6 border border-dashed border-border/80 flex items-center justify-center bg-background/50">
              
              {/* Technical Grid / Crosshairs */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-16 w-16">
                  <div className="absolute h-px w-full top-1/2 -translate-y-1/2 bg-gold/10" />
                  <div className="absolute w-px h-full left-1/2 -translate-x-1/2 bg-gold/10" />
                  <div className="absolute inset-0 border border-gold/10 rounded-full scale-75" />
                </div>
              </div>

              {/* Changing text label mimicking technical layout */}
              <div className="text-center z-10 px-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-subtle">
                  Blueprint Simulation
                </p>
                <p className="text-[9px] text-subtle/50 italic mt-1.5">
                  Visual reference for stage {activeStep + 1}
                </p>
              </div>

              {/* Micro specs elements on the edges */}
              <div className="absolute top-3 left-4 text-[8px] text-subtle/40">
                LATITUDE: 50.8503° N
              </div>
              <div className="absolute bottom-3 right-4 text-[8px] text-subtle/40">
                HUMIDITY INERTIA: ACTIVE
              </div>
            </div>

            {/* Blueprint Metrics Table */}
            <div className="border-t border-border/60 pt-4">
              <div className="grid grid-cols-3 gap-4 text-[9px]">
                {activeBlueprint.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="text-subtle block uppercase tracking-wider mb-1">
                      {metric.label}
                    </span>
                    <span className="text-foreground font-mono block">
                      {metric.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </Section>
  );
}
