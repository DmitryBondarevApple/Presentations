import { AXSlideContainer } from './AXSlideContainer';

const sources = [
  { tag: "ПОЛЬЗОВАТЕЛИ", title: "Интервью и анкеты", desc: "Глубинные разговоры с потенциальными пользователями, опросы целевых групп, выявление реальных задач и барьеров" },
  { tag: "РЫНОК", title: "Кабинетное исследование", desc: "Анализ конкурентов, трендов, объёмов рынка, ценовых моделей и позиционирования" },
  { tag: "КОНТЕКСТ", title: "Инфраструктура и ограничения", desc: "Отраслевые, технические и регуляторные ограничения, которые влияют на продуктовые решения" },
  { tag: "КЛИЕНТ", title: "Внутренние материалы", desc: "Уже имеющиеся данные заказчика: стратегии, аналитика, внутренние документы и гипотезы" },
];

const AXSlide05Data = () => (
  <AXSlideContainer number={5} label="Данные">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="ax-data-title">
      Выводы строятся на <span className="text-accent">нескольких источниках</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      AX10 не ограничивается одним методом. Данные проверяются с нескольких сторон — именно так формируется база для продуктовых решений.
    </p>
    <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6">
      {sources.map((s, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-2.5 sm:p-4 md:p-7" data-testid={`ax-source-${i}`}>
          <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 rounded bg-accent/10 text-accent text-[10px] sm:text-xs md:text-sm font-bold tracking-wider mb-1.5 sm:mb-2 md:mb-3">
            {s.tag}
          </span>
          <h3 className="font-heading text-sm sm:text-base md:text-xl font-bold text-foreground mb-1 sm:mb-2 md:mb-3">{s.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug sm:leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </AXSlideContainer>
);
export default AXSlide05Data;
