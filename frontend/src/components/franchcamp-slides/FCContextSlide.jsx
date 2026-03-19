import { FCSlideContainer } from './FCSlideContainer';

const stats = [
  { n: "5000+", l: "участников конкурса" },
  { n: "100+", l: "франшиз" },
  { n: "13", l: "победителей" },
  { n: "35", l: "финалистов" },
];

const bullets = [
  "Объединяет обучение, аккредитацию франшиз и развитие сети",
  "Делает акцент на новых франчайзи и внедрении образовательного трека",
  "Допускает франчайзеров с программой долгосрочного развития партнёров",
];

const FCContextSlide = () => {
  return (
    <FCSlideContainer number={2} label="Контекст">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6" data-testid="fc-context-title">
        Органично для <span className="text-accent">FranchCamp</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 mb-4 md:mb-6">
        <div className="flex-1">
          <p className="font-body text-sm md:text-xl text-muted-foreground leading-relaxed mb-3 md:mb-5">
            Предлагаемая серия мероприятий продолжает уже существующую образовательную
            и развивающую роль экосистемы FranchCamp.
          </p>
          <div className="space-y-2 md:space-y-4">
            {bullets.map((t, i) => (
              <div key={i} className="flex items-start gap-2 md:gap-3">
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span className="font-body text-sm md:text-xl text-foreground/80 leading-relaxed">{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-80 bg-card rounded-lg border border-border p-4 md:p-6">
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {stats.map((s, i) => (
              <div key={i}>
                <span className="font-heading text-2xl md:text-4xl font-bold text-accent">{s.n}</span>
                <p className="font-body text-xs md:text-base text-muted-foreground mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-3 md:p-5" data-testid="fc-context-conclusion">
        <p className="font-body text-sm md:text-xl text-foreground/80 leading-relaxed">
          <span className="font-semibold text-foreground">Ключевой вывод: </span>
          франчайзер на площадке FranchCamp уже думает не только о продаже франшизы,
          но и о том, как дольше и сильнее развивать партнёра. AI-трек — полезный элемент пакета поддержки.
        </p>
      </div>
    </FCSlideContainer>
  );
};

export default FCContextSlide;
