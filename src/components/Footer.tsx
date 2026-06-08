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
            <Link href="/" className="flex items-center gap-3">
              <svg
                width="22"
                height="28"
                viewBox="0 0 22 28"
                fill="none"
                aria-hidden="true"
                className="text-gold shrink-0"
              >
                <path
                  d="M2 26 Q8 18 14 10 Q18 4 20 2"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M10 6 Q16 2 18 8 Q14 10 10 6Z"
                  fill="currentColor"
                  opacity="0.8"
                />
                <path
                  d="M16 14 Q20 12 20 18 Q16 18 16 14Z"
                  fill="currentColor"
                  opacity="0.8"
                />
              </svg>
              <span className="font-display text-xl tracking-[0.08em] text-gold">
                {SITE_NAME}
              </span>
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
            </ul>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="mt-20 pt-8 border-t border-border/40 text-center">
          <p className="text-[9px] tracking-[0.35em] text-subtle/60 font-mono">
            © {year} {SITE_NAME.toUpperCase()}. ALL RIGHTS RESERVED.
          </p>
        </div>
      </Container>
    </footer>
  );
}
