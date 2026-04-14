import { NPSlideContainer } from './NPSlideContainer';

const segments = [
  {
    title: "Для интеграторов",
    items: [
      "Ускоряет сбор требований и описание процессов",
      "Снижает нагрузку на аналитиков",
      "Помогает быстрее собирать ТЗ из интервью и демонстраций",
      "Фиксация изменений и обучение пользователей",
    ],
  },
  {
    title: "Для консалтинга",
    items: [
      "Ускоряет интервью и диагностику компаний",
      "Синтезирует массив интервью в единый отчёт",
      "Оформляет результаты по фреймворкам",
      "Масштабирует работу дорогих экспертов",
    ],
  },
  {
    title: "Для product-команд",
    items: [
      "Упрощает customer discovery",
      "Собирает инсайты по темам и паттернам",
      "Переводит интервью в PRD, гипотезы и задачи",
      "Ускоряет цикл «исследование → решение»",
    ],
  },
];

const NPSlide12Segments = () => (
  <NPSlideContainer number={12} label="Ценность">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="np-segments-title">
      Универсальная платформа <span className="text-accent">для трёх типов команд</span>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-6">
      {segments.map((seg, i) => (
        <div key={i} className="bg-card rounded-lg border-t-[3px] border-t-accent border border-border p-3 sm:p-5 md:p-8" data-testid={`np-seg-${i}`}>
          <h3 className="font-heading text-sm sm:text-base md:text-2xl font-bold text-foreground mb-2 md:mb-5">{seg.title}</h3>
          <div className="space-y-1 sm:space-y-1.5 md:space-y-3">
            {seg.items.map((item, j) => (
              <div key={j} className="flex items-start gap-1.5 md:gap-2.5">
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent mt-1.5 md:mt-2 shrink-0" />
                <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug sm:leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </NPSlideContainer>
);
export default NPSlide12Segments;
