import { AXSlideContainer } from './AXSlideContainer';

const AXSlide10Choice = () => (
  <AXSlideContainer number={10} label="Следующий шаг">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="ax-choice-title">
      После проекта — <span className="text-accent">выбор за клиентом</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Исследовательский этап и разработка — это два отдельных решения. Клиент сам определяет, как двигаться дальше.
    </p>
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-8">
      <div className="flex-1 bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8">
        <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 rounded bg-foreground/10 text-foreground text-[10px] sm:text-xs md:text-sm font-bold tracking-wider mb-2 sm:mb-3 md:mb-5">
          ВАРИАНТ 1
        </span>
        <h3 className="font-heading text-sm sm:text-base md:text-2xl font-bold text-foreground mb-2 sm:mb-3 md:mb-5">
          Любая команда разработки
        </h3>
        <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug sm:leading-relaxed">
          Передать ТЗ своей внутренней или внешней команде и реализовать продукт в привычной модели. ТЗ самодостаточно и не требует пояснений от AX10.
        </p>
      </div>
      <div className="flex-1 bg-card rounded-lg border-2 border-accent p-3 sm:p-5 md:p-8">
        <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 rounded bg-accent/10 text-accent text-[10px] sm:text-xs md:text-sm font-bold tracking-wider mb-2 sm:mb-3 md:mb-5">
          ВАРИАНТ 2
        </span>
        <h3 className="font-heading text-sm sm:text-base md:text-2xl font-bold text-foreground mb-2 sm:mb-3 md:mb-5">
          Разработка силами AX10
        </h3>
        <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug sm:leading-relaxed">
          Поручить реализацию AX10 с использованием AI-first подхода. Это отдельный следующий этап, а не обязательная часть текущего проекта.
        </p>
      </div>
    </div>
    <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-2.5 sm:p-4 md:p-6 mt-2 sm:mt-4 md:mt-8">
      <p className="font-body text-sm sm:text-base md:text-xl text-foreground/80 leading-snug sm:leading-relaxed">
        <span className="font-semibold text-foreground">Ключевой принцип: </span>
        разработка не навязывается. Клиент получает свободу выбора на каждом этапе.
      </p>
    </div>
  </AXSlideContainer>
);
export default AXSlide10Choice;
