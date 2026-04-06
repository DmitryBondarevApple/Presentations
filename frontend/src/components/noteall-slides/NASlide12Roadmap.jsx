import { NASlideContainer } from './NASlideContainer';

const phases = [
  {
    period: "Апрель–Июнь 2026 г.",
    title: "Стандартные сценарии",
    items: ["Развитие сценариев под конкретные роли", "Упаковка лучших юз-кейсов в готовые решения", "Отраслевые шаблоны анализа"],
    active: true,
  },
  {
    period: "Июль–Октябрь 2026 г.",
    title: "База знаний + RAG",
    items: ["Шаблоны выходных артефактов", "Система хранения данных → база знаний", "RAG-анализ, MCP-интеграция"],
    active: false,
  },
  {
    period: "Ноябрь 2026 г.+",
    title: "Marketplace + экспансия",
    items: ["Marketplace сценариев анализа", "Выход на внешний рынок", "Экосистема партнёрских интеграций"],
    active: false,
  },
];

const NASlide12Roadmap = () => (
  <NASlideContainer number={12} label="Roadmap">
    <h2 className="font-heading text-lg sm:text-2xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="na-roadmap-title">
      Развитие <span className="text-accent">продукта</span>
    </h2>
    <p className="font-body text-xs sm:text-sm md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10">
      От прикладных сценариев к экосистеме хранения и обработки данных
    </p>
    <div className="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-8">
      {phases.map((p, i) => (
        <div key={i} className={`flex-1 bg-card rounded-lg border p-3 sm:p-5 md:p-8 ${p.active ? 'border-accent border-2' : 'border-border'}`} data-testid={`na-phase-${i}`}>
          <span className={`inline-block px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 rounded text-[9px] sm:text-[10px] md:text-sm font-bold tracking-wider mb-1.5 sm:mb-3 md:mb-5 ${p.active ? 'bg-accent text-background' : 'bg-accent/10 text-accent'}`}>
            {p.period}
          </span>
          <h3 className="font-heading text-xs sm:text-sm md:text-2xl font-bold text-foreground mb-1 sm:mb-2 md:mb-5">{p.title}</h3>
          <div className="space-y-1 sm:space-y-2 md:space-y-3">
            {p.items.map((item, j) => (
              <div key={j} className="flex items-start gap-1.5 sm:gap-2">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-accent mt-1 sm:mt-1.5 shrink-0" />
                <span className="font-body text-[10px] sm:text-xs md:text-lg text-muted-foreground leading-snug sm:leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </NASlideContainer>
);
export default NASlide12Roadmap;
