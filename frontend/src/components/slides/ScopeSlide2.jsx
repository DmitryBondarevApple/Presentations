import { SlideContainer } from "./SlideContainer";

const stages = [
  {
    num: "05",
    title: "Коммерческая упаковка",
    tasks: "Набор материалов, структура предложения, экономический эффект, возражения",
    results: "Одностраничник, презентация, FAQ, шаблоны, калькулятор эффекта"
  },
  {
    num: "06",
    title: "Проверка внешнего спроса",
    tasks: "Интервью, встречи, фиксация сигналов интереса и условий пилота",
    results: "Реестр контактов, протоколы, карта интереса, список для пилотов"
  },
  {
    num: "07",
    title: "Проектирование пилотов",
    tasks: "Дизайн пилота, критерии успеха, роли сторон, требования по безопасности",
    results: "Паспорт пилота, KPI, план-график, реестр рисков"
  },
  {
    num: "08",
    title: "Финальная защита и план",
    tasks: "Итоговая сессия, фиксация решений, рекомендации по следующей волне",
    results: "Итоговый отчёт, решения по продуктам, дорожная карта"
  }
];

const ScopeSlide2 = () => (
  <SlideContainer number={10} label="Содержание работ · 2/2">
    <h2 className="animate-item stagger-1 font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-10">
      Содержание работ{' '}
      <span className="text-muted-foreground font-normal text-lg md:text-2xl">(этапы 5–8)</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-5xl">
      {stages.map((s, i) => (
        <div
          key={i}
          className="animate-item bg-card/60 rounded-xl p-5 md:p-6 border-l-2 border-accent/60"
          style={{ animationDelay: `${(i + 2) * 0.1}s` }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-heading text-[11px] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded">
              {s.num}
            </span>
            <h3 className="font-heading text-sm md:text-base font-semibold text-foreground">{s.title}</h3>
          </div>
          <p className="font-body text-xs text-muted-foreground mb-2">
            <span className="text-foreground/60 font-medium">Задачи: </span>{s.tasks}
          </p>
          <p className="font-body text-xs text-muted-foreground">
            <span className="text-foreground/60 font-medium">Результаты: </span>{s.results}
          </p>
        </div>
      ))}
    </div>
  </SlideContainer>
);

export default ScopeSlide2;
