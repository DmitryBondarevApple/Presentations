import { useState, useEffect, useCallback, useRef } from "react";
import NPSlide01Cover from "@/components/noteall-product-slides/NPSlide01Cover";
import NPSlide02Problem from "@/components/noteall-product-slides/NPSlide02Problem";
import NPSlide03Solution from "@/components/noteall-product-slides/NPSlide03Solution";
import NPSlide04Output from "@/components/noteall-product-slides/NPSlide04Output";
import NPSlide05Speakers from "@/components/noteall-product-slides/NPSlide06Speakers";
import NPSlide06Scenarios from "@/components/noteall-product-slides/NPSlide07Scenarios";
import NPSlide07Visual from "@/components/noteall-product-slides/NPSlide08Visual";
import NPSlide08Sources from "@/components/noteall-product-slides/NPSlide09Sources";
import NPSlide09Sharing from "@/components/noteall-product-slides/NPSlide10Sharing";
import NPSlide10Research from "@/components/noteall-product-slides/NPSlide11Research";
import NPSlide11Segments from "@/components/noteall-product-slides/NPSlide12Segments";
import NPSlide12Comparison from "@/components/noteall-product-slides/NPSlide13Comparison";
import NPSlide13Growth from "@/components/noteall-product-slides/NPSlide13Growth";
import NPSlide14CTA from "@/components/noteall-product-slides/NPSlide15CTA";
import { preGenerateNoteAllProductPdfs, downloadBlob } from "@/components/NoteAllProductPdfGenerator";
import { SlideTotal } from "@/components/noteall-product-slides/NPSlideContainer";

const allSlides = [
  NPSlide01Cover, NPSlide02Problem, NPSlide03Solution, NPSlide04Output,
  NPSlide05Speakers, NPSlide06Scenarios, NPSlide07Visual, NPSlide08Sources,
  NPSlide09Sharing, NPSlide10Research, NPSlide11Segments, NPSlide12Comparison,
  NPSlide13Growth, NPSlide14CTA,
];

export default function NoteAllProductPresentation({ excludeSlide13 = false }) {
  const slides = excludeSlide13
    ? allSlides.filter(s => s !== NPSlide13Growth)
    : allSlides;
  const TOTAL = slides.length;

  const [current, setCurrent] = useState(0);
  const [pdfBlobs, setPdfBlobs] = useState(null);
  const [pdfLoading, setPdfLoading] = useState(true);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.title = excludeSlide13
      ? "Noteall — Возможности платформы"
      : "Noteall — Возможности платформы";
    return () => { document.title = "Presentations"; };
  }, [excludeSlide13]);

  /* Pre-generate both Light + Dark PDFs on mount */
  useEffect(() => {
    let cancelled = false;
    setPdfLoading(true);
    preGenerateNoteAllProductPdfs({ excludeSlide13 })
      .then(blobs => { if (!cancelled) { setPdfBlobs(blobs); setPdfLoading(false); } })
      .catch(e => { console.error("PDF pre-gen failed:", e); if (!cancelled) setPdfLoading(false); });
    return () => { cancelled = true; };
  }, [excludeSlide13]);

  const go = useCallback((dir) => {
    setCurrent(p => Math.max(0, Math.min(TOTAL - 1, p + dir)));
  }, [TOTAL]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); go(-1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  /* Close dropdown on outside click */
  useEffect(() => {
    if (!showThemeMenu) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setShowThemeMenu(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showThemeMenu]);

  const handleDownload = (theme) => {
    if (!pdfBlobs?.[theme]) return;
    const suffix = excludeSlide13 ? "_Short" : "";
    const label = theme === "light" ? "Light" : "Dark";
    downloadBlob(pdfBlobs[theme], `Noteall_Product${suffix}_${label}.pdf`);
    setShowThemeMenu(false);
  };

  const Slide = slides[current];

  return (
    <SlideTotal.Provider value={TOTAL}>
      <div className="h-[100dvh] w-full flex flex-col bg-background" data-testid="np-presentation">
        {/* Slide area */}
        <div className="flex-1 overflow-hidden relative">
          <div className="absolute inset-0"><Slide /></div>
        </div>

        {/* Bottom bar */}
        <div className="shrink-0 flex items-center justify-between px-3 sm:px-4 md:px-8 py-1.5 sm:py-2 md:py-3 border-t border-border bg-card/50 backdrop-blur-sm">
          <button onClick={() => go(-1)} disabled={current === 0}
            className="px-2 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm md:text-base font-heading font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
            data-testid="np-prev-btn">
            Назад
          </button>

          <div className="flex items-center gap-1 sm:gap-1.5">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${i === current ? "bg-accent scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                data-testid={`np-dot-${i}`} />
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* PDF button + theme dropdown */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => { if (pdfBlobs) setShowThemeMenu(v => !v); }}
                disabled={pdfLoading}
                className="px-2 py-1 sm:px-3 sm:py-1.5 rounded text-xs sm:text-sm font-heading font-medium text-accent border border-accent/30 hover:bg-accent/10 disabled:opacity-50 transition-colors"
                data-testid="np-pdf-btn">
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

              {showThemeMenu && (
                <div className="absolute bottom-full right-0 mb-2 bg-card border border-border rounded-lg shadow-xl overflow-hidden min-w-[170px] z-50"
                  data-testid="np-theme-menu">
                  <button onClick={() => handleDownload("light")}
                    className="w-full px-4 py-2.5 text-left text-sm font-medium text-foreground hover:bg-accent/10 transition-colors flex items-center gap-2.5"
                    data-testid="np-pdf-light">
                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                    Светлая тема
                  </button>
                  <button onClick={() => handleDownload("dark")}
                    className="w-full px-4 py-2.5 text-left text-sm font-medium text-foreground hover:bg-accent/10 transition-colors flex items-center gap-2.5 border-t border-border"
                    data-testid="np-pdf-dark">
                    <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    Тёмная тема
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => go(1)} disabled={current === TOTAL - 1}
              className="px-2 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm md:text-base font-heading font-medium text-accent hover:text-accent/80 disabled:opacity-30 transition-colors"
              data-testid="np-next-btn">
              Далее
            </button>
          </div>
        </div>
      </div>
    </SlideTotal.Provider>
  );
}
