import { NPSlideContainer } from './NPSlideContainer';

const steps = [
  { num: "01", title: "Загрузите запись", desc: "Аудио, видео или ссылка на YouTube / Instagram — любой формат" },
  { num: "02", title: "Выберите сценарий", desc: "Готовый сценарий или свой. Добавьте ссылки и документы для контекста" },
  { num: "03", title: "Получите результат", desc: "Структурированный анализ — редактируйте, экспортируйте в DOCX или поделитесь ссылкой" },
];

const NPSlide04HowItWorks = () => (
  <NPSlideContainer number={4} label="Как это работает">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="np-how-title">
      Три шага <span className="text-accent">до результата</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10">
      От загрузки записи до готового рабочего документа
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-6">
      {steps.map((s, i) => (
        <div key={i} className="bg-card rounded-lg border-t-[3px] border-t-accent border border-border p-2.5 sm:p-4 md:p-7" data-testid={`np-step-${i}`}>
          <span className="font-heading text-xs sm:text-sm md:text-base font-bold text-accent/70">{s.num}</span>
          <h3 className="font-heading text-sm sm:text-base md:text-2xl font-bold text-foreground mt-1 sm:mt-2 md:mt-4">{s.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug sm:leading-relaxed mt-1 sm:mt-2 md:mt-4">{s.desc}</p>
        </div>
      ))}
    </div>
  </NPSlideContainer>
);
export default NPSlide04HowItWorks;
