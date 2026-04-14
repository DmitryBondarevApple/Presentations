import { NPSlideContainer } from './NPSlideContainer';

const NPSlide02Problem = () => (
  <NPSlideContainer number={2} label="Проблема">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="np-problem-title">
      Записали встречу — <span className="text-accent">а дальше что?</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Часы на расшифровку, потеря контекста, разрозненные заметки. Ценная информация из встреч и интервью остаётся в аудио — а не в рабочих документах.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-6 mb-2 sm:mb-4 md:mb-8">
      {[
        { icon: "clock", val: "5-8 ч", desc: "ручная расшифровка одночасовой встречи" },
        { icon: "brain", val: "40%", desc: "информации теряется без фиксации решений и задач" },
        { icon: "files", val: "N", desc: "инструментов: запись отдельно, заметки отдельно, задачи отдельно" },
      ].map((item, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8" data-testid={`np-problem-${i}`}>
          <span className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-accent">{item.val}</span>
          <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/80 mt-1 sm:mt-2 md:mt-4 leading-snug">{item.desc}</p>
        </div>
      ))}
    </div>
    <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-2.5 sm:p-4 md:p-6">
      <p className="font-body text-sm sm:text-base md:text-xl text-foreground/80 leading-snug sm:leading-relaxed">
        <span className="font-semibold text-foreground">Не просто транскрибация — </span>
        нужен инструмент, который извлекает смыслы и превращает контент в готовые к использованию данные.
      </p>
    </div>
  </NPSlideContainer>
);
export default NPSlide02Problem;
