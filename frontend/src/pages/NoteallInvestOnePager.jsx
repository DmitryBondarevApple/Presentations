import React, { useState, useCallback, useEffect } from "react";
import { Download, Loader2 } from "lucide-react";
import { generateNoteallInvestOnePagerPdf } from "@/components/NoteallInvestOnePagerPdf";
import { HEAD, SECTIONS, FOUNDER_PHOTO } from "@/data/noteallInvestOnePager";

const PUB = process.env.PUBLIC_URL || "";
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const Sec = ({ s, children }) => (
  <div className="bg-card rounded-lg border border-border border-l-[3px] border-l-accent p-2.5 sm:p-3 min-w-0">
    <p className="font-heading text-[9px] sm:text-[10px] font-bold tracking-[0.14em] text-accent uppercase">{s.label}</p>
    {s.title && <h3 className="font-heading text-[12px] sm:text-sm font-bold text-foreground leading-tight mt-0.5 mb-1.5">{s.title}</h3>}
    {children}
  </div>
);

const Bul = ({ children }) => (
  <div className="flex items-start gap-1.5">
    <div className="w-1 h-1 rounded-full bg-accent mt-[6px] shrink-0" />
    <span className="font-body text-[10px] sm:text-[11px] text-foreground/85 leading-snug">{children}</span>
  </div>
);

const Para = ({ children, className = "" }) => (
  <p className={`font-body text-[10px] sm:text-[11px] text-muted-foreground leading-snug ${className}`}>{children}</p>
);

const Mini = ({ b }) => (
  <div className="rounded-md border border-border border-l-2 border-l-accent bg-background/40 p-1.5">
    <p className="font-heading text-[10px] font-bold text-accent uppercase tracking-wide leading-tight mb-1">{b.name}</p>
    <div className="space-y-0.5">
      {b.items.map((it, i) => <Bul key={i}>{cap(it)}</Bul>)}
    </div>
  </div>
);

const ChipRow = ({ name }) => (
  <div className="rounded-md border border-border border-l-2 border-l-accent bg-background/40 px-2 py-1.5">
    <p className="font-heading text-[10px] sm:text-[11px] font-bold text-accent uppercase tracking-wide leading-tight">{name}</p>
  </div>
);

