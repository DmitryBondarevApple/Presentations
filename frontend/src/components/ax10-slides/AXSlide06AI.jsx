import { AXSlideContainer } from './AXSlideContainer';

const pipeline = [
  { num: "01", title: "Транскрипт", desc: "Запись интервью переводится в точный текст" },
  { num: "02", title: "Summary", desc: "Автоматическая выжимка ключевых тезисов" },
  { num: "03", title: "Структура", desc: "Цитаты, темы, задачи, барьеры, мотивы, сомнения" },
  { num: "04", title: "Выводы", desc: "Прикладные продуктовые решения из массива данных" },
];

const AXSlide06AI = () => (
  <AXSlideContainer number={6} label="Технология">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="ax-ai-title">
      ИИ — <span className="text-accent">рабочий инструмент</span>, не вывеска
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      ИИ в AX10 встроен в полный цикл аналитики. Это позволяет быстро переходить от массива разговоров к продуктовым выводам, не теряя контекст реальных высказываний.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-6">
      {pipeline.map((s, i) => (
        <div key={i} className="bg-card rounded-lg border-t-[3px] border-t-accent border border-border p-2.5 sm:p-4 md:p-7" data-testid={`ax-ai-step-${i}`}>
          <span className="font-heading text-xs sm:text-sm md:text-base font-bold text-accent/70">{s.num}</span>
          <h3 className="font-heading text-sm sm:text-base md:text-2xl font-bold text-foreground mt-1 sm:mt-2 md:mt-4">{s.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug sm:leading-relaxed mt-1 sm:mt-2 md:mt-4">{s.desc}</p>
        </div>
      ))}
    </div>
    <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-2.5 sm:p-4 md:p-6 mt-2 sm:mt-4 md:mt-8">
      <p className="font-body text-sm sm:text-base md:text-xl text-foreground/80 leading-snug sm:leading-relaxed">
        <span className="font-semibold text-foreground">Результат: </span>
        из десятков интервью — структурированная база инсайтов, готовая для продуктовых решений.
      </p>
    </div>
  </AXSlideContainer>
);
export default AXSlide06AI;
