import { cn } from "@/lib/utils";

export const TOTAL = 27;

/* ── Palette (matches the embedded SVG charts) ── */
export const SM = {
  bg: "#F7F5EF",
  panel: "#F1EEE6",
  panel2: "#ECE8DF",
  ink: "#20242B",
  body: "#3A3F49",
  muted: "#6B6256",
  dim: "#9A9384",
  line: "#D8D2C4",
  navy: "#1B3A5B",
  navySoft: "#E7ECF1",
  green: "#2E6E5A",
  greenSoft: "#E6EFEA",
  terra: "#B5612A",
  terraSoft: "#F4EADF",
};

const DISP = '"Unbounded", sans-serif';
const TEXT = '"Golos Text", sans-serif';
export const FONTS = { DISP, TEXT };

const IMG = (process.env.PUBLIC_URL || "");

/* ── Container ── */
export const SMSlideContainer = ({ children, number, label, className }) => (
  <div className={cn("w-full h-full flex flex-col relative", className)}
    data-testid={`sm-slide-${number}`}
    style={{ backgroundColor: SM.bg, color: SM.ink, fontFamily: TEXT }}>
    <div className="flex items-center justify-between px-5 sm:px-8 md:px-14 lg:px-20 pt-3 md:pt-5 shrink-0">
      {label ? (
        <span className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.28em] uppercase font-semibold"
          style={{ color: SM.muted, fontFamily: TEXT }}>{label}</span>
      ) : <span />}
      <span className="flex items-center gap-3">
        <span className="hidden sm:inline text-[9px] md:text-[10px] tracking-[0.28em] uppercase" style={{ color: SM.dim }}>
          Hop.Agency <span style={{ color: SM.line }}>×</span> Startup Drive
        </span>
        {number && (
          <span className="text-[10px] md:text-xs tracking-[0.15em] tabular-nums" style={{ color: SM.muted, fontFamily: DISP }}>
            {String(number).padStart(2, "0")}<span style={{ color: SM.line }}>&nbsp;/&nbsp;{TOTAL}</span>
          </span>
        )}
      </span>
    </div>
    <div className="flex-1 overflow-y-auto flex flex-col justify-start px-5 sm:px-8 md:px-14 lg:px-20 pt-3 sm:pt-5 md:pt-7 pb-8 lg:pb-10">
      {children}
    </div>
  </div>
);

/* ── Eyebrow / kicker ── */
export const SMKicker = ({ children, color = SM.terra }) => (
  <div className="flex items-center gap-2.5 mb-3 md:mb-4">
    <span className="inline-block w-5 md:w-7 h-px" style={{ backgroundColor: color }} />
    <span className="text-[10px] md:text-xs font-bold tracking-[0.22em] uppercase" style={{ color }}>{children}</span>
  </div>
);

/* ── Headings ── */
export const SMTitle = ({ children, className }) => (
  <h2 className={cn("font-bold leading-[1.08] text-2xl sm:text-3xl md:text-4xl lg:text-[2.7rem] mb-3 md:mb-5", className)}
    style={{ color: SM.ink, fontFamily: DISP, letterSpacing: "-0.01em" }}>
    {children}
  </h2>
);

export const SMLead = ({ children, className }) => (
  <p className={cn("text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mb-5 md:mb-7 text-justify", className)}
    style={{ color: SM.body, fontFamily: TEXT }}>
    {children}
  </p>
);

export const SMBody = ({ children, className }) => (
  <p className={cn("text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl text-justify", className)}
    style={{ color: SM.body, fontFamily: TEXT }}>
    {children}
  </p>
);

/* ── Rule / divider ── */
export const SMRule = ({ className }) => (
  <div className={cn("relative h-px w-full my-4 md:my-6", className)} style={{ backgroundColor: SM.line }}>
    <span className="absolute left-0 top-0 h-px w-12 md:w-16" style={{ backgroundColor: SM.navy }} />
  </div>
);

/* ── List item ── */
export const SMLi = ({ children, accent = SM.navy }) => (
  <div className="flex items-start gap-3 mb-2 md:mb-2.5">
    <span className="shrink-0 mt-[7px] md:mt-2 w-1.5 h-1.5 rotate-45" style={{ backgroundColor: accent }} />
    <p className="text-sm sm:text-base md:text-[1.05rem] leading-relaxed" style={{ color: SM.body, fontFamily: TEXT }}>{children}</p>
  </div>
);

