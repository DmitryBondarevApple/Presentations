import { NPSlideContainer } from './NPSlideContainer';

const NPSlide07Scenarios = () => (
  <NPSlideContainer number={7} label="Сценарии анализа">
    <div className="flex flex-col md:flex-row gap-3 md:gap-8 items-start">
      <div className="flex-1 min-w-0">
        <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="np-scenarios-title">
          Гибкая настройка <span className="text-accent">глубины и формата</span>
        </h2>
        <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-8 leading-snug sm:leading-relaxed">
          Каждый сценарий определяет подробность, структуру и акценты анализа — от краткого саммари до детального протокола с решениями и задачами.
        </p>
        <div className="space-y-1.5 sm:space-y-2 md:space-y-4">
          {[
            "Подробность, акценты и формат — под вашу задачу",
            "Кастомизируемый AI-анализ: резюме, задачи, риски, ключевые решения",
            "Импорт и экспорт сценариев между коллегами",
            "Мгновенное применение к любой записи",
          ].map((t, i) => (
            <div key={i} className="flex items-start gap-2 md:gap-3">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent mt-1.5 md:mt-2.5 shrink-0" />
              <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/80 leading-snug sm:leading-relaxed">{t}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[45%] shrink-0 rounded-xl border border-border overflow-hidden shadow-lg">
        <img
          src={`${process.env.PUBLIC_URL || ''}/images/noteall/screenshot-scenarios.png`}
          alt="Сценарии анализа"
          className="w-full h-auto"
          data-testid="np-scenarios-screenshot"
        />
      </div>
    </div>
  </NPSlideContainer>
);
export default NPSlide07Scenarios;
