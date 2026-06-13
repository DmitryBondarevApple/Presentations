import { cn } from "@/lib/utils";
import { createContext, useContext } from "react";
import { fmtList, LECTURER, isDense } from "@/data/noteallInvestSlides";

const PUB = process.env.PUBLIC_URL || "";
export const NITotal = createContext(16);
const DenseCtx = createContext(false);
const useDense = () => useContext(DenseCtx);

const TITLE = "text-xl sm:text-3xl md:text-5xl";
const PB = "text-sm sm:text-base md:text-xl";
const SB = "text-[13px] sm:text-sm md:text-base";
const body = (dense) => (dense ? SB : PB);

export const NIShell = ({ children, number, label }) => {
  const total = useContext(NITotal);
  return (
    <div className="w-full h-full flex flex-col relative bg-background">
      <div className="absolute top-0 right-0 w-80 h-80 opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, hsl(174 80% 42%), transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-60 h-60 opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle at bottom left, hsl(174 60% 30%), transparent 70%)" }} />
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 pt-3 md:pt-6 shrink-0 relative z-10">
        <span className="font-heading text-[10px] sm:text-xs md:text-sm tracking-[0.18em] text-accent uppercase font-semibold">{label}</span>
        <div className="flex items-center gap-3">
          <span className="font-body text-[10px] sm:text-xs md:text-sm text-muted-foreground/70 hidden sm:inline">Noteall · Invest</span>
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

const Quote = ({ text }) => (
  <div className="bg-accent/10 border border-accent/30 border-l-4 border-l-accent rounded-lg px-3 sm:px-6 py-3 sm:py-5">
    <p className="font-heading text-lg sm:text-2xl md:text-3xl font-bold text-foreground leading-snug">{text}</p>
  </div>
);

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
        {c.title && <p className={cn("font-heading font-bold text-foreground leading-snug", c.desc ? "mb-1" : "", PB)}>{c.title}</p>}
        {c.desc && <p className={cn("font-body text-muted-foreground leading-snug", SB)}>{c.desc}</p>}
      </div>
    ))}
  </div>
);

