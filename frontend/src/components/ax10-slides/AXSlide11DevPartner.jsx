import { AXSlideContainer } from './AXSlideContainer';

const advantages = [
  { title: "Непрерывность контекста", desc: "Команда, которая проводила исследование, знает продукт изнутри — нет потерь при передаче" },
  { title: "AI-first методы", desc: "Разработка с использованием нейросетевого подхода: быстрее и дешевле традиционной модели" },
  { title: "Единый партнёр", desc: "От идеи через исследование до рабочего продукта — без смены команд и потери качества" },
];

const AXSlide11DevPartner = () => (
  <AXSlideContainer number={11} label="Разработка">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="ax-dev-title">
      AX10 может <span className="text-accent">реализовать ТЗ</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Если клиенту важны скорость запуска и снижение бюджета, AX10 может выступить не только аналитическим, но и технологическим партнёром.
    </p>
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 mb-2 sm:mb-4 md:mb-8">
      {advantages.map((a, i) => (
        <div key={i} className="flex-1 bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-2.5 sm:p-5 md:p-7" data-testid={`ax-adv-${i}`}>
          <h3 className="font-heading text-sm sm:text-base md:text-xl font-bold text-foreground mb-1 sm:mb-2 md:mb-4">{a.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug sm:leading-relaxed">{a.desc}</p>
        </div>
      ))}
    </div>
    <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-2.5 sm:p-4 md:p-6">
      <p className="font-body text-sm sm:text-base md:text-xl text-foreground/80 leading-snug sm:leading-relaxed">
        <span className="font-semibold text-foreground">Важно: </span>
        это опция, а не условие. Разработка предлагается только после завершения исследовательского этапа — как отдельное решение.
      </p>
    </div>
  </AXSlideContainer>
);
export default AXSlide11DevPartner;
