import { useState, useEffect, useCallback } from "react";
import NPSlide01Cover from "@/components/noteall-product-slides/NPSlide01Cover";
import NPSlide02Problem from "@/components/noteall-product-slides/NPSlide02Problem";
import NPSlide03Solution from "@/components/noteall-product-slides/NPSlide03Solution";
import NPSlide04HowItWorks from "@/components/noteall-product-slides/NPSlide04HowItWorks";
import NPSlide05Transcription from "@/components/noteall-product-slides/NPSlide05Transcription";
import NPSlide06Speakers from "@/components/noteall-product-slides/NPSlide06Speakers";
import NPSlide07Scenarios from "@/components/noteall-product-slides/NPSlide07Scenarios";
import NPSlide08Visual from "@/components/noteall-product-slides/NPSlide08Visual";
import NPSlide09Sources from "@/components/noteall-product-slides/NPSlide09Sources";
import NPSlide10Sharing from "@/components/noteall-product-slides/NPSlide10Sharing";
import NPSlide11Research from "@/components/noteall-product-slides/NPSlide11Research";
import NPSlide12Cases from "@/components/noteall-product-slides/NPSlide12Cases";
import NPSlide13Growth from "@/components/noteall-product-slides/NPSlide13Growth";
import NPSlide14Pricing from "@/components/noteall-product-slides/NPSlide14Pricing";
import NPSlide15CTA from "@/components/noteall-product-slides/NPSlide15CTA";

const slides = [
  NPSlide01Cover, NPSlide02Problem, NPSlide03Solution, NPSlide04HowItWorks,
  NPSlide05Transcription, NPSlide06Speakers, NPSlide07Scenarios, NPSlide08Visual,
  NPSlide09Sources, NPSlide10Sharing, NPSlide11Research, NPSlide12Cases,
  NPSlide13Growth, NPSlide14Pricing, NPSlide15CTA,
];

export default function NoteAllProductPresentation() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    document.title = "Noteall — Возможности платформы";
    return () => { document.title = "Presentations"; };
  }, []);

  const go = useCallback((dir) => {
    setCurrent((p) => Math.max(0, Math.min(slides.length - 1, p + dir)));
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
    <div className="h-[100dvh] w-full flex flex-col bg-background" data-testid="np-presentation">
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-0">
          <Slide />
        </div>
      </div>
      <div className="shrink-0 flex items-center justify-between px-3 sm:px-4 md:px-8 py-1.5 sm:py-2 md:py-3 border-t border-border bg-card/50 backdrop-blur-sm">
        <button onClick={() => go(-1)} disabled={current === 0}
          className="px-2 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm md:text-base font-heading font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
          data-testid="np-prev-btn">
          Назад
        </button>
        <div className="flex items-center gap-1 sm:gap-1.5">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${i === current ? 'bg-accent scale-125' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`}
              data-testid={`np-dot-${i}`} />
          ))}
        </div>
        <button onClick={() => go(1)} disabled={current === slides.length - 1}
          className="px-2 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm md:text-base font-heading font-medium text-accent hover:text-accent/80 disabled:opacity-30 transition-colors"
          data-testid="np-next-btn">
          Далее
        </button>
      </div>
    </div>
  );
}
