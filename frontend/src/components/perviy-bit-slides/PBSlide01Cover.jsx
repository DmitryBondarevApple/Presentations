const PBSlide01Cover = () => (
  <div className="w-full h-full flex flex-col relative bg-background">
    <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, hsl(174 80% 35%), transparent)' }} />
    <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-4 sm:px-6 py-6 md:py-10 relative z-10">
      <div className="flex items-center gap-4 md:gap-8 mb-6 md:mb-10">
        <img src={`${process.env.PUBLIC_URL || ''}/images/noteall/logo-noteall.png`} alt="Noteall" className="h-8 sm:h-10 md:h-14" />
        <div className="w-px h-8 md:h-12 bg-muted-foreground/20" />
        <img src={`${process.env.PUBLIC_URL || ''}/images/perviy-bit/logo-perviy-bit.jpg`} alt="Первый Бит" className="h-8 sm:h-10 md:h-14 rounded" />
      </div>
      <h1 className="font-heading text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold text-foreground text-center max-w-5xl leading-tight" data-testid="pb-cover-title">
        Автоматизация пресейла
      </h1>
      <h1 className="font-heading text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold text-accent text-center max-w-5xl leading-tight">
        для 1С-разработки
      </h1>
      <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground text-center max-w-3xl mt-3 md:mt-6 leading-relaxed">
        От интервью с клиентом — к готовому ТЗ и коммерческому предложению
      </p>
      <div className="w-12 h-[2px] bg-accent/50 mt-6 md:mt-10" />
      <p className="font-body text-xs md:text-sm text-muted-foreground/40 mt-4">noteall.ru</p>
    </div>
  </div>
);
export default PBSlide01Cover;
