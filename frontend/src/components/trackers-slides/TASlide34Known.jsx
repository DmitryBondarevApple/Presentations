import { TASlideContainer, TAH, TASub, TACard, TACardTitle, TALi } from './TASlideContainer';
const clusters = [
  { title: "Чат и поиск", items: ["GigaChat", "ChatGPT", "Perplexity", "Алиса"] },
  { title: "Генерация", items: ["Midjourney", "DALL-E", "Suno", "NotebookLM"] },
  { title: "Инструменты для кода", items: ["Cursor", "Claude Code", "Codex"] },
];
const TASlide34Known = () => (
  <TASlideContainer number={34} label="Контекст">
    <TAH>Вы уже знаете ИИ как сервис</TAH>
    <TASub>Сегодня посмотрим на ИИ как на команду</TASub>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
      {clusters.map((c, i) => (
        <TACard key={i}>
          <span className="inline-block font-mono text-[10px] md:text-xs tracking-wider uppercase mb-3 px-2 py-1 rounded-sm" style={{ backgroundColor: "#0a0a0a", color: "#fff" }}>{c.title}</span>
          <div className="space-y-1.5 md:space-y-2">
            {c.items.map((item, j) => (
              <div key={j} className="rounded px-3 py-2" style={{ backgroundColor: "#f0f0f0" }}>
                <span className="font-body text-sm md:text-base" style={{ color: "#3f3f46" }}>{item}</span>
              </div>
            ))}
          </div>
        </TACard>
      ))}
    </div>
    <p className="font-body text-sm md:text-base mt-4" style={{ color: "#71717a", fontStyle: "italic" }}>Все эти инструменты решают отдельные задачи. Но ни один из них не собирает продукт целиком.</p>
  </TASlideContainer>
);
export default TASlide34Known;
