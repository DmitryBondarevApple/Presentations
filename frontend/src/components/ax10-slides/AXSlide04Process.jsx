import { AXSlideContainer } from './AXSlideContainer';

const steps = [
  { num: "01", title: "Параметры проекта", desc: "Уточнение задачи, целей и границ исследования" },
  { num: "02", title: "Дизайн исследования", desc: "Подготовка методологии, гайдов и инструментов" },
  { num: "03", title: "Полевой этап", desc: "Интервью, анкеты, сбор первичных данных" },
  { num: "04", title: "ИИ-аналитика", desc: "Автоматическая обработка и структуризация интервью" },
  { num: "05", title: "Кабинетное исследование", desc: "Анализ рынка, конкурентов и отраслевого контекста" },
  { num: "06", title: "Синтез выводов", desc: "Формирование продуктовых сценариев и решений" },
  { num: "07", title: "ТЗ и материалы", desc: "Подготовка документации для старта разработки" },
];

const AXSlide04Process = () => (
  <AXSlideContainer number={4} label="Процесс">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="ax-process-title">
      Семь этапов <span className="text-accent">от идеи до ТЗ</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-8 leading-snug sm:leading-relaxed">
      Последовательный проект без лишних итераций и без преждевременного ухода в код
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-2 md:mb-4">
      {steps.slice(0, 4).map((s, i) => (
        <div key={i} className="bg-card rounded-lg border-t-[3px] border-t-accent border border-border p-2.5 sm:p-4 md:p-5" data-testid={`ax-step-${i}`}>
          <span className="font-heading text-xs sm:text-sm md:text-base font-bold text-accent/70">{s.num}</span>
          <h3 className="font-heading text-sm sm:text-base md:text-lg font-bold text-foreground mt-1 sm:mt-2 md:mt-3">{s.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-snug sm:leading-relaxed mt-1 sm:mt-2 md:mt-3">{s.desc}</p>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
      {steps.slice(4).map((s, i) => (
        <div key={i} className="bg-card rounded-lg border-t-[3px] border-t-accent border border-border p-2.5 sm:p-4 md:p-5" data-testid={`ax-step-${i + 4}`}>
          <span className="font-heading text-xs sm:text-sm md:text-base font-bold text-accent/70">{s.num}</span>
          <h3 className="font-heading text-sm sm:text-base md:text-lg font-bold text-foreground mt-1 sm:mt-2 md:mt-3">{s.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-snug sm:leading-relaxed mt-1 sm:mt-2 md:mt-3">{s.desc}</p>
        </div>
      ))}
    </div>
  </AXSlideContainer>
);
export default AXSlide04Process;
