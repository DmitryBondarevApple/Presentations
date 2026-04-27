import React, { useState, useCallback, useEffect, useRef } from 'react';
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
import { preGenerateMakeUsBeautifulPdfs } from '@/components/MakeUsBeautifulPdfGenerator';

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

export default function MakeUsBeautifulPresentation({ light = false }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isFs, setIsFs] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [touchX, setTouchX] = useState(null);
  const [pdfUrls, setPdfUrls] = useState(null);
  const [pdfLoading, setPdfLoading] = useState(true);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const menuRef = useRef(null);

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

  useEffect(() => {
    let cancelled = false;
    const urls = { light: null, dark: null };
    setPdfLoading(true);
    preGenerateMakeUsBeautifulPdfs()
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

  useEffect(() => {
    if (!showThemeMenu) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setShowThemeMenu(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showThemeMenu]);

  useEffect(() => {
    document.title = 'Сделай красиво! — Сезонный декор под ключ';
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
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
  }, [goNext, goPrev]);

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
        ...(light ? {
          '--background': '0 0% 100%',
          '--foreground': '240 10% 10%',
          '--card': '210 20% 96%',
          '--card-foreground': '240 10% 10%',
          '--muted': '220 10% 70%',
          '--muted-foreground': '220 10% 45%',
          '--border': '220 15% 88%',
          '--popover': '0 0% 100%',
          '--popover-foreground': '240 10% 10%',
          '--input': '220 15% 90%',
        } : {}),
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
          <div className="relative" ref={menuRef}>
            <Button
              variant="ghost" size="sm"
              onClick={() => { if (pdfUrls) setShowThemeMenu(v => !v); }}
              disabled={pdfLoading}
              data-testid="mb-pdf-btn"
              className="h-8 text-xs text-foreground/50 hover:text-foreground hover:bg-foreground/10 rounded-full px-3 disabled:opacity-40"
            >
              {pdfLoading
                ? <><Loader2 className="h-3.5 w-3.5 mr-1 animate-spin" />PDF</>
                : <><Download className="h-3.5 w-3.5 mr-1" />PDF</>
              }
            </Button>
            {showThemeMenu && pdfUrls && (
              <div className="absolute bottom-full right-0 mb-2 bg-card border border-border rounded-lg shadow-xl overflow-hidden min-w-[170px] z-50">
                <a href={pdfUrls.light}
                  download="SdelaiKrasivo_Light.pdf"
                  onClick={() => setTimeout(() => setShowThemeMenu(false), 800)}
                  className="block w-full px-4 py-2.5 text-left text-sm font-medium text-foreground hover:bg-accent/10 transition-colors flex items-center gap-2.5 no-underline">
                  <svg className="w-4 h-4 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  Светлая тема
                </a>
                <a href={pdfUrls.dark}
                  download="SdelaiKrasivo_Dark.pdf"
                  onClick={() => setTimeout(() => setShowThemeMenu(false), 800)}
                  className="block w-full px-4 py-2.5 text-left text-sm font-medium text-foreground hover:bg-accent/10 transition-colors flex items-center gap-2.5 border-t border-border no-underline">
                  <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  Тёмная тема
                </a>
              </div>
            )}
          </div>
          <Button variant="ghost" size="icon" onClick={toggleFs} data-testid="mb-fullscreen-btn"
            className="h-8 w-8 text-foreground/50 hover:text-foreground hover:bg-foreground/10 rounded-full">
            {isFs ? <Minimize className="h-3.5 w-3.5" /> : <Maximize className="h-3.5 w-3.5" />}
          </Button>
        </div>
      </div>

    </div>
  );
}
