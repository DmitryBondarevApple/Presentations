import { useState, useEffect, useCallback, useRef } from "react";
import TASlide01Cover from "@/components/trackers-slides/TASlide01Cover";
import TASlide02About from "@/components/trackers-slides/TASlide02About";
import TASlide03Tracker from "@/components/trackers-slides/TASlide03Tracker";
import TASlide04Speaker from "@/components/trackers-slides/TASlide04Speaker";
import TASlide05WhatIs from "@/components/trackers-slides/TASlide05WhatIs";
import TASlide06NotJust from "@/components/trackers-slides/TASlide06NotJust";
import TASlide07Example from "@/components/trackers-slides/TASlide07Example";
import TASlide08ThreeProps from "@/components/trackers-slides/TASlide08ThreeProps";
import TASlide09Hypothesis from "@/components/trackers-slides/TASlide09Hypothesis";
import TASlide10Lifecycle from "@/components/trackers-slides/TASlide10Lifecycle";
import TASlide11WhyNotRounds from "@/components/trackers-slides/TASlide11WhyNotRounds";
import TASlide12ProblemDisc from "@/components/trackers-slides/TASlide12ProblemDisc";
import TASlide13CustomerDisc from "@/components/trackers-slides/TASlide13CustomerDisc";
import TASlide14MVP from "@/components/trackers-slides/TASlide14MVP";
import TASlide15PMF from "@/components/trackers-slides/TASlide15PMF";
import TASlide16Efficiency from "@/components/trackers-slides/TASlide16Efficiency";
import TASlide17Danger from "@/components/trackers-slides/TASlide17Danger";
import TASlide18KPI from "@/components/trackers-slides/TASlide18KPI";
import TASlide19AARRR from "@/components/trackers-slides/TASlide19AARRR";
import TASlide20Money from "@/components/trackers-slides/TASlide20Money";
import TASlide21Success from "@/components/trackers-slides/TASlide21Success";
import TASlide22HowToLook from "@/components/trackers-slides/TASlide22HowToLook";
import TASlide23NegCases from "@/components/trackers-slides/TASlide23NegCases";
import TASlide24Failures from "@/components/trackers-slides/TASlide24Failures";
import TASlide25Mistakes from "@/components/trackers-slides/TASlide25Mistakes";
import TASlide26Exercise from "@/components/trackers-slides/TASlide26Exercise";
import TASlide27Questions from "@/components/trackers-slides/TASlide27Questions";
import TASlide28Debrief from "@/components/trackers-slides/TASlide28Debrief";
import TASlide29Conclusion from "@/components/trackers-slides/TASlide29Conclusion";
import TASlide30Finals from "@/components/trackers-slides/TASlide30Finals";
import TASlide31Formula from "@/components/trackers-slides/TASlide31Formula";
import TASlide32Last from "@/components/trackers-slides/TASlide32Last";
import TASlide33EmCover from "@/components/trackers-slides/TASlide33EmCover";
import TASlide34Known from "@/components/trackers-slides/TASlide34Known";
import TASlide35Focus from "@/components/trackers-slides/TASlide35Focus";
import TASlide36Path from "@/components/trackers-slides/TASlide36Path";
import TASlide37TrackerShift from "@/components/trackers-slides/TASlide37TrackerShift";
import TASlide37Map from "@/components/trackers-slides/TASlide37Map";
import TASlide38Idea from "@/components/trackers-slides/TASlide38Idea";
import TASlide39Problem from "@/components/trackers-slides/TASlide39Problem";
import TASlide40Market from "@/components/trackers-slides/TASlide40Market";
import TASlide41Req from "@/components/trackers-slides/TASlide41Req";
import TASlide42Emergent from "@/components/trackers-slides/TASlide42Emergent";
import TASlide43Team from "@/components/trackers-slides/TASlide43Team";
import TASlide45TrackerQs from "@/components/trackers-slides/TASlide45TrackerQs";
import TASlide44Result from "@/components/trackers-slides/TASlide44Result";
import TASlide45System from "@/components/trackers-slides/TASlide45System";
import TASlide46Iteration from "@/components/trackers-slides/TASlide46Iteration";
import TASlide47Evolution from "@/components/trackers-slides/TASlide47Evolution";
import TASlide48DomainValue from "@/components/trackers-slides/TASlide48DomainValue";
import TASlide49Environments from "@/components/trackers-slides/TASlide49Environments";
import TASlide50Pipeline from "@/components/trackers-slides/TASlide50Pipeline";
import TASlide53NewRisks from "@/components/trackers-slides/TASlide53NewRisks";
import TASlide51HumanRole from "@/components/trackers-slides/TASlide51HumanRole";
import { preGenerateTrackersPdfs } from "@/components/TrackersPdfGenerator";

