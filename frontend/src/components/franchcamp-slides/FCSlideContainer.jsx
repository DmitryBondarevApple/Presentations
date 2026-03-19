import { cn } from "@/lib/utils";

export const FCSlideContainer = ({ children, number, label, className }) => {
  return (
    <div className={cn(
      "w-full h-full flex flex-col relative overflow-hidden bg-background",
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

      <div className="flex items-center justify-between px-8 md:px-14 lg:px-20 pt-7 md:pt-9 shrink-0">
        {label ? (
          <span className="font-heading text-[10px] md:text-xs tracking-[0.18em] text-muted-foreground uppercase">
            {label}
          </span>
        ) : <span />}
        {number && (
          <span className="font-body text-[10px] md:text-xs text-muted-foreground">
            {String(number).padStart(2, '0')}&nbsp;/&nbsp;09
          </span>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-center px-8 md:px-14 lg:px-16 pb-14">
        {children}
      </div>

      <div className="absolute bottom-4 left-8 md:left-14 lg:left-20 font-heading text-[9px] tracking-[0.22em] text-muted-foreground/40 pointer-events-none select-none">
        HOP<span className="text-accent/40">.</span>AGENCY
      </div>
    </div>
  );
};
