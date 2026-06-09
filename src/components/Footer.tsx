import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Container } from "./ui/Container";
import { MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              {/* Un-cropped, clean wrapper for logo asset */}
              <div className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt={SITE_NAME}
                  width={28}
                  height={28} // Add this!
                  className="size-7"
                />
              </div>

              {/* Brand Title text sitting perfectly right beside the logo */}
              <span className="font-serif text-xl tracking-wider text-[#fff9e6]/90 antialiased transition-colors duration-300 group-hover:text-foreground">
                Sylva Auris
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-[13px] leading-relaxed text-muted font-sans">
              Handcrafted Living Terrariums • Designed To Endure • Crafted Locally
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
                  @sylva.auris
                </a>
              </li>
              <li>
                <span className="text-subtle block text-[9px] uppercase tracking-wider mb-1">Email</span>
                <a
                  href="mailto:studio@sylvaauris.com"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  sylvaauris@gmail.com
                </a>
              </li>
              <li>
                <span className="text-subtle block text-[9px] uppercase tracking-wider mb-1">
                  Location
                </span>
                <a
                  href="https://maps.app.goo.gl/59t6eQR2kefzy9Q28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-foreground transition-colors duration-300"
                >
                  <MapPin className="size-4 shrink-0 mt-0.5 text-gold" />
                  <span>
                    Soans Farm
                    <br />
                    Moodbidri, Karnataka
                  </span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="mt-20 pt-8 border-t border-border/40 text-center">
          <p className="text-[9px] tracking-[0.35em] text-subtle/60 font-mono">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}