export default function NoteallInvestOnePager() {
  const [pdfLoading, setPdfLoading] = useState(false);
  useEffect(() => {
    document.title = "Noteall — Инвест One Pager";
    return () => { document.title = "Presentations"; };
  }, []);

  const handlePdf = useCallback(async () => {
    setPdfLoading(true);
    try { await generateNoteallInvestOnePagerPdf(); } catch (e) { console.error("OnePager PDF failed:", e); }
    setPdfLoading(false);
  }, []);

  const { problem, solution, product, market, model, gtm, stage, round, team } = SECTIONS;

  return (
    <div className="theme-noteall w-screen min-h-[100dvh] bg-background text-foreground flex flex-col" data-testid="ni-onepager">
      {/* HEADER */}
      <div className="flex items-start justify-between gap-3 px-3 sm:px-5 py-2.5 border-b border-border shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <img src={`${PUB}/images/noteall/logo-noteall.png`} alt="Noteall" className="h-6 sm:h-7 shrink-0" data-testid="niop-logo" />
          <div className="hidden sm:block w-px self-stretch bg-border" />
          <div className="min-w-0">
            <p className="font-heading text-[11px] sm:text-sm font-bold text-foreground leading-tight">{HEAD.title}</p>
            <p className="font-body text-[10px] sm:text-[11px] text-muted-foreground leading-snug mt-0.5 hidden sm:block">{HEAD.subtitle}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-heading text-[10px] sm:text-xs text-accent font-bold tracking-[0.16em] uppercase">One Pager</span>
            <button onClick={handlePdf} disabled={pdfLoading} data-testid="niop-pdf-btn"
              className="h-7 w-7 flex items-center justify-center rounded-full text-accent border border-accent/30 hover:bg-accent/10 disabled:opacity-50 transition-colors">
              {pdfLoading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
            </button>
          </div>
          <div className="hidden md:flex flex-col items-end gap-0.5 font-body text-[10px] text-muted-foreground">
            <span className="text-accent font-semibold">{HEAD.site}</span>
            <span>{HEAD.tg} · {HEAD.email}</span>
            <span>{HEAD.phone}</span>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-2.5 p-2.5 sm:p-3 items-start">
        {/* COL 1 — Проблема · Решение · Текущая стадия */}
        <div className="flex flex-col gap-2.5">
          <Sec s={problem}>
            <div className="space-y-1">
              {problem.paras.map((p, i) => <Para key={i}>{p}</Para>)}
              <p className="font-body text-[10px] sm:text-[11px] text-accent font-semibold leading-snug pt-0.5">{problem.loss}</p>
            </div>
          </Sec>
          <Sec s={solution}>
            <Para className="mb-1.5">{solution.intro}</Para>
            <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
              {solution.items.map((it, i) => <Bul key={i}>{cap(it)}</Bul>)}
            </div>
            <p className="font-body text-[10px] text-foreground/80 leading-snug mt-1.5 pt-1.5 border-t border-border">{solution.artifact}</p>
          </Sec>
          <Sec s={stage}>
            <div className="space-y-1">{stage.items.map((it, i) => <Bul key={i}>{cap(it)}</Bul>)}</div>
          </Sec>
        </div>

        {/* COL 2 — Продукт · Рынок · Команда */}
        <div className="flex flex-col gap-2.5">
          <Sec s={product}>
            <Para className="mb-1.5">{product.intro}</Para>
            <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">{product.items.map((it, i) => <Bul key={i}>{cap(it)}</Bul>)}</div>
          </Sec>
          <Sec s={market}>
            <Para className="mb-1.5">{market.intro}</Para>
            <div className="space-y-1">
              {market.tiers.map((t, i) => (
                <div key={i} className="flex items-center justify-between gap-2 rounded-md border border-border bg-background/40 px-2 py-1">
                  <span className="font-heading text-[11px] font-bold text-foreground">{t.name}<span className="font-body text-[9px] font-normal text-muted-foreground">  {t.co}</span></span>
                  <span className="font-heading text-[11px] font-bold text-accent whitespace-nowrap">{t.val}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 mt-1.5 pt-1.5 border-t border-border">
              {market.arppu.map((a, i) => (
                <div key={i} className="flex items-center justify-between gap-2">
                  <span className="font-body text-[9px] text-muted-foreground">{a.k}</span>
                  <span className="font-heading text-[10px] font-bold text-accent">{a.v}</span>
                </div>
              ))}
            </div>
          </Sec>
          <Sec s={team}>
            <div className="flex gap-2.5">
              <img src={`${PUB}${FOUNDER_PHOTO}`} alt={team.name}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover border border-accent/30 shrink-0" data-testid="niop-founder" />
              <div className="min-w-0">
                <p className="font-heading text-[11px] font-bold text-foreground leading-tight mb-1">{team.name}</p>
                <div className="flex flex-wrap gap-1">
                  {team.stats.map((s, i) => (
                    <span key={i} className="px-1.5 py-0.5 rounded bg-accent/10 text-accent text-[9px] font-bold whitespace-nowrap">{s.v} {s.l}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-0.5 mt-1.5">{team.exp.map((it, i) => <Bul key={i}>{cap(it)}</Bul>)}</div>
            <Para className="mt-1.5 pt-1.5 border-t border-border">{team.note}</Para>
          </Sec>
        </div>

        {/* COL 3 — Бизнес-модель · Go-to-market · Раунд */}
        <div className="flex flex-col gap-2.5">
          <Sec s={model}>
            <div className="space-y-1.5">{model.blocks.map((b, i) => <Mini key={i} b={b} />)}</div>
          </Sec>
          <Sec s={gtm}>
            <div className="space-y-1.5">{gtm.blocks.map((b, i) => <ChipRow key={i} name={b.name} />)}</div>
          </Sec>
          <Sec s={round}>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-heading text-xl sm:text-2xl font-bold text-accent leading-none">{round.amount}</span>
              <span className="font-body text-[10px] text-muted-foreground">{round.burn}</span>
            </div>
            <div className="space-y-1.5">
              {round.funds.map((b, i) => <ChipRow key={i} name={b.name} />)}
            </div>
            <p className="font-heading text-[9px] font-bold text-accent uppercase tracking-wide mt-2 mb-0.5">Цели на 6 месяцев</p>
            <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">{round.goals.map((it, i) => <Bul key={i}>{cap(it)}</Bul>)}</div>
          </Sec>
        </div>
      </div>
    </div>
  );
}
