import { NASlideContainer } from './NASlideContainer';

const NASlide10Stage = () => (
  <NASlideContainer number={10} label="Текущая стадия">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="na-stage-title">
      Закрытое <span className="text-accent">бета-тестирование</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 max-w-5xl leading-snug sm:leading-relaxed">
      Сервис тестируется в компаниях, связанных со стартап-анализом (питч-дни, касдевы) и исследованиями рынка (глубинные интервью)
    </p>
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-8 mb-2 sm:mb-4 md:mb-8">
      <div className="flex-1 bg-card rounded-lg border-2 border-accent p-3 sm:p-5 md:p-8 text-center">
        <span className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-accent">13.04.2026</span>
        <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/80 mt-1 sm:mt-2 md:mt-4">Запуск на открытый рынок</p>
      </div>
      <div className="flex-1 bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8 text-center">
        <span className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground">AI-first</span>
        <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground mt-1 sm:mt-2 md:mt-4">Вся разработка с использованием AI-инструментов</p>
      </div>
      <div className="flex-1 bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8 text-center">
        <span className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground">10–20x</span>
        <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground mt-1 sm:mt-2 md:mt-4">Сокращение расходов на разработку</p>
      </div>
    </div>
    <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-2.5 sm:p-4 md:p-6">
      <p className="font-body text-sm sm:text-base md:text-xl text-foreground/80 leading-snug sm:leading-relaxed">
        Сроки внедрения функционала — <span className="font-semibold text-accent">дни вместо недель и месяцев</span> благодаря AI-инструментам разработки.
      </p>
    </div>
  </NASlideContainer>
);
export default NASlide10Stage;
