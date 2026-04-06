import { NASlideContainer } from './NASlideContainer';

const steps = [
  { num: "01", title: "Загрузка", desc: "Аудио, видео, документ или ссылка на YouTube / Instagram" },
  { num: "02", title: "Обработка", desc: "Транскрибация, определение спикеров, извлечение ключевых кадров" },
  { num: "03", title: "Анализ", desc: "Готовый или кастомный сценарий обработки с учётом дополнительного контекста" },
  { num: "04", title: "Результат", desc: "Саммари, аналитика, задачи, требования — экспорт в DOCX или шаринг по ссылке" },
];

const NASlide04HowItWorks = () => (
  <NASlideContainer number={4} label="Как работает">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-3" data-testid="na-how-title">
      Четыре шага <span className="text-accent">до результата</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
      От загрузки записи до готового рабочего артефакта
    </p>
    <div className="flex flex-col md:flex-row gap-2 md:gap-4">
      {steps.map((s, i) => (
        <div key={i} className="flex-1 bg-card rounded-lg border-t-[3px] border-t-accent border border-border p-3 md:p-6" data-testid={`na-step-${i}`}>
          <span className="font-heading text-xs md:text-sm font-bold text-accent/70">{s.num}</span>
          <h3 className="font-heading text-sm md:text-xl font-bold text-foreground mt-1 md:mt-3">{s.title}</h3>
          <p className="font-body text-xs md:text-base text-muted-foreground leading-relaxed mt-1 md:mt-3">{s.desc}</p>
        </div>
      ))}
    </div>
  </NASlideContainer>
);
export default NASlide04HowItWorks;
