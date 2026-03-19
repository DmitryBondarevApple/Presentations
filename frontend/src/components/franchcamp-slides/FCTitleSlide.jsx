const FCTitleSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-background">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, hsl(240 100% 55%), transparent)' }}
      />

      <div className="animate-item stagger-1 mb-8 md:mb-10">
        <span className="font-heading text-2xl md:text-3xl lg:text-4xl tracking-[0.3em] text-foreground font-bold">
          HOP<span className="text-accent">.</span>AGEN<span className="text-accent">C</span>Y
        </span>
      </div>

      <div className="animate-item stagger-2 mb-6">
        <span className="inline-block px-5 py-2 rounded bg-accent/10 text-accent text-sm md:text-base font-bold tracking-widest uppercase">
          Предложение для FranchCamp
        </span>
      </div>

      <h1 className="animate-item stagger-3 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-center max-w-5xl leading-tight px-6" data-testid="fc-title">
        ИИ как часть пакета{' '}
        <span className="text-accent">для франчайзи</span>
      </h1>

      <p className="animate-item stagger-4 mt-6 md:mt-8 font-body text-lg md:text-xl lg:text-2xl text-muted-foreground text-center max-w-3xl px-6 leading-relaxed">
        Серия практических обучающих мероприятий для франчайзеров и их сетей.
        В основе программы — три прикладных блока: Noteall, EchoMind и Emergent.sh
      </p>

      <div className="animate-item stagger-5 mt-8 md:mt-10 w-20 h-[2px] bg-accent/50" />

      <p className="animate-item stagger-5 mt-5 font-body text-base md:text-lg text-muted-foreground/60 text-center max-w-2xl px-6">
        От разговора с клиентом до контроля продавцов и быстрого запуска цифровых инструментов
      </p>
    </div>
  );
};

export default FCTitleSlide;
