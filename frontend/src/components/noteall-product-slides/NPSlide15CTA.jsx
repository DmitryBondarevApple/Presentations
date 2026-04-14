const NPSlide15CTA = () => (
  <div className="w-full h-full flex flex-col relative bg-background">
    <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, hsl(174 80% 35%), transparent)' }} />
    <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-4 sm:px-6 py-6 md:py-10 relative z-10">
      <div className="animate-item stagger-1 mb-3 md:mb-8">
        <img src={`${process.env.PUBLIC_URL || ''}/images/noteall/logo-noteall.png`} alt="Noteall" className="h-10 sm:h-14 md:h-20" />
      </div>
      <h2 className="animate-item stagger-2 font-heading text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold text-foreground text-center max-w-5xl leading-tight" data-testid="np-cta-title">
        Быстрее понимать, точнее формулировать,{' '}
        <span className="text-accent">дешевле внедрять</span>
      </h2>
      <div className="animate-item stagger-3 mt-3 md:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4 max-w-4xl w-full">
        {[
          "Сокращение времени обработки встреч",
          "Снижение стоимости аналитической работы",
          "Более качественная фиксация смыслов",
          "Экономия времени top-специалистов",
          "Ускорение перехода от обсуждения к действию",
          "Качественная аналитика — доступная всем",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-1.5 md:gap-2">
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent mt-1.5 md:mt-2 shrink-0" />
            <p className="font-body text-[10px] sm:text-xs md:text-base text-muted-foreground leading-snug">{item}</p>
          </div>
        ))}
      </div>
      <div className="animate-item stagger-4 mt-4 md:mt-10">
        <a href="https://noteall.ru" target="_blank" rel="noopener noreferrer"
          className="inline-block px-6 py-2.5 md:px-10 md:py-4 rounded-lg bg-accent text-white font-heading text-sm sm:text-base md:text-xl font-bold tracking-wide hover:opacity-90 transition-opacity"
          data-testid="np-cta-btn">
          Начать бесплатно
        </a>
      </div>
      <p className="animate-item stagger-5 mt-3 md:mt-6 font-body text-xs sm:text-sm md:text-lg text-muted-foreground/60 text-center">
        noteall.ru
      </p>
    </div>
  </div>
);
export default NPSlide15CTA;
