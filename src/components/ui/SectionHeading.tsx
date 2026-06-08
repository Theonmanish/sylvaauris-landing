import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.45em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-[1.08] tracking-[-0.01em] text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-[15px] leading-[1.8] text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