const slides = [
  TASlide01Cover, TASlide02About, TASlide03Tracker, TASlide04Speaker,
  TASlide05WhatIs, TASlide06NotJust, TASlide07Example, TASlide08ThreeProps,
  TASlide09Hypothesis, TASlide10Lifecycle, TASlide11WhyNotRounds, TASlide12ProblemDisc,
  TASlide13CustomerDisc, TASlide14MVP, TASlide15PMF, TASlide16Efficiency,
  TASlide17Danger, TASlide18KPI, TASlide19AARRR, TASlide20Money,
  TASlide21Success, TASlide22HowToLook, TASlide23NegCases, TASlide24Failures,
  TASlide25Mistakes, TASlide26Exercise, TASlide27Questions, TASlide28Debrief,
  TASlide29Conclusion, TASlide30Finals, TASlide31Formula, TASlide32Last,
  TASlide33EmCover, TASlide34Known, TASlide35Focus, TASlide36Path,
  TASlide37TrackerShift, TASlide37Map, TASlide38Idea, TASlide39Problem,
  TASlide40Market, TASlide41Req, TASlide42Emergent, TASlide43Team,
  TASlide45TrackerQs, TASlide44Result, TASlide45System, TASlide46Iteration,
  TASlide47Evolution, TASlide48DomainValue, TASlide49Environments, TASlide50Pipeline,
  TASlide53NewRisks, TASlide51HumanRole,
];
const TOTAL = slides.length;

export default function TrackersPresentation() {
  const [current, setCurrent] = useState(0);
  const [pdfUrls, setPdfUrls] = useState(null);
  const [pdfLoading, setPdfLoading] = useState(true);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.title = "Введение в стартапы — Академия трекеров";
    return () => { document.title = "Presentations"; };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const urls = { light: null, dark: null };
    setPdfLoading(true);
    preGenerateTrackersPdfs()
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
    <div className="h-[100dvh] w-full flex flex-col" style={{ backgroundColor: "#ffffff" }} data-testid="ta-presentation">
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-0"><Slide /></div>
      </div>
      <div className="shrink-0 flex items-center justify-between px-3 sm:px-4 md:px-8 py-1.5 sm:py-2 md:py-3 relative z-20"
        style={{ borderTop: "1px solid #e5e5e5", backgroundColor: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)" }}>
        <button onClick={() => go(-1)} disabled={current === 0}
          className="px-2 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm md:text-base font-medium disabled:opacity-20 transition-opacity"
          style={{ color: "#71717a" }} data-testid="ta-prev-btn">Назад</button>
        <div className="flex items-center gap-1 sm:gap-1.5">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-all"
              style={{ backgroundColor: i === current ? "#0a0a0a" : "#d4d4d8", transform: i === current ? "scale(1.3)" : "scale(1)" }}
              data-testid={`ta-dot-${i}`} />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="relative" ref={menuRef}>
            <button onClick={() => { if (pdfUrls) setShowThemeMenu(v => !v); }}
              disabled={pdfLoading}
              className="px-2 py-1 sm:px-3 sm:py-1.5 rounded text-xs sm:text-sm font-medium disabled:opacity-40 transition-opacity"
              style={{ color: "#0a0a0a", border: "1px solid #e5e5e5" }} data-testid="ta-pdf-btn">
              {pdfLoading ? (
                <span className="flex items-center gap-1.5">
                  <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  PDF
                </span>
              ) : "PDF"}
            </button>
            {showThemeMenu && pdfUrls && (
              <div className="absolute bottom-full right-0 mb-2 rounded-lg shadow-xl overflow-hidden min-w-[170px] z-50"
                style={{ backgroundColor: "#ffffff", border: "1px solid #e5e5e5" }}>
                <a href={pdfUrls.light} download="Trackers_Light.pdf"
                  onClick={() => setTimeout(() => setShowThemeMenu(false), 800)}
                  className="block w-full px-4 py-2.5 text-left text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2.5 no-underline"
                  style={{ color: "#0a0a0a" }}>
                  <svg className="w-4 h-4 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
                  Светлая тема
                </a>
                <a href={pdfUrls.dark} download="Trackers_Dark.pdf"
                  onClick={() => setTimeout(() => setShowThemeMenu(false), 800)}
                  className="block w-full px-4 py-2.5 text-left text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2.5 no-underline"
                  style={{ color: "#0a0a0a", borderTop: "1px solid #e5e5e5" }}>
                  <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                  Тёмная тема
                </a>
              </div>
            )}
          </div>
          <button onClick={() => go(1)} disabled={current === TOTAL - 1}
            className="px-2 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm md:text-base font-medium disabled:opacity-20 transition-opacity"
            style={{ color: "#0a0a0a" }} data-testid="ta-next-btn">Далее</button>
        </div>
      </div>
    </div>
  );
}
