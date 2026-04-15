import { EMSlideContainer } from './EMSlideContainer';

const steps = [
  { num: "01", role: "Вы", text: "Формулируете изменение", hint: "«В справочниках нужно редактирование и удаление»" },
  { num: "02", role: "PM-агент", text: "Интерпретирует задачу", hint: "Анализирует текущую структуру проекта" },
  { num: "03", role: "Дизайнер + Dev", text: "Вносят изменения", hint: "UI-компоненты и логика backend" },
  { num: "04", role: "QA-агент", text: "Проверяет результат", hint: "Тесты: ничего не сломалось" },
  { num: "05", role: "Вы", text: "Функциональная проверка", hint: "Соответствует ли ожиданиям?" },
];

const EMSlide18Iteration = () => (
  <EMSlideContainer number={18} label="Процесс">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-4" data-testid="em-iteration-title">
      Как проходит <span className="text-accent">одна доработка</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8 max-w-3xl">
      Вы ставите задачу и проверяете результат. Техническую реализацию берут на себя агенты.
    </p>

    <div className="flex flex-col md:flex-row gap-2 md:gap-3">
      {steps.map((s, i) => (
        <div key={i} className="flex-1 flex flex-col relative">
          <div className={`bg-card rounded-lg border p-3 md:p-4 h-full ${
            s.role === "Вы" ? "border-accent border-l-[3px] border-l-accent" : "border-border"
          }`}>
            <div className="flex items-center gap-2 mb-1 md:mb-2">
              <span className="font-heading text-lg md:text-2xl font-bold text-accent/30">{s.num}</span>
              <span className={`font-body text-[10px] md:text-xs uppercase tracking-wider ${
                s.role === "Вы" ? "text-accent" : "text-muted-foreground"
              }`}>{s.role}</span>
            </div>
            <p className="font-heading text-xs md:text-base font-bold text-foreground mb-0.5 md:mb-1">{s.text}</p>
            <p className="font-body text-[10px] md:text-sm text-muted-foreground/60">{s.hint}</p>
          </div>
          {i < steps.length - 1 && (
            <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-muted-foreground/30">
              <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
            </div>
          )}
        </div>
      ))}
    </div>

    <p className="font-body text-sm md:text-lg text-foreground/70 mt-4 md:mt-6">
      <span className="font-semibold">Ваша роль</span> — постановка задач, проверка результата и функциональное тестирование
    </p>
  </EMSlideContainer>
);

export default EMSlide18Iteration;
