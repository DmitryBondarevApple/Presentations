const NPSlide15CTA = () => (
  <div className="w-full h-full flex flex-col relative bg-background">
    <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, hsl(174 80% 35%), transparent)' }} />
    <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-4 sm:px-6 py-6 md:py-10 relative z-10">
      <div className="animate-item stagger-1 mb-4 md:mb-10">
        <img src={`${process.env.PUBLIC_URL || ''}/images/noteall/logo-noteall.png`} alt="Noteall" className="h-10 sm:h-14 md:h-24" />
      </div>
      <h2 className="animate-item stagger-2 font-heading text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold text-foreground text-center max-w-5xl leading-tight" data-testid="np-cta-title">
        Загрузите запись и оцените{' '}
        <span className="text-accent">возможности анализа</span>
      </h2>
      <p className="animate-item stagger-3 mt-3 md:mt-8 font-body text-sm sm:text-base md:text-xl lg:text-2xl text-muted-foreground text-center max-w-3xl leading-relaxed">
        Транскрибация, определение спикеров, структурированный анализ — всё в одном сервисе. Бесплатный старт.
      </p>
      <div className="animate-item stagger-4 mt-4 md:mt-10">
        <a href="https://noteall.ru" target="_blank" rel="noopener noreferrer"
          className="inline-block px-6 py-2.5 md:px-10 md:py-4 rounded-lg bg-accent text-white font-heading text-sm sm:text-base md:text-xl font-bold tracking-wide hover:opacity-90 transition-opacity"
          data-testid="np-cta-btn">
          Начать бесплатно
        </a>
      </div>
      <div className="animate-item stagger-5 mt-3 md:mt-6 font-body text-xs sm:text-sm md:text-lg text-muted-foreground/60 text-center">
        noteall.ru
      </div>
      <div className="animate-item stagger-5 mt-4 md:mt-8 w-16 h-[2px] bg-accent/50" />
      <p className="animate-item stagger-5 mt-3 md:mt-4 font-body text-[10px] sm:text-xs md:text-base text-muted-foreground/40 text-center">
        15 / 15
      </p>
    </div>
  </div>
);
export default NPSlide15CTA;
