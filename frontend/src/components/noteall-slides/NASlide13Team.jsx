import { NASlideContainer } from './NASlideContainer';

const ventureExp = [
  { label: "Основатель", desc: "Опыт основателя стартапа и фандрайзинга" },
  { label: "Ангел", desc: "Собственный опыт ангельских инвестиций" },
  { label: "VC / Корп.", desc: "Работа с топовыми венчурными фондами и инвестиционный анализ стартапов со стороны VC и корпораций" },
];

const NASlide13Team = () => (
  <NASlideContainer number={13} label="Команда">
    {/* Mobile: photo first, then text. Desktop: text left, photo right */}
    <div className="flex flex-col-reverse lg:flex-row gap-3 md:gap-8 items-start">
      <div className="flex-1">
        <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="na-team-title">
          Дмитрий <span className="text-accent">Бондарев</span>
        </h2>
        <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground/70 mb-2 md:mb-5">Основатель Noteall</p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mb-2 md:mb-5">
          <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 rounded bg-accent/10 text-accent text-[9px] sm:text-[10px] md:text-sm font-bold tracking-wider">30+ ЛЕТ В БИЗНЕСЕ</span>
          <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 rounded bg-accent/10 text-accent text-[9px] sm:text-[10px] md:text-sm font-bold tracking-wider">10+ СТАРТАПОВ</span>
          <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 rounded bg-accent/10 text-accent text-[9px] sm:text-[10px] md:text-sm font-bold tracking-wider">4 ВЫХОДА</span>
          <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 rounded bg-accent/10 text-accent text-[9px] sm:text-[10px] md:text-sm font-bold tracking-wider">25 ЛЕТ В ВЕНЧУРЕ</span>
        </div>

        <p className="font-body text-[11px] sm:text-xs md:text-base text-foreground/80 leading-snug sm:leading-relaxed mb-1.5 sm:mb-3 md:mb-5">
          Опытный предприниматель. Основатель и руководитель в 10+ оффлайн и цифровых стартапах, 4 выхода. Опыт создания компаний и продуктов с нуля до сервисов с миллионными аудиториями.
        </p>
        <p className="font-body text-[11px] sm:text-xs md:text-base text-foreground/80 leading-snug sm:leading-relaxed mb-2 sm:mb-4 md:mb-6">
          В digital умею все, в том числе своими руками. Опыт руководства командами разработки веб- и мобильных сервисов. Большой опыт отраслевой и продуктовой аналитики.
        </p>

        <p className="font-heading text-[11px] sm:text-xs md:text-base font-semibold text-foreground mb-1.5 sm:mb-2 md:mb-3">Опыт в венчурных инвестициях — 25 лет, со всех сторон стола:</p>
        <div className="space-y-1 sm:space-y-2 md:space-y-3">
          {ventureExp.map((v, i) => (
            <div key={i} className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-1.5 sm:p-2.5 md:p-4">
              <div className="flex items-start gap-1.5 sm:gap-2">
                <span className="font-heading text-xs sm:text-sm md:text-sm font-bold text-accent shrink-0">{v.label}</span>
                <span className="font-body text-xs sm:text-sm md:text-sm text-muted-foreground">{v.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-64 xl:w-72 shrink-0 flex flex-row lg:flex-col items-center gap-3 md:gap-5">
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-2xl overflow-hidden border-2 border-accent/30 shrink-0">
          <img src={`${process.env.PUBLIC_URL || ''}/images/noteall/founder.png`} alt="Дмитрий Бондарев" className="w-full h-full object-cover" data-testid="na-founder-photo" />
        </div>
        <div className="bg-card rounded-lg border border-border p-2.5 sm:p-3 md:p-5 flex-1 lg:w-full text-center">
          <span className="font-heading text-xl sm:text-2xl md:text-4xl font-bold text-accent">30+</span>
          <p className="font-body text-xs sm:text-sm md:text-sm text-muted-foreground mt-0.5 sm:mt-1">лет предпринимательского опыта</p>
        </div>
      </div>
    </div>
  </NASlideContainer>
);
export default NASlide13Team;
