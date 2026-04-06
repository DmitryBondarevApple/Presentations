import { NASlideContainer } from './NASlideContainer';

const NASlide09BusinessModel = () => (
  <NASlideContainer number={9} label="Бизнес-модель">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="na-bmodel-title">
      <span className="text-accent">Pay-as-you-go</span> + подписка
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
      Простая кредитная модель с низким порогом входа
    </p>
    <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
      <div className="flex-1 bg-card rounded-lg border-2 border-accent p-5 md:p-8">
        <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded bg-accent text-background text-[10px] md:text-sm font-bold tracking-wider mb-3 md:mb-5">СЕЙЧАС</span>
        <h3 className="font-heading text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-4">Оплата за AI-вызовы</h3>
        <p className="font-body text-xs md:text-lg text-muted-foreground leading-relaxed mb-3 md:mb-5">
          Кредитная модель: пользователь платит только за реально потреблённые AI-запросы. Бесплатный старт с приветственным кредитом при регистрации.
        </p>
        <div className="space-y-2 md:space-y-3">
          {["Прозрачная стоимость каждого запроса", "Нет месячных платежей на старте", "Пополнение баланса в любой момент", "Общий баланс для команды"].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
              <span className="font-body text-xs md:text-base text-foreground/80">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-card rounded-lg border border-border p-5 md:p-8">
        <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded bg-accent/10 text-accent text-[10px] md:text-sm font-bold tracking-wider mb-3 md:mb-5">ЧЕРЕЗ 2–3 МЕС.</span>
        <h3 className="font-heading text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-4">Подписная модель</h3>
        <p className="font-body text-xs md:text-lg text-muted-foreground leading-relaxed mb-3 md:mb-5">
          По мере развития функционала добавится подписка с включёнными объёмами обработки и расширенными командными функциями.
        </p>
        <div className="space-y-2 md:space-y-3">
          {["Фиксированный бюджет для бизнеса", "Расширенные командные функции", "Приоритетная обработка", "Корпоративные интеграции"].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-accent/50 mt-1.5 shrink-0" />
              <span className="font-body text-xs md:text-base text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </NASlideContainer>
);
export default NASlide09BusinessModel;
