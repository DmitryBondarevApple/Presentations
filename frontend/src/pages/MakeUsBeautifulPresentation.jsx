import React, { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Download, Maximize, Minimize, Loader2 } from 'lucide-react';
import MBSlide01Cover from '@/components/mb-slides/MBSlide01Cover';
import MBSlide02Problem from '@/components/mb-slides/MBSlide02Problem';
import MBSlide03Data from '@/components/mb-slides/MBSlide03Data';
import MBSlide04About from '@/components/mb-slides/MBSlide04About';
import MBSlide05Services from '@/components/mb-slides/MBSlide05Services';
import MBSlide06Process from '@/components/mb-slides/MBSlide06Process';
import MBSlide07Included from '@/components/mb-slides/MBSlide07Included';
import MBSlide08Portfolio from '@/components/mb-slides/MBSlide08Portfolio';
import MBSlide09Pricing from '@/components/mb-slides/MBSlide09Pricing';
import MBSlide10CTA from '@/components/mb-slides/MBSlide10CTA';
import { generateMakeUsBeautifulPdf } from '@/components/MakeUsBeautifulPdfGenerator';

const allSlides = [
  MBSlide01Cover, MBSlide02Problem, MBSlide03Data, MBSlide04About,
  MBSlide05Services, MBSlide06Process, MBSlide07Included, MBSlide08Portfolio,
  MBSlide09Pricing, MBSlide10CTA,
];

const TOTAL = allSlides.length;

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
};

export default function MakeUsBeautifulPresentation() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isFs, setIsFs] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [touchX, setTouchX] = useState(null);
  const [pdfBusy, setPdfBusy] = useState(false);
  const [pdfProgress, setPdfProgress] = useState('');

  const goNext = useCallback(() => {
    if (current < TOTAL - 1) { setDirection(1); setCurrent(c => c + 1); }
  }, [current]);

  const goPrev = useCallback(() => {
    if (current > 0) { setDirection(-1); setCurrent(c => c - 1); }
  }, [current]);

  const goTo = useCallback((i) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  }, [current]);

  const toggleFs = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFs(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFs(false);
    }
  }, []);

  const generatePdf = useCallback(async () => {
    if (pdfBusy) return;
    setPdfBusy(true);
    setPdfProgress('Генерация PDF...');
    try {
      await generateMakeUsBeautifulPdf((msg) => setPdfProgress(msg));
      setPdfProgress('Готово!');
    } catch (err) {
      console.error('PDF generation error:', err);
      setPdfProgress('Ошибка при генерации');
    } finally {
      setTimeout(() => { setPdfBusy(false); setPdfProgress(''); }, 800);
    }
  }, [pdfBusy]);

  useEffect(() => {
    document.title = 'Сделай красиво! — Сезонный декор под ключ';
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (pdfBusy) return;
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); }
    };
    const handleFsChange = () => { if (!document.fullscreenElement) setIsFs(false); };
    window.addEventListener('keydown', handleKey);
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.removeEventListener('fullscreenchange', handleFsChange);
    };
  }, [goNext, goPrev, pdfBusy]);

  useEffect(() => {
    setShowControls(true);
    const timer = setTimeout(() => setShowControls(false), 4000);
    return () => clearTimeout(timer);
  }, [current]);

  const handleMouseMove = useCallback(() => setShowControls(true), []);

  const Slide = allSlides[current];

  return (
    <div
      className="relative w-full overflow-hidden bg-background"
      style={{
        height: '100dvh',
        '--accent': '152 50% 42%',
        '--accent-foreground': '0 0% 100%',
      }}
      onMouseMove={handleMouseMove}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const diff = touchX - e.changedTouches[0].clientX;
        if (diff > 60) goNext();
        if (diff < -60) goPrev();
        setTouchX(null);
      }}
      data-testid="mb-presentation"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-border/20 z-30">
        <div
          className="h-full bg-accent"
          style={{
            width: `${((current + 1) / TOTAL) * 100}%`,
            transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>

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

      <div className={cn(
        "absolute inset-y-0 left-0 flex items-center pl-3 z-20",
        showControls ? "opacity-100" : "opacity-0 hover:opacity-100"
      )} style={{ transition: 'opacity 0.3s' }}>
        {current > 0 && (
          <Button variant="ghost" size="icon" onClick={goPrev} data-testid="mb-prev-btn"
            className="h-11 w-11 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/50 hover:text-foreground">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        )}
      </div>

      <div className={cn(
        "absolute inset-y-0 right-0 flex items-center pr-3 z-20",
        showControls ? "opacity-100" : "opacity-0 hover:opacity-100"
      )} style={{ transition: 'opacity 0.3s' }}>
        {current < TOTAL - 1 && (
          <Button variant="ghost" size="icon" onClick={goNext} data-testid="mb-next-btn"
            className="h-11 w-11 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/50 hover:text-foreground">
            <ChevronRight className="h-5 w-5" />
          </Button>
        )}
      </div>

      <div className={cn(
        "absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-5 py-2",
        showControls ? "opacity-100" : "opacity-0 hover:opacity-100"
      )} style={{ transition: 'opacity 0.3s', paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}>
        <div className="flex items-center gap-1.5">
          {allSlides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} data-testid={`mb-dot-${i}`}
              className={cn(
                "h-1.5 rounded-full",
                i === current ? "bg-accent w-5" : "bg-foreground/15 w-1.5 hover:bg-foreground/30"
              )}
              style={{ transition: 'all 0.3s' }}
            />
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <span className="font-body text-[11px] text-muted-foreground/50 mr-2">
            {current + 1} / {TOTAL}
          </span>
          <Button
            variant="ghost" size="sm" onClick={generatePdf} disabled={pdfBusy}
            data-testid="mb-pdf-btn"
            className="h-8 text-xs text-foreground/50 hover:text-foreground hover:bg-foreground/10 rounded-full px-3 disabled:opacity-40"
          >
            {pdfBusy
              ? <><Loader2 className="h-3.5 w-3.5 mr-1 animate-spin" />{pdfProgress}</>
              : <><Download className="h-3.5 w-3.5 mr-1" />PDF</>
            }
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleFs} data-testid="mb-fullscreen-btn"
            className="h-8 w-8 text-foreground/50 hover:text-foreground hover:bg-foreground/10 rounded-full">
            {isFs ? <Minimize className="h-3.5 w-3.5" /> : <Maximize className="h-3.5 w-3.5" />}
          </Button>
        </div>
      </div>

      {pdfBusy && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
          <Loader2 className="h-10 w-10 text-accent animate-spin mb-4" />
          <p className="font-heading text-lg text-foreground">{pdfProgress}</p>
          <p className="font-body text-sm text-muted-foreground mt-1">Не закрывайте страницу</p>
        </div>
      )}
    </div>
  );
}
