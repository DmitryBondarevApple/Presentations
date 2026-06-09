import { cn } from "@/lib/utils";
import { createContext, useContext } from "react";
import { fmtList, LECTURER } from "@/data/aiCompetitorsSlides";

const PUB = process.env.PUBLIC_URL || "";
export const AICTotal = createContext(35);
const SizeCtx = createContext(1);
const useLvl = () => useContext(SizeCtx);
const pick = (lvl, c1, c2, c3) => (lvl >= 3 ? c3 : lvl === 2 ? c2 : c1);

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

const H2 = ({ t, a }) => {
  const lvl = useLvl();
  return (
    <h2 className={cn("font-heading font-bold text-foreground leading-tight mb-2 sm:mb-3 md:mb-4",
      pick(lvl, "text-lg sm:text-2xl md:text-4xl lg:text-[2.5rem]", "text-xl sm:text-3xl md:text-5xl", "text-2xl sm:text-4xl md:text-6xl"))}>
      {t} {a && <span className="text-accent">{a}</span>}
    </h2>
  );
};

const Lead = ({ children }) => {
  const lvl = useLvl();
  return <p className={cn("font-body text-muted-foreground leading-snug sm:leading-relaxed max-w-5xl mb-2 sm:mb-3 md:mb-4",
    pick(lvl, "text-xs sm:text-base md:text-lg", "text-sm sm:text-lg md:text-2xl", "text-base sm:text-xl md:text-3xl"))}>{children}</p>;
};

const Eyebrow = ({ children }) => {
  const lvl = useLvl();
  return <p className={cn("font-heading font-bold text-accent uppercase tracking-[0.12em] mb-1 sm:mb-1.5",
    pick(lvl, "text-[11px] sm:text-xs md:text-sm", "text-xs sm:text-sm md:text-base", "text-sm sm:text-base md:text-lg"))}>{children}</p>;
};

const Note = ({ children }) => {
  const lvl = useLvl();
  return (
    <div className="bg-card rounded-lg border border-border border-l-4 border-l-accent p-2.5 sm:p-4 md:p-4 mt-auto">
      <p className={cn("font-body text-foreground/85 leading-snug sm:leading-relaxed",
        pick(lvl, "text-xs sm:text-sm md:text-lg", "text-sm sm:text-base md:text-xl", "text-base sm:text-lg md:text-2xl"))}>{children}</p>
    </div>
  );
};

const Callout = ({ title, text }) => {
  const lvl = useLvl();
  return (
    <div className="bg-card rounded-lg border border-border border-l-4 border-l-accent p-2.5 sm:p-4">
      {title && <p className="font-heading text-[11px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-wider mb-1">{title}</p>}
      <p className={cn("font-body text-foreground/85 leading-snug",
        pick(lvl, "text-xs sm:text-sm md:text-base", "text-sm sm:text-base md:text-xl", "text-base sm:text-lg md:text-2xl"))}>{text}</p>
    </div>
  );
};

const Bullet = ({ children }) => {
  const lvl = useLvl();
  return (
    <div className="flex items-start gap-1.5 md:gap-2.5">
      <div className={cn("rounded-full shrink-0 bg-accent",
        pick(lvl, "w-1 h-1 md:w-1.5 md:h-1.5 mt-1.5 md:mt-2", "w-1.5 h-1.5 md:w-2 md:h-2 mt-2 md:mt-2.5", "w-2 h-2 md:w-2.5 md:h-2.5 mt-2 md:mt-3"))} />
      <p className={cn("font-body text-foreground/85 leading-snug",
        pick(lvl, "text-[11px] sm:text-sm md:text-base", "text-sm sm:text-lg md:text-2xl", "text-base sm:text-xl md:text-3xl"))}>{children}</p>
    </div>
  );
};

