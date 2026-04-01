import { MBSlideContainer } from './MBSlideContainer';

const MBSlide02Problem = () => {
  return (
    <MBSlideContainer number={2} label="Зачем это нужно">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6" data-testid="mb-problem-title">
        Решение принимается <span className="text-accent">на улице</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 mb-4 md:mb-6">
        <div className="flex-1">
          <p className="font-body text-sm md:text-xl text-muted-foreground leading-relaxed mb-3 md:mb-5">
            В офлайн-бизнесе у вас есть 3 секунды. Прохожий видит фасад, витрину, вход — и решает: зайти или пройти мимо. Сезонный декор работает как визуальная реклама, которая выделяет вас на фоне соседей.
          </p>
          <div className="space-y-2 md:space-y-4">
            {[
              "Без декора — вы один из многих. С декором — вас замечают и выбирают",
              "Прохожий останавливается, фотографирует, заходит. Пост в соцсетях — бесплатная реклама",
              "Конкуренция за внимание усиливается в декабре, к 8 Марта, в сезон распродаж и городских праздников",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-2 md:gap-3">
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span className="font-body text-sm md:text-xl text-foreground/80 leading-relaxed">{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-80 rounded-lg overflow-hidden border border-border">
          <img
            src={`${process.env.PUBLIC_URL || ''}/images/mb/kp-photo-1.jpeg`}
            alt="Оформленная входная группа"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-3 md:p-5" data-testid="mb-problem-conclusion">
        <p className="font-body text-sm md:text-xl text-foreground/80 leading-relaxed">
          <span className="font-semibold text-foreground">Ключевой тезис: </span>
          если не украсить — покупатель будет разочарован и уйдёт к конкурентам. Декор — это не расход, а инвестиция в трафик.
        </p>
      </div>
    </MBSlideContainer>
  );
};

export default MBSlide02Problem;
