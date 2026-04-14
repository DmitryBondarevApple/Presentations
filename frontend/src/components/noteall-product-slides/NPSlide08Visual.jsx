import { NPSlideContainer } from './NPSlideContainer';

const NPSlide08Visual = () => (
  <NPSlideContainer number={8} label="Визуальный контекст">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="np-visual-title">
      Анализ слайдов и экранов <span className="text-accent">из видео</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      При анализе видеозаписей система автоматически извлекает ключевые кадры — скриншоты интерфейсов, презентаций и демонстраций, привязанные к контексту обсуждения.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-6">
      {[
        { title: "Извлечение кадров", desc: "Автоматическое определение значимых моментов видео и захват скриншотов по таймштампам" },
        { title: "Привязка к контексту", desc: "Каждый кадр связан с обсуждением: что показывали, какие комментарии звучали, какие решения принимались" },
        { title: "Визуальный отчёт", desc: "Текст и изображения дополняют друг друга в едином документе — идеально для UI-ревью и обсуждений дизайна" },
        { title: "Анализ презентаций", desc: "Обсуждения слайдов, графиков и интерфейсов — всё фиксируется с визуальными доказательствами" },
      ].map((item, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-3 sm:p-4 md:p-7" data-testid={`np-visual-${i}`}>
          <h3 className="font-heading text-sm sm:text-base md:text-2xl font-bold text-foreground">{item.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug sm:leading-relaxed mt-1 sm:mt-2 md:mt-3">{item.desc}</p>
        </div>
      ))}
    </div>
  </NPSlideContainer>
);
export default NPSlide08Visual;
