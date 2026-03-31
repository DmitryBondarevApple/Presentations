import { EMSlideContainer } from './EMSlideContainer';

const EMSlide06Idea = () => {
  return (
    <EMSlideContainer number={6} label="Шаг 1 · Идея">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="em-idea-title">
        Плохая формулировка <span className="text-accent">=</span> плохой результат
      </h2>
      <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
        Даже если инструмент сильный
      </p>

      <div className="flex flex-col md:flex-row gap-3 md:gap-5 mb-4 md:mb-6 md:flex-1">
        <div className="flex-1 bg-card rounded-lg border border-destructive/30 border-l-[3px] border-l-destructive/60 p-4 md:p-8">
          <span className="inline-block px-2 py-1 md:px-3 md:py-1.5 rounded bg-destructive/10 text-destructive text-xs md:text-sm font-bold tracking-wider uppercase mb-3 md:mb-5">
            Слишком общее
          </span>
          <p className="font-body text-sm md:text-xl text-foreground/60 leading-relaxed">
            «Хочу сервис для студентов»
          </p>
          <p className="font-body text-xs md:text-lg text-muted-foreground/50 mt-2 md:mt-4 leading-relaxed">
            Непонятно, что делает сервис, для кого именно, какую задачу решает
          </p>
        </div>

        <div className="flex-1 bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-4 md:p-8">
          <span className="inline-block px-2 py-1 md:px-3 md:py-1.5 rounded bg-accent/10 text-accent text-xs md:text-sm font-bold tracking-wider uppercase mb-3 md:mb-5">
            Достаточно конкретно
          </span>
          <p className="font-body text-sm md:text-xl text-foreground leading-relaxed">
            «Хочу сервис, который помогает студентам готовиться к экзаменам по билетам и автоматически собирать персональный план подготовки»
          </p>
        </div>
      </div>

      <p className="font-body text-sm md:text-xl text-foreground/80 leading-relaxed">
        <span className="font-semibold">Вывод: </span>
        чем точнее сформулирована идея, тем лучше результат, который вы получите от ИИ.
      </p>
    </EMSlideContainer>
  );
};

export default EMSlide06Idea;
