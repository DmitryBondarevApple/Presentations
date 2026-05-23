import { cn } from "@/lib/utils";

const TOTAL = 32;

export const TASlideContainer = ({ children, number, label, className }) => (
  <div className={cn("w-full h-full flex flex-col relative", className)}
    style={{ backgroundColor: "#ffffff", color: "#0a0a0a" }}>
    <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 pt-3 md:pt-6 shrink-0">
      {label ? (
        <span className="font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase" style={{ color: "#a1a1aa" }}>{label}</span>
      ) : <span />}
      {number && (
        <span className="font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.15em]" style={{ color: "#a1a1aa" }}>
          {String(number).padStart(2, '0')}&nbsp;/&nbsp;{TOTAL}
        </span>
      )}
    </div>
    <div className="flex-1 overflow-y-auto flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-2 sm:py-4 md:py-6 pb-8 lg:pb-10">
      {children}
    </div>
  </div>
);

/* Shared sub-components */
export const TAH = ({ children }) => (
  <h2 className="font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 md:mb-4" style={{ color: "#0a0a0a" }}>
    {children}
  </h2>
);
export const TASub = ({ children }) => (
  <p className="font-body text-sm sm:text-base md:text-xl leading-relaxed mb-3 md:mb-8 max-w-4xl" style={{ color: "#71717a" }}>
    {children}
  </p>
);
export const TALi = ({ children }) => (
  <div className="flex items-start gap-2.5 md:gap-3 mb-1.5 md:mb-2.5">
    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full shrink-0 mt-2 md:mt-2.5" style={{ backgroundColor: "#0a0a0a" }} />
    <p className="font-body text-xs sm:text-sm md:text-lg leading-relaxed" style={{ color: "#3f3f46" }}>{children}</p>
  </div>
);
export const TACard = ({ children, className }) => (
  <div className={cn("rounded-md p-3 md:p-5", className)} style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5" }}>
    {children}
  </div>
);
export const TACardTitle = ({ children }) => (
  <p className="font-heading text-sm sm:text-base md:text-lg font-bold mb-1 md:mb-2" style={{ color: "#0a0a0a" }}>{children}</p>
);
export const TABadge = ({ children }) => (
  <span className="inline-block font-mono text-[9px] md:text-[11px] tracking-[0.15em] uppercase px-2 py-1 md:px-3 md:py-1.5 rounded-sm" style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>
    {children}
  </span>
);
