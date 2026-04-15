import { EMSlideContainer } from './EMSlideContainer';

const nodes = [
  { label: "Emergent", sub: "Разработка и тестирование", accent: false },
  { label: "GitHub", sub: "Хранение и версионирование", accent: false },
  { label: "Ваш сервер", sub: "Production для пользователей", accent: true },
];

const EMSlide21Pipeline = () => (
  <EMSlideContainer number={21} label="Деплой">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-4" data-testid="em-pipeline-title">
      Как код выходит <span className="text-accent">в вашу инфраструктуру</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-6 md:mb-10 max-w-3xl">
      Простой путь от среды разработки до рабочего продукта
    </p>

    {/* Pipeline diagram */}
    <div className="flex flex-col md:flex-row items-center gap-0 md:gap-0 max-w-4xl mx-auto mb-6 md:mb-10">
      {nodes.map((n, i) => (
        <div key={i} className="flex items-center">
          <div className={`rounded-xl border-2 p-4 md:p-8 text-center min-w-[140px] md:min-w-[200px] ${
            n.accent ? "border-accent bg-accent/5" : "border-border bg-card"
          }`}>
            <h3 className={`font-heading text-base md:text-2xl font-bold ${
              n.accent ? "text-accent" : "text-foreground"
            }`}>{n.label}</h3>
            <p className="font-body text-[10px] md:text-sm text-muted-foreground mt-1">{n.sub}</p>
          </div>
          {i < nodes.length - 1 && (
            <div className="flex items-center px-1 md:px-3 text-muted-foreground/40">
              <div className="w-6 md:w-12 h-[2px] bg-current" />
              <svg className="w-3 h-3 md:w-4 md:h-4 -ml-0.5" viewBox="0 0 12 12" fill="none">
                <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>

    <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-3 md:p-5 max-w-3xl mx-auto">
      <p className="font-body text-xs md:text-lg text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">GitHub</span> — это слой хранения, версионирования и переноса кода.
        Через него изменения безопасно попадают из среды разработки на рабочий сервер.
      </p>
    </div>
  </EMSlideContainer>
);

export default EMSlide21Pipeline;
