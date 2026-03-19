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
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 items-start lg:items-center">
        <div className="flex-1">
          <span className="inline-block px-2 py-1 md:px-3 md:py-1.5 rounded bg-accent/10 text-accent text-xs md:text-sm font-bold tracking-wider uppercase mb-2 md:mb-4">
            БЛОК 2
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-1 md:mb-2" data-testid="fc-echomind-title">
            EchoMind
          </h2>
          <p className="font-body text-base md:text-2xl text-accent mb-3 md:mb-5">
            Слышать продавцов и улучшать продажи
          </p>
          <p className="font-body text-sm md:text-xl text-muted-foreground leading-relaxed mb-3 md:mb-6">
            Этот блок отвечает за управляемость сети и качество работы менеджеров.
            ИИ подключается за 1 день и сразу начинает улучшать работу продавцов.
          </p>

          <div className="grid grid-cols-2 gap-2 md:gap-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-card rounded-lg border border-border p-2 md:p-4">
                <span className="font-heading text-lg md:text-3xl font-bold text-accent">{s.n}</span>
                <p className="font-body text-[10px] md:text-base text-muted-foreground mt-0.5 md:mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <p className="font-heading text-base md:text-2xl font-semibold text-foreground mb-3 md:mb-6">
            Что может EchoMind
          </p>
          <div className="space-y-2 md:space-y-5">
            {features.map((t, i) => (
              <div key={i} className="flex items-start gap-2 md:gap-4">
                <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-accent mt-1.5 md:mt-2.5 shrink-0" />
                <span className="font-body text-xs md:text-lg text-foreground/80 leading-relaxed">{t}</span>
              </div>
            ))}
          </div>
          <p className="font-body text-xs md:text-lg text-muted-foreground/60 mt-3 md:mt-6">
            А также: рост конверсии звонка в визит на 19%, сокращение адаптации менеджеров до 4 дней
          </p>
        </div>
      </div>
    </FCSlideContainer>
  );
};

export default FCEchoMindSlide;
