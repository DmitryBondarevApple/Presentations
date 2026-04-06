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

    <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 pt-4 md:pt-6 shrink-0 relative z-10">
      <span className="font-heading text-xs md:text-base tracking-[0.18em] text-muted-foreground uppercase">Раунд</span>
      <span className="font-body text-xs md:text-base text-muted-foreground">14&nbsp;/&nbsp;14</span>
    </div>

    <div className="flex-1 overflow-y-auto flex flex-col justify-start lg:justify-center px-6 md:px-12 lg:px-16 py-4 md:py-6 relative z-10">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 mb-4 md:mb-8">
        <div className="flex-1">
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-5" data-testid="na-round-title">
            Раунд: <span className="text-accent">5 млн ₽</span>
          </h2>
          <p className="font-body text-sm md:text-lg text-muted-foreground mb-3 md:mb-6">
            Burn-rate: 500 тыс. ₽/мес.
          </p>
          <div className="space-y-2 md:space-y-4">
            {uses.map((u, i) => (
              <div key={i} className="flex flex-col lg:flex-row gap-2 md:gap-3">
                <div className="flex-1 min-w-0 bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-3 md:p-5">
                  <h3 className="font-heading text-xs md:text-lg font-bold text-foreground">{u.title}</h3>
                  <p className="font-body text-[10px] md:text-base text-muted-foreground mt-1">{u.desc}</p>
                </div>
                <div className="lg:w-48 shrink-0 flex flex-col">
                  {i === 0 && <p className="font-heading text-sm md:text-xl font-semibold text-foreground mb-2 md:mb-3 text-center hidden lg:block">Цели на 6 месяцев</p>}
                  <div className="flex-1 bg-card rounded-lg border border-border p-3 md:p-4 text-center flex flex-col justify-center">
                  <span className="font-heading text-xl md:text-3xl font-bold text-accent">{goals[i].n}</span>
                  <p className="font-body text-[10px] md:text-base text-muted-foreground mt-1">{goals[i].l}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-border mb-3 md:mb-6" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <p className="font-heading text-sm md:text-2xl font-bold text-foreground">Дмитрий Бондарев</p>
          <div className="flex flex-wrap gap-4 md:gap-8 mt-2">
            {contacts.map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="group">
                <p className="font-body text-[10px] md:text-sm text-muted-foreground/60">{c.label}</p>
                <p className="font-body text-xs md:text-base text-foreground group-hover:text-accent transition-colors">{c.value}</p>
              </a>
            ))}
          </div>
        </div>
        <img src={`${process.env.PUBLIC_URL || ''}/images/noteall/logo-noteall.png`} alt="Noteall" className="h-10 md:h-14 opacity-60" />
      </div>
    </div>

    <div className="absolute bottom-4 left-6 md:left-12 lg:left-16 pointer-events-none select-none z-10">
      <img src={`${process.env.PUBLIC_URL || ''}/images/noteall/favicon.png`} alt="" className="h-5 md:h-6 opacity-20" />
    </div>
  </div>
);
export default NASlide13Round;
