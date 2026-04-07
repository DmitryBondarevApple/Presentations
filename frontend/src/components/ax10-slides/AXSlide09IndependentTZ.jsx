import { AXSlideContainer } from './AXSlideContainer';

const points = [
  "Можно передать любой внутренней или внешней команде разработки",
  "Достаточно для оценки трудозатрат, сроков и стоимости реализации",
  "Не требует дополнительных консультаций с AX10 для старта работ",
];

const AXSlide09IndependentTZ = () => (
  <AXSlideContainer number={9} label="Свобода выбора">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="ax-tz-title">
      ТЗ <span className="text-accent">не привязано</span> к AX10
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Ключевая ценность результата: подготовленное техническое задание не замыкает клиента на AX10 как на единственного исполнителя.
    </p>
    <div className="flex flex-col lg:flex-row gap-2 sm:gap-4 md:gap-8">
      <div className="flex-1 bg-card rounded-lg border-2 border-accent p-3 sm:p-5 md:p-8">
        <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 rounded bg-accent/10 text-accent text-[10px] sm:text-xs md:text-sm font-bold tracking-wider mb-2 sm:mb-3 md:mb-5">
          НЕЗАВИСИМОЕ ТЗ
        </span>
        <h3 className="font-heading text-sm sm:text-base md:text-2xl font-bold text-foreground mb-2 sm:mb-3 md:mb-5">
          Комплект материалов для любой команды
        </h3>
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-2 sm:gap-3">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent mt-1.5 sm:mt-2 shrink-0" />
              <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/80 leading-snug sm:leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-80 bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8 flex flex-col justify-center items-center text-center">
        <span className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-accent">100%</span>
        <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/80 mt-2 sm:mt-3 md:mt-5 leading-snug">
          материалов остаётся у клиента и принадлежит ему
        </p>
      </div>
    </div>
  </AXSlideContainer>
);
export default AXSlide09IndependentTZ;
