import { cn } from "@/lib/utils";
import { createContext, useContext } from "react";
import { fmtList, fmtSteps, LECTURER, isDense } from "@/data/customerDevSlides";

const PUB = process.env.PUBLIC_URL || "";
export const CDTotal = createContext(50);
const DenseCtx = createContext(false);
const useDense = () => useContext(DenseCtx);

/* Единая типографика: один размер заголовка + два размера основного текста. */
const TITLE = "text-xl sm:text-3xl md:text-5xl";
const PB = "text-sm sm:text-base md:text-xl";        // основной размер
const SB = "text-[13px] sm:text-sm md:text-base";    // меньший размер (плотные слайды)
const body = (dense) => (dense ? SB : PB);

/* ── Slide shell ── */
export const CDShell = ({ children, number, label }) => {
  const total = useContext(CDTotal);
  return (
    <div className="w-full h-full flex flex-col relative bg-background">
      <div className="absolute top-0 right-0 w-80 h-80 opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, hsl(172 66% 45%), transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-60 h-60 opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle at bottom left, hsl(172 50% 30%), transparent 70%)" }} />
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 pt-3 md:pt-6 shrink-0 relative z-10">
        <span className="font-heading text-[10px] sm:text-xs md:text-sm tracking-[0.18em] text-accent uppercase font-semibold">{label}</span>
        <div className="flex items-center gap-3">
          <span className="font-body text-[10px] sm:text-xs md:text-sm text-muted-foreground/70 hidden sm:inline">Customer Development</span>
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
  <div className="bg-accent/10 border border-accent/30 border-l-4 border-l-accent rounded-lg px-3 sm:px-5 py-3 sm:py-4">
    <p className={cn("font-heading font-semibold text-foreground leading-snug sm:leading-relaxed", PB)}>{text}</p>
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

const Steps = ({ eyebrow, items }) => {
  const dense = useDense();
  return (
    <div>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <div className={cn(dense ? "space-y-1.5 sm:space-y-2" : "space-y-2 sm:space-y-2.5")}>
        {fmtSteps(items).map((it, i) => (
          <div key={i} className="flex items-start gap-2.5 sm:gap-3">
            <span className="font-heading font-bold text-accent/80 shrink-0 tabular-nums text-sm sm:text-base">{i + 1}.</span>
            <p className={cn("font-body text-foreground/85 leading-snug", body(dense))}>{it}</p>
          </div>
        ))}
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

const Formula = ({ text }) => (
  <div className="bg-accent/10 border border-accent/40 rounded-lg px-4 sm:px-6 py-3 sm:py-5 text-center">
    <p className={cn("font-heading font-bold text-accent leading-snug", PB)}>{text}</p>
  </div>
);

const Dialog = ({ items }) => {
  const dense = useDense();
  return (
    <div className="space-y-2 sm:space-y-2.5">
      {items.map((d, i) => {
        const client = d.role === "Клиент";
        return (
          <div key={i} className={cn("rounded-lg border p-2.5 sm:p-3.5 max-w-[88%]",
            client ? "bg-accent/5 border-accent/30 ml-auto" : "bg-card border-border")}>
            <p className={cn("font-heading text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1",
              client ? "text-accent text-right" : "text-muted-foreground")}>{d.role}</p>
            <p className={cn("font-body text-foreground/85 leading-snug", body(dense), client && "text-right")}>{d.text}</p>
          </div>
        );
      })}
    </div>
  );
};

const Contrast = ({ aLabel, bLabel, items }) => {
  const dense = useDense();
  return (
    <div className="space-y-2.5 sm:space-y-3">
      {items.map((c, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 items-stretch">
          <div className="bg-card/60 rounded-lg border border-border p-2.5 sm:p-3.5">
            <p className="font-heading text-[10px] sm:text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">{aLabel}</p>
            <p className={cn("font-body text-muted-foreground leading-snug", body(dense))}>{c.a}</p>
          </div>
          <div className="bg-card rounded-lg border border-border border-l-4 border-l-accent p-2.5 sm:p-3.5">
            <p className="font-heading text-[10px] sm:text-[11px] font-bold text-accent uppercase tracking-wider mb-1">{bLabel}</p>
            <p className={cn("font-body text-foreground/90 leading-snug", body(dense))}>{c.b}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Block = ({ b }) => {
  switch (b.k) {
    case "lead": return <Lead>{b.text}</Lead>;
    case "note": return <Note>{b.text}</Note>;
    case "callout": return <Callout title={b.title} text={b.text} />;
    case "quote": return <Quote text={b.text} />;
    case "bul": return <Bullets eyebrow={b.eyebrow} items={b.items} cols={b.cols} />;
    case "steps": return <Steps eyebrow={b.eyebrow} items={b.items} />;
    case "cards": return <Cards items={b.items} cols={b.cols} />;
    case "formula": return <Formula text={b.text} />;
    case "dialog": return <Dialog items={b.items} />;
    case "contrast": return <Contrast {...b} />;
    default: return null;
  }
};

const BookAside = ({ book, title }) => (
  <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-52 shrink-0 mx-auto lg:mx-0">
    <img src={`${PUB}${book}`} alt={title}
      className="w-full rounded-lg shadow-2xl border border-border" data-testid="cd-book-cover" />
    <p className="font-body text-[11px] sm:text-xs text-muted-foreground text-center leading-snug">{title}</p>
  </div>
);

export const Lecturer = ({ className }) => (
  <div className={cn("flex items-center gap-3 sm:gap-4", className)}>
    <img src={`${PUB}${LECTURER.photo}`} alt={LECTURER.name}
      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-accent/30 shrink-0" data-testid="cd-lecturer-photo" />
    <div>
      <p className="font-heading text-sm sm:text-base md:text-lg font-bold text-foreground leading-tight">{LECTURER.name}</p>
      <p className="font-body text-[11px] sm:text-sm text-muted-foreground leading-snug">{LECTURER.role}</p>
    </div>
  </div>
);

/* ── Standard content slide ── */
export const CDStandardSlide = ({ slide, num }) => {
  const dense = isDense(slide);
  const sp = dense ? "space-y-2 sm:space-y-3 md:space-y-4" : "space-y-3 sm:space-y-4 md:space-y-6";
  const content = (
    <div className={cn(sp, "flex-1 flex flex-col")}>
      {slide.blocks.map((b, i) => <Block key={i} b={b} />)}
      {slide.final && (
        <div className="pt-3 sm:pt-4 mt-2 border-t border-border">
          <Lecturer />
        </div>
      )}
    </div>
  );
  return (
    <DenseCtx.Provider value={dense}>
      <CDShell number={num} label={slide.label}>
        <H2 t={slide.t} a={slide.a} />
        {slide.aside ? (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-5 sm:gap-8 items-start">
            {content}
            <BookAside {...slide.aside} />
          </div>
        ) : content}
      </CDShell>
    </DenseCtx.Provider>
  );
};
