import { EMSlideContainer } from './EMSlideContainer';

const EMSlide09Requirements = () => {
  return (
    <EMSlideContainer number={9} label="Шаг 3 · Требования">
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 md:mb-10" data-testid="em-req-title">
        Требования <span className="text-accent">нельзя придумывать</span> в отрыве от пользователя
      </h2>

      <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch">
        {/* Pain */}
        <div className="flex-1 bg-card rounded-lg border border-border p-4 md:p-6 lg:p-8 flex flex-col">
          <span className="font-heading text-accent text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-5 block">
            Боль
          </span>
          <p className="font-body text-base md:text-xl lg:text-2xl text-foreground leading-relaxed">
            Студент не понимает, что учить в первую очередь
          </p>
        </div>

        <div className="flex items-center justify-center shrink-0 py-1 md:py-0">
          <span className="text-accent text-2xl md:text-4xl">&rarr;</span>
        </div>

        {/* Feature */}
        <div className="flex-1 bg-card rounded-lg border border-accent/20 p-4 md:p-6 lg:p-8 flex flex-col">
          <span className="font-heading text-accent text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-5 block">
            Функция
          </span>
          <p className="font-body text-base md:text-xl lg:text-2xl text-foreground leading-relaxed">
            Персональный план подготовки к экзамену
          </p>
        </div>

        <div className="flex items-center justify-center shrink-0 py-1 md:py-0">
          <span className="text-accent text-2xl md:text-4xl">&rarr;</span>
        </div>

        {/* Value */}
        <div className="flex-1 bg-card rounded-lg border border-accent/30 border-l-[3px] border-l-accent p-4 md:p-6 lg:p-8 flex flex-col">
          <span className="font-heading text-accent text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-5 block">
            Ценность
          </span>
          <p className="font-body text-base md:text-xl lg:text-2xl text-foreground leading-relaxed">
            Меньше хаоса, выше шанс успеть
          </p>
        </div>
      </div>

      <p className="font-body text-sm md:text-lg text-muted-foreground mt-4 md:mt-8 leading-relaxed">
        Требования должны вытекать из того, что вы узнали о пользователях, а не из собственных догадок
      </p>
    </EMSlideContainer>
  );
};

export default EMSlide09Requirements;
