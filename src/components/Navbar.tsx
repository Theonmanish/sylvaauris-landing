"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Container } from "./ui/Container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        isScrolled || isOpen
          ? "border-b border-border bg-background"
          : "bg-transparent",
      )}
    >
      <Container as="nav" className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="font-display text-lg tracking-[0.22em] text-foreground transition-[letter-spacing] duration-500 hover:tracking-[0.3em] sm:text-xl"
        >
          {SITE_NAME}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span
            className={cn(
              "block h-px w-5 bg-foreground transition-transform duration-300",
              isOpen && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-foreground transition-opacity duration-300",
              isOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-foreground transition-transform duration-300",
              isOpen && "-translate-y-[7px] -rotate-45",
            )}
          />
        </button>
      </Container>

      {/* Mobile overlay — solid, no blur */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-opacity duration-400 md:hidden",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <Container className="flex h-full flex-col justify-center gap-10 pt-20">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-4xl tracking-[0.04em] text-foreground transition-colors duration-200 hover:text-gold"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </Container>
      </div>
    </header>
  );
}
