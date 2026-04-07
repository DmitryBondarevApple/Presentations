import { AXSlideContainer } from './AXSlideContainer';

const effects = [
  { title: "Снижение риска", desc: "Первый релиз строится на проверенных данных, а не на предположениях — меньше вероятность дорогих ошибок" },
  { title: "Экономия бюджета", desc: "Инвестиции направляются только на подтверждённые функции — без расходов на то, что рынку не нужно" },
  { title: "Ускорение запуска", desc: "Готовое ТЗ сокращает фазу планирования и позволяет сразу перейти к реализации" },
  { title: "Свобода выбора", desc: "На каждом этапе клиент сам определяет: кто будет разработчиком, какой подход использовать и когда стартовать" },
];

const AXSlide14BusinessEffect = () => (
  <AXSlideContainer number={14} label="Бизнес-эффект">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="ax-effect-title">
      Управляемый путь <span className="text-accent">к запуску</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Подход AX10 превращает неопределённость в последовательность конкретных шагов:
    </p>
    <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 mb-2 sm:mb-4 md:mb-8">
      {effects.map((e, i) => (
        <div key={i} className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-2.5 sm:p-4 md:p-7" data-testid={`ax-effect-${i}`}>
          <h3 className="font-heading text-sm sm:text-base md:text-xl font-bold text-foreground mb-1 sm:mb-2 md:mb-3">{e.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug sm:leading-relaxed">{e.desc}</p>
        </div>
      ))}
    </div>
    <div className="bg-card rounded-lg border-2 border-accent p-2.5 sm:p-4 md:p-6">
      <p className="font-body text-sm sm:text-base md:text-xl text-foreground/80 leading-snug sm:leading-relaxed">
        <span className="font-semibold text-accent">Итог: </span>
        сначала подтверждённый продуктовый фокус, затем независимое ТЗ, далее — реализация с любой командой или ускоренная AI-first разработка силами AX10.
      </p>
    </div>
  </AXSlideContainer>
);
export default AXSlide14BusinessEffect;
