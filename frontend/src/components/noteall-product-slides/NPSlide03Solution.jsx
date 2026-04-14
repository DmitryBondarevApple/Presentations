import { NPSlideContainer } from './NPSlideContainer';

const NPSlide03Solution = () => (
  <NPSlideContainer number={3} label="Решение">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="np-solution-title">
      Не стенограмма, а <span className="text-accent">извлечение смыслов</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Загрузите запись — получите структурированный документ: саммари, решения, задачи, требования, аналитические выводы. С разметкой по спикерам и визуальным контекстом.
    </p>
    <div className="rounded-xl border border-border overflow-hidden shadow-lg">
      <img
        src={`${process.env.PUBLIC_URL || ''}/images/noteall/screenshot-main.png`}
        alt="Noteall — интерфейс анализа"
        className="w-full h-auto"
        data-testid="np-solution-screenshot"
      />
    </div>
  </NPSlideContainer>
);
export default NPSlide03Solution;
