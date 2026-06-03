import { cn } from "@/lib/utils";
import { createContext, useContext } from "react";

export const TKTotal = createContext(21);

/* ── Slide shell ── */
export const TKSlideContainer = ({ children, number, label, className }) => {
  const total = useContext(TKTotal);
  return (
    <div className={cn("w-full h-full flex flex-col relative bg-background", className)}>
      <div className="absolute top-0 right-0 w-80 h-80 opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, hsl(172 66% 45%), transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-60 h-60 opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle at bottom left, hsl(172 50% 30%), transparent 70%)" }} />

      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 pt-3 md:pt-6 shrink-0 relative z-10">
        {label ? (
          <span className="font-heading text-[10px] sm:text-xs md:text-sm tracking-[0.18em] text-accent uppercase font-semibold">{label}</span>
        ) : <span />}
        <div className="flex items-center gap-3">
          <span className="font-body text-[10px] sm:text-xs md:text-sm text-muted-foreground/70">Noteall × Точка</span>
          {number && (
            <span className="font-body text-[10px] sm:text-xs md:text-sm text-muted-foreground">
              {String(number).padStart(2, "0")}&nbsp;/&nbsp;{total}
            </span>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-2 sm:py-4 md:py-6 pb-8 lg:pb-10 relative z-10">
        {children}
      </div>
    </div>
  );
};

/* ── Headings & text ── */
export const TKH2 = ({ children, className, ...p }) => (
  <h2 className={cn("font-heading text-lg sm:text-2xl md:text-4xl lg:text-[2.6rem] font-bold text-foreground leading-tight mb-1.5 sm:mb-3 md:mb-4", className)} {...p}>
    {children}
  </h2>
);

export const TKLead = ({ children, className }) => (
  <p className={cn("font-body text-xs sm:text-base md:text-lg text-muted-foreground leading-snug sm:leading-relaxed max-w-5xl mb-2 sm:mb-4 md:mb-6", className)}>
    {children}
  </p>
);

export const TKEyebrow = ({ children, className }) => (
  <p className={cn("font-heading text-[11px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-[0.14em] mb-1.5", className)}>{children}</p>
);

/* ── Card ── */
export const TKCard = ({ children, accent, className }) => (
  <div className={cn(
    "bg-card rounded-lg border p-2.5 sm:p-4 md:p-5",
    accent ? "border-2 border-accent" : "border border-border",
    className,
  )}>
    {children}
  </div>
);

export const TKCardTitle = ({ children, className }) => (
  <h3 className={cn("font-heading text-sm sm:text-base md:text-lg font-bold text-foreground mb-1 md:mb-2", className)}>{children}</h3>
);

/* ── Bullet item ── */
export const TKBullet = ({ children, className, muted }) => (
  <div className={cn("flex items-start gap-1.5 md:gap-2.5", className)}>
    <div className={cn("w-1 h-1 md:w-1.5 md:h-1.5 rounded-full mt-1.5 md:mt-2 shrink-0", muted ? "bg-muted-foreground/40" : "bg-accent")} />
    <p className={cn("font-body text-[11px] sm:text-sm md:text-base leading-snug", muted ? "text-muted-foreground" : "text-foreground/85")}>{children}</p>
  </div>
);

/* ── Callout (left accent bar) ── */
export const TKCallout = ({ children, title, className }) => (
  <div className={cn("bg-card rounded-lg border border-border border-l-4 border-l-accent p-2.5 sm:p-4 md:p-5", className)}>
    {title && <p className="font-heading text-[11px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-wider mb-1">{title}</p>}
    <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/85 leading-snug sm:leading-relaxed">{children}</p>
  </div>
);

/* ── Key-Value table (label | value rows) ── */
export const TKKVTable = ({ rows, headers, labelClass, className }) => (
  <div className={cn("rounded-lg border border-border overflow-hidden", className)}>
    {headers && (
      <div className="flex bg-accent/10 border-b border-border">
        <div className="w-[34%] px-2.5 sm:px-4 py-1.5 md:py-2.5 font-heading text-[10px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-wide">{headers[0]}</div>
        <div className="flex-1 px-2.5 sm:px-4 py-1.5 md:py-2.5 font-heading text-[10px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-wide border-l border-border">{headers[1]}</div>
      </div>
    )}
    {rows.map((r, i) => (
      <div key={i} className={cn("flex items-stretch", i % 2 ? "bg-card/40" : "bg-card/70", i < rows.length - 1 && "border-b border-border")}>
        <div className={cn("w-[34%] px-2.5 sm:px-4 py-1.5 sm:py-2 md:py-3 font-heading text-[11px] sm:text-sm md:text-base font-semibold text-foreground leading-snug", labelClass)}>{r[0]}</div>
        <div className="flex-1 px-2.5 sm:px-4 py-1.5 sm:py-2 md:py-3 font-body text-[11px] sm:text-sm md:text-base text-muted-foreground leading-snug border-l border-border">{r[1]}</div>
      </div>
    ))}
  </div>
);
