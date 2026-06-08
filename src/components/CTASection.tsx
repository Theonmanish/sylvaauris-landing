"use client";

import React, { useState } from "react";
import { Section } from "./ui/Section";

export function CTASection() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <Section id="contact" className="border-t border-border bg-background pb-32 sm:pb-40">
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-gold mb-8">
          Atelier Commission
        </p>

        {/* Large Headline */}
        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[1.02] tracking-[-0.02em] text-foreground">
          Bring Nature Indoors.
        </h2>

        {/* Supporting Copy */}
        <p className="mt-8 text-[15px] sm:text-[17px] leading-[1.8] text-muted max-w-xl mx-auto font-sans">
          Handcrafted living ecosystems designed to thrive.
        </p>

        {/* Interactive Action Area */}
        <div className="mt-12 flex flex-col items-center justify-center">
          {!showForm && !submitted ? (
            <button
              onClick={() => setShowForm(true)}
              className="border border-gold/60 text-gold hover:border-gold hover:bg-gold/6 px-10 py-4 text-[11px] font-medium uppercase tracking-[0.25em] transition-colors duration-300 cursor-pointer"
            >
              Inquire About A Terrarium
            </button>
          ) : submitted ? (
            <div className="animate-fadeIn max-w-md border border-border bg-cards p-8 text-left">
              <span className="text-gold text-[9px] uppercase tracking-[0.25em] block mb-2 font-mono">
                TRANSMISSION RECEIVED
              </span>
              <h3 className="font-display text-2xl text-foreground mb-3">
                Inquiry Logged
              </h3>
              <p className="text-[13px] leading-relaxed text-muted">
                Our atelier team will review your lighting conditions and coordinate a tailored proposal within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setShowForm(false);
                  setFormData({ name: "", email: "", message: "" });
                }}
                className="mt-6 text-[10px] uppercase tracking-[0.2em] text-gold/70 hover:text-gold transition-colors duration-300 border-b border-gold/30 pb-0.5"
              >
                Return to menu
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="animate-fadeIn w-full max-w-md border border-border bg-cards p-8 text-left space-y-6">
              <div className="flex justify-between items-center border-b border-border/40 pb-3 mb-2">
                <span className="text-[9px] uppercase tracking-[0.25em] text-gold font-mono">
                  New Commission Intake
                </span>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-subtle hover:text-foreground text-[10px] uppercase tracking-wider font-mono"
                >
                  Cancel
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="cta-name" className="text-[9px] uppercase tracking-[0.3em] text-subtle">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="cta-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Jean Dupont"
                  className="border border-border bg-background px-4 py-3 text-[13px] text-foreground focus:border-gold/50 focus:outline-none rounded-none w-full"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="cta-email" className="text-[9px] uppercase tracking-[0.3em] text-subtle">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="cta-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. jean@example.com"
                  className="border border-border bg-background px-4 py-3 text-[13px] text-foreground focus:border-gold/50 focus:outline-none rounded-none w-full"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="cta-message" className="text-[9px] uppercase tracking-[0.3em] text-subtle">
                  Space details (Optional)
                </label>
                <textarea
                  id="cta-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the light levels..."
                  className="border border-border bg-background px-4 py-3 text-[13px] text-foreground focus:border-gold/50 focus:outline-none rounded-none w-full resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full border border-gold/60 text-gold hover:border-gold hover:bg-gold/6 py-3 text-[11px] font-medium uppercase tracking-[0.25em] transition-colors duration-300 cursor-pointer"
              >
                Submit Intake Request
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
