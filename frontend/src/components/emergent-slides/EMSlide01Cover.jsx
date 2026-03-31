const EMSlide01Cover = () => {
  return (
    <div className="w-full h-full flex flex-col relative bg-background">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, hsl(82 84% 55%), transparent)' }}
      />

      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start lg:justify-center px-6 py-6 md:py-10 relative z-10">
        <div className="animate-item stagger-1 mb-4 md:mb-6">
          <span className="inline-block px-4 py-1.5 md:px-6 md:py-2 rounded bg-accent/10 text-accent text-xs md:text-base font-bold tracking-widest uppercase">
            Мастер-класс
          </span>
        </div>

        <h1 className="animate-item stagger-2 font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-center max-w-5xl leading-tight" data-testid="em-cover-title">
          От идеи до продукта{' '}
          <span className="text-accent">с ИИ-агентами</span>
        </h1>

        <p className="animate-item stagger-3 mt-4 md:mt-8 font-body text-base md:text-xl lg:text-2xl text-muted-foreground text-center max-w-3xl leading-relaxed">
          Как превратить идею в работающий цифровой продукт на примере Emergent.sh
        </p>

        <div className="animate-item stagger-4 mt-6 md:mt-10 w-20 h-[2px] bg-accent/50" />

        <p className="animate-item stagger-5 mt-4 md:mt-5 font-body text-sm md:text-lg text-muted-foreground/60 text-center max-w-2xl">
          Для студентов университета
        </p>
      </div>
    </div>
  );
};

export default EMSlide01Cover;
