import { SlideContainer } from "./SlideContainer";

const TOTAL_WEEKS = 12;

const stages = [
  { name: "Запуск проекта, NDA", start: 1, end: 1 },
  { name: "Отбор продуктов", start: 1, end: 2 },
  { name: "Диагностика, ценность", start: 2, end: 4 },
  { name: "Анализ рынка", start: 3, end: 4 },
  { name: "Коммерческая упаковка", start: 5, end: 6 },
  { name: "Проверка спроса", start: 6, end: 8 },
  { name: "Проектирование пилотов", start: 8, end: 12 },
  { name: "Финальная защита", start: 12, end: 12 },
];

const RoadmapSlide = () => (
  <SlideContainer number={12} label="Дорожная карта">
    <h2 className="animate-item stagger-1 font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-10">
      Дорожная карта <span className="text-accent">· 12 недель</span>
    </h2>

    <div className="max-w-5xl w-full space-y-2.5">
      {/* Week header */}
      <div className="flex items-center">
        <div className="w-[160px] md:w-[220px] shrink-0" />
        <div className="flex-1 flex">
          {Array.from({ length: TOTAL_WEEKS }, (_, i) => (
            <div
              key={i}
              className="flex-1 text-center font-body text-[9px] md:text-[11px] text-muted-foreground/50"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Gantt bars */}
      {stages.map((stage, i) => {
        const leftPct = ((stage.start - 1) / TOTAL_WEEKS) * 100;
        const widthPct = ((stage.end - stage.start + 1) / TOTAL_WEEKS) * 100;

        return (
          <div
            key={i}
            className="animate-item flex items-center"
            style={{ animationDelay: `${(i + 2) * 0.07}s` }}
          >
            <span className="font-body text-[11px] md:text-xs text-foreground/75 w-[160px] md:w-[220px] shrink-0 pr-4 text-right truncate">
              {stage.name}
            </span>
            <div className="flex-1 relative h-6 md:h-7 bg-card/40 rounded">
              <div
                className="absolute top-0 h-full rounded bg-accent/70"
                style={{ left: `${leftPct}%`, width: `${widthPct}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>

    <p className="animate-item stagger-9 mt-6 font-body text-[10px] md:text-xs text-muted-foreground/50 max-w-4xl">
      * Длительность зависит от скорости обработки и анализа материалов со стороны клиента
    </p>
  </SlideContainer>
);

export default RoadmapSlide;
