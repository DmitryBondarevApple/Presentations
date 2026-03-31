import { EMSlideContainer } from './EMSlideContainer';

const EMSlide09Requirements = () => {
  return (
    <EMSlideContainer number={9} label="Шаг 3 · Требования">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="em-req-title">
        Требования <span className="text-accent">нельзя придумывать</span> в отрыве от пользователя
      </h2>
      <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
        Конкретный пример: от боли к ценности
      </p>

      <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch mb-4 md:mb-6 md:flex-1">
        <div className="flex-1 bg-card rounded-lg border border-border p-4 md:p-8">
          <span className="inline-block px-2 py-1 md:px-3 md:py-1.5 rounded bg-accent/10 text-accent text-xs md:text-sm font-bold tracking-wider uppercase mb-3 md:mb-5">
            Боль
          </span>
          <p className="font-body text-sm md:text-xl text-foreground leading-relaxed">
            Студент не понимает, что учить в первую очередь — времени мало, материала много
          </p>
        </div>

        <div className="flex items-center justify-center shrink-0 py-1 md:py-0">
          <span className="text-accent text-2xl md:text-4xl">&rarr;</span>
        </div>

        <div className="flex-1 bg-card rounded-lg border border-accent/20 p-4 md:p-8">
          <span className="inline-block px-2 py-1 md:px-3 md:py-1.5 rounded bg-accent/10 text-accent text-xs md:text-sm font-bold tracking-wider uppercase mb-3 md:mb-5">
            Функция
          </span>
          <p className="font-body text-sm md:text-xl text-foreground leading-relaxed">
            Персональный план подготовки к экзамену на основе списка билетов
          </p>
        </div>

        <div className="flex items-center justify-center shrink-0 py-1 md:py-0">
          <span className="text-accent text-2xl md:text-4xl">&rarr;</span>
        </div>

        <div className="flex-1 bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-4 md:p-8">
          <span className="inline-block px-2 py-1 md:px-3 md:py-1.5 rounded bg-accent/10 text-accent text-xs md:text-sm font-bold tracking-wider uppercase mb-3 md:mb-5">
            Ценность
          </span>
          <p className="font-body text-sm md:text-xl text-foreground leading-relaxed">
            Меньше хаоса, выше шанс подготовиться и сдать вовремя
          </p>
        </div>
      </div>

      <p className="font-body text-sm md:text-xl text-foreground/80 leading-relaxed">
        <span className="font-semibold">Ключевое: </span>
        требования должны вытекать из того, что вы узнали о пользователях, а не из собственных догадок.
      </p>
    </EMSlideContainer>
  );
};

export default EMSlide09Requirements;
