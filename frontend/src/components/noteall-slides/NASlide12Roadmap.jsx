import { NASlideContainer } from './NASlideContainer';

const phases = [
  {
    period: "Апр–Июн 2026",
    title: "Стандартные сценарии",
    items: ["Развитие сценариев под конкретные роли", "Упаковка лучших юз-кейсов в готовые решения", "Отраслевые шаблоны анализа"],
    active: true,
  },
  {
    period: "Июл–Окт 2026",
    title: "База знаний + RAG",
    items: ["Шаблоны выходных артефактов", "Система хранения данных → база знаний", "RAG-анализ, MCP-интеграция"],
    active: false,
  },
  {
    period: "Ноябрь 2026+",
    title: "Marketplace + экспансия",
    items: ["Marketplace сценариев анализа", "Выход на внешний рынок", "Экосистема партнёрских интеграций"],
    active: false,
  },
];

const NASlide12Roadmap = () => (
  <NASlideContainer number={12} label="Roadmap">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-3" data-testid="na-roadmap-title">
      Развитие <span className="text-accent">продукта</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
      От прикладных сценариев к экосистеме хранения и обработки данных
    </p>
    <div className="flex flex-col md:flex-row gap-3 md:gap-5">
      {phases.map((p, i) => (
        <div key={i} className={`flex-1 bg-card rounded-lg border p-4 md:p-6 ${p.active ? 'border-accent border-2' : 'border-border'}`} data-testid={`na-phase-${i}`}>
          <span className={`inline-block px-2 py-0.5 md:px-3 md:py-1 rounded text-[10px] md:text-xs font-bold tracking-wider mb-3 md:mb-4 ${p.active ? 'bg-accent text-background' : 'bg-accent/10 text-accent'}`}>
            {p.period}
          </span>
          <h3 className="font-heading text-sm md:text-xl font-bold text-foreground mb-2 md:mb-4">{p.title}</h3>
          <div className="space-y-1 md:space-y-2">
            {p.items.map((item, j) => (
              <div key={j} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                <span className="font-body text-xs md:text-base text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </NASlideContainer>
);
export default NASlide12Roadmap;
