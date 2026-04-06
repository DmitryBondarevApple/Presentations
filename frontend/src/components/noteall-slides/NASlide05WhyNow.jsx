import { NASlideContainer } from './NASlideContainer';

const markets = [
  { title: "Speech Analytics", val: "$2.8 → $7.7 млрд", period: "2023–2030", src: "Grand View Research" },
  { title: "Speech-to-Text API", val: "$4.4 → $8.6 млрд", period: "2025–2030", src: "Grand View Research" },
  { title: "Document AI", val: "$14.7 → $27.6 млрд", period: "2025–2030", src: "MarketsandMarkets" },
];

const NASlide05WhyNow = () => (
  <NASlideContainer number={5} label="Почему сейчас">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-3" data-testid="na-whynow-title">
      Рынок готов <span className="text-accent">покупать прикладной AI</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-6 leading-relaxed max-w-4xl">
      AI перестал быть экспериментом. 88% компаний уже используют AI хотя бы в одной функции, но две трети не масштабировали его на уровне компании. Рынок покупает инструменты с быстрым эффектом.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 md:gap-5 mb-3 md:mb-5">
      {markets.map((m, i) => (
        <div key={i} className="flex-1 bg-card rounded-lg border border-border p-4 md:p-6" data-testid={`na-market-${i}`}>
          <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 rounded bg-accent/10 text-accent text-[10px] md:text-xs font-bold tracking-wider mb-2 md:mb-3">
            {m.title}
          </span>
          <span className="block font-heading text-lg md:text-3xl font-bold text-accent">{m.val}</span>
          <p className="font-body text-[10px] md:text-sm text-muted-foreground mt-1">{m.period}</p>
          <p className="font-body text-[10px] md:text-xs text-muted-foreground/50 mt-1">{m.src}</p>
        </div>
      ))}
    </div>
    <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-3 md:p-5">
      <p className="font-body text-sm md:text-lg text-foreground/80 leading-relaxed">
        NoteAll — на пересечении трёх быстрорастущих рынков: <span className="font-semibold text-accent">speech analytics, speech-to-text и document AI</span>
      </p>
    </div>
  </NASlideContainer>
);
export default NASlide05WhyNow;
