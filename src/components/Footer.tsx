import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Container } from "./ui/Container";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-border bg-background py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="font-display text-xl tracking-[0.25em] text-foreground block hover:text-gold transition-colors duration-300"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-6 max-w-xs text-[13px] leading-relaxed text-muted font-sans">
              Handcrafted enclosed ecosystems. Made by appointment for residential, commercial, and studio environments.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 lg:col-start-7">
            <span className="text-[9px] uppercase tracking-[0.3em] text-gold block mb-6">
              Navigation
            </span>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[12px] text-muted hover:text-foreground transition-colors duration-300 font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordinates Column */}
          <div className="lg:col-span-3">
            <span className="text-[9px] uppercase tracking-[0.3em] text-gold block mb-6">
              Coordinates
            </span>
            <ul className="space-y-4 text-[12px] text-muted font-sans">
              <li>
                <span className="text-subtle block text-[9px] uppercase tracking-wider mb-1">Instagram</span>
                <a
                  href="https://instagram.com/sylvaauris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  @sylvaauris
                </a>
              </li>
              <li>
                <span className="text-subtle block text-[9px] uppercase tracking-wider mb-1">Email</span>
                <a
                  href="mailto:studio@sylvaauris.com"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  studio@sylvaauris.com
                </a>
              </li>
              <li>
                <span className="text-subtle block text-[9px] uppercase tracking-wider mb-1">Phone</span>
                <a
                  href="tel:+3225550192"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  +32 (0) 2 555 0192
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="mt-20 pt-8 border-t border-border/40 flex flex-col gap-4 text-[11px] text-subtle sm:flex-row sm:items-center sm:justify-between font-mono">
          <p>© {year} {SITE_NAME.toUpperCase()}. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-muted transition-colors duration-300">PRIVACY</a>
            <a href="#terms" className="hover:text-muted transition-colors duration-300">TERMS</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
