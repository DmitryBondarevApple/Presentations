import { NPSlideContainer } from './NPSlideContainer';

const NPSlide04Output = () => (
  <NPSlideContainer number={4} label="Результат">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="np-output-title">
      На выходе — не транскрипт, <span className="text-accent">а рабочий документ</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Noteall превращает неструктурированную коммуникацию в структурированные артефакты для работы команды.
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-5 mb-2 sm:mb-4 md:mb-8">
      {[
        "Summary встречи",
        "Тематическая структура обсуждения",
        "Выводы и рекомендации",
        "Дорожная карта",
        "Диагностика по фреймворку",
        "Материалы для проектирования",
        "Готовый к использованию ТЗ / PRD / backlog",
        "Синтез нескольких интервью",
      ].map((item, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-2.5 sm:p-4 md:p-5 flex items-start gap-1.5 md:gap-3" data-testid={`np-output-${i}`}>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent mt-1 md:mt-1.5 shrink-0" />
          <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/80 leading-snug">{item}</p>
        </div>
      ))}
    </div>
  </NPSlideContainer>
);
export default NPSlide04Output;
