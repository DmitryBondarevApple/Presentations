import { NPSlideContainer } from './NPSlideContainer';

const left = [
  "Транскрипт",
  "Короткое summary",
  "Мало структуры",
  "Слабая привязка к бизнес-задаче",
];
const right = [
  "Тематическая сборка разговора",
  "Анализ по настраиваемым сценариям",
  "Поддержка исследовательских фреймворков",
  "Работа с несколькими интервью",
  "Итоговые артефакты под внедрение",
  "Настройка под конкретный процесс клиента",
];

const NPSlide13Comparison = () => (
  <NPSlideContainer number={12} label="Преимущество">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="np-compare-title">
      Глубже, <span className="text-accent">чем обычный транскрибатор</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Это не просто «перевод голоса в текст», а инструмент анализа и упаковки экспертного контекста.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-6">
      <div className="bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8">
        <h3 className="font-heading text-sm sm:text-base md:text-xl font-bold text-muted-foreground mb-2 md:mb-5">Обычные сервисы</h3>
        <div className="space-y-1 sm:space-y-1.5 md:space-y-3">
          {left.map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 md:gap-2.5">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
              <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-card rounded-lg border-2 border-accent p-3 sm:p-5 md:p-8">
        <h3 className="font-heading text-sm sm:text-base md:text-xl font-bold text-accent mb-2 md:mb-5">Noteall</h3>
        <div className="space-y-1 sm:space-y-1.5 md:space-y-3">
          {right.map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 md:gap-2.5">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent shrink-0" />
              <p className="font-body text-xs sm:text-sm md:text-lg text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </NPSlideContainer>
);
export default NPSlide13Comparison;
