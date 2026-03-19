import { cn } from "@/lib/utils";

export const FCSlideContainer = ({ children, number, label, className }) => {
  return (
    <div className={cn(
      "w-full h-full flex flex-col relative bg-background",
      className
    )}>
      <div
        className="absolute top-0 right-0 w-80 h-80 opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, hsl(240 100% 55%), transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-60 h-60 opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle at bottom left, hsl(15 88% 56%), transparent 70%)' }}
      />

      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 pt-4 md:pt-8 shrink-0 relative z-10">
        {label ? (
          <span className="font-heading text-xs md:text-base tracking-[0.18em] text-muted-foreground uppercase">
            {label}
          </span>
        ) : <span />}
        {number && (
          <span className="font-body text-xs md:text-base text-muted-foreground">
            {String(number).padStart(2, '0')}&nbsp;/&nbsp;09
          </span>
        )}
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col justify-start lg:justify-center px-6 md:px-16 lg:px-24 py-4 md:py-6 lg:pb-12 pb-10 relative z-10">
        {children}
      </div>

      <div className="absolute bottom-4 left-6 md:left-16 lg:left-24 font-heading text-xs tracking-[0.22em] text-muted-foreground/40 pointer-events-none select-none z-10">
        HOP<span className="text-accent/40">.</span>AGENCY
      </div>
    </div>
  );
};
