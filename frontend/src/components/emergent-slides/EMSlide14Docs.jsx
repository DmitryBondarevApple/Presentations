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
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="em-docs-title">
        Если не фиксировать решения —{' '}
        <span className="text-accent">детали потеряются</span>
      </h2>
      <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
        Документация — не формальность, а необходимая часть процесса
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-4 md:mb-6 md:flex-1 auto-rows-fr">
        {rules.map((r, i) => (
          <div key={i} className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-4 md:p-8">
            <div className="w-8 md:w-10 h-8 md:h-10 rounded-md bg-accent/10 flex items-center justify-center mb-3 md:mb-5">
              <span className="font-heading text-sm md:text-lg font-bold text-accent">{r.num}</span>
            </div>
            <h3 className="font-heading text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-3">{r.title}</h3>
            <p className="font-body text-xs md:text-lg text-muted-foreground leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>

      <p className="font-body text-xs md:text-lg text-muted-foreground/70 italic">
        Просите project-менеджера фиксировать всё, что важно для продолжения работы.
      </p>
    </EMSlideContainer>
  );
};

export default EMSlide14Docs;
