import { PBSlideContainer } from './PBSlideContainer';

const PBSlide11Time = () => (
  <PBSlideContainer number={11} label="Эффективность">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="pb-time-title">
      Менеджер <span className="text-accent">продаёт, а не пишет</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-3 sm:mb-5 md:mb-10 leading-relaxed max-w-4xl">
      Высвобождение 7-9 часов на каждое интервью
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-6">
      <div className="bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8">
        <span className="inline-block px-2 py-1 rounded bg-muted-foreground/10 text-muted-foreground text-[10px] md:text-xs font-bold tracking-wider uppercase mb-3 md:mb-5">Было</span>
        <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/70 leading-relaxed">
          Интервью → 8-10 ч ручной обработки → ТЗ → расчёт → КП
        </p>
      </div>
      <div className="bg-card rounded-lg border-2 border-accent p-3 sm:p-5 md:p-8">
        <span className="inline-block px-2 py-1 rounded bg-accent/10 text-accent text-[10px] md:text-xs font-bold tracking-wider uppercase mb-3 md:mb-5">Стало</span>
        <p className="font-body text-xs sm:text-sm md:text-lg text-foreground leading-relaxed">
          Интервью → 1 ч проверки → готовый пакет документов
        </p>
      </div>
      <div className="bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8">
        <span className="inline-block px-2 py-1 rounded bg-accent/10 text-accent text-[10px] md:text-xs font-bold tracking-wider uppercase mb-3 md:mb-5">Результат</span>
        <p className="font-body text-xs sm:text-sm md:text-lg text-foreground leading-relaxed">
          Менеджер может обрабатывать в 5-8 раз больше обращений
        </p>
      </div>
    </div>
  </PBSlideContainer>
);
export default PBSlide11Time;