/* ── Card / panel ── */
export const SMCard = ({ children, className, accent, style }) => (
  <div className={cn("rounded-md p-4 md:p-5", className)}
    style={{
      backgroundColor: SM.panel, border: `1px solid ${SM.line}`,
      ...(accent ? { borderTop: `3px solid ${accent}` } : {}),
      ...style,
    }}>
    {children}
  </div>
);

export const SMCardTitle = ({ children, className }) => (
  <p className={cn("font-bold text-base md:text-lg mb-2", className)} style={{ color: SM.ink, fontFamily: DISP }}>{children}</p>
);

/* ── Badge / tag ── */
export const SMBadge = ({ children, color = SM.navy, soft }) => (
  <span className="inline-block text-[10px] md:text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-sm"
    style={soft
      ? { backgroundColor: SM.navySoft, color }
      : { backgroundColor: color, color: "#F7F5EF" }}>
    {children}
  </span>
);

/* ── Stat block (for methodology) ── */
export const SMStat = ({ value, label, accent = SM.navy }) => (
  <div className="rounded-md p-3.5 md:p-5" style={{ backgroundColor: SM.panel, border: `1px solid ${SM.line}`, borderLeft: `3px solid ${accent}` }}>
    <div className="font-bold leading-none text-2xl sm:text-3xl md:text-4xl tabular-nums" style={{ color: SM.ink, fontFamily: DISP }}>{value}</div>
    <div className="mt-2 text-[11px] md:text-xs leading-snug uppercase tracking-[0.08em]" style={{ color: SM.muted }}>{label}</div>
  </div>
);

