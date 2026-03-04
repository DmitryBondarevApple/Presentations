const TitleSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, hsl(240 100% 55%), transparent)' }}
      />

      {/* Logo */}
      <div className="animate-item stagger-1 mb-12 md:mb-16">
        <span className="font-heading text-xl md:text-2xl lg:text-3xl tracking-[0.3em] text-foreground font-bold">
          HOP<span className="text-accent">.</span>AGEN<span className="text-accent">C</span>Y
        </span>
      </div>

      {/* Main title */}
      <h1 className="animate-item stagger-2 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center max-w-5xl leading-tight px-6">
        Сопровождение вывода внутренних продуктов{' '}
        <span className="text-accent">ПАО «Ростелеком»</span>{' '}
        на общероссийский рынок
      </h1>

      {/* Subtitle */}
      <p className="animate-item stagger-3 mt-6 md:mt-8 font-body text-base md:text-lg text-muted-foreground tracking-wide">
        Коммерческое предложение
      </p>

      {/* Divider line */}
      <div className="animate-item stagger-4 mt-10 md:mt-14 w-16 h-[2px] bg-accent/50" />

      {/* Year */}
      <p className="animate-item stagger-5 mt-5 font-body text-sm text-muted-foreground/50 tracking-wider">
        2025
      </p>
    </div>
  );
};

export default TitleSlide;
