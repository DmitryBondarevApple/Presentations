import { PBSlideContainer } from './PBSlideContainer';

const items = [
  { t: "Захват ключевых кадров", d: "Автоматическое извлечение скриншотов интерфейса клиента из видеозвонка" },
  { t: "Привязка к проблеме", d: "Каждый кадр связан с обсуждаемой проблемой — визуальное доказательство" },
  { t: "В диагностике и ТЗ", d: "Скриншоты попадают в итоговые документы для точного понимания контекста" },
];

const PBSlide06Video = () => (
  <PBSlideContainer number={6} label="Видеоанализ">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="pb-video-title">
      Анализ того, что клиент <span className="text-accent">показывает на экране</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-3 sm:mb-5 md:mb-10 leading-relaxed max-w-4xl">
      Noteall извлекает визуальный контекст из видеозвонков и демонстраций экрана
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-6">
      {items.map((s, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8">
          <span className="font-heading text-lg md:text-2xl font-bold text-accent/70">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="font-heading text-sm sm:text-base md:text-xl font-bold text-foreground mt-1 mb-1 md:mb-3">{s.t}</h3>
          <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-relaxed">{s.d}</p>
        </div>
      ))}
    </div>
  </PBSlideContainer>
);
export default PBSlide06Video;
