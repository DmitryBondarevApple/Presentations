import { PBSlideContainer } from './PBSlideContainer';

const steps = [
  { n: "01", t: "Стандартизированное интервью", d: "Менеджер проводит встречу по скрипту" },
  { n: "02", t: "AI-анализ записи", d: "Извлечение проблем и потребностей клиента" },
  { n: "03", t: "Диагностический документ", d: "Верифицируемый промежуточный артефакт" },
  { n: "04", t: "Генерация ТЗ, оценки и КП", d: "Готовый пакет документов для клиента" },
];

const PBSlide04Solution = () => (
  <PBSlideContainer number={4} label="Решение">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="pb-solution-title">
      Сквозной pipeline — <span className="text-accent">от записи к готовым стандартизированным артефактам</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-3 sm:mb-5 md:mb-10 leading-relaxed max-w-4xl">
      Noteall превращает разговор с клиентом в структурированный рабочий материал
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-5">
      {steps.map((s, i) => (
        <div key={i} className="bg-card rounded-lg border-t-[3px] border-t-accent border border-border p-3 sm:p-4 md:p-6">
          <span className="font-heading text-lg md:text-2xl font-bold text-accent/30">{s.n}</span>
          <h3 className="font-heading text-sm sm:text-base md:text-xl font-bold text-foreground mt-1 mb-1 md:mb-2">{s.t}</h3>
          <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{s.d}</p>
        </div>
      ))}
    </div>
  </PBSlideContainer>
);
export default PBSlide04Solution;
