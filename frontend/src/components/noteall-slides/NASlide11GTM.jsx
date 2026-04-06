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
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-3" data-testid="na-gtm-title">
      Стратегия <span className="text-accent">роста</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
      Три линии масштабирования — от виральности до B2B
    </p>
    <div className="flex flex-col gap-3 md:gap-5">
      {lines.map((l, i) => (
        <div key={i} className="flex flex-col sm:flex-row bg-card rounded-lg border border-border overflow-hidden" data-testid={`na-gtm-${i}`}>
          <div className="sm:w-48 md:w-60 bg-accent/10 p-3 md:p-5 flex flex-row sm:flex-col items-center sm:items-start gap-2 md:gap-3 shrink-0">
            <span className="font-heading text-sm md:text-lg font-bold text-accent">{l.num}</span>
            <h3 className="font-heading text-sm md:text-lg font-bold text-foreground">{l.title}</h3>
          </div>
          <div className="p-3 md:p-5 space-y-1 md:space-y-2">
            {l.items.map((item, j) => (
              <div key={j} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                <span className="font-body text-xs md:text-base text-foreground/80 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </NASlideContainer>
);
export default NASlide11GTM;
