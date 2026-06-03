const PUB = process.env.PUBLIC_URL || "";

const steps = [
  "Подробно ознакомиться с интерфейсом и функционалом Noteall",
  "Выбрать приоритетные сегменты клиентов",
  "Обсудить необходимые для этих сегментов сценарии обработки встреч",
  "Согласовать требования по данным и безопасности",
  "Подготовить пилотный оффер для клиентов",
];

const TKSlide21Next = () => (
  <div className="w-full h-full flex flex-col relative bg-background overflow-hidden">
    <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
      style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(172 66% 42%), transparent)" }} />
    <div className="flex-1 overflow-y-auto flex flex-col justify-center px-5 sm:px-10 md:px-16 lg:px-24 py-6 md:py-10 relative z-10 max-w-5xl mx-auto w-full">
      <p className="animate-item stagger-1 font-heading text-[11px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-[0.18em] mb-2 sm:mb-3">Следующий шаг</p>
      <h2 className="animate-item stagger-2 font-heading text-xl sm:text-3xl md:text-5xl font-bold text-foreground leading-tight mb-2 sm:mb-4" data-testid="tk-cta-title">
        Предлагаем совместную <span className="text-accent">продуктовую сессию</span> с Точкой
      </h2>
      <p className="animate-item stagger-3 font-body text-xs sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 md:mb-8">На сессии:</p>
      <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-5 sm:mb-8 md:mb-10">
        {steps.map((s, i) => (
          <div key={i} className={`animate-item stagger-${i + 4} flex items-start gap-2.5 sm:gap-4`} data-testid={`tk-cta-step-${i}`}>
            <span className="font-heading text-sm sm:text-lg md:text-2xl font-bold text-accent/70 shrink-0 w-6 sm:w-8">{String(i + 1).padStart(2, "0")}</span>
            <p className="font-body text-xs sm:text-base md:text-xl text-foreground/85 leading-snug pt-0.5">{s}</p>
          </div>
        ))}
      </div>
      <div className="animate-item stagger-9 flex items-center gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-border">
        <img src={`${PUB}/images/noteall/logo-noteall.png`} alt="Noteall" className="h-7 sm:h-9 md:h-11 w-auto object-contain" />
        <span className="text-muted-foreground/40 text-xl md:text-2xl font-light">×</span>
        <img src={`${PUB}/images/tochka/tochka-white.png`} alt="Точка" className="h-4 sm:h-5 md:h-7 w-auto object-contain" />
        <span className="ml-auto font-body text-[11px] sm:text-sm md:text-base text-muted-foreground">noteall.ru</span>
      </div>
    </div>
  </div>
);
export default TKSlide21Next;
