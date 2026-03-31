import { EMSlideContainer } from './EMSlideContainer';

const clusters = [
  {
    title: "Чат и поиск",
    items: ["GigaChat", "ChatGPT", "Perplexity", "Алиса"],
  },
  {
    title: "Генерация",
    items: ["Midjourney", "DALL-E", "Suno", "NotebookLM"],
  },
  {
    title: "Инструменты для кода",
    items: ["Cursor", "Claude Code", "Codex"],
  },
];

const EMSlide02Known = () => {
  return (
    <EMSlideContainer number={2} label="Контекст">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="em-known-title">
        Вы уже знаете ИИ <span className="text-accent">как сервис</span>
      </h2>
      <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
        Сегодня посмотрим на ИИ как на команду
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
        {clusters.map((c, i) => (
          <div key={i} className="bg-card rounded-lg border border-border p-4 md:p-8 flex flex-col">
            <span className="inline-block px-2 py-1 md:px-3 md:py-1.5 rounded bg-accent/10 text-accent text-xs md:text-sm font-bold tracking-wider uppercase mb-3 md:mb-5">
              {c.title}
            </span>
            <div className="space-y-2 md:space-y-3">
              {c.items.map((item, j) => (
                <div key={j} className="bg-secondary rounded px-3 py-2 md:px-4 md:py-3">
                  <span className="font-body text-sm md:text-xl text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="font-body text-xs md:text-lg text-muted-foreground/70 mt-3 md:mt-6 italic">
        Все эти инструменты решают отдельные задачи. Но ни один из них не собирает продукт целиком.
      </p>
    </EMSlideContainer>
  );
};

export default EMSlide02Known;