const Columns = ({ items }) => {
  const dense = useDense();
  const cols = items.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  return (
    <div className={cn("grid grid-cols-1 gap-2.5 sm:gap-4", cols)}>
      {items.map((c, i) => (
        <div key={i} className={cn("rounded-lg border p-2.5 sm:p-4",
          c.accent ? "bg-accent/[0.07] border-accent/40 border-l-4 border-l-accent" : "bg-card/60 border-border")}>
          <p className={cn("font-heading text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5",
            c.accent ? "text-accent" : "text-foreground/70")}>{c.title}</p>
          {c.desc && <p className={cn("font-body text-muted-foreground leading-snug mb-2", SB)}>{c.desc}</p>}
          <div className={cn(dense ? "space-y-1 sm:space-y-1.5" : "space-y-1.5 sm:space-y-2")}>
            {fmtList(c.list).map((it, j) => (
              <div key={j} className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full shrink-0 bg-accent mt-1.5 md:mt-2" />
                <p className={cn("font-body text-foreground/85 leading-snug", body(dense))}>{it}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Funnel = ({ tiers, arppu, note }) => {
  const widths = ["100%", "74%", "48%"];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-4 sm:gap-6 items-start">
      <div className="flex flex-col items-center gap-1.5 sm:gap-2.5" data-testid="ni-funnel">
        {tiers.map((t, i) => (
          <div key={i} className="rounded-lg border border-accent/40 px-3 sm:px-5 py-2 sm:py-3 flex items-center justify-between gap-3"
            style={{ width: widths[i], background: `hsl(174 80% 42% / ${0.18 - i * 0.045})` }}>
            <div className="min-w-0">
              <p className="font-heading text-sm sm:text-lg font-bold text-foreground leading-none">{t.name}<span className="font-body text-[10px] sm:text-xs font-normal text-muted-foreground"> · {t.sub}</span></p>
              <p className="font-body text-[10px] sm:text-xs text-muted-foreground leading-snug mt-0.5 truncate">{t.label}</p>
            </div>
            <p className="font-heading text-sm sm:text-xl font-bold text-accent whitespace-nowrap shrink-0">{t.value}</p>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <div className="bg-card rounded-lg border border-border p-3 sm:p-4">
          <p className="font-heading text-[11px] sm:text-xs font-bold text-accent uppercase tracking-wider mb-2">Расчёт ARPPU</p>
          <div className="space-y-1.5">
            {arppu.map((a, i) => (
              <div key={i} className={cn("flex items-center justify-between gap-3", i >= 2 && "pt-1.5 border-t border-border")}>
                <span className="font-body text-xs sm:text-sm text-muted-foreground">{a.k}</span>
                <span className={cn("font-heading font-bold whitespace-nowrap", i >= 2 ? "text-accent text-sm sm:text-base" : "text-foreground text-xs sm:text-sm")}>{a.v}</span>
              </div>
            ))}
          </div>
        </div>
        {note && <p className="font-body text-[11px] sm:text-xs text-muted-foreground/90 leading-snug">{note}</p>}
      </div>
    </div>
  );
};

const Timeline = ({ phases }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
    {phases.map((p, i) => (
      <div key={i} className="relative bg-card/60 rounded-lg border border-border border-t-2 border-t-accent p-3 sm:p-5">
        <span className="inline-block font-heading text-xs sm:text-sm font-bold text-accent bg-accent/10 rounded-full px-3 py-1 mb-3">{p.date}</span>
        {[{ t: "Техническое развитие", arr: p.tech }, { t: "Коммерческое развитие", arr: p.comm }].map((sec, k) => (
          <div key={k} className={k ? "mt-3" : ""}>
            <p className="font-heading text-[10px] sm:text-xs font-bold text-foreground/60 uppercase tracking-wider mb-1.5">{sec.t}</p>
            <div className="space-y-1.5">
              {fmtList(sec.arr).map((it, j) => (
                <div key={j} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full shrink-0 bg-accent mt-1.5 md:mt-2" />
                  <p className="font-body text-xs sm:text-sm text-foreground/85 leading-snug">{it}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);

const Stats = ({ items }) => (
  <div className={cn("grid gap-2.5 sm:gap-4", items.length === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4")}>
    {items.map((s, i) => (
      <div key={i} className="bg-card rounded-lg border border-border border-t-2 border-t-accent p-3 sm:p-5 text-center">
        <p className="font-heading text-2xl sm:text-4xl font-bold text-accent leading-none">{s.v}</p>
        <p className="font-body text-[11px] sm:text-sm text-muted-foreground mt-1.5 leading-snug">{s.l}</p>
      </div>
    ))}
  </div>
);

const Person = ({ stats }) => (
  <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3 sm:gap-5">
    <img src={`${PUB}${LECTURER.photo}`} alt={LECTURER.name}
      className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-accent/30 shrink-0" data-testid="ni-person-photo" />
    <div className="grid grid-cols-4 gap-2 sm:gap-3 flex-1 w-full">
      {stats.map((s, i) => (
        <div key={i} className="bg-card rounded-lg border border-border border-t-2 border-t-accent p-2 sm:p-4 text-center flex flex-col justify-center">
          <p className="font-heading text-xl sm:text-3xl font-bold text-accent leading-none">{s.v}</p>
          <p className="font-body text-[10px] sm:text-xs text-muted-foreground mt-1 leading-snug">{s.l}</p>
        </div>
      ))}
    </div>
  </div>
);

const Contacts = ({ items }) => (
  <div className="bg-card rounded-lg border border-border border-l-4 border-l-accent p-3 sm:p-4 mt-auto flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
    <div className="flex items-center gap-3 shrink-0">
      <img src={`${PUB}${LECTURER.photo}`} alt={LECTURER.name}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-accent/30" data-testid="ni-contacts-photo" />
      <div>
        <p className="font-heading text-sm sm:text-base font-bold text-foreground leading-tight">{LECTURER.name}</p>
        <p className="font-body text-[11px] sm:text-sm text-muted-foreground">{LECTURER.role}</p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 sm:gap-y-1.5 flex-1">
      {items.map((c, i) => (
        <div key={i} className="flex items-baseline gap-2">
          <span className="font-heading text-[10px] sm:text-xs font-bold text-accent uppercase tracking-wider w-16 shrink-0">{c.label}</span>
          <span className="font-body text-xs sm:text-sm text-foreground/90">{c.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const Shot = ({ src, alt }) => (
  <div className="flex justify-center shrink-0">
    <img src={`${PUB}${src}`} alt={alt}
      className="max-w-full max-h-[48vh] object-contain rounded-xl border border-border shadow-2xl" data-testid="ni-shot" />
  </div>
);

const Block = ({ b }) => {
  switch (b.k) {
    case "lead": return <Lead>{b.text}</Lead>;
    case "note": return <Note>{b.text}</Note>;
    case "callout": return <Callout title={b.title} text={b.text} />;
    case "quote": return <Quote text={b.text} />;
    case "shot": return <Shot src={b.src} alt={b.alt} />;
    case "bul": return <Bullets eyebrow={b.eyebrow} items={b.items} cols={b.cols} />;
    case "cards": return <Cards items={b.items} cols={b.cols} />;
    case "columns": return <Columns items={b.items} />;
    case "funnel": return <Funnel {...b} />;
    case "timeline": return <Timeline phases={b.phases} />;
    case "stats": return <Stats items={b.items} />;
    case "person": return <Person stats={b.stats} />;
    case "contacts": return <Contacts items={b.items} />;
    default: return null;
  }
};

export const NIStandardSlide = ({ slide, num }) => {
  const dense = isDense(slide);
  const sp = dense ? "space-y-2 sm:space-y-3 md:space-y-4" : "space-y-3 sm:space-y-4 md:space-y-6";
  return (
    <DenseCtx.Provider value={dense}>
      <NIShell number={num} label={slide.label}>
        <H2 t={slide.t} a={slide.a} />
        <div className={cn(sp, "flex-1 flex flex-col")}>
          {slide.blocks.map((b, i) => <Block key={i} b={b} />)}
        </div>
      </NIShell>
    </DenseCtx.Provider>
  );
};
