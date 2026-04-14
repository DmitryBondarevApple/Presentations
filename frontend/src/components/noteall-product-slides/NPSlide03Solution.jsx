import { NPSlideContainer } from './NPSlideContainer';

const NPSlide03Solution = () => (
  <NPSlideContainer number={3} label="Решение">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="np-solution-title">
      От записи — к <span className="text-accent">структурированному результату</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Noteall превращает неструктурированный разговор в рабочий материал: размечает спикеров, собирает реплики по темам, исправляет ошибки, применяет фреймворки и сценарии анализа.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-6">
      {[
        { num: "01", title: "Обработка записи", items: ["Транскрибация аудио/видео", "Разметка спикеров", "Склейка фрагментов", "Коррекция по контексту"] },
        { num: "02", title: "Анализ содержания", items: ["Разбивка на темы и блоки", "AI-сценарий анализа", "Наложение фреймворков", "Учёт доп. файлов и контекста"] },
        { num: "03", title: "Результат", items: ["Структурированный документ", "Выводы и рекомендации", "Экспорт в DOCX", "Шаринг по ссылке"] },
      ].map((step, i) => (
        <div key={i} className="bg-card rounded-lg border-t-[3px] border-t-accent border border-border p-2.5 sm:p-4 md:p-7" data-testid={`np-step-${i}`}>
          <span className="font-heading text-xs sm:text-sm md:text-base font-bold text-accent/70">{step.num}</span>
          <h3 className="font-heading text-sm sm:text-base md:text-2xl font-bold text-foreground mt-1 sm:mt-2 md:mt-3">{step.title}</h3>
          <div className="mt-1.5 sm:mt-3 md:mt-5 space-y-0.5 sm:space-y-1 md:space-y-2">
            {step.items.map((item, j) => (
              <div key={j} className="flex items-center gap-1.5 md:gap-2.5">
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent shrink-0" />
                <p className="font-body text-[10px] sm:text-xs md:text-base text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </NPSlideContainer>
);
export default NPSlide03Solution;
