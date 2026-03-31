import { EMSlideContainer } from './EMSlideContainer';

const checks = [
  { q: "Сколько людей с этим сталкиваются?", hint: "Объём рынка" },
  { q: "Насколько это болезненно?", hint: "Интенсивность проблемы" },
  { q: "Готовы ли они платить за решение?", hint: "Платёжеспособность" },
  { q: "Как часто будут возвращаться?", hint: "Частота использования" },
  { q: "Разовая покупка или долгий сценарий?", hint: "Модель монетизации" },
];

const EMSlide08Market = () => {
  return (
    <EMSlideContainer number={8} label="Шаг 2 · Рынок">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="em-market-title">
        Проверь не только проблему,{' '}
        <span className="text-accent">но и силу спроса</span>
      </h2>
      <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
        Если продукт не решает важную и понятную задачу — он не нужен
      </p>

      <div className="space-y-2 md:space-y-4 mb-4 md:mb-6 md:flex-1 md:flex md:flex-col md:justify-center">
        {checks.map((item, i) => (
          <div key={i} className="flex items-center gap-3 md:gap-5 bg-card rounded-lg border border-border p-3 md:p-5">
            <div className="w-8 md:w-10 h-8 md:h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
              <span className="font-heading text-sm md:text-lg font-bold text-accent">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <span className="font-body text-sm md:text-xl text-foreground flex-1">{item.q}</span>
            <span className="font-body text-xs md:text-base text-muted-foreground/60 hidden md:block">{item.hint}</span>
          </div>
        ))}
      </div>

      <p className="font-body text-xs md:text-lg text-muted-foreground/70 italic">
        Эти пять вопросов определяют, стоит ли вообще начинать разработку.
      </p>
    </EMSlideContainer>
  );
};

export default EMSlide08Market;
