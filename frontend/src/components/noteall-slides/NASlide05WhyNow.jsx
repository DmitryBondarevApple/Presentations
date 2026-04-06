import { NASlideContainer } from './NASlideContainer';

const markets = [
  { title: "Speech Analytics", val: "$2.8 → $7.7 млрд", period: "2023–2030", src: "Grand View Research" },
  { title: "Speech-to-Text API", val: "$4.4 → $8.6 млрд", period: "2025–2030", src: "Grand View Research" },
  { title: "Document AI", val: "$14.7 → $27.6 млрд", period: "2025–2030", src: "MarketsandMarkets" },
];

const NASlide05WhyNow = () => (
  <NASlideContainer number={5} label="Почему сейчас">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-5" data-testid="na-whynow-title">
      Рынок готов <span className="text-accent">покупать прикладной AI</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-5 md:mb-10 leading-relaxed max-w-6xl">
      AI перестал быть экспериментом. 88% компаний уже используют AI хотя бы в одной функции, но две трети не масштабировали его на уровне компании. Рынок покупает инструменты с быстрым эффектом.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 md:gap-8 mb-4 md:mb-8">
      {markets.map((m, i) => (
        <div key={i} className="flex-1 bg-card rounded-lg border border-border p-5 md:p-7" data-testid={`na-market-${i}`}>
          <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded bg-accent/10 text-accent text-[10px] md:text-sm font-bold tracking-wider mb-3 md:mb-4">
            {m.title}
          </span>
          <span className="block font-heading text-xl md:text-4xl font-bold text-accent">{m.val}</span>
          <p className="font-body text-[10px] md:text-base text-muted-foreground mt-2">{m.period}</p>
          <p className="font-body text-[10px] md:text-sm text-muted-foreground/50 mt-1">{m.src}</p>
        </div>
      ))}
    </div>
    <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-4 md:p-6">
      <p className="font-body text-sm md:text-xl text-foreground/80 leading-relaxed">
        Noteall — на пересечении трёх быстрорастущих рынков: <span className="font-semibold text-accent">speech analytics, speech-to-text и document AI</span>
      </p>
    </div>
  </NASlideContainer>
);
export default NASlide05WhyNow;
