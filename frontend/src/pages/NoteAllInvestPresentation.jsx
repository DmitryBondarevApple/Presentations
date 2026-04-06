import React, { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Download, Maximize, Minimize, Loader2 } from 'lucide-react';
import NASlide01Cover from '@/components/noteall-slides/NASlide01Cover';
import NASlide02Problem from '@/components/noteall-slides/NASlide02Problem';
import NASlide03Solution from '@/components/noteall-slides/NASlide03Solution';
import NASlide04HowItWorks from '@/components/noteall-slides/NASlide04HowItWorks';
import NASlide05WhyNow from '@/components/noteall-slides/NASlide05WhyNow';
import NASlide06Market from '@/components/noteall-slides/NASlide06Market';
import NASlide07Audience from '@/components/noteall-slides/NASlide07Audience';
import NASlide08Differentiation from '@/components/noteall-slides/NASlide08Differentiation';
import NASlide09BusinessModel from '@/components/noteall-slides/NASlide09BusinessModel';
import NASlide10Stage from '@/components/noteall-slides/NASlide10Stage';
import NASlide11GTM from '@/components/noteall-slides/NASlide11GTM';
import NASlide12Roadmap from '@/components/noteall-slides/NASlide12Roadmap';
import NASlide13Round from '@/components/noteall-slides/NASlide13Round';

const allSlides = [
  NASlide01Cover, NASlide02Problem, NASlide03Solution, NASlide04HowItWorks,
  NASlide05WhyNow, NASlide06Market, NASlide07Audience, NASlide08Differentiation,
  NASlide09BusinessModel, NASlide10Stage, NASlide11GTM, NASlide12Roadmap, NASlide13Round,
];

const TOTAL = allSlides.length;

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
};

export default function NoteAllInvestPresentation() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isFs, setIsFs] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [touchX, setTouchX] = useState(null);

  const goNext = useCallback(() => {
    if (current < TOTAL - 1) { setDirection(1); setCurrent(c => c + 1); }
  }, [current]);
  const goPrev = useCallback(() => {
    if (current > 0) { setDirection(-1); setCurrent(c => c - 1); }
  }, [current]);
  const goTo = useCallback((i) => {
    setDirection(i > current ? 1 : -1); setCurrent(i);
  }, [current]);
  const toggleFs = useCallback(() => {
    if (!document.fullscreenElement) { document.documentElement.requestFullscreen().catch(() => {}); setIsFs(true); }
    else { document.exitFullscreen().catch(() => {}); setIsFs(false); }
  }, []);

  useEffect(() => { document.title = 'NoteAll — Инвестиционная презентация'; }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); }
    };
    const handleFsChange = () => { if (!document.fullscreenElement) setIsFs(false); };
    window.addEventListener('keydown', handleKey);
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => { window.removeEventListener('keydown', handleKey); document.removeEventListener('fullscreenchange', handleFsChange); };
  }, [goNext, goPrev]);

  useEffect(() => {
    setShowControls(true);
    const t = setTimeout(() => setShowControls(false), 4000);
    return () => clearTimeout(t);
  }, [current]);

  const Slide = allSlides[current];

  return (
    <div className="relative w-full overflow-hidden bg-background"
      style={{ height: '100dvh', '--accent': '174 80% 42%', '--accent-foreground': '0 0% 100%' }}
      onMouseMove={() => setShowControls(true)}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const d = touchX - e.changedTouches[0].clientX;
        if (d > 60) goNext(); if (d < -60) goPrev();
        setTouchX(null);
      }}
      data-testid="na-presentation"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-border/20 z-30">
        <div className="h-full bg-accent" style={{ width: `${((current + 1) / TOTAL) * 100}%`, transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)' }} />
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div key={current} custom={direction} variants={slideVariants}
          initial="enter" animate="center" exit="exit"
          transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0">
          <Slide />
        </motion.div>
      </AnimatePresence>

      <div className={cn("absolute inset-y-0 left-0 flex items-center pl-3 z-20", showControls ? "opacity-100" : "opacity-0 hover:opacity-100")} style={{ transition: 'opacity 0.3s' }}>
        {current > 0 && (
          <Button variant="ghost" size="icon" onClick={goPrev} data-testid="na-prev-btn"
            className="h-11 w-11 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/50 hover:text-foreground"><ChevronLeft className="h-5 w-5" /></Button>
        )}
      </div>
      <div className={cn("absolute inset-y-0 right-0 flex items-center pr-3 z-20", showControls ? "opacity-100" : "opacity-0 hover:opacity-100")} style={{ transition: 'opacity 0.3s' }}>
        {current < TOTAL - 1 && (
          <Button variant="ghost" size="icon" onClick={goNext} data-testid="na-next-btn"
            className="h-11 w-11 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/50 hover:text-foreground"><ChevronRight className="h-5 w-5" /></Button>
        )}
      </div>

      <div className={cn("absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-5 py-2", showControls ? "opacity-100" : "opacity-0 hover:opacity-100")}
        style={{ transition: 'opacity 0.3s', paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}>
        <div className="flex items-center gap-1.5">
          {allSlides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} data-testid={`na-dot-${i}`}
              className={cn("h-1.5 rounded-full", i === current ? "bg-accent w-5" : "bg-foreground/15 w-1.5 hover:bg-foreground/30")}
              style={{ transition: 'all 0.3s' }} />
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-body text-[11px] text-muted-foreground/50 mr-2">{current + 1} / {TOTAL}</span>
          <Button variant="ghost" size="icon" onClick={toggleFs} data-testid="na-fullscreen-btn"
            className="h-8 w-8 text-foreground/50 hover:text-foreground hover:bg-foreground/10 rounded-full">
            {isFs ? <Minimize className="h-3.5 w-3.5" /> : <Maximize className="h-3.5 w-3.5" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
