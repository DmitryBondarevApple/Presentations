import { useState, useEffect, useCallback, useRef } from "react";
import SMSlide01Cover from "@/components/startup-market-slides/SMSlide01Cover";
import SMSlide02Conclusion from "@/components/startup-market-slides/SMSlide02Conclusion";
import SMSlide03Method from "@/components/startup-market-slides/SMSlide03Method";
import SMSlide04Analysis from "@/components/startup-market-slides/SMSlide04Analysis";
import SMSlide05OneScale from "@/components/startup-market-slides/SMSlide05OneScale";
import SMSlide06ThreeIndicators from "@/components/startup-market-slides/SMSlide06ThreeIndicators";
import SMSlide07Integral from "@/components/startup-market-slides/SMSlide07Integral";
import SMSlide08Investors from "@/components/startup-market-slides/SMSlide08Investors";
import SMSlide09Corporate from "@/components/startup-market-slides/SMSlide09Corporate";
import SMSlide10Comparison from "@/components/startup-market-slides/SMSlide10Comparison";
import SMSlide11Cybersecurity from "@/components/startup-market-slides/SMSlide11Cybersecurity";
import SMSlide12Qualitative from "@/components/startup-market-slides/SMSlide12Qualitative";
import SMSlide13Maturity from "@/components/startup-market-slides/SMSlide13Maturity";
import SMSlide14CheckInvestors from "@/components/startup-market-slides/SMSlide14CheckInvestors";
import SMSlide15CheckCorporate from "@/components/startup-market-slides/SMSlide15CheckCorporate";
import SMSlide16CheckInstitutions from "@/components/startup-market-slides/SMSlide16CheckInstitutions";
import SMSlide17CorpExit from "@/components/startup-market-slides/SMSlide17CorpExit";
import SMSlide18AIML from "@/components/startup-market-slides/SMSlide18AIML";
import SMSlide19Typology from "@/components/startup-market-slides/SMSlide19Typology";
import SMSlide20EnterpriseSaaS from "@/components/startup-market-slides/SMSlide20EnterpriseSaaS";
import SMSlide21Hybrid from "@/components/startup-market-slides/SMSlide21Hybrid";
import SMSlide22Industrial from "@/components/startup-market-slides/SMSlide22Industrial";
import SMSlide23RecInvestors from "@/components/startup-market-slides/SMSlide23RecInvestors";
import SMSlide24RecCorporate from "@/components/startup-market-slides/SMSlide24RecCorporate";
import SMSlide25RecInstitutions from "@/components/startup-market-slides/SMSlide25RecInstitutions";
import SMSlide26RecStartups from "@/components/startup-market-slides/SMSlide26RecStartups";
import SMSlide27Final from "@/components/startup-market-slides/SMSlide27Final";
import { preGenerateStartupMarketPdfs } from "@/components/StartupMarketPdfGenerator";

const slides = [
  SMSlide01Cover, SMSlide02Conclusion, SMSlide03Method, SMSlide04Analysis,
  SMSlide05OneScale, SMSlide06ThreeIndicators, SMSlide07Integral, SMSlide08Investors,
  SMSlide09Corporate, SMSlide10Comparison, SMSlide11Cybersecurity, SMSlide12Qualitative,
  SMSlide13Maturity, SMSlide14CheckInvestors, SMSlide15CheckCorporate, SMSlide16CheckInstitutions,
  SMSlide17CorpExit, SMSlide18AIML, SMSlide19Typology, SMSlide20EnterpriseSaaS,
  SMSlide21Hybrid, SMSlide22Industrial, SMSlide23RecInvestors, SMSlide24RecCorporate,
  SMSlide25RecInstitutions, SMSlide26RecStartups, SMSlide27Final,
];
const TOTAL = slides.length;

export default function StartupMarketPresentation() {
  const [current, setCurrent] = useState(0);
  const [pdfUrls, setPdfUrls] = useState(null);
  const [pdfLoading, setPdfLoading] = useState(true);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.title = "Рынок стартапов в России — Hop.Agency × Startup Drive";
    return () => { document.title = "Презентации — Hop.Agency"; };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const urls = { light: null, dark: null };
    setPdfLoading(true);
    preGenerateStartupMarketPdfs()
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
    setCurrent(p => Math.max(0, Math.min(TOTAL - 1, p + dir)));
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
    <div className="h-[100dvh] w-full flex flex-col" style={{ backgroundColor: "#F7F5EF" }} data-testid="sm-presentation">
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-0"><Slide /></div>
      </div>
      <div className="shrink-0 flex items-center justify-between px-3 sm:px-4 md:px-8 py-1.5 sm:py-2 md:py-3 relative z-20"
        style={{ borderTop: "1px solid #D8D2C4", backgroundColor: "rgba(247,245,239,0.9)", backdropFilter: "blur(8px)" }}>
        <button onClick={() => go(-1)} disabled={current === 0}
          className="px-2 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm md:text-base font-medium disabled:opacity-20 transition-opacity"
          style={{ color: "#6B6256" }} data-testid="sm-prev-btn">Назад</button>
        <div className="flex items-center gap-1 sm:gap-1.5">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-all"
              style={{ backgroundColor: i === current ? "#1B3A5B" : "#D8D2C4", transform: i === current ? "scale(1.3)" : "scale(1)" }}
              data-testid={`sm-dot-${i}`} />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="relative" ref={menuRef}>
            <button onClick={() => { if (pdfUrls) setShowThemeMenu(v => !v); }}
              disabled={pdfLoading}
              className="px-2 py-1 sm:px-3 sm:py-1.5 rounded text-xs sm:text-sm font-medium disabled:opacity-40 transition-opacity"
              style={{ color: "#20242B", border: "1px solid #D8D2C4" }} data-testid="sm-pdf-btn">
              {pdfLoading ? (
                <span className="flex items-center gap-1.5">
                  <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  PDF
                </span>
              ) : "PDF"}
            </button>
            {showThemeMenu && pdfUrls && (
              <div className="absolute bottom-full right-0 mb-2 rounded-lg shadow-xl overflow-hidden min-w-[170px] z-50"
                style={{ backgroundColor: "#ffffff", border: "1px solid #D8D2C4" }}>
                <a href={pdfUrls.light} download="Рынок_стартапов_Light.pdf"
                  onClick={() => setTimeout(() => setShowThemeMenu(false), 800)}
                  className="block w-full px-4 py-2.5 text-left text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2.5 no-underline"
                  style={{ color: "#20242B" }} data-testid="sm-pdf-light">
                  <svg className="w-4 h-4 shrink-0" style={{ color: "#B5612A" }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
                  Светлая тема
                </a>
                <a href={pdfUrls.dark} download="Рынок_стартапов_Dark.pdf"
                  onClick={() => setTimeout(() => setShowThemeMenu(false), 800)}
                  className="block w-full px-4 py-2.5 text-left text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2.5 no-underline"
                  style={{ color: "#20242B", borderTop: "1px solid #D8D2C4" }} data-testid="sm-pdf-dark">
                  <svg className="w-4 h-4 shrink-0" style={{ color: "#1B3A5B" }} fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                  Тёмная тема
                </a>
              </div>
            )}
          </div>
          <button onClick={() => go(1)} disabled={current === TOTAL - 1}
            className="px-2 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm md:text-base font-medium disabled:opacity-20 transition-opacity"
            style={{ color: "#20242B" }} data-testid="sm-next-btn">Далее</button>
        </div>
      </div>
    </div>
  );
}
