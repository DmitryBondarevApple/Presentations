import { NASlideContainer } from './NASlideContainer';

const lines = [
  {
    num: "01",
    title: "Встроенные механики",
    items: [
      "Двусторонняя реферальная программа (бесплатные кредиты)",
      "Revenue-share аффилиат-программа для партнёров (сервисы для МСП, блогеры, Telegram-каналы)",
    ],
  },
  {
    num: "02",
    title: "Расширение на команды",
    items: [
      "Совместные сценарии анализа и общие папки",
      "Общий баланс использования",
    ],
  },
  {
    num: "03",
    title: "Точечные B2B-продажи",
    items: [
      "Вертикали: маркетинг, исследования, продукт, обучение, customer success",
      "Контент-маркетинг через блог и партнёрские каналы",
    ],
  },
];

const NASlide11GTM = () => (
  <NASlideContainer number={11} label="Go-to-Market">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1 md:mb-5" data-testid="na-gtm-title">
      Стратегия <span className="text-accent">роста</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10">
      Три линии масштабирования — от виральности до B2B
    </p>
    <div className="flex flex-col gap-2 sm:gap-4 md:gap-8">
      {lines.map((l, i) => (
        <div key={i} className="flex flex-col sm:flex-row bg-card rounded-lg border border-border overflow-hidden" data-testid={`na-gtm-${i}`}>
          <div className="sm:w-52 md:w-72 bg-accent/10 p-2.5 sm:p-4 md:p-7 flex flex-row sm:flex-col items-center sm:items-start gap-1.5 sm:gap-2 md:gap-3 shrink-0">
            <span className="font-heading text-sm sm:text-base md:text-xl font-bold text-accent">{l.num}</span>
            <h3 className="font-heading text-sm sm:text-base md:text-xl font-bold text-foreground">{l.title}</h3>
          </div>
          <div className="p-2.5 sm:p-4 md:p-7 space-y-1 sm:space-y-2 md:space-y-3">
            {l.items.map((item, j) => (
              <div key={j} className="flex items-start gap-1.5 sm:gap-2">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-accent mt-1 sm:mt-2 shrink-0" />
                <span className="font-body text-xs sm:text-sm md:text-lg text-foreground/80 leading-snug sm:leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </NASlideContainer>
);
export default NASlide11GTM;
