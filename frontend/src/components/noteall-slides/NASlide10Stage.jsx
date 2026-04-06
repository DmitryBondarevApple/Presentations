import { NASlideContainer } from './NASlideContainer';

const NASlide10Stage = () => (
  <NASlideContainer number={10} label="Текущая стадия">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-3" data-testid="na-stage-title">
      Закрытое <span className="text-accent">бета-тестирование</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8 max-w-4xl leading-relaxed">
      Сервис тестируется в компаниях, связанных со стартап-анализом (питч-дни, касдевы) и исследованиями рынка (глубинные интервью)
    </p>
    <div className="flex flex-col sm:flex-row gap-3 md:gap-5 mb-4 md:mb-6">
      <div className="flex-1 bg-card rounded-lg border-2 border-accent p-4 md:p-6 text-center">
        <span className="font-heading text-2xl md:text-4xl font-bold text-accent">13.04.2026</span>
        <p className="font-body text-xs md:text-base text-foreground/80 mt-2">Запуск на открытый рынок</p>
      </div>
      <div className="flex-1 bg-card rounded-lg border border-border p-4 md:p-6 text-center">
        <span className="font-heading text-2xl md:text-4xl font-bold text-foreground">AI-first</span>
        <p className="font-body text-xs md:text-base text-muted-foreground mt-2">Вся разработка с использованием AI-инструментов</p>
      </div>
      <div className="flex-1 bg-card rounded-lg border border-border p-4 md:p-6 text-center">
        <span className="font-heading text-2xl md:text-4xl font-bold text-foreground">10–20x</span>
        <p className="font-body text-xs md:text-base text-muted-foreground mt-2">Сокращение расходов на разработку</p>
      </div>
    </div>
    <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-3 md:p-5">
      <p className="font-body text-sm md:text-lg text-foreground/80 leading-relaxed">
        Сроки внедрения функционала — <span className="font-semibold text-accent">дни вместо недель и месяцев</span> благодаря AI-инструментам разработки.
      </p>
    </div>
  </NASlideContainer>
);
export default NASlide10Stage;
