import { cn } from "@/lib/utils";
import { createContext, useContext } from "react";
import { fmtList, LECTURER, isDense } from "@/data/aiCompetitorsSlides";

const PUB = process.env.PUBLIC_URL || "";
export const AICTotal = createContext(35);
const DenseCtx = createContext(false);
const useDense = () => useContext(DenseCtx);

/* Единая типографика: один размер заголовка + два размера основного текста. */
const TITLE = "text-xl sm:text-3xl md:text-5xl";
const PB = "text-sm sm:text-base md:text-xl";        // основной размер (как слайд 12)
const SB = "text-[13px] sm:text-sm md:text-base";    // меньший размер (плотные слайды)
const body = (dense) => (dense ? SB : PB);

/* ── Slide shell ── */
export const AICShell = ({ children, number, label }) => {
  const total = useContext(AICTotal);
  return (
    <div className="w-full h-full flex flex-col relative bg-background">
      <div className="absolute top-0 right-0 w-80 h-80 opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, hsl(172 66% 45%), transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-60 h-60 opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle at bottom left, hsl(172 50% 30%), transparent 70%)" }} />
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 pt-3 md:pt-6 shrink-0 relative z-10">
        <span className="font-heading text-[10px] sm:text-xs md:text-sm tracking-[0.18em] text-accent uppercase font-semibold">{label}</span>
        <div className="flex items-center gap-3">
          <span className="font-body text-[10px] sm:text-xs md:text-sm text-muted-foreground/70 hidden sm:inline">Анализ конкурентов · ИИ</span>
          <span className="font-body text-[10px] sm:text-xs md:text-sm text-muted-foreground">{String(number).padStart(2, "0")}&nbsp;/&nbsp;{total}</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-2 sm:py-4 md:py-6 pb-8 lg:pb-10 relative z-10">
        {children}
      </div>
    </div>
  );
};

const H2 = ({ t, a }) => (
  <h2 className={cn("font-heading font-bold text-foreground leading-tight mb-3 sm:mb-4 md:mb-5", TITLE)}>
    {t} {a && <span className="text-accent">{a}</span>}
  </h2>
);

const Lead = ({ children }) => {
  const dense = useDense();
  return <p className={cn("font-body text-muted-foreground leading-snug sm:leading-relaxed max-w-5xl mb-2 sm:mb-3", body(dense))}>{children}</p>;
};

const Eyebrow = ({ children }) => (
  <p className="font-heading text-[11px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-[0.12em] mb-1 sm:mb-1.5">{children}</p>
);

const Note = ({ children }) => {
  const dense = useDense();
  return (
    <div className="bg-card rounded-lg border border-border border-l-4 border-l-accent p-2.5 sm:p-4 mt-auto">
      <p className={cn("font-body text-foreground/85 leading-snug sm:leading-relaxed", body(dense))}>{children}</p>
    </div>
  );
};

const Callout = ({ title, text }) => {
  const dense = useDense();
  return (
    <div className="bg-card rounded-lg border border-border border-l-4 border-l-accent p-2.5 sm:p-4">
      {title && <p className="font-heading text-[11px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-wider mb-1">{title}</p>}
      <p className={cn("font-body text-foreground/85 leading-snug", body(dense))}>{text}</p>
    </div>
  );
};

const Bullet = ({ children }) => {
  const dense = useDense();
  return (
    <div className="flex items-start gap-2 md:gap-2.5">
      <div className={cn("rounded-full shrink-0 bg-accent", dense ? "w-1 h-1 md:w-1.5 md:h-1.5 mt-1.5 md:mt-2" : "w-1.5 h-1.5 md:w-2 md:h-2 mt-1.5 md:mt-2.5")} />
      <p className={cn("font-body text-foreground/85 leading-snug", body(dense))}>{children}</p>
    </div>
  );
};

