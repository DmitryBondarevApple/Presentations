const goals = [
  { n: "400K ₽", l: "MRR" },
  { n: "> 100", l: "платящих клиентов" },
  { n: "< 3 мес.", l: "ROAS по платным каналам" },
];

const uses = [
  { title: "Product Development", desc: "Сценарии, интеграции, корпоративные функции, качество анализа" },
  { title: "Продвижение", desc: "Воспроизводимый и масштабируемый маркетинг в целевых сегментах" },
  { title: "Инфраструктура", desc: "Масштабирование и надёжность сервиса" },
];

const contacts = [
  { label: "Telegram", value: "@dmitrybondarev", href: "https://t.me/dmitrybondarev" },
  { label: "Email", value: "dmitry.bondarev@gmail.com", href: "mailto:dmitry.bondarev@gmail.com" },
  { label: "Телефон", value: "+7 (921) 961-9644", href: "tel:+79219619644" },
];

const NASlide13Round = () => (
  <div className="w-full h-full flex flex-col relative bg-background">
    <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, hsl(174 80% 35%), transparent)' }} />
    <div className="flex-1 overflow-y-auto flex flex-col justify-start lg:justify-center px-6 md:px-16 lg:px-24 py-4 md:py-8 relative z-10">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mb-4 md:mb-6">
        <div className="flex-1">
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-4" data-testid="na-round-title">
            Раунд: <span className="text-accent">5 млн ₽</span>
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground mb-3 md:mb-5">
            Burn-rate: 500 тыс. ₽/мес.
          </p>
          <div className="space-y-2 md:space-y-3">
            {uses.map((u, i) => (
              <div key={i} className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-3 md:p-4">
                <h3 className="font-heading text-xs md:text-base font-bold text-foreground">{u.title}</h3>
                <p className="font-body text-[10px] md:text-sm text-muted-foreground mt-0.5">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-72">
          <p className="font-heading text-xs md:text-base font-semibold text-foreground mb-2 md:mb-4">Цели на 6 месяцев</p>
          <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
            {goals.map((g, i) => (
              <div key={i} className="bg-card rounded-lg border border-border p-3 md:p-4 text-center">
                <span className="font-heading text-lg md:text-2xl font-bold text-accent">{g.n}</span>
                <p className="font-body text-[10px] md:text-sm text-muted-foreground mt-1">{g.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-border mb-3 md:mb-5" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <p className="font-heading text-sm md:text-xl font-bold text-foreground">Дмитрий Бондарев</p>
          <div className="flex flex-wrap gap-3 md:gap-6 mt-2">
            {contacts.map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="group">
                <p className="font-body text-[10px] md:text-xs text-muted-foreground/60">{c.label}</p>
                <p className="font-body text-xs md:text-sm text-foreground group-hover:text-accent transition-colors">{c.value}</p>
              </a>
            ))}
          </div>
        </div>
        <img src={`${process.env.PUBLIC_URL || ''}/images/noteall/logo-noteall.png`} alt="NoteAll" className="h-8 md:h-12 opacity-60" />
      </div>
    </div>
  </div>
);
export default NASlide13Round;
