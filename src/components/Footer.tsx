import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Container } from "./ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12 sm:py-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="font-display text-xl tracking-[0.2em] text-foreground"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Premium enclosed botanical installations for private and
              commercial interiors. Placeholder studio address and contact
              information.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Studio
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>Atelier District, Placeholder City</li>
              <li>
                <a
                  href="mailto:studio@sylvaauris.com"
                  className="transition-colors hover:text-gold"
                >
                  studio@sylvaauris.com
                </a>
              </li>
              <li>By appointment only</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE_NAME}. All rights reserved.</p>
          <p>Placeholder legal links — Privacy · Terms</p>
        </div>
      </Container>
    </footer>
  );
}
