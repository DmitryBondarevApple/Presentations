const EMSlide10Emergent = () => {
  return (
    <div className="w-full h-full flex flex-col relative bg-background">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, hsl(82 84% 55%), transparent)' }}
      />

      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start lg:justify-center px-6 md:px-16 lg:px-24 py-6 md:py-10 relative z-10">
        <h1 className="animate-item stagger-1 font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-center max-w-5xl leading-tight mb-4 md:mb-8" data-testid="em-emergent-title">
          Emergent — это{' '}
          <span className="text-accent">цифровая команда</span>
        </h1>

        <p className="animate-item stagger-2 font-body text-base md:text-xl lg:text-2xl text-muted-foreground text-center max-w-3xl leading-relaxed mb-4 md:mb-8">
          Не просто чат с искусственным интеллектом. Система, которая помогает
          довести идею до рабочего продукта.
        </p>

        <div className="animate-item stagger-3 w-20 h-[2px] bg-accent/50 mb-4 md:mb-8" />

        <p className="animate-item stagger-4 font-body text-sm md:text-lg lg:text-xl text-foreground/60 text-center max-w-2xl leading-relaxed">
          У вас в руках остаётся главное — постановка задачи и направление
        </p>
      </div>

      <div className="absolute bottom-4 left-6 md:left-16 lg:left-24 font-heading text-xs tracking-[0.22em] text-muted-foreground/40 pointer-events-none select-none z-10">
        EMERGENT<span className="text-accent/40">.</span>SH
      </div>
    </div>
  );
};

export default EMSlide10Emergent;
