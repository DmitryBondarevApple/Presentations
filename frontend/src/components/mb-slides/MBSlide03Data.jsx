import { MBSlideContainer } from './MBSlideContainer';

const stats = [
  { n: "+30–50%", l: "посетителей от оформленной витрины", src: "NZR, 2018" },
  { n: "+20%", l: "пешеходного трафика в украшенных ТЦ", src: "ICSC" },
  { n: "+15%", l: "к объёму продаж в сезон", src: "Deloitte" },
  { n: "90%", l: "покупателей учитывают декор при выборе", src: "NRF" },
];

const extra = [
  { n: "+10–15%", l: "рост среднего чека при новогоднем оформлении (Россия)" },
  { n: "+30%", l: "увеличение длительности визита в украшенных пространствах" },
  { n: "58%", l: "потребителей вдохновляются декором через соцсети" },
];

const MBSlide03Data = () => {
  return (
    <MBSlideContainer number={3} label="Цифры">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="mb-data-title">
        Декор <span className="text-accent">работает</span>
      </h2>
      <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
        Данные отраслевых исследований и кейсов из России и международной практики
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mb-3 md:mb-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-card rounded-lg border border-border p-3 md:p-6" data-testid={`mb-stat-${i}`}>
            <span className="font-heading text-2xl md:text-4xl font-bold text-accent">{s.n}</span>
            <p className="font-body text-xs md:text-base text-foreground/80 mt-1 md:mt-2 leading-snug">{s.l}</p>
            <p className="font-body text-[10px] md:text-xs text-muted-foreground/50 mt-1">{s.src}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
        {extra.map((e, i) => (
          <div key={i} className="flex-1 bg-card/50 rounded-lg border border-border/50 p-2 md:p-4">
            <span className="font-heading text-lg md:text-2xl font-bold text-accent/80">{e.n}</span>
            <p className="font-body text-[10px] md:text-sm text-muted-foreground mt-0.5">{e.l}</p>
          </div>
        ))}
      </div>

      <p className="font-body text-[10px] md:text-sm text-muted-foreground/50 mt-2 md:mt-4 italic">
        Фактический эффект зависит от локации, предложения, сервиса и способности бизнеса монетизировать возросший интерес.
      </p>
    </MBSlideContainer>
  );
};

export default MBSlide03Data;
