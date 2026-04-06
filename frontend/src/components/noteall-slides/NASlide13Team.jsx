import { NASlideContainer } from './NASlideContainer';

const ventureExp = [
  { label: "Основатель", desc: "Опыт основателя стартапа и фандрайзинга" },
  { label: "Ангел", desc: "Собственный опыт ангельских инвестиций" },
  { label: "VC / Корп.", desc: "Работа с топовыми венчурными фондами и инвестиционный анализ стартапов со стороны VC и корпораций" },
];

const NASlide13Team = () => (
  <NASlideContainer number={13} label="Команда">
    <div className="flex flex-col lg:flex-row gap-4 md:gap-8 items-start">
      <div className="flex-1">
        <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-4" data-testid="na-team-title">
          Дмитрий <span className="text-accent">Бондарев</span>
        </h2>
        <p className="font-body text-sm md:text-lg text-muted-foreground/70 mb-3 md:mb-5">Основатель Noteall</p>

        <div className="flex flex-wrap gap-2 md:gap-3 mb-3 md:mb-5">
          <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded bg-accent/10 text-accent text-[10px] md:text-sm font-bold tracking-wider">30+ ЛЕТ В БИЗНЕСЕ</span>
          <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded bg-accent/10 text-accent text-[10px] md:text-sm font-bold tracking-wider">10+ СТАРТАПОВ</span>
          <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded bg-accent/10 text-accent text-[10px] md:text-sm font-bold tracking-wider">4 ВЫХОДА</span>
          <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded bg-accent/10 text-accent text-[10px] md:text-sm font-bold tracking-wider">25 ЛЕТ В ВЕНЧУРЕ</span>
        </div>

        <p className="font-body text-xs md:text-base text-foreground/80 leading-relaxed mb-3 md:mb-5">
          Опытный предприниматель. Основатель и руководитель в 10+ оффлайн и цифровых стартапах, 4 выхода. Опыт создания компаний и продуктов с нуля до сервисов с миллионными аудиториями.
        </p>
        <p className="font-body text-xs md:text-base text-foreground/80 leading-relaxed mb-4 md:mb-6">
          В digital умею все, в том числе своими руками. Опыт руководства командами разработки веб- и мобильных сервисов. Большой опыт отраслевой и продуктовой аналитики.
        </p>

        <p className="font-heading text-xs md:text-base font-semibold text-foreground mb-2 md:mb-3">Опыт в венчурных инвестициях — 25 лет, со всех сторон стола:</p>
        <div className="space-y-2 md:space-y-3">
          {ventureExp.map((v, i) => (
            <div key={i} className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-2.5 md:p-4">
              <div className="flex items-start gap-2">
                <span className="font-heading text-xs md:text-sm font-bold text-accent shrink-0">{v.label}</span>
                <span className="font-body text-xs md:text-sm text-muted-foreground">{v.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-64 xl:w-72 shrink-0 flex flex-col items-center">
        <div className="w-40 h-40 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-2xl overflow-hidden border-2 border-accent/30 mb-3 md:mb-5">
          <img src={`${process.env.PUBLIC_URL || ''}/images/noteall/founder.png`} alt="Дмитрий Бондарев" className="w-full h-full object-cover" data-testid="na-founder-photo" />
        </div>
        <div className="bg-card rounded-lg border border-border p-3 md:p-5 w-full text-center">
          <span className="font-heading text-2xl md:text-4xl font-bold text-accent">30+</span>
          <p className="font-body text-xs md:text-sm text-muted-foreground mt-1">лет предпринимательского опыта</p>
        </div>
      </div>
    </div>
  </NASlideContainer>
);
export default NASlide13Team;
