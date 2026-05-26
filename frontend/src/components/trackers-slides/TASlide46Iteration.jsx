import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const steps = [
  { n: "01", role: "Вы", t: "Формулируете изменение", h: "«Нужно редактирование и удаление»" },
  { n: "02", role: "PM-агент", t: "Интерпретирует задачу", h: "Анализирует структуру проекта" },
  { n: "03", role: "Дизайнер + Dev", t: "Вносят изменения", h: "UI-компоненты и логика backend" },
  { n: "04", role: "QA-агент", t: "Проверяет результат", h: "Тесты: ничего не сломалось" },
  { n: "05", role: "Вы", t: "Функциональная проверка", h: "Соответствует ли ожиданиям?" },
];
const TASlide46Iteration = () => (
  <TASlideContainer number={46} label="Процесс">
    <TAH>Как проходит одна доработка</TAH>
    <TASub>Вы ставите задачу и проверяете результат. Техническую реализацию берут на себя агенты.</TASub>
    <div className="flex flex-col md:flex-row gap-2 md:gap-3 max-w-4xl">
      {steps.map((s, i) => (
        <div key={i} className="flex-1 rounded-md p-3 md:p-4" style={{ backgroundColor: s.role === "Вы" ? "#0a0a0a" : "#fafafa", border: s.role === "Вы" ? "none" : "1px solid #e5e5e5" }}>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-sm md:text-lg font-bold" style={{ color: s.role === "Вы" ? "#52525b" : "#d4d4d8" }}>{s.n}</span>
            <span className="font-mono text-[9px] md:text-[11px] tracking-wider uppercase" style={{ color: s.role === "Вы" ? "#ffffff" : "#a1a1aa" }}>{s.role}</span>
          </div>
          <p className="font-heading text-xs md:text-base font-bold mb-0.5" style={{ color: s.role === "Вы" ? "#ffffff" : "#0a0a0a" }}>{s.t}</p>
          <p className="font-body text-[10px] md:text-sm" style={{ color: s.role === "Вы" ? "#a1a1aa" : "#71717a" }}>{s.h}</p>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide46Iteration;
