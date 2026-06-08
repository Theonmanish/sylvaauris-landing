 "use client";

import React, { useState } from "react";
import { CRAFTSMANSHIP_STEPS } from "@/lib/constants";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

export function CraftsmanshipSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Section id="craft" className="border-t border-border bg-background">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Craftsmanship"
          title="Four movements. One enduring composition."
          description="From raw geological elements to balanced micro-climates, each movement is executed with deliberate care ."
          className="mb-16"
        />

        <div className="space-y-0">
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
                className="w-full text-left py-6 border-b border-[#fff9e6]/10 transition-all duration-500 cursor-pointer select-none outline-none"
              >
                <div className="flex gap-8">
                  <span
                    className={`font-sans text-2xl tracking-wider min-w-[3rem] transition-colors duration-500 ${
                      isActive ? "text-gold" : "text-gold/30"
                    }`}
                  >
                    {step.step}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={`font-display text-xl transition-colors duration-500 ${
                        isActive ? "text-foreground" : "text-muted/80"
                      }`}
                    >
                      {step.title}
                    </h3>
                    {isActive && (
                      <p className="mt-3 text-[14px] leading-relaxed text-muted/70 animate-fadeIn">
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
    </Section>
  );
}
