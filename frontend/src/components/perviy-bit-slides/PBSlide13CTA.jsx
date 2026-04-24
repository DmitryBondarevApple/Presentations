const results = [
  "Стоимость пресейла x10 ниже",
  "Время менеджера x8 меньше",
  "Качество ТЗ: стандартное и проверяемое",
  "Конверсия продаж: рост за счёт прозрачности и скорости",
];

const PBSlide13CTA = () => (
  <div className="w-full h-full flex flex-col relative bg-background">
    <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, hsl(174 80% 35%), transparent)' }} />
    <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-4 sm:px-6 py-6 md:py-10 relative z-10">
      <div className="flex items-center gap-4 md:gap-8 mb-6 md:mb-10">
        <img src={`${process.env.PUBLIC_URL || ''}/images/noteall/logo-noteall.png`} alt="Noteall" className="h-8 sm:h-10 md:h-14" />
        <div className="w-px h-8 md:h-12 bg-muted-foreground/20" />
        <img src={`${process.env.PUBLIC_URL || ''}/images/perviy-bit/logo-perviy-bit.jpg`} alt="Первый Бит" className="h-8 sm:h-10 md:h-14 rounded" />
      </div>

      <h2 className="font-heading text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold text-foreground text-center max-w-5xl leading-tight mb-4 md:mb-8" data-testid="pb-cta-title">
        От головной боли пресейла —{' '}
        <span className="text-accent">к стандартизированному, проверяемому и экономически выгодному процессу</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 max-w-4xl w-full mb-6 md:mb-10">
        {results.map((r, i) => (
          <div key={i} className="bg-card rounded-lg border border-border p-2.5 md:p-4 text-center">
            <p className="font-body text-[10px] sm:text-xs md:text-base text-foreground leading-snug">{r}</p>
          </div>
        ))}
      </div>

      <a href="https://noteall.ru" target="_blank" rel="noopener noreferrer"
        className="inline-block px-6 py-2.5 md:px-10 md:py-4 rounded-lg bg-accent text-white font-heading text-sm sm:text-base md:text-xl font-bold tracking-wide hover:opacity-90 transition-opacity"
        data-testid="pb-cta-btn">
        noteall.ru
      </a>
    </div>
  </div>
);
export default PBSlide13CTA;
