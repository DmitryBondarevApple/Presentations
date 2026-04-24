import { useState, useEffect, useCallback, useRef } from "react";
import PBSlide01Cover from "@/components/perviy-bit-slides/PBSlide01Cover";
import PBSlide02Problem from "@/components/perviy-bit-slides/PBSlide02Problem";
import PBSlide03Root from "@/components/perviy-bit-slides/PBSlide03Root";
import PBSlide04Solution from "@/components/perviy-bit-slides/PBSlide04Solution";
import PBSlide05Analysis from "@/components/perviy-bit-slides/PBSlide05Analysis";
import PBSlide06Video from "@/components/perviy-bit-slides/PBSlide06Video";
import PBSlide07Diagnostic from "@/components/perviy-bit-slides/PBSlide07Diagnostic";
import PBSlide08TZ from "@/components/perviy-bit-slides/PBSlide08TZ";
import PBSlide09KP from "@/components/perviy-bit-slides/PBSlide09KP";
import PBSlide10Cost from "@/components/perviy-bit-slides/PBSlide10Cost";
import PBSlide11Time from "@/components/perviy-bit-slides/PBSlide11Time";
import PBSlide12Scale from "@/components/perviy-bit-slides/PBSlide12Scale";
import PBSlide13CTA from "@/components/perviy-bit-slides/PBSlide13CTA";
import { preGeneratePerviyBitPdfs } from "@/components/PerviyBitPdfGenerator";

const slides = [
  PBSlide01Cover, PBSlide02Problem, PBSlide03Root, PBSlide04Solution,
  PBSlide05Analysis, PBSlide06Video, PBSlide07Diagnostic, PBSlide08TZ,
  PBSlide09KP, PBSlide10Cost, PBSlide11Time, PBSlide12Scale, PBSlide13CTA,
];

const TOTAL = slides.length;

export default function PerviyBitPresentation() {
  const [current, setCurrent] = useState(0);
  const [pdfUrls, setPdfUrls] = useState(null);
  const [pdfLoading, setPdfLoading] = useState(true);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.title = "Noteall x Первый Бит — Автоматизация пресейла";
    return () => { document.title = "Presentations"; };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const urls = { light: null, dark: null };
    setPdfLoading(true);
    preGeneratePerviyBitPdfs()
      .then(blobs => {
        if (cancelled) return;
        urls.light = URL.createObjectURL(blobs.light);
        urls.dark = URL.createObjectURL(blobs.dark);
        setPdfUrls(urls);
        setPdfLoading(false);
      })
      .catch(e => { console.error("PDF pre-gen failed:", e); if (!cancelled) setPdfLoading(false); });
    return () => {
      cancelled = true;
      if (urls.light) URL.revokeObjectURL(urls.light);
      if (urls.dark) URL.revokeObjectURL(urls.dark);
    };
  }, []);

  const go = useCallback((dir) => {
    setCurrent((p) => Math.max(0, Math.min(TOTAL - 1, p + dir)));
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); go(-1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    if (!showThemeMenu) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setShowThemeMenu(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showThemeMenu]);

  const Slide = slides[current];

  return (
    <div className="h-[100dvh] w-full flex flex-col bg-background" data-testid="pb-presentation">
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-0"><Slide /></div>
      </div>
      <div className="shrink-0 flex items-center justify-between px-3 sm:px-4 md:px-8 py-1.5 sm:py-2 md:py-3 border-t border-border bg-card/50 backdrop-blur-sm relative z-20">
        <button onClick={() => go(-1)} disabled={current === 0}
          className="px-2 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm md:text-base font-heading font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
          data-testid="pb-prev-btn">
          Назад
        </button>
        <div className="flex items-center gap-1 sm:gap-1.5">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${i === current ? 'bg-accent scale-125' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`}
              data-testid={`pb-dot-${i}`} />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => { if (pdfUrls) setShowThemeMenu(v => !v); }}
              disabled={pdfLoading}
              className="px-2 py-1 sm:px-3 sm:py-1.5 rounded text-xs sm:text-sm font-heading font-medium text-accent border border-accent/30 hover:bg-accent/10 disabled:opacity-50 transition-colors"
              data-testid="pb-pdf-btn">
              {pdfLoading ? (
                <span className="flex items-center gap-1.5">
                  <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  PDF
                </span>
              ) : "PDF"}
            </button>
            {showThemeMenu && pdfUrls && (
              <div className="absolute bottom-full right-0 mb-2 bg-card border border-border rounded-lg shadow-xl overflow-hidden min-w-[170px] z-50"
                data-testid="pb-theme-menu">
                <a href={pdfUrls.light}
                  download="Noteall_PerviyBit_Light.pdf"
                  onClick={() => setTimeout(() => setShowThemeMenu(false), 800)}
                  className="block w-full px-4 py-2.5 text-left text-sm font-medium text-foreground hover:bg-accent/10 transition-colors flex items-center gap-2.5 no-underline"
                  data-testid="pb-pdf-light">
                  <svg className="w-4 h-4 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  Светлая тема
                </a>
                <a href={pdfUrls.dark}
                  download="Noteall_PerviyBit_Dark.pdf"
                  onClick={() => setTimeout(() => setShowThemeMenu(false), 800)}
                  className="block w-full px-4 py-2.5 text-left text-sm font-medium text-foreground hover:bg-accent/10 transition-colors flex items-center gap-2.5 border-t border-border no-underline"
                  data-testid="pb-pdf-dark">
                  <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  Тёмная тема
                </a>
              </div>
            )}
          </div>
          <button onClick={() => go(1)} disabled={current === TOTAL - 1}
            className="px-2 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm md:text-base font-heading font-medium text-accent hover:text-accent/80 disabled:opacity-30 transition-colors"
            data-testid="pb-next-btn">
            Далее
          </button>
        </div>
      </div>
    </div>
  );
}
