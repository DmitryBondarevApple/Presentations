import { PBSlideContainer } from './PBSlideContainer';

const items = [
  { t: "Перечень задач и результатов", d: "Чёткий список того, что будет сделано" },
  { t: "Стоимость по блокам", d: "Прозрачная структура ценообразования" },
  { t: "Дорожная карта проекта", d: "Последовательность этапов и зависимости" },
  { t: "Календарный план", d: "Сроки по каждому блоку работ" },
];

const PBSlide09KP = () => (
  <PBSlideContainer number={9} label="Подготовка коммерческих предложений">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="pb-kp-title">
      Готовое КП — <span className="text-accent">за минуты, а не за дни</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-3 sm:mb-5 md:mb-10 leading-relaxed max-w-4xl">
      Автоматическая сборка коммерческого предложения из данных pipeline
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-6">
      {items.map((s, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8">
          <div className="flex items-center gap-2 mb-1 md:mb-2">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent" />
            <h3 className="font-heading text-sm sm:text-base md:text-xl font-bold text-foreground">{s.t}</h3>
          </div>
          <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-relaxed">{s.d}</p>
        </div>
      ))}
    </div>
  </PBSlideContainer>
);
export default PBSlide09KP;
