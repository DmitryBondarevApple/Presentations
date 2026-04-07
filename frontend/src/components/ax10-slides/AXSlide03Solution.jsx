import { AXSlideContainer } from './AXSlideContainer';

const items = [
  { title: "Подтверждённые гипотезы", desc: "Какие предположения о рынке и пользователях выдержали проверку, а какие — нет" },
  { title: "Пользовательские сценарии", desc: "Приоритетные задачи и поведение ранних пользователей на основе реальных данных" },
  { title: "Структура первого решения", desc: "Портрет пользователя, состав MVP и приоритизированный функционал" },
  { title: "Готовое ТЗ", desc: "Техническое задание, пригодное для передачи любой команде разработки" },
];

const AXSlide03Solution = () => (
  <AXSlideContainer number={3} label="Решение">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="ax-solution-title">
      AX10 готовит <span className="text-accent">основу для разработки</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Исследовательский и продуктово-аналитический проект, который предшествует разработке. Результат — не просто исследование, а пакет решений для запуска:
    </p>
    <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6">
      {items.map((item, i) => (
        <div key={i} className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-2.5 sm:p-4 md:p-7" data-testid={`ax-solution-${i}`}>
          <h3 className="font-heading text-sm sm:text-base md:text-xl font-bold text-foreground mb-1 sm:mb-2 md:mb-3">{item.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug sm:leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </AXSlideContainer>
);
export default AXSlide03Solution;
