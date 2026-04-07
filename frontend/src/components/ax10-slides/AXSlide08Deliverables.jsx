import { AXSlideContainer } from './AXSlideContainer';

const deliverables = [
  { title: "База инсайтов", desc: "Структурированные результаты интервью с цитатами, темами и выводами" },
  { title: "Кабинетное исследование", desc: "Анализ рынка, конкурентов, трендов и контекста" },
  { title: "Аналитический документ", desc: "Сводный документ с ключевыми выводами и рекомендациями" },
  { title: "Карта сценариев", desc: "Пользовательские сценарии с приоритетами и условиями" },
  { title: "Портрет пользователя", desc: "Профиль раннего пользователя на основе реальных данных" },
  { title: "Структура MVP", desc: "Приоритизированный функционал и требования к данным" },
];

const AXSlide08Deliverables = () => (
  <AXSlideContainer number={8} label="Результат">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="ax-deliverables-title">
      Полноценный <span className="text-accent">пакет для старта</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-8 leading-snug sm:leading-relaxed max-w-5xl">
      По итогам проекта клиент получает не отчёт, а готовый набор материалов для запуска разработки:
    </p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-5 mb-2 sm:mb-4 md:mb-6">
      {deliverables.map((d, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-2.5 sm:p-4 md:p-6" data-testid={`ax-deliv-${i}`}>
          <h3 className="font-heading text-sm sm:text-base md:text-lg font-bold text-foreground mb-1 sm:mb-2 md:mb-3">{d.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-snug sm:leading-relaxed">{d.desc}</p>
        </div>
      ))}
    </div>
    <div className="bg-card rounded-lg border-2 border-accent p-2.5 sm:p-4 md:p-6">
      <p className="font-body text-sm sm:text-base md:text-xl text-foreground/80 leading-snug sm:leading-relaxed">
        <span className="font-semibold text-accent">+ Техническое задание </span>
        и дорожная карта следующего шага — исчерпывающее задание для оценки трудозатрат, сроков и стоимости реализации.
      </p>
    </div>
  </AXSlideContainer>
);
export default AXSlide08Deliverables;
