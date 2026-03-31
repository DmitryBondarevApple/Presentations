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
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 md:mb-4" data-testid="em-known-title">
        Вы уже знаете ИИ <span className="text-accent">как сервис</span>
      </h2>
      <p className="font-body text-base md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-10">
        Сегодня посмотрим на ИИ как на команду
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {clusters.map((c, i) => (
          <div key={i} className="bg-card rounded-lg border border-border p-4 md:p-6 lg:p-8">
            <span className="font-heading text-accent text-sm md:text-base lg:text-lg font-bold tracking-wide uppercase mb-3 md:mb-4 block">
              {c.title}
            </span>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {c.items.map((item, j) => (
                <span key={j} className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded bg-secondary text-foreground/80 text-sm md:text-base lg:text-lg font-body">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </EMSlideContainer>
  );
};

export default EMSlide02Known;
