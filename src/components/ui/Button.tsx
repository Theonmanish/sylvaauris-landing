import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "border border-gold/40 bg-gold/10 text-gold hover:border-gold/70 hover:bg-gold/20",
  secondary:
    "border border-border bg-surface-elevated text-foreground hover:border-gold/30 hover:text-gold",
  ghost: "text-muted hover:text-gold",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
