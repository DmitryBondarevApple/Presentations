import React, { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Download, Maximize, Minimize } from 'lucide-react';

import TitleSlide from '@/components/slides/TitleSlide';
import ContextSlide from '@/components/slides/ContextSlide';
import SubjectSlide from '@/components/slides/SubjectSlide';
import GoalSlide from '@/components/slides/GoalSlide';
import TasksSlide from '@/components/slides/TasksSlide';
import ResultsSlide from '@/components/slides/ResultsSlide';
import SummarySlide from '@/components/slides/SummarySlide';
import WhyHopSlide from '@/components/slides/WhyHopSlide';
import ScopeSlide1 from '@/components/slides/ScopeSlide1';
import ScopeSlide2 from '@/components/slides/ScopeSlide2';
import TeamSlide from '@/components/slides/TeamSlide';
import RoadmapSlide from '@/components/slides/RoadmapSlide';
import PricingSlide from '@/components/slides/PricingSlide';
import ContactSlide from '@/components/slides/ContactSlide';

const allSlides = [
  TitleSlide, ContextSlide, SubjectSlide, GoalSlide, TasksSlide,
  ResultsSlide, SummarySlide, WhyHopSlide, ScopeSlide1, ScopeSlide2,
  TeamSlide, RoadmapSlide, PricingSlide, ContactSlide
];

const TOTAL = allSlides.length;

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
};

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [printMode, setPrintMode] = useState(false);
  const [isFs, setIsFs] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [touchX, setTouchX] = useState(null);

  const goNext = useCallback(() => {
    if (current < TOTAL - 1) {
      setDirection(1);
      setCurrent(c => c + 1);
    }
  }, [current]);

  const goPrev = useCallback(() => {
    if (current > 0) {
      setDirection(-1);
      setCurrent(c => c - 1);
    }
  }, [current]);

  const goTo = useCallback((i) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  }, [current]);

  const handlePrint = useCallback(() => {
    setPrintMode(true);
    setTimeout(() => {
      window.print();
      setTimeout(() => setPrintMode(false), 300);
    }, 800);
  }, []);

  const toggleFs = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFs(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFs(false);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); }
    };
    const handleFsChange = () => {
      if (!document.fullscreenElement) setIsFs(false);
    };
    window.addEventListener('keydown', handleKey);
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.removeEventListener('fullscreenchange', handleFsChange);
    };
  }, [goNext, goPrev]);

  // Auto-hide controls after inactivity
  useEffect(() => {
    setShowControls(true);
    const timer = setTimeout(() => setShowControls(false), 4000);
    return () => clearTimeout(timer);
  }, [current]);

  const handleMouseMove = useCallback(() => setShowControls(true), []);

  // Print mode: render all slides stacked
  if (printMode) {
    return (
      <div>
        {allSlides.map((Slide, i) => (
          <div key={i} className="slide-print-page">
            <Slide />
          </div>
        ))}
      </div>
    );
  }

  const Slide = allSlides[current];

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-background"
      onMouseMove={handleMouseMove}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const diff = touchX - e.changedTouches[0].clientX;
        if (diff > 60) goNext();
        if (diff < -60) goPrev();
        setTouchX(null);
      }}
    >
      {/* Top progress bar */}
      <div className="print-hide absolute top-0 left-0 right-0 h-[2px] bg-border/20 z-30">
        <div
          className="h-full bg-accent"
          style={{
            width: `${((current + 1) / TOTAL) * 100}%`,
            transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>

      {/* Animated slide */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          <Slide />
        </motion.div>
      </AnimatePresence>

      {/* Left arrow */}
      <div className={cn(
        "print-hide absolute inset-y-0 left-0 flex items-center pl-3 z-20",
        showControls ? "opacity-100" : "opacity-0 hover:opacity-100"
      )} style={{ transition: 'opacity 0.3s' }}>
        {current > 0 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={goPrev}
            className="h-11 w-11 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/50 hover:text-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Right arrow */}
      <div className={cn(
        "print-hide absolute inset-y-0 right-0 flex items-center pr-3 z-20",
        showControls ? "opacity-100" : "opacity-0 hover:opacity-100"
      )} style={{ transition: 'opacity 0.3s' }}>
        {current < TOTAL - 1 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={goNext}
            className="h-11 w-11 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/50 hover:text-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Bottom bar: dots + controls */}
      <div className={cn(
        "print-hide absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-5 py-3",
        showControls ? "opacity-100" : "opacity-0 hover:opacity-100"
      )} style={{ transition: 'opacity 0.3s' }}>
        {/* Progress dots */}
        <div className="flex items-center gap-1.5">
          {allSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full",
                i === current
                  ? "bg-accent w-5"
                  : "bg-foreground/15 w-1.5 hover:bg-foreground/30"
              )}
              style={{ transition: 'all 0.3s' }}
            />
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-1.5">
          <span className="font-body text-[11px] text-muted-foreground/50 mr-2">
            {current + 1} / {TOTAL}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePrint}
            className="h-8 text-xs text-foreground/50 hover:text-foreground hover:bg-foreground/10 rounded-full px-3"
          >
            <Download className="h-3.5 w-3.5 mr-1" />
            PDF
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleFs}
            className="h-8 w-8 text-foreground/50 hover:text-foreground hover:bg-foreground/10 rounded-full"
          >
            {isFs ? <Minimize className="h-3.5 w-3.5" /> : <Maximize className="h-3.5 w-3.5" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
