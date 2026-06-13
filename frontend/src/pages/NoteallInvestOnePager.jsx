import React, { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2, ChevronDown } from "lucide-react";
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { generateNoteallInvestOnePagerPdf } from "@/components/NoteallInvestOnePagerPdf";
import { HEAD, SECTIONS, FOUNDER_PHOTO } from "@/data/noteallInvestOnePager";

const PUB = process.env.PUBLIC_URL || "";
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/* Тёмная палитра — 1:1 с PDF (dark) */
const C = {
  bg: "#0a1118", cell: "#111c26", inner: "#0a1118", border: "#1c2a3a",
  fg: "#f0f4f8", fg2: "#c0ccd8", muted: "#8a9aab", dim: "#5a6d7e", accent: "#15b89b",
  accentBg: "rgba(21,184,155,0.14)",
};

const Sec = ({ label, title, children }) => (
  <div className="flex flex-col min-w-0 h-full">
    <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase mb-1.5" style={{ color: C.accent }}>{label}</p>
    {title && <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 leading-tight" style={{ color: C.fg }}>{title}</h3>}
    <div className="flex-1 min-h-0">{children}</div>
  </div>
);

const Dot = ({ children }) => (
  <div className="flex items-start gap-1.5">
    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full mt-[5px] md:mt-1.5 shrink-0" style={{ background: C.accent }} />
    <span className="text-[10px] sm:text-xs md:text-sm leading-snug" style={{ color: C.fg2 }}>{children}</span>
  </div>
);

export default function NoteallInvestOnePager() {
  const [pdfLoading, setPdfLoading] = useState(false);
  useEffect(() => {
    document.title = "Noteall — Инвест One Pager";
    return () => { document.title = "Presentations"; };
  }, []);

  const handlePdf = useCallback(async (theme) => {
    setPdfLoading(true);
    try { await generateNoteallInvestOnePagerPdf(theme); } catch (e) { console.error("OnePager PDF failed:", e); }
    setPdfLoading(false);
  }, []);

  const { problem, solution, market, model, gtm, stage, round, team } = SECTIONS;
  const arppuM = (market.arppu.find((a) => a.k.includes("ARPPU") && a.k.includes("мес")) || {}).v;
  const arppuY = (market.arppu.find((a) => a.k.includes("ARPPU") && a.k.includes("год")) || {}).v;
  const artifactShort = solution.artifact.split(":")[0];
  const s0 = stage.items[0];
  const s0a = s0.split(" ")[0];
  const s0b = cap(s0.slice(s0.indexOf(" ") + 1));
  const s1 = stage.items[1].split(" — ");
  const s2 = stage.items[2];
  const s2a = s2.split(" ")[0];
  const s2b = cap(s2.slice(s2.indexOf(" ") + 1));

  const cellStyle = { background: C.cell, border: `0.5px solid ${C.border}` };

  return (
    <div className="w-screen h-[100dvh] overflow-hidden flex flex-col" style={{ background: C.bg, color: C.fg }} data-testid="ni-onepager">
      {/* ═══ HEADER ═══ */}
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-2.5 md:py-3 shrink-0" style={{ borderBottom: `0.5px solid ${C.border}` }}>
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <img src={`${PUB}/images/noteall/logo-noteall.png`} alt="Noteall" className="h-6 md:h-8 shrink-0" data-testid="niop-logo" />
          <div className="hidden sm:block w-px h-7 shrink-0" style={{ background: C.border }} />
          <div className="hidden sm:flex flex-col min-w-0">
            <p className="text-sm md:text-base font-bold leading-tight" style={{ color: C.fg }}>{HEAD.title}</p>
            <div className="flex gap-3 mt-0.5" style={{ color: C.muted }}>
              <span className="text-[10px] md:text-xs">{HEAD.tg}</span>
              <span className="text-[10px] md:text-xs">{HEAD.email}</span>
              <span className="text-[10px] md:text-xs">{HEAD.phone}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase" style={{ color: C.accent }}>One Pager</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" disabled={pdfLoading} data-testid="niop-pdf-btn"
                className="h-7 md:h-8 gap-1.5 bg-transparent" style={{ borderColor: C.accent, color: C.accent }}>
                {pdfLoading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
                <span className="hidden md:inline text-xs">PDF</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-testid="niop-pdf-menu">
              <DropdownMenuItem onClick={() => handlePdf("dark")} data-testid="niop-pdf-dark">Тёмная тема</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handlePdf("light")} data-testid="niop-pdf-light">Светлая тема</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* ═══ GRID ═══ */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-2 p-2 md:p-3 min-h-0 overflow-auto md:overflow-hidden">

        {/* ROW 1 */}
        <div className="rounded-md p-3 md:p-4 overflow-hidden" style={cellStyle}>
          <Sec label={problem.label} title={problem.title}>
            <p className="text-[10px] sm:text-xs md:text-sm leading-snug" style={{ color: C.muted }}>{problem.paras[0]}</p>
            <p className="text-[10px] md:text-xs font-semibold leading-snug mt-2" style={{ color: C.accent }}>{problem.loss}</p>
          </Sec>
        </div>

        <div className="rounded-md p-3 md:p-4 overflow-hidden" style={cellStyle}>
          <Sec label={solution.label} title={solution.title}>
            <div className="space-y-1 md:space-y-1.5">
              {solution.items.slice(0, 5).map((it, i) => <Dot key={i}>{cap(it)}</Dot>)}
            </div>
            <p className="text-[10px] md:text-xs font-semibold mt-2 leading-snug" style={{ color: C.accent }}>{artifactShort}</p>
          </Sec>
        </div>

        <div className="rounded-md p-3 md:p-4 overflow-hidden" style={cellStyle}>
          <Sec label={market.label} title={market.title}>
            <div className="space-y-1.5">
              {market.tiers.map((tr, i) => {
                const hi = tr.name === "SOM";
                return (
                  <div key={i} className="flex justify-between items-center rounded px-1 py-0.5"
                    style={hi ? { background: C.accentBg, marginLeft: -4, marginRight: -4, paddingLeft: 6, paddingRight: 6 } : {}}>
                    <span className="text-[10px] md:text-sm" style={{ color: hi ? C.fg : C.muted, fontWeight: hi ? 600 : 400 }}>{tr.name} {tr.co}</span>
                    <span className="text-sm md:text-base font-bold whitespace-nowrap" style={{ color: C.accent }}>{tr.val.replace(" / год", "")}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-5 mt-2.5 pt-2.5" style={{ borderTop: `0.5px solid ${C.border}` }}>
              <div><p className="text-[9px] md:text-xs" style={{ color: C.muted }}>ARPPU/мес.</p><p className="text-sm md:text-base font-bold" style={{ color: C.accent }}>{arppuM}</p></div>
              <div><p className="text-[9px] md:text-xs" style={{ color: C.muted }}>ARPPU/год</p><p className="text-sm md:text-base font-bold" style={{ color: C.accent }}>{arppuY}</p></div>
            </div>
          </Sec>
        </div>

        {/* ROW 2 */}
        <div className="rounded-md p-3 md:p-4 overflow-hidden" style={cellStyle}>
          <Sec label={model.label} title={model.title}>
            <p className="text-xs md:text-sm font-bold mb-2" style={{ color: C.accent }}>{model.blocks[0].name}</p>
            <div className="space-y-1.5">
              {model.blocks[0].items.map((it, i) => <Dot key={i}>{cap(it)}</Dot>)}
            </div>
          </Sec>
        </div>

        <div className="rounded-md p-3 md:p-4 overflow-hidden" style={cellStyle}>
          <Sec label={gtm.label} title={gtm.title}>
            <div className="space-y-2">
              {gtm.blocks.map((b, i) => (
                <div key={i} className="rounded p-2.5 flex items-center gap-2.5" style={{ background: C.inner, border: `0.5px solid ${C.border}` }}>
                  <span className="text-base md:text-lg font-bold" style={{ color: C.accent }}>{`0${i + 1}`}</span>
                  <span className="text-[11px] md:text-sm font-bold" style={{ color: C.fg }}>{b.name}</span>
                </div>
              ))}
            </div>
          </Sec>
        </div>

        <div className="rounded-md p-3 md:p-4 overflow-hidden" style={cellStyle}>
          <Sec label={round.label}>
            <p className="text-2xl md:text-3xl font-bold leading-none mb-1.5" style={{ color: C.accent }}>{round.amount}</p>
            <p className="text-[10px] md:text-xs mb-2.5" style={{ color: C.muted }}>{round.burn}</p>
            <p className="text-[9px] md:text-[10px] font-bold mb-2" style={{ color: C.accent }}>Цели на 6 месяцев</p>
            <div className="flex gap-2 mb-2.5">
              {round.metrics.map((m, i) => (
                <div key={i} className="text-center flex-1">
                  <span className="text-base md:text-lg font-bold leading-none" style={{ color: C.accent }}>{m.n}</span>
                  <p className="text-[9px] md:text-[10px] mt-0.5" style={{ color: C.muted }}>{m.l}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] md:text-xs pt-2" style={{ color: C.fg2, borderTop: `0.5px solid ${C.border}` }}>{round.funds.map((b) => b.name).join("  ·  ")}</p>
          </Sec>
        </div>

        {/* ROW 3 */}
        <div className="rounded-md p-3 md:p-4 overflow-hidden md:col-span-2" style={cellStyle}>
          <Sec label={team.label}>
            <div className="flex gap-3 md:gap-4">
              <img src={`${PUB}${FOUNDER_PHOTO}`} alt={team.name}
                className="w-14 h-14 md:w-16 md:h-16 rounded-lg object-cover shrink-0" style={{ border: `1px solid ${C.accentBg}` }} data-testid="niop-founder" />
              <div className="min-w-0 flex-1">
                <p className="text-sm md:text-base font-bold leading-tight mb-2" style={{ color: C.fg }}>{team.name}</p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {team.stats.map((s, i) => (
                    <span key={i} className="px-1.5 py-0.5 rounded text-[9px] md:text-[10px] font-bold uppercase whitespace-nowrap" style={{ background: C.accentBg, color: C.accent }}>{s.v} {s.l}</span>
                  ))}
                </div>
                <p className="text-xs md:text-sm leading-snug" style={{ color: C.fg2 }}>{team.note}</p>
              </div>
            </div>
          </Sec>
        </div>

        <div className="rounded-md p-3 md:p-4 overflow-hidden" style={cellStyle}>
          <Sec label={stage.label} title={stage.title}>
            <div className="flex gap-2 mb-2.5">
              <div className="rounded p-2 flex-1 text-center" style={{ background: C.inner, border: `2px solid ${C.accent}` }}>
                <span className="text-base md:text-lg font-bold leading-none" style={{ color: C.accent }}>{s0a}</span>
                <p className="text-[9px] md:text-xs mt-1" style={{ color: C.fg2 }}>{s0b}</p>
              </div>
              <div className="rounded p-2 flex-[1.4] flex items-center" style={{ background: C.inner, border: `0.5px solid ${C.border}` }}>
                <p className="text-[10px] md:text-xs leading-snug" style={{ color: C.muted }}>{s1[0]} — <span className="font-semibold" style={{ color: C.accent }}>{s1[1]}</span></p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xl md:text-2xl font-bold leading-none" style={{ color: C.accent }}>{s2a}</span>
              <span className="text-[10px] md:text-xs font-semibold leading-snug" style={{ color: C.accent }}>{s2b}</span>
            </div>
          </Sec>
        </div>
      </div>
    </div>
  );
}
