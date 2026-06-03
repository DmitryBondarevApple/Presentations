const PUB = process.env.PUBLIC_URL || "";

const TKSlide01Cover = () => (
  <div className="w-full h-full flex flex-col relative bg-background overflow-hidden">
    <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
      style={{ background: "radial-gradient(ellipse 60% 50% at 50% 45%, hsl(172 66% 42%), transparent)" }} />
    <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-5 sm:px-6 py-6 md:py-10 relative z-10">
      <div className="animate-item stagger-1 flex items-center gap-4 sm:gap-6 md:gap-9 mb-5 md:mb-12">
        <img src={`${PUB}/images/noteall/logo-noteall.png`} alt="Noteall" className="h-9 sm:h-12 md:h-[4.5rem] w-auto object-contain" data-testid="tk-logo-noteall" />
        <img src={`${PUB}/images/tochka/tochka-white.png`} alt="Точка Банк" className="h-5 sm:h-7 md:h-10 w-auto object-contain" data-testid="tk-logo-tochka" />
      </div>

      <h1 className="animate-item stagger-2 font-heading text-lg sm:text-2xl md:text-4xl lg:text-[3.1rem] font-bold text-foreground text-center max-w-5xl leading-tight" data-testid="tk-title">
        AI-сервис, который превращает встречи предпринимателей в{" "}
        <span className="text-accent">рабочие документы, задачи и знания о клиентах</span>
      </h1>

      <p className="animate-item stagger-3 mt-3 md:mt-7 font-body text-xs sm:text-base md:text-xl text-muted-foreground text-center max-w-3xl leading-relaxed">
        Для ИП, малого бизнеса, сервисных компаний, агентств, бухгалтеров, юристов, онлайн-школ, селлеров и B2B-команд
      </p>

      <div className="animate-item stagger-4 mt-4 md:mt-9 w-16 h-[2px] bg-accent/60" />

      <p className="animate-item stagger-5 mt-3 md:mt-6 font-body text-[11px] sm:text-sm md:text-lg text-foreground/70 text-center max-w-3xl leading-snug">
        Убираем <span className="text-accent font-semibold">разрыв</span> между «мы поговорили» и «у нас есть готовый материал для дальнейшей работы»
      </p>
    </div>
    <div className="shrink-0 text-center pb-5 md:pb-8 relative z-10">
      <span className="font-body text-[10px] sm:text-xs md:text-sm text-muted-foreground/50">noteall.ru · предложение для Точка Банка</span>
    </div>
  </div>
);
export default TKSlide01Cover;
