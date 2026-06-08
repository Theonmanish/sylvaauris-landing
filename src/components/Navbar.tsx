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
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
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
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        isScrolled || isOpen
          ? "border-b border-border/60 bg-background/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <Container as="nav" className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="font-display text-lg tracking-[0.2em] text-foreground sm:text-xl"
        >
          {SITE_NAME}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm tracking-wide text-muted transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border text-foreground md:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span
            className={cn(
              "block h-px w-4 bg-current transition-transform duration-300",
              isOpen && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-4 bg-current transition-opacity duration-300",
              isOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-px w-4 bg-current transition-transform duration-300",
              isOpen && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </Container>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <Container className="flex h-full flex-col justify-center gap-8 pt-20">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-3xl text-foreground transition-colors hover:text-gold"
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
