import { SlideContainer } from "./SlideContainer";

const stages = [
  {
    num: "01",
    title: "Запуск и процедурные решения",
    tasks: "Список продуктов, рабочий календарь, правила работы с данными, шаблоны",
    results: "Паспорт программы, матрица ролей, чек-лист ограничений"
  },
  {
    num: "02",
    title: "Отбор и приоритезация продуктов",
    tasks: "Критерии выхода, экспресс-оценка готовности, выбор до 5 продуктов",
    results: "Карта показателей, финальный список, карта зависимостей"
  },
  {
    num: "03",
    title: "Диагностика продукта и ценность",
    tasks: "Сбор фактуры, сценарии применения, эффекты, позиционирование",
    results: "JTBD/сценарии, ценностное предложение, профиль клиента"
  },
  {
    num: "04",
    title: "Анализ рынка и конкурентов",
    tasks: "Кабинетное исследование, конкурентная карта, анализ аналогов",
    results: "Карта конкурентов, сегментация, гипотезы дифференциации"
  }
];

const ScopeSlide1 = () => (
  <SlideContainer number={9} label="Содержание работ · 1/2">
    <h2 className="animate-item stagger-1 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 md:mb-10">
      Содержание работ{' '}
      <span className="text-muted-foreground font-normal text-lg md:text-2xl">(этапы 1–4)</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
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
            <h3 className="font-heading text-base md:text-lg font-semibold text-foreground">{s.title}</h3>
          </div>
          <p className="font-body text-xs md:text-sm text-muted-foreground mb-2">
            <span className="text-foreground/60 font-medium">Задачи: </span>{s.tasks}
          </p>
          <p className="font-body text-xs md:text-sm text-muted-foreground">
            <span className="text-foreground/60 font-medium">Результаты: </span>{s.results}
          </p>
        </div>
      ))}
    </div>
  </SlideContainer>
);

export default ScopeSlide1;
