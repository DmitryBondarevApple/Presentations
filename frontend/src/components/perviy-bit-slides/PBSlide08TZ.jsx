import { PBSlideContainer } from './PBSlideContainer';

const chain = [
  { from: "Диагностика", to: "Техническое задание" },
  { from: "ТЗ", to: "Декомпозиция на скоупы и задачи" },
  { from: "Задачи", to: "Расчёт трудоёмкости по внутренней сетке" },
  { from: "Трудоёмкость", to: "Себестоимость и цена для клиента" },
];

const PBSlide08TZ = () => (
  <PBSlideContainer number={8} label="Генерация">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="pb-tz-title">
      Автоматическая генерация <span className="text-accent">ТЗ и декомпозиция</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-3 sm:mb-5 md:mb-10 leading-relaxed max-w-4xl">
      На основе утверждённой диагностики система формирует готовое к работе ТЗ
    </p>
    <div className="space-y-2 md:space-y-4 max-w-4xl">
      {chain.map((c, i) => (
        <div key={i} className="flex items-center gap-2 md:gap-4">
          <div className="bg-card rounded-lg border border-border px-3 py-2 md:px-5 md:py-3 min-w-[120px] md:min-w-[180px]">
            <p className="font-heading text-xs sm:text-sm md:text-base font-bold text-muted-foreground">{c.from}</p>
          </div>
          <svg className="w-4 h-4 md:w-6 md:h-6 text-accent shrink-0" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="2" />
          </svg>
          <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border px-3 py-2 md:px-5 md:py-3 flex-1">
            <p className="font-body text-xs sm:text-sm md:text-base text-foreground">{c.to}</p>
          </div>
        </div>
      ))}
    </div>
  </PBSlideContainer>
);
export default PBSlide08TZ;
