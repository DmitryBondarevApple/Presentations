import { cn } from "@/lib/utils";

export const PBSlideContainer = ({ children, number, label, className }) => {
  const TOTAL = 13;
  return (
    <div className={cn("w-full h-full flex flex-col relative bg-background", className)}>
      <div className="absolute top-0 right-0 w-80 h-80 opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, hsl(174 80% 42%), transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-60 h-60 opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle at bottom left, hsl(174 50% 30%), transparent 70%)' }} />

      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 pt-3 md:pt-6 shrink-0 relative z-10">
        {label ? (
          <span className="font-heading text-[10px] sm:text-xs md:text-base tracking-[0.18em] text-muted-foreground uppercase">{label}</span>
        ) : <span />}
        {number && (
          <span className="font-body text-[10px] sm:text-xs md:text-base text-muted-foreground">
            {String(number).padStart(2, '0')}&nbsp;/&nbsp;{TOTAL}
          </span>
        )}
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-2 sm:py-4 md:py-6 pb-8 lg:pb-10 relative z-10">
        {children}
      </div>

      <div className="absolute bottom-4 left-4 sm:left-6 md:left-12 lg:left-16 pointer-events-none select-none z-10 flex items-center gap-3">
        <img src={`${process.env.PUBLIC_URL || ''}/images/noteall/favicon.png`} alt="" className="h-5 md:h-6 opacity-20" />
      </div>
    </div>
  );
};
