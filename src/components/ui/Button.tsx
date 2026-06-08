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
    "border border-gold/60 text-gold hover:border-gold hover:bg-gold/6",
  secondary:
    "border border-border text-muted hover:border-border/80 hover:text-foreground",
  ghost:
    "text-muted hover:text-foreground",
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
        "inline-flex items-center justify-center",
        "px-8 py-3.5",
        "text-[11px] font-medium uppercase tracking-[0.25em]",
        "transition-colors duration-300",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
