import { TKSlideContainer, TKH2, TKLead, TKCard, TKBullet } from "./TKSlideContainer";

const steps = [
  {
    n: "01", t: "Обработка записи",
    items: ["Транскрибация аудио и видео", "Разметка спикеров", "Сборка фрагментов речи", "Коррекция по контексту", "Авто-исправление ошибок распознавания"],
  },
  {
    n: "02", t: "Анализ содержания",
    items: ["Разбивка на темы и смысловые блоки", "Извлечение решений, задач и выводов", "Учёт внешних данных и общего контекста", "Применение AI-сценариев анализа"],
  },
  {
    n: "03", t: "Рабочий результат",
    items: ["Структурированный документ для бизнес-процессов", "Готовые КП, ТЗ, материалы для CRM или отчёта", "Выводы, рекомендации и задачи по исполнителям", "Экспорт в DOCX / PDF, шеринг по ссылке"],
  },
];

const TKSlide05Solution = () => (
  <TKSlideContainer number={5} label="Решение Noteall">
    <TKH2>От записи — <span className="text-accent">к структурированному результату</span></TKH2>
    <TKLead>Noteall превращает неструктурированный разговор в рабочий материал.</TKLead>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 md:gap-5">
      {steps.map((s, i) => (
        <TKCard key={i} accent data-testid={`tk-step-${i}`}>
          <p className="font-heading text-base md:text-2xl font-bold text-accent/70">{s.n}</p>
          <p className="font-heading text-sm sm:text-base md:text-xl font-bold text-foreground mt-0.5 mb-2 md:mb-3">{s.t}</p>
          <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
            {s.items.map((it, j) => <TKBullet key={j}>{it}</TKBullet>)}
          </div>
        </TKCard>
      ))}
    </div>
  </TKSlideContainer>
);
export default TKSlide05Solution;
