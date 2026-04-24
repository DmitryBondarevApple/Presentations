import { PBSlideContainer } from './PBSlideContainer';

const leftItems = [
  "Выявленные проблемы клиента, ранжированные по приоритету",
  "Текущие процессы и их узкие места",
  "Ожидания и ограничения клиента",
];
const rightItems = [
  "Клиент видит, что его поняли правильно",
  "Возможность скорректировать до начала разработки",
  "Снижение рисков непонимания",
];

const PBSlide07Diagnostic = () => (
  <PBSlideContainer number={7} label="Артефакт">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="pb-diag-title">
      Промежуточный артефакт — <span className="text-accent">диагностика клиента</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-3 sm:mb-5 md:mb-10 leading-relaxed max-w-4xl">
      Верифицируемый документ перед началом разработки ТЗ
    </p>
    <div className="flex flex-col md:flex-row gap-3 md:gap-6">
      <div className="flex-1 bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8">
        <span className="inline-block px-2 py-1 rounded bg-accent/10 text-accent text-[10px] md:text-xs font-bold tracking-wider uppercase mb-3 md:mb-5">Структура</span>
        <div className="space-y-1.5 md:space-y-3">
          {leftItems.map((t, i) => (
            <div key={i} className="flex items-start gap-2 md:gap-3">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent shrink-0 mt-1.5 md:mt-2" />
              <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/80">{t}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-card rounded-lg border-2 border-accent p-3 sm:p-5 md:p-8">
        <span className="inline-block px-2 py-1 rounded bg-accent/10 text-accent text-[10px] md:text-xs font-bold tracking-wider uppercase mb-3 md:mb-5">Ценность</span>
        <div className="space-y-1.5 md:space-y-3">
          {rightItems.map((t, i) => (
            <div key={i} className="flex items-start gap-2 md:gap-3">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent shrink-0 mt-1.5 md:mt-2" />
              <p className="font-body text-xs sm:text-sm md:text-lg text-foreground">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </PBSlideContainer>
);
export default PBSlide07Diagnostic;
