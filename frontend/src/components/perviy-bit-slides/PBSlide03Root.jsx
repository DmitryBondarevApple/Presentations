import { PBSlideContainer } from './PBSlideContainer';

const items = [
  "Менеджер полагается на заметки, память, повторное прослушивание или транскрипт",
  "8-10 часов ручной работы после каждого интервью",
  "Результат зависит от опыта конкретного человека",
  "Нет единой основы для поддержания стандарта качества пресейла",
];

const PBSlide03Root = () => (
  <PBSlideContainer number={3} label="Анализ">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="pb-root-title">
      Между встречей и ТЗ — <span className="text-accent">разрыв</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-3 sm:mb-5 md:mb-10 leading-relaxed max-w-4xl">
      Недостатки текущего процесса преобразования интервью в техническое задание
    </p>
    <div className="space-y-2 sm:space-y-3 md:space-y-5 max-w-4xl">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-2.5 md:gap-4 bg-card rounded-lg border border-border p-3 md:p-5">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-destructive/60 shrink-0 mt-1.5 md:mt-2.5" />
          <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/80 leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  </PBSlideContainer>
);
export default PBSlide03Root;