const Bullets = ({ eyebrow, items, cols }) => {
  const dense = useDense();
  return (
    <div>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <div className={cn("grid gap-x-6", dense ? "gap-y-1.5 sm:gap-y-2" : "gap-y-2 sm:gap-y-2.5",
        cols === 3 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : cols === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1")}>
        {fmtList(items).map((it, i) => <Bullet key={i}>{it}</Bullet>)}
      </div>
    </div>
  );
};

const Cards = ({ items, cols }) => (
  <div className={cn("grid gap-2 sm:gap-3 md:gap-4",
    cols === 4 ? "grid-cols-2 md:grid-cols-4" : cols === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2")}>
    {items.map((c, i) => (
      <div key={i} className="bg-card rounded-lg border border-border border-t-2 border-t-accent p-2.5 sm:p-4">
        {c.n && <p className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-accent/80 mb-0.5">{c.n}</p>}
        {c.title && <p className={cn("font-heading font-bold text-foreground leading-snug mb-1", PB)}>{c.title}</p>}
        {c.desc && <p className={cn("font-body text-muted-foreground leading-snug", SB)}>{c.desc}</p>}
      </div>
    ))}
  </div>
);

const Compare = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
    {items.map((c, i) => (
      <div key={i} className="bg-card rounded-lg border border-border p-2.5 sm:p-4 flex flex-col gap-2">
        <p className={cn("font-heading font-bold text-foreground leading-snug", PB)}>{c.name}</p>
        <div>
          <p className="font-heading text-[10px] sm:text-[11px] font-bold text-accent uppercase tracking-wider mb-0.5">Сильные стороны</p>
          <p className={cn("font-body text-foreground/80 leading-snug", SB)}>{c.strong}</p>
        </div>
        <div>
          <p className="font-heading text-[10px] sm:text-[11px] font-bold text-rose-400/90 uppercase tracking-wider mb-0.5">Слабые стороны</p>
          <p className={cn("font-body text-muted-foreground leading-snug", SB)}>{c.weak}</p>
        </div>
      </div>
    ))}
  </div>
);

const Pairs = ({ items }) => (
  <div className="space-y-2.5 sm:space-y-4">
    {items.map((p, i) => (
      <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 items-stretch">
        <div className="bg-card/60 rounded-lg border border-border p-2.5 sm:p-4">
          <p className="font-heading text-[10px] sm:text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Слабо</p>
          <p className={cn("font-body text-muted-foreground leading-snug", PB)}>{p.weak}</p>
        </div>
        <div className="bg-card rounded-lg border border-border border-l-4 border-l-accent p-2.5 sm:p-4">
          <p className="font-heading text-[10px] sm:text-[11px] font-bold text-accent uppercase tracking-wider mb-1">Сильнее</p>
          <p className={cn("font-body text-foreground/90 leading-snug", PB)}>{p.strong}</p>
        </div>
      </div>
    ))}
  </div>
);

const Prompt = ({ intro, paras }) => (
  <div className="bg-card rounded-lg border border-border border-l-4 border-l-accent p-3 sm:p-5 md:p-6">
    {intro && <p className="font-heading text-[11px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-wider mb-2 sm:mb-3">{intro}</p>}
    <div className="space-y-2 sm:space-y-3">
      {paras.map((p, i) => (
        <div key={i} className="flex items-start gap-2.5 sm:gap-3">
          <span className="font-heading text-sm sm:text-base md:text-xl font-bold text-accent/70 shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
          <p className={cn("font-body text-foreground/85 leading-snug sm:leading-relaxed", PB)}>{p}</p>
        </div>
      ))}
    </div>
  </div>
);

const SwotQuad = ({ title, items, tone }) => (
  <div className={cn("bg-card rounded-lg border border-border p-2.5 sm:p-4 border-t-2",
    tone === "pos" ? "border-t-accent" : "border-t-rose-400/70")}>
    <p className={cn("font-heading text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider mb-1.5",
      tone === "pos" ? "text-accent" : "text-rose-400/90")}>{title}</p>
    <div className="space-y-1">
      {fmtList(items).map((it, i) => (
        <div key={i} className="flex items-start gap-2">
          <div className={cn("w-1 h-1 rounded-full shrink-0 mt-2", tone === "pos" ? "bg-accent" : "bg-rose-400/80")} />
          <p className={cn("font-body text-foreground/85 leading-snug", SB)}>{it}</p>
        </div>
      ))}
    </div>
  </div>
);

const Swot = ({ s, w, o, t }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
    <SwotQuad title="Сильные стороны" items={s} tone="pos" />
    <SwotQuad title="Слабые стороны" items={w} tone="neg" />
    <SwotQuad title="Возможности" items={o} tone="pos" />
    <SwotQuad title="Угрозы" items={t} tone="neg" />
  </div>
);

const MapAxes = ({ x, y, points, hypothesis }) => (
  <div className="space-y-2 sm:space-y-3">
    <div className="flex flex-wrap gap-2">
      <span className="font-body text-[11px] sm:text-sm bg-accent/10 text-accent rounded-full px-3 py-1">Ось X · {x}</span>
      <span className="font-body text-[11px] sm:text-sm bg-accent/10 text-accent rounded-full px-3 py-1">Ось Y · {y}</span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
      {points.map((p, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-2.5 sm:p-3.5">
          <p className={cn("font-heading font-bold text-foreground leading-snug mb-0.5", PB)}>{p.label}</p>
          <p className={cn("font-body text-muted-foreground leading-snug", SB)}>{p.desc}</p>
        </div>
      ))}
    </div>
    {hypothesis && <Note>{hypothesis}</Note>}
  </div>
);

const Actions = ({ items }) => (
  <div className="space-y-2 sm:space-y-3">
    {items.map((a, i) => (
      <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1.1fr] gap-2 md:gap-3 items-center bg-card rounded-lg border border-border p-2.5 sm:p-3.5">
        <p className={cn("font-body text-muted-foreground leading-snug", PB)}>{a.factor}</p>
        <span className="hidden md:inline text-accent font-bold text-lg">→</span>
        <p className={cn("font-body text-foreground/90 font-medium leading-snug", PB)}>{a.action}</p>
      </div>
    ))}
  </div>
);

const Groups = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
    {items.map((g, i) => (
      <div key={i} className="bg-card rounded-lg border border-border border-t-2 border-t-accent p-2.5 sm:p-4">
        <p className={cn("font-heading font-bold text-foreground mb-1.5", PB)}>{g.title}</p>
        <div className="space-y-1">
          {fmtList(g.items).map((it, j) => (
            <div key={j} className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full shrink-0 mt-2 bg-accent" />
              <p className={cn("font-body text-foreground/85 leading-snug", SB)}>{it}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const Formula = ({ text }) => (
  <div className="bg-accent/10 border border-accent/40 rounded-lg px-4 sm:px-6 py-3 sm:py-5 text-center">
    <p className={cn("font-heading font-bold text-accent leading-snug", PB)}>{text}</p>
  </div>
);

const QDot = ({ i, hl, plot }) => (
  <span className={cn(
    "flex items-center justify-center rounded-full font-bold shrink-0",
    plot ? "w-5 h-5 sm:w-6 sm:h-6 text-[10px] sm:text-xs" : "w-5 h-5 text-[10px] mt-0.5",
    hl ? "bg-accent text-background ring-2 ring-accent/25" : "bg-card border border-border text-foreground/70")}>
    {i + 1}
  </span>
);

const Quadrant = ({ x, y, points, zone, insight }) => (
  <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-4 sm:gap-6 items-center">
    <div className="relative w-full aspect-[16/10] rounded-lg border border-border bg-card/40" data-testid="aic-quadrant-plot">
      {zone && (
        <div className="absolute rounded-md bg-accent/10 border border-dashed border-accent/40"
          style={{ left: `${zone.x * 100}%`, top: `${(1 - zone.y - zone.h) * 100}%`, width: `${zone.w * 100}%`, height: `${zone.h * 100}%` }} />
      )}
      <div className="absolute left-1/2 top-3 bottom-3 w-px bg-border -translate-x-1/2" />
      <div className="absolute top-1/2 left-3 right-3 h-px bg-border -translate-y-1/2" />
      <span className="absolute top-1.5 left-1/2 -translate-x-1/2 font-heading text-[10px] sm:text-xs font-semibold text-accent whitespace-nowrap">{y.top}</span>
      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 font-heading text-[10px] sm:text-xs font-semibold text-accent whitespace-nowrap">{y.bottom}</span>
      <span className="absolute left-1.5 top-1/2 -translate-y-1/2 font-heading text-[10px] sm:text-xs font-semibold text-accent leading-tight max-w-[24%]">{x.left}</span>
      <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-right font-heading text-[10px] sm:text-xs font-semibold text-accent leading-tight max-w-[24%]">{x.right}</span>
      {points.map((p, i) => (
        <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${p.x * 100}%`, top: `${(1 - p.y) * 100}%` }}>
          <QDot i={i} hl={p.hl} plot />
        </div>
      ))}
    </div>
    <div className="space-y-1.5 sm:space-y-2">
      {points.map((p, i) => (
        <div key={i} className="flex items-start gap-2">
          <QDot i={i} hl={p.hl} />
          <p className={cn("font-body leading-snug text-sm sm:text-base", p.hl ? "text-accent font-semibold" : "text-foreground/85")}>{p.label}</p>
        </div>
      ))}
      {insight && (
        <div className="bg-card rounded-lg border border-border border-l-4 border-l-accent p-2.5 sm:p-3 mt-2 sm:mt-3">
          <p className="font-body text-foreground/85 leading-snug text-sm sm:text-base">{insight}</p>
        </div>
      )}
    </div>
  </div>
);

const Block = ({ b }) => {
  switch (b.k) {
    case "lead": return <Lead>{b.text}</Lead>;
    case "note": return <Note>{b.text}</Note>;
    case "callout": return <Callout title={b.title} text={b.text} />;
    case "bul": return <Bullets eyebrow={b.eyebrow} items={b.items} cols={b.cols} />;
    case "cards": return <Cards items={b.items} cols={b.cols} />;
    case "compare": return <Compare items={b.items} />;
    case "pairs": return <Pairs items={b.items} />;
    case "prompt": return <Prompt intro={b.intro} paras={b.paras} />;
    case "swot": return <Swot {...b} />;
    case "map": return <MapAxes {...b} />;
    case "quadrant": return <Quadrant {...b} />;
    case "actions": return <Actions items={b.items} />;
    case "groups": return <Groups items={b.items} />;
    case "formula": return <Formula text={b.text} />;
    default: return null;
  }
};

export const Lecturer = ({ className }) => (
  <div className={cn("flex items-center gap-3 sm:gap-4", className)}>
    <img src={`${PUB}${LECTURER.photo}`} alt={LECTURER.name}
      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-accent/30 shrink-0" data-testid="aic-lecturer-photo" />
    <div>
      <p className="font-heading text-sm sm:text-base md:text-lg font-bold text-foreground leading-tight">{LECTURER.name}</p>
      <p className="font-body text-[11px] sm:text-sm text-muted-foreground leading-snug">{LECTURER.role}</p>
    </div>
  </div>
);

/* ── Standard content slide ── */
export const AICStandardSlide = ({ slide, num }) => {
  const dense = isDense(slide);
  const sp = dense ? "space-y-2 sm:space-y-3 md:space-y-4" : "space-y-3 sm:space-y-4 md:space-y-6";
  return (
    <DenseCtx.Provider value={dense}>
      <AICShell number={num} label={slide.label}>
        <H2 t={slide.t} a={slide.a} />
        <div className={cn(sp, "flex-1 flex flex-col")}>
          {slide.blocks.map((b, i) => <Block key={i} b={b} />)}
          {slide.final && (
            <div className="pt-3 sm:pt-4 mt-2 border-t border-border">
              <Lecturer />
            </div>
          )}
        </div>
      </AICShell>
    </DenseCtx.Provider>
  );
};
