import { NPSlideContainer } from './NPSlideContainer';

const NPSlide02Problem = () => (
  <NPSlideContainer number={2} label="Проблема">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="np-problem-title">
      Большая часть ценности <span className="text-accent">теряется после встречи</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Сервисов транскрибации много — но сам по себе транскрипт мало что даёт. Он используется ненамного чаще, чем просто аудиозапись. Ценная информация из встреч и интервью так и не превращается в рабочие документы.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-6 mb-2 sm:mb-4 md:mb-8">
      {[
        { val: "80%", desc: "записей остаются необработанными — транскрипт длинный и неудобный" },
        { val: "40%", desc: "информации теряется без фиксации решений, задач и выводов" },
        { val: "Много", desc: "разрозненных инструментов: запись отдельно, заметки отдельно, задачи отдельно" },
      ].map((item, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8" data-testid={`np-problem-${i}`}>
          <span className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-accent">{item.val}</span>
          <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/80 mt-1 sm:mt-2 md:mt-4 leading-snug">{item.desc}</p>
        </div>
      ))}
    </div>
    <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-2.5 sm:p-4 md:p-6">
      <p className="font-body text-sm sm:text-base md:text-xl text-foreground/80 leading-snug sm:leading-relaxed">
        <span className="font-semibold text-foreground">Обычные инструменты дают текст и краткое summary</span> — но не доводят записи встреч до формата, пригодного для внедрения и принятия решений.
      </p>
    </div>
  </NPSlideContainer>
);
export default NPSlide02Problem;
