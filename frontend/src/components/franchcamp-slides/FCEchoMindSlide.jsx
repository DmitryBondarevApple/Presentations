import { FCSlideContainer } from './FCSlideContainer';

const stats = [
  { n: "100%", l: "звонков и переписок" },
  { n: "1 день", l: "запуск по сайту" },
  { n: "+7–18%", l: "рост конверсии" },
  { n: "-14%", l: "отказов по заявкам" },
];

const features = [
  "Контроль 100% звонков и переписок вместо выборочной прослушки",
  "Понимание, где менеджеры теряют клиента и какие возражения сливают сделки",
  "Быстрое обучение слабых менеджеров и рекомендации по каждому диалогу",
  "Рост продаж без увеличения рекламного бюджета за счёт улучшения конверсии",
];

const FCEchoMindSlide = () => {
  return (
    <FCSlideContainer number={6} label="Блок 2 · EchoMind">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <span className="inline-block px-2.5 py-1 rounded bg-accent/10 text-accent text-[10px] font-bold tracking-wider uppercase mb-3">
            БЛОК 2
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1" data-testid="fc-echomind-title">
            EchoMind
          </h2>
          <p className="font-body text-sm text-accent mb-4">
            Слышать продавцов и улучшать продажи
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
            Этот блок отвечает за управляемость сети и качество работы менеджеров.
            ИИ подключается за 1 день и сразу начинает улучшать работу продавцов.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <div key={i} className="bg-card rounded-lg border border-border p-3">
                <span className="font-heading text-xl md:text-2xl font-bold text-accent">{s.n}</span>
                <p className="font-body text-[10px] text-muted-foreground mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <p className="font-heading text-sm font-semibold text-foreground mb-4">
            Что может EchoMind
          </p>
          <div className="space-y-4">
            {features.map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span className="font-body text-xs text-foreground/80 leading-relaxed">{t}</span>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-muted-foreground/60 mt-5">
            А также: рост конверсии звонка в визит на 19%, сокращение адаптации менеджеров до 4 дней
          </p>
        </div>
      </div>
    </FCSlideContainer>
  );
};

export default FCEchoMindSlide;
