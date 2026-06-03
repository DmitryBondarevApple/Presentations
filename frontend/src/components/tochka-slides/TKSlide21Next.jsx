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
    <div className="flex-1 overflow-y-auto flex flex-col justify-start px-5 sm:px-10 md:px-16 lg:px-24 pt-7 sm:pt-10 md:pt-12 pb-6 relative z-10 max-w-5xl mx-auto w-full">
      <p className="animate-item stagger-1 font-heading text-[11px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-[0.18em] mb-2 sm:mb-3">Следующий шаг</p>
      <h2 className="animate-item stagger-2 font-heading text-xl sm:text-3xl md:text-5xl font-bold text-foreground leading-tight mb-2 sm:mb-3" data-testid="tk-cta-title">
        Предлагаем совместную <span className="text-accent">продуктовую сессию</span> с Точкой
      </h2>
      <p className="animate-item stagger-3 font-body text-xs sm:text-base md:text-lg text-muted-foreground mb-3 sm:mb-5">На сессии:</p>
      <div className="space-y-1.5 sm:space-y-2.5 md:space-y-3 mb-4 sm:mb-6">
        {steps.map((s, i) => (
          <div key={i} className={`animate-item stagger-${i + 4} flex items-start gap-2.5 sm:gap-4`} data-testid={`tk-cta-step-${i}`}>
            <span className="font-heading text-sm sm:text-lg md:text-2xl font-bold text-accent/70 shrink-0 w-6 sm:w-8">{String(i + 1).padStart(2, "0")}</span>
            <p className="font-body text-xs sm:text-base md:text-xl text-foreground/85 leading-snug pt-0.5">{s}</p>
          </div>
        ))}
      </div>
      <div className="animate-item stagger-9 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 sm:pt-5 border-t border-border">
        <div className="flex items-center gap-3 sm:gap-4">
          <img src={`${PUB}/images/tochka/speaker.png`} alt="Дмитрий Бондарев"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border border-accent/30 shrink-0" data-testid="tk-speaker-photo" />
          <div>
            <p className="font-heading text-sm sm:text-base md:text-lg font-bold text-foreground leading-tight" data-testid="tk-speaker-name">Дмитрий Бондарев</p>
            <a href="https://t.me/dmitrybondarev" target="_blank" rel="noreferrer"
              className="block font-body text-xs sm:text-sm md:text-base text-accent hover:text-accent/80 transition-colors no-underline" data-testid="tk-speaker-telegram">
              t.me/dmitrybondarev
            </a>
            <a href="mailto:dmitry.bondarev@gmail.com"
              className="block font-body text-xs sm:text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors no-underline" data-testid="tk-speaker-email">
              dmitry.bondarev@gmail.com
            </a>
          </div>
          <div className="bg-white rounded-lg p-1.5 sm:p-2 shrink-0 ml-1 sm:ml-2">
            <img src={`${PUB}/images/tochka/qr-telegram.png`} alt="QR Telegram" className="w-12 h-12 sm:w-14 sm:h-14 md:w-[4.25rem] md:h-[4.25rem]" data-testid="tk-qr" />
          </div>
        </div>
        <div className="flex items-center gap-4 sm:gap-5">
          <img src={`${PUB}/images/noteall/logo-noteall.png`} alt="Noteall" className="h-7 sm:h-8 md:h-10 w-auto object-contain" />
          <img src={`${PUB}/images/tochka/tochka-white.png`} alt="Точка" className="h-4 sm:h-5 md:h-6 w-auto object-contain" />
          <span className="font-body text-[11px] sm:text-sm text-muted-foreground hidden md:inline">noteall.ru</span>
        </div>
      </div>
    </div>
  </div>
);
export default TKSlide21Next;