/* ── Dense table (navy header) ── */
export const SMTable = ({ headers, rows, weights }) => {
  const w = weights || headers.map((_, i) => (i === 0 ? 2 : 3));
  const tmpl = w.join("fr ") + "fr";
  return (
    <div className="w-full overflow-hidden rounded-md" style={{ border: `1px solid ${SM.line}` }}>
      <div className="grid items-center px-4 md:px-5 py-2.5 md:py-3"
        style={{ gridTemplateColumns: tmpl, backgroundColor: SM.navy }}>
        {headers.map((h, i) => (
          <span key={i} className="text-[9px] md:text-[10px] font-bold tracking-[0.12em] uppercase"
            style={{ color: "#EAF0F5", textAlign: i === 0 ? "left" : "left" }}>{h}</span>
        ))}
      </div>
      {rows.map((cells, i) => (
        <div key={i} className="grid items-center px-4 md:px-5 py-2.5 md:py-3.5"
          style={{ gridTemplateColumns: tmpl, backgroundColor: i % 2 ? SM.panel : SM.bg, borderTop: `1px solid ${SM.line}` }}>
          {cells.map((c, j) => (
            <span key={j} className={cn("text-sm md:text-[1.02rem]", j === 0 && "font-semibold")}
              style={{ color: j === 0 ? SM.ink : SM.body, fontFamily: j === 0 ? DISP : TEXT }}>{c}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

/* ── Ranked list row (top directions) ── */
export const SMRank = ({ items, accent = SM.navy }) => (
  <div className="w-full">
    {items.map((it, i) => (
      <div key={i} className="flex items-center gap-3 md:gap-4 py-2 md:py-2.5"
        style={{ borderTop: i === 0 ? "none" : `1px solid ${SM.line}` }}>
        <span className="font-bold text-lg md:text-xl tabular-nums w-6 md:w-7 shrink-0" style={{ color: accent, fontFamily: DISP }}>{i + 1}</span>
        <span className="flex-1 text-sm md:text-[1.05rem] font-medium truncate" style={{ color: SM.ink }}>{it.name}</span>
        <div className="hidden sm:block flex-1 max-w-[200px] h-2 rounded-full overflow-hidden" style={{ backgroundColor: SM.panel2 }}>
          <div className="h-full rounded-full" style={{ width: `${it.pct}%`, backgroundColor: accent, opacity: 1 - i * 0.07 }} />
        </div>
        <span className="font-bold text-sm md:text-base tabular-nums w-14 text-right shrink-0" style={{ color: SM.ink, fontFamily: DISP }}>{it.value}</span>
      </div>
    ))}
  </div>
);

/* ── Verbatim paragraph ── */
export const SMP = ({ children, className }) => (
  <p className={cn("text-sm sm:text-[0.95rem] md:text-base leading-relaxed mb-2.5 md:mb-3.5 text-justify", className)}
    style={{ color: SM.body, fontFamily: TEXT }}>{children}</p>
);

/* ── Definition: bold lead + rest ── */
export const SMDefn = ({ label, children, accent = SM.navy }) => (
  <p className="text-sm sm:text-[0.95rem] md:text-base leading-relaxed mb-2.5 md:mb-3 text-justify" style={{ color: SM.body, fontFamily: TEXT }}>
    <span className="font-bold" style={{ color: accent, fontFamily: DISP }}>{label}</span>
    {children ? <> {children}</> : null}
  </p>
);

/* ── Chart image (web uses SVG) — full width hero ── */
export const SMChart = ({ src, alt }) => (
  <div className="w-full flex-1 min-h-0 flex items-start justify-center overflow-hidden">
    <img src={`${IMG}/images/startup-market/light/${src}`} alt={alt}
      className="w-full h-full" style={{ objectFit: "contain", objectPosition: "top", display: "block" }} />
  </div>
);

/* ── Chart box (fills its column, top-aligned, borderless) ── */
export const SMChartBox = ({ src, alt }) => (
  <div className="w-full h-full min-h-[200px] flex items-start justify-center overflow-hidden">
    <img src={`${IMG}/images/startup-market/light/${src}`} alt={alt}
      className="w-full h-full" style={{ objectFit: "contain", objectPosition: "top", display: "block" }} />
  </div>
);

/* ── Split layout: text column + chart column ── */
export const SMSplit = ({ children, src, alt, wide }) => (
  <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-4 md:gap-7">
    <div className={cn("w-full md:shrink-0 md:overflow-y-auto md:pr-1 md:pt-[2.4%]", wide ? "md:w-1/2" : "md:w-2/5")}>
      {children}
    </div>
    <div className="flex-1 min-h-[220px] md:min-h-0 flex">
      <SMChartBox src={src} alt={alt} />
    </div>
  </div>
);

/* ── Takeaway strip (bottom insight) ── */
export const SMTakeaway = ({ children, label = "Главный вывод", accent = SM.navy }) => (
  <div className="flex items-start gap-3 md:gap-4 rounded-md p-3.5 md:p-4 mt-3 md:mt-4"
    style={{ backgroundColor: SM.panel, borderLeft: `3px solid ${accent}` }}>
    <span className="shrink-0 text-[10px] md:text-[11px] font-bold tracking-[0.14em] uppercase mt-0.5" style={{ color: accent }}>{label}</span>
    <p className="text-sm md:text-base leading-snug" style={{ color: SM.body }}>{children}</p>
  </div>
);


/* ── Two-column paragraph wrapper ── */
export const SMCols = ({ children, className }) => (
  <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-x-24 max-w-6xl", className)}>{children}</div>
);

/* ── Compact 3-column data table (long-text cells, top-aligned) ── */
export const SMTableC = ({ headers, rows, weights, accent = SM.navy }) => {
  const w = weights || [1.1, 1.5, 1.5];
  const tmpl = w.map((x) => `${x}fr`).join(" ");
  return (
    <div className="w-full overflow-hidden rounded-md" style={{ border: `1px solid ${SM.line}` }}>
      <div className="grid px-3 md:px-4 py-2 md:py-2.5" style={{ gridTemplateColumns: tmpl, backgroundColor: accent }}>
        {headers.map((h, i) => (
          <span key={i} className="text-[8.5px] md:text-[10px] font-bold tracking-[0.08em] uppercase pr-2" style={{ color: "#EAF0F5" }}>{h}</span>
        ))}
      </div>
      {rows.map((cells, i) => (
        <div key={i} className="grid px-3 md:px-4 py-1.5 md:py-2.5" style={{ gridTemplateColumns: tmpl, backgroundColor: i % 2 ? SM.panel : SM.bg, borderTop: `1px solid ${SM.line}` }}>
          {cells.map((c, j) => (
            <span key={j} className={cn("text-[10px] md:text-[12.5px] leading-snug pr-2.5", j === 0 && "font-semibold")}
              style={{ color: j === 0 ? SM.ink : SM.body, fontFamily: j === 0 ? '"Unbounded", sans-serif' : '"Golos Text", sans-serif' }}>{c}</span>
          ))}
        </div>
      ))}
    </div>
  );
};
