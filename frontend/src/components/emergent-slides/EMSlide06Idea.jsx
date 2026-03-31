import { EMSlideContainer } from './EMSlideContainer';

const EMSlide06Idea = () => {
  return (
    <EMSlideContainer number={6} label="Шаг 1 · Идея">
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4" data-testid="em-idea-title">
        Плохая формулировка <span className="text-accent">=</span> плохой результат
      </h2>
      <p className="font-body text-sm md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-10">
        Даже если инструмент сильный
      </p>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {/* Weak */}
        <div className="flex-1 bg-card rounded-lg border border-destructive/30 border-l-[3px] border-l-destructive/60 p-5 md:p-8">
          <span className="font-heading text-destructive/70 text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-5 block">
            Слишком общее
          </span>
          <p className="font-body text-lg md:text-2xl lg:text-3xl text-foreground/60 leading-relaxed">
            «Хочу сервис для студентов»
          </p>
        </div>

        {/* Strong */}
        <div className="flex-1 bg-card rounded-lg border border-accent/30 border-l-[3px] border-l-accent p-5 md:p-8">
          <span className="font-heading text-accent text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-5 block">
            Достаточно конкретно
          </span>
          <p className="font-body text-base md:text-xl lg:text-2xl text-foreground leading-relaxed">
            «Хочу сервис, который помогает студентам готовиться к экзаменам по билетам и автоматически собирать персональный план подготовки»
          </p>
        </div>
      </div>

      <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-3 md:p-5 mt-4 md:mt-8">
        <p className="font-body text-sm md:text-lg text-foreground/80 leading-relaxed">
          <span className="font-semibold text-foreground">Вывод: </span>
          чем точнее сформулирована идея, тем лучше результат, который вы получите от ИИ
        </p>
      </div>
    </EMSlideContainer>
  );
};

export default EMSlide06Idea;
