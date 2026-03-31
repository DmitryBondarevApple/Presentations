import { EMSlideContainer } from './EMSlideContainer';

const checks = [
  "Сколько людей с этим сталкиваются?",
  "Насколько это болезненно?",
  "Готовы ли они платить за решение?",
  "Как часто будут возвращаться?",
  "Разовая покупка или долгий сценарий?",
];

const EMSlide08Market = () => {
  return (
    <EMSlideContainer number={8} label="Шаг 2 · Рынок">
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4" data-testid="em-market-title">
        Проверь не только проблему,{' '}
        <span className="text-accent">но и силу спроса</span>
      </h2>
      <p className="font-body text-sm md:text-lg text-muted-foreground mb-6 md:mb-10">
        Если продукт не решает важную и понятную задачу — он не нужен
      </p>

      <div className="space-y-3 md:space-y-4">
        {checks.map((q, i) => (
          <div key={i} className="flex items-start gap-3 md:gap-5 bg-card rounded-lg border border-border p-3 md:p-5 lg:p-6">
            <span className="font-heading text-xl md:text-3xl lg:text-4xl font-bold text-accent/30 shrink-0 w-8 md:w-12">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="font-body text-base md:text-xl lg:text-2xl text-foreground leading-relaxed pt-0.5 md:pt-1">
              {q}
            </span>
          </div>
        ))}
      </div>
    </EMSlideContainer>
  );
};

export default EMSlide08Market;
