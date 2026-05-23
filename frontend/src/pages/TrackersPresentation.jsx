import { useState, useEffect, useCallback } from "react";
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

const slides = [
  TASlide01Cover, TASlide02About, TASlide03Tracker, TASlide04Speaker,
  TASlide05WhatIs, TASlide06NotJust, TASlide07Example, TASlide08ThreeProps,
  TASlide09Hypothesis, TASlide10Lifecycle, TASlide11WhyNotRounds, TASlide12ProblemDisc,
  TASlide13CustomerDisc, TASlide14MVP, TASlide15PMF, TASlide16Efficiency,
  TASlide17Danger, TASlide18KPI, TASlide19AARRR, TASlide20Money,
  TASlide21Success, TASlide22HowToLook, TASlide23NegCases, TASlide24Failures,
  TASlide25Mistakes, TASlide26Exercise, TASlide27Questions, TASlide28Debrief,
  TASlide29Conclusion, TASlide30Finals, TASlide31Formula, TASlide32Last,
];

const TOTAL = slides.length;

export default function TrackersPresentation() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    document.title = "Введение в стартапы — Академия трекеров";
    return () => { document.title = "Presentations"; };
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

  const Slide = slides[current];

  return (
    <div className="h-[100dvh] w-full flex flex-col" style={{ backgroundColor: "#ffffff" }} data-testid="ta-presentation">
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-0"><Slide /></div>
      </div>
      <div className="shrink-0 flex items-center justify-between px-3 sm:px-4 md:px-8 py-1.5 sm:py-2 md:py-3 relative z-20"
        style={{ borderTop: "1px solid #e5e5e5", backgroundColor: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)" }}>
        <button onClick={() => go(-1)} disabled={current === 0}
          className="px-2 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm md:text-base font-medium disabled:opacity-20 transition-opacity"
          style={{ color: "#71717a" }}
          data-testid="ta-prev-btn">
          Назад
        </button>
        <div className="flex items-center gap-1 sm:gap-1.5">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-all"
              style={{ backgroundColor: i === current ? "#0a0a0a" : "#d4d4d8", transform: i === current ? "scale(1.3)" : "scale(1)" }}
              data-testid={`ta-dot-${i}`} />
          ))}
        </div>
        <button onClick={() => go(1)} disabled={current === TOTAL - 1}
          className="px-2 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm md:text-base font-medium disabled:opacity-20 transition-opacity"
          style={{ color: "#0a0a0a" }}
          data-testid="ta-next-btn">
          Далее
        </button>
      </div>
    </div>
  );
}
