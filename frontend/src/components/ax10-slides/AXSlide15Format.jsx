import { AXSlideContainer } from './AXSlideContainer';

const phases = [
  { weeks: "Недели 1–2", title: "Подготовка", items: ["Уточнение параметров проекта", "Дизайн исследования", "Подготовка гайдов и инструментов"] },
  { weeks: "Недели 3–5", title: "Полевой этап и аналитика", items: ["Интервью и анкетирование", "ИИ-обработка и кабинетное исследование", "Промежуточные выводы"] },
  { weeks: "Недели 6–9", title: "Синтез и ТЗ", items: ["Формирование продуктовых сценариев", "Структура MVP и приоритеты", "Техническое задание и дорожная карта"] },
];

const AXSlide15Format = () => (
  <AXSlideContainer number={15} label="Формат проекта">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="ax-format-title">
      <span className="text-accent">7–9 недель</span> до результата
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Длительность зависит от scope: в базовом варианте — 7 недель, при расширенном полевом этапе и дополнительных проверках — до 9 недель.
    </p>
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6">
      {phases.map((p, i) => (
        <div key={i} className="flex-1 bg-card rounded-lg border-2 border-accent p-3 sm:p-5 md:p-7" data-testid={`ax-phase-${i}`}>
          <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 rounded bg-accent text-white text-[10px] sm:text-xs md:text-sm font-bold tracking-wider mb-2 sm:mb-3 md:mb-4">
            {p.weeks}
          </span>
          <h3 className="font-heading text-sm sm:text-base md:text-xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">{p.title}</h3>
          <div className="space-y-1 sm:space-y-2 md:space-y-3">
            {p.items.map((item, j) => (
              <div key={j} className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent mt-1.5 sm:mt-2 shrink-0" />
                <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug sm:leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </AXSlideContainer>
);
export default AXSlide15Format;
