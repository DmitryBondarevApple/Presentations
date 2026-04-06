import { NASlideContainer } from './NASlideContainer';

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
  <NASlideContainer number={14} label="Раунд">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1 sm:mb-2 md:mb-5" data-testid="na-round-title">
      Раунд: <span className="text-accent">5 млн ₽</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground mb-2 sm:mb-3 md:mb-6">
      Burn-rate: 500 тыс. ₽/мес.
    </p>
    <div className="space-y-1.5 sm:space-y-2 md:space-y-4 mb-3 sm:mb-4 md:mb-8">
      {uses.map((u, i) => (
        <div key={i} className="flex flex-col lg:flex-row gap-1.5 sm:gap-2 md:gap-3">
          <div className="flex-1 min-w-0 bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-2.5 sm:p-3 md:p-5">
            <h3 className="font-heading text-sm sm:text-base md:text-lg font-bold text-foreground">{u.title}</h3>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground mt-0.5">{u.desc}</p>
          </div>
          <div className="hidden lg:flex lg:w-48 shrink-0 flex-col">
            {i === 0 && <p className="font-heading text-sm md:text-xl font-semibold text-foreground mb-2 md:mb-3 text-center">Цели на 6 месяцев</p>}
            <div className="flex-1 bg-card rounded-lg border border-border p-3 md:p-4 text-center flex flex-col justify-center">
              <span className="font-heading text-xl md:text-3xl font-bold text-accent">{goals[i].n}</span>
              <p className="font-body text-xs md:text-base text-muted-foreground mt-1">{goals[i].l}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Mobile goals row */}
    <div className="flex gap-2 mb-3 lg:hidden">
      {goals.map((g, i) => (
        <div key={i} className="flex-1 bg-card rounded-lg border border-border p-2 sm:p-3 text-center">
          <span className="font-heading text-base sm:text-lg font-bold text-accent">{g.n}</span>
          <p className="font-body text-[10px] sm:text-xs text-muted-foreground mt-0.5">{g.l}</p>
        </div>
      ))}
    </div>

    <div className="w-full h-px bg-border mb-2 sm:mb-3 md:mb-6" />

    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
      <div>
        <p className="font-heading text-sm sm:text-base md:text-2xl font-bold text-foreground">Дмитрий Бондарев</p>
        <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-8 mt-1 sm:mt-2">
          {contacts.map((c, i) => (
            <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="group">
              <p className="font-body text-[10px] sm:text-xs md:text-sm text-muted-foreground/60">{c.label}</p>
              <p className="font-body text-xs sm:text-sm md:text-base text-foreground group-hover:text-accent transition-colors">{c.value}</p>
            </a>
          ))}
        </div>
      </div>
      <img src={`${process.env.PUBLIC_URL || ''}/images/noteall/logo-noteall.png`} alt="Noteall" className="h-8 sm:h-10 md:h-14 opacity-60" />
    </div>
  </NASlideContainer>
);
export default NASlide13Round;
