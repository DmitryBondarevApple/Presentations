import { cn } from "@/lib/utils";

const TOTAL = 54;

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
    <div className="flex-1 overflow-y-auto flex flex-col justify-start px-4 sm:px-6 md:px-12 lg:px-20 pt-4 sm:pt-6 md:pt-10 pb-8 lg:pb-10">
      {children}
    </div>
  </div>
);

export const TAH = ({ children }) => (
  <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 md:mb-5" style={{ color: "#0a0a0a" }}>
    {children}
  </h2>
);
export const TASub = ({ children }) => (
  <p className="font-body text-base sm:text-lg md:text-xl leading-relaxed mb-4 md:mb-8 max-w-4xl" style={{ color: "#52525b" }}>
    {children}
  </p>
);
export const TALi = ({ children }) => (
  <div className="flex items-start gap-2.5 md:gap-3 mb-2 md:mb-3">
    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full shrink-0 mt-2 md:mt-2.5" style={{ backgroundColor: "#0a0a0a" }} />
    <p className="font-body text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: "#3f3f46" }}>{children}</p>
  </div>
);
export const TACard = ({ children, className, style: s }) => (
  <div className={cn("rounded-md p-4 md:p-6", className)} style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5", ...s }}>
    {children}
  </div>
);
export const TACardTitle = ({ children }) => (
  <p className="font-heading text-base sm:text-lg md:text-xl font-bold mb-1.5 md:mb-3" style={{ color: "#0a0a0a" }}>{children}</p>
);
export const TABadge = ({ children }) => (
  <span className="inline-block font-mono text-[10px] md:text-xs tracking-[0.15em] uppercase px-2.5 py-1.5 md:px-3 md:py-2 rounded-sm" style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>
    {children}
  </span>
);
export const TATable = ({ headers, rows }) => (
  <div className="max-w-4xl" style={{ border: "1px solid #e5e5e5", borderRadius: 6, overflow: "hidden" }}>
    <div className={`grid grid-cols-${headers.length} font-mono text-[10px] md:text-xs tracking-wider uppercase px-4 md:px-5 py-2.5 md:py-3`} style={{ backgroundColor: "#0a0a0a", borderBottom: "none", color: "#ffffff" }}>
      {headers.map((h, i) => <span key={i}>{h}</span>)}
    </div>
    {rows.map((cells, i) => (
      <div key={i} className={`grid grid-cols-${headers.length} px-4 md:px-5 py-3 md:py-4 text-sm sm:text-base md:text-lg`} style={{ borderBottom: i < rows.length - 1 ? "1px solid #e5e5e5" : "none" }}>
        {cells.map((c, j) => (
          <span key={j} className={j === 0 ? "font-bold" : ""} style={{ color: j === 0 ? "#0a0a0a" : "#3f3f46" }}>{c}</span>
        ))}
      </div>
    ))}
  </div>
);
