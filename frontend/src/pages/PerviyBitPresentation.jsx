import { useState, useEffect, useCallback } from "react";
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

const slides = [
  PBSlide01Cover, PBSlide02Problem, PBSlide03Root, PBSlide04Solution,
  PBSlide05Analysis, PBSlide06Video, PBSlide07Diagnostic, PBSlide08TZ,
  PBSlide09KP, PBSlide10Cost, PBSlide11Time, PBSlide12Scale, PBSlide13CTA,
];

const TOTAL = slides.length;

export default function PerviyBitPresentation() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    document.title = "Noteall x Первый Бит — Автоматизация пресейла";
    return () => { document.title = "Presentations"; };
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
        <button onClick={() => go(1)} disabled={current === TOTAL - 1}
          className="px-2 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm md:text-base font-heading font-medium text-accent hover:text-accent/80 disabled:opacity-30 transition-colors"
          data-testid="pb-next-btn">
          Далее
        </button>
      </div>
    </div>
  );
}
