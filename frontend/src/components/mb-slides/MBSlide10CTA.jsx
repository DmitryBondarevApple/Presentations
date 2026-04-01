const contacts = [
  { label: "Телефон", value: "+7 (921) 922-44-00", href: "tel:+79219224400" },
  { label: "Email", value: "Romashova_n@mail.ru", href: "mailto:Romashova_n@mail.ru" },
  { label: "Telegram", value: "Написать в Telegram", href: "https://t.me/DmitryBondarev" },
];

const MBSlide10CTA = () => {
  return (
    <div className="w-full h-full flex flex-col relative bg-background">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, hsl(152 60% 35%), transparent)' }}
      />

      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start lg:justify-center px-6 py-6 md:py-10 relative z-10">
        <h2 className="animate-item stagger-1 font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-3 md:mb-6" data-testid="mb-cta-title">
          Следующий шаг — <span className="text-accent">бесплатная консультация</span>
        </h2>

        <p className="animate-item stagger-2 font-body text-base md:text-xl text-foreground/70 text-center max-w-3xl mb-6 md:mb-10 leading-relaxed">
          Подскажем, какое оформление подойдёт вашему объекту, как уложиться в бюджет
          и что обычно согласуют управляющие компании. Подготовим индивидуальную концепцию и смету.
        </p>

        <div className="animate-item stagger-3 w-20 h-[2px] bg-accent/50 mb-6 md:mb-10" />

        <div className="animate-item stagger-4 flex flex-col sm:flex-row gap-4 sm:gap-10 mb-6 md:mb-10">
          {contacts.map((c, i) => (
            <a key={i} href={c.href} className="text-center group" target="_blank" rel="noopener noreferrer">
              <p className="font-body text-xs md:text-sm text-muted-foreground/60 mb-1">{c.label}</p>
              <p className="font-heading text-sm md:text-xl font-bold text-foreground group-hover:text-accent transition-colors">{c.value}</p>
            </a>
          ))}
        </div>

        <div className="animate-item stagger-5 bg-card rounded-lg border border-accent/30 p-3 md:p-5 max-w-2xl text-center">
          <p className="font-body text-sm md:text-lg text-foreground/80 leading-relaxed">
            Оставьте заявку — и мы подготовим <span className="font-semibold text-accent">1–2 варианта концепции</span> с предварительной сметой для вашего объекта. Бесплатно.
          </p>
        </div>

        <div className="animate-item stagger-5 mt-6 md:mt-10">
          <a
            href="https://makeusbeautiful.ru/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 md:px-10 md:py-4 rounded-full bg-accent text-background font-heading text-sm md:text-xl font-bold tracking-wider hover:bg-accent/90 transition-colors"
          >
            Получить расчёт
          </a>
        </div>

        <div className="animate-item stagger-5 mt-8 md:mt-12">
          <span className="font-heading text-lg md:text-2xl tracking-[0.2em] text-foreground font-bold">
            СДЕЛАЙ<span className="text-accent"> КРАСИВО!</span>
          </span>
        </div>

        <p className="animate-item stagger-5 mt-2 font-body text-xs md:text-sm text-muted-foreground/40">
          makeusbeautiful.ru
        </p>
      </div>
    </div>
  );
};

export default MBSlide10CTA;