const Bullets = ({ eyebrow, items, cols }) => {
  const lvl = useLvl();
  return (
    <div>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <div className={cn(pick(lvl, "grid gap-x-4 gap-y-1 sm:gap-y-1.5", "grid gap-x-6 gap-y-2 sm:gap-y-3", "grid gap-x-6 gap-y-3 sm:gap-y-4"),
        cols === 3 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : cols === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1")}>
        {fmtList(items).map((it, i) => <Bullet key={i}>{it}</Bullet>)}
      </div>
    </div>
  );
};

const Cards = ({ items, cols }) => {
  const lvl = useLvl();
  return (
    <div className={cn("grid gap-2 sm:gap-3 md:gap-4",
      cols === 4 ? "grid-cols-2 md:grid-cols-4" : cols === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2")}>
      {items.map((c, i) => (
        <div key={i} className="bg-card rounded-lg border border-border border-t-2 border-t-accent p-2.5 sm:p-4">
          {c.n && <p className="font-heading text-base sm:text-lg md:text-2xl font-bold text-accent/80 mb-0.5">{c.n}</p>}
          {c.title && <p className={cn("font-heading font-bold text-foreground leading-snug mb-1",
            pick(lvl, "text-sm sm:text-base md:text-lg", "text-base sm:text-lg md:text-2xl", "text-lg sm:text-xl md:text-3xl"))}>{c.title}</p>}
          {c.desc && <p className={cn("font-body text-muted-foreground leading-snug",
            pick(lvl, "text-[11px] sm:text-sm md:text-[15px]", "text-sm sm:text-base md:text-lg", "text-base sm:text-lg md:text-xl"))}>{c.desc}</p>}
        </div>
      ))}
    </div>
  );
};

const Compare = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
    {items.map((c, i) => (
      <div key={i} className="bg-card rounded-lg border border-border p-2.5 sm:p-4 flex flex-col gap-2">
        <p className="font-heading text-xs sm:text-sm md:text-base font-bold text-foreground leading-snug">{c.name}</p>
        <div>
          <p className="font-heading text-[10px] sm:text-[11px] font-bold text-accent uppercase tracking-wider mb-0.5">Сильные стороны</p>
          <p className="font-body text-[11px] sm:text-sm text-foreground/80 leading-snug">{c.strong}</p>
        </div>
        <div>
          <p className="font-heading text-[10px] sm:text-[11px] font-bold text-rose-400/90 uppercase tracking-wider mb-0.5">Слабые стороны</p>
          <p className="font-body text-[11px] sm:text-sm text-muted-foreground leading-snug">{c.weak}</p>
        </div>
      </div>
    ))}
  </div>
);

const Pairs = ({ items }) => {
  const lvl = useLvl();
  const tcls = pick(lvl, "text-[11px] sm:text-sm md:text-base", "text-sm sm:text-base md:text-xl", "text-base sm:text-lg md:text-2xl");
  return (
    <div className="space-y-2.5 sm:space-y-4">
      {items.map((p, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 items-stretch">
          <div className="bg-card/60 rounded-lg border border-border p-2.5 sm:p-4">
            <p className="font-heading text-[10px] sm:text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Слабо</p>
            <p className={cn("font-body text-muted-foreground leading-snug", tcls)}>{p.weak}</p>
          </div>
          <div className="bg-card rounded-lg border border-border border-l-4 border-l-accent p-2.5 sm:p-4">
            <p className="font-heading text-[10px] sm:text-[11px] font-bold text-accent uppercase tracking-wider mb-1">Сильнее</p>
            <p className={cn("font-body text-foreground/90 leading-snug", tcls)}>{p.strong}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Prompt = ({ intro, paras }) => {
  const lvl = useLvl();
  return (
    <div className="bg-card rounded-lg border border-border border-l-4 border-l-accent p-3 sm:p-5 md:p-6">
      {intro && <p className="font-heading text-[11px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-wider mb-2 sm:mb-3">{intro}</p>}
      <div className="space-y-2 sm:space-y-3">
        {paras.map((p, i) => (
          <div key={i} className="flex items-start gap-2.5 sm:gap-3">
            <span className="font-heading text-xs sm:text-sm md:text-base font-bold text-accent/70 shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
            <p className={cn("font-body text-foreground/85 leading-snug sm:leading-relaxed",
              pick(lvl, "text-xs sm:text-sm md:text-[15px]", "text-sm sm:text-base md:text-xl", "text-base sm:text-lg md:text-2xl"))}>{p}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SwotQuad = ({ title, items, tone }) => (
  <div className={cn("bg-card rounded-lg border border-border p-2.5 sm:p-4 border-t-2",
    tone === "pos" ? "border-t-accent" : "border-t-rose-400/70")}>
    <p className={cn("font-heading text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider mb-1.5",
      tone === "pos" ? "text-accent" : "text-rose-400/90")}>{title}</p>
    <div className="space-y-1">
      {fmtList(items).map((it, i) => <Bullet key={i}>{it}</Bullet>)}
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
          <p className="font-heading text-xs sm:text-sm md:text-base font-bold text-foreground leading-snug mb-0.5">{p.label}</p>
          <p className="font-body text-[11px] sm:text-sm text-muted-foreground leading-snug">{p.desc}</p>
        </div>
      ))}
    </div>
    {hypothesis && <Note>{hypothesis}</Note>}
  </div>
);

const Actions = ({ items }) => {
  const lvl = useLvl();
  const tcls = pick(lvl, "text-[11px] sm:text-sm md:text-base", "text-sm sm:text-base md:text-xl", "text-base sm:text-lg md:text-2xl");
  return (
    <div className="space-y-2 sm:space-y-3">
      {items.map((a, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1.1fr] gap-2 md:gap-3 items-center bg-card rounded-lg border border-border p-2.5 sm:p-3.5">
          <p className={cn("font-body text-muted-foreground leading-snug", tcls)}>{a.factor}</p>
          <span className="hidden md:inline text-accent font-bold text-lg">→</span>
          <p className={cn("font-body text-foreground/90 font-medium leading-snug", tcls)}>{a.action}</p>
        </div>
      ))}
    </div>
  );
};

const Groups = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
    {items.map((g, i) => (
      <div key={i} className="bg-card rounded-lg border border-border border-t-2 border-t-accent p-2.5 sm:p-4">
        <p className="font-heading text-sm sm:text-base font-bold text-foreground mb-1.5">{g.title}</p>
        <div className="space-y-1">{fmtList(g.items).map((it, j) => <Bullet key={j}>{it}</Bullet>)}</div>
      </div>
    ))}
  </div>
);

const Formula = ({ text }) => {
  const lvl = useLvl();
  return (
    <div className="bg-accent/10 border border-accent/40 rounded-lg px-4 sm:px-6 py-3 sm:py-5 text-center">
      <p className={cn("font-heading font-bold text-accent leading-snug",
        pick(lvl, "text-sm sm:text-xl md:text-2xl", "text-base sm:text-2xl md:text-3xl", "text-lg sm:text-3xl md:text-4xl"))}>{text}</p>
    </div>
  );
};

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
export const AICStandardSlide = ({ slide }) => {
  const lvl = slide.lvl || 1;
  const sp = lvl >= 3 ? "space-y-4 sm:space-y-6 md:space-y-8" : lvl === 2 ? "space-y-3 sm:space-y-5 md:space-y-7" : "space-y-2.5 sm:space-y-3 md:space-y-4";
  return (
    <SizeCtx.Provider value={lvl}>
      <AICShell number={slide.n} label={slide.label}>
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
    </SizeCtx.Provider>
  );
};
