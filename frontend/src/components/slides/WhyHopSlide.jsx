import { SlideContainer } from "./SlideContainer";

const stats = [
  { number: "38", label: "программ", sub: "акселерации за 2023–2025" },
  { number: "600+", label: "проектов", sub: "прошли полную оценку" },
  { number: "900+", label: "участников", sub: "инвестиционного клуба" },
];

const WhyHopSlide = () => (
  <SlideContainer number={8} label="О нас">
    <h2 className="animate-item stagger-1 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 md:mb-16">
      Почему <span className="text-accent">Hop.Agency</span>
    </h2>

    <div className="grid grid-cols-3 gap-6 md:gap-10 lg:gap-14 max-w-5xl mb-12">
      {stats.map((s, i) => (
        <div
          key={i}
          className="animate-item"
          style={{ animationDelay: `${(i + 2) * 0.12}s` }}
        >
          <span className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-accent">
            {s.number}
          </span>
          <p className="font-heading text-sm md:text-base font-medium text-foreground mt-2">{s.label}</p>
          <p className="font-body text-xs md:text-sm text-muted-foreground mt-1">{s.sub}</p>
        </div>
      ))}
    </div>

    <div className="animate-item stagger-6 max-w-4xl">
      <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
        Работаем на стыке корпоративных инноваций, управления развитием компаний
        на ранних стадиях и инвестиционной экспертизы. Практический опыт продвижения
        внутренних продуктов корпоративных партнёров на внешний рынок через программы
        пилотирования и коммерциализации.
      </p>
    </div>
  </SlideContainer>
);

export default WhyHopSlide;
