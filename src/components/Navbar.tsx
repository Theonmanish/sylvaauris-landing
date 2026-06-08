"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Container } from "./ui/Container";

export function Navbar() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-md transition-colors duration-500"
    >
      <Container as="nav" className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg tracking-[0.22em] text-foreground transition-[letter-spacing] duration-500 hover:tracking-[0.3em] sm:text-xl"
        >
          <Image src="/logo.png" alt={SITE_NAME} width={28} height={28} className="size-7" />
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

        {/* Mobile CTA */}
        <a
          href="https://care.sylvaauris.in"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gold/50 px-5 py-2 text-[10px] uppercase tracking-[0.25em] text-gold transition-colors duration-300 hover:border-gold hover:text-foreground md:hidden"
        >
          Care
        </a>
      </Container>
    </header>
  );
}