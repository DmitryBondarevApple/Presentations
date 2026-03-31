import { EMSlideContainer } from './EMSlideContainer';

const rules = [
  {
    num: "01",
    title: "Документировать крупные фичи",
    desc: "Фиксировать что реализовано, как устроено, какие решения приняты",
  },
  {
    num: "02",
    title: "Фиксировать ключевые решения",
    desc: "Ограничения, архитектурные выборы и важные договорённости — всё должно быть записано",
  },
  {
    num: "03",
    title: "Переносить контекст",
    desc: "При необходимости — переносить важный контекст в новую ветку вручную",
  },
];

const EMSlide14Docs = () => {
  return (
    <EMSlideContainer number={14} label="Документация">
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4" data-testid="em-docs-title">
        Если не фиксировать решения —{' '}
        <span className="text-accent">детали потеряются</span>
      </h2>
      <p className="font-body text-sm md:text-lg text-muted-foreground mb-6 md:mb-10">
        Документация — не формальность, а необходимая часть процесса
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {rules.map((r, i) => (
          <div key={i} className="bg-card rounded-lg border border-border border-l-[3px] border-l-accent p-5 md:p-8 flex flex-col">
            <span className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-accent/20 mb-2 md:mb-4">
              {r.num}
            </span>
            <h3 className="font-heading text-base md:text-xl lg:text-2xl font-bold text-foreground mb-2 md:mb-3">
              {r.title}
            </h3>
            <p className="font-body text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              {r.desc}
            </p>
          </div>
        ))}
      </div>

      <p className="font-body text-sm md:text-base text-muted-foreground/70 mt-4 md:mt-6">
        Просите project-менеджера фиксировать всё, что важно для продолжения работы
      </p>
    </EMSlideContainer>
  );
};

export default EMSlide14Docs;
