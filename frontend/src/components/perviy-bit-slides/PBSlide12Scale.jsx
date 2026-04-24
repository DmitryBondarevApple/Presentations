import { PBSlideContainer } from './PBSlideContainer';

const items = [
  "Сокращение трудозатрат в 8-10 раз",
  "Рост конверсии и дополнительная выручка",
  "Единый процесс для всех менеджеров и офисов",
  "Воспроизводимое качество вне зависимости от опыта сотрудника",
];

const PBSlide12Scale = () => (
  <PBSlideContainer number={12} label="Масштаб">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="pb-scale-title">
      Сотни менеджеров — <span className="text-accent">единый стандарт</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-3 sm:mb-5 md:mb-10 leading-relaxed max-w-5xl">
      Масштабирование пресейла на всю компанию с одновременным ростом качества обслуживания
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-6 max-w-4xl">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-2.5 md:gap-4 bg-card rounded-lg border border-border p-3 md:p-6">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent shrink-0 mt-1.5 md:mt-2.5" />
          <p className="font-body text-xs sm:text-sm md:text-lg text-foreground leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  </PBSlideContainer>
);
export default PBSlide12Scale;
