import { NASlideContainer } from './NASlideContainer';

const markets = [
  { title: "Speech Analytics", val: "$2.8 → $7.7 млрд", period: "2023–2030", src: "Grand View Research", href: "https://www.grandviewresearch.com/industry-analysis/speech-analytics-market" },
  { title: "Speech-to-Text API", val: "$4.4 → $8.6 млрд", period: "2025–2030", src: "Grand View Research", href: "https://www.grandviewresearch.com/industry-analysis/speech-to-text-api-market-report" },
  { title: "Document AI", val: "$14.7 → $27.6 млрд", period: "2025–2030", src: "MarketsandMarkets", href: "https://www.marketsandmarkets.com/Market-Reports/document-ai-market-195513136.html" },
];

const NASlide05WhyNow = () => (
  <NASlideContainer number={5} label="Почему сейчас">
    <h2 className="font-heading text-lg sm:text-2xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="na-whynow-title">
      Рынок готов <span className="text-accent">покупать прикладной AI</span>
    </h2>
    <p className="font-body text-xs sm:text-sm md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-6xl">
      AI перестал быть экспериментом. 88% компаний уже используют AI хотя бы в одной функции, но две трети не масштабировали его на уровне компании. Рынок покупает инструменты с быстрым эффектом.
    </p>
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-8 mb-2 sm:mb-4 md:mb-8">
      {markets.map((m, i) => (
        <div key={i} className="flex-1 bg-card rounded-lg border border-border p-2.5 sm:p-5 md:p-7" data-testid={`na-market-${i}`}>
          <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 rounded bg-accent/10 text-accent text-[9px] sm:text-[10px] md:text-sm font-bold tracking-wider mb-1.5 sm:mb-3 md:mb-4">
            {m.title}
          </span>
          <span className="block font-heading text-base sm:text-xl md:text-4xl font-bold text-accent">{m.val}</span>
          <p className="font-body text-[9px] sm:text-[10px] md:text-base text-muted-foreground mt-1 sm:mt-2">{m.period}</p>
          <p className="font-body text-[9px] sm:text-[10px] md:text-sm text-muted-foreground/50 mt-0.5 sm:mt-1">
            <a href={m.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline underline-offset-2">{m.src}</a>
          </p>
        </div>
      ))}
    </div>
    <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-2.5 sm:p-4 md:p-6">
      <p className="font-body text-xs sm:text-sm md:text-xl text-foreground/80 leading-snug sm:leading-relaxed">
        Noteall — на пересечении трёх быстрорастущих рынков: <span className="font-semibold text-accent">speech analytics, speech-to-text и document AI</span>
      </p>
    </div>
  </NASlideContainer>
);
export default NASlide05WhyNow;
