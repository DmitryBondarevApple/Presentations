import { NPSlideContainer } from './NPSlideContainer';

const cases = [
  {
    title: "Анализ публикаций на видео-хостингах",
    desc: "Быстрое извлечение ключевых тезисов из вебинаров, подкастов и публичных выступлений. Идеально для мониторинга конкурентов и подготовки дайджестов.",
    tags: ["YouTube", "Instagram", "Вебинары", "Подкасты"],
  },
  {
    title: "Генерация ТЗ и PRD из встреч",
    desc: "Записывайте встречи с заказчиками — получайте черновики технических заданий. Требования, приоритеты и ограничения структурированы и готовы к доработке.",
    tags: ["PRD", "ТЗ", "Discovery"],
  },
  {
    title: "Анализ демонстраций экранов",
    desc: "Автоматическое извлечение скриншотов интерфейсов из видео с привязкой к обсуждению. Визуальный отчёт для UI-ревью и принятия решений.",
    tags: ["Скриншоты", "UI-ревью", "Визуальный отчёт"],
  },
];

const NPSlide12Cases = () => (
  <NPSlideContainer number={12} label="Кейсы использования">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="np-cases-title">
      Как бизнес <span className="text-accent">использует Noteall</span>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-6">
      {cases.map((c, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8 flex flex-col" data-testid={`np-case-${i}`}>
          <span className="font-heading text-xs sm:text-sm md:text-base font-bold text-accent/60 mb-1 md:mb-3">Кейс {i + 1}</span>
          <h3 className="font-heading text-sm sm:text-base md:text-2xl font-bold text-foreground mb-1 sm:mb-2 md:mb-4">{c.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug sm:leading-relaxed mb-2 md:mb-4 flex-1">{c.desc}</p>
          <div className="flex flex-wrap gap-1 md:gap-2">
            {c.tags.map((tag, j) => (
              <span key={j} className="px-2 py-0.5 md:px-3 md:py-1 rounded bg-accent/10 text-accent text-[10px] sm:text-xs md:text-sm font-medium">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </NPSlideContainer>
);
export default NPSlide12Cases;
