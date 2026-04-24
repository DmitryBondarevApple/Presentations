import { PBSlideContainer } from './PBSlideContainer';

const PBSlide10Cost = () => (
  <PBSlideContainer number={10} label="Экономика">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="pb-cost-title">
      Себестоимость обработки — <span className="text-accent">в 10 раз ниже</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-3 sm:mb-5 md:mb-10 leading-relaxed max-w-4xl">
      Сравнение ручного пресейла и автоматизированного pipeline
    </p>
    <div className="flex flex-col md:flex-row gap-3 md:gap-6 mb-4 md:mb-8">
      <div className="flex-1 bg-card rounded-lg border border-border p-4 sm:p-6 md:p-8">
        <span className="inline-block px-2 py-1 rounded bg-muted-foreground/10 text-muted-foreground text-[10px] md:text-xs font-bold tracking-wider uppercase mb-3 md:mb-5">Сейчас</span>
        <p className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-1 md:mb-2">~16 000 руб</p>
        <p className="font-body text-xs md:text-base text-muted-foreground">8-10 часов менеджера x 2 000 руб/час</p>
      </div>
      <div className="flex items-center justify-center">
        <svg className="w-6 h-6 md:w-8 md:h-8 text-accent rotate-90 md:rotate-0" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <div className="flex-1 bg-card rounded-lg border-2 border-accent p-4 sm:p-6 md:p-8">
        <span className="inline-block px-2 py-1 rounded bg-accent/10 text-accent text-[10px] md:text-xs font-bold tracking-wider uppercase mb-3 md:mb-5">С Noteall</span>
        <p className="font-heading text-2xl md:text-4xl font-bold text-accent mb-1 md:mb-2">1 000-1 500 руб</p>
        <p className="font-body text-xs md:text-base text-muted-foreground">Полный цикл pipeline</p>
      </div>
    </div>
    <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-3 md:p-5 max-w-3xl">
      <p className="font-body text-xs md:text-lg text-muted-foreground">
        <span className="font-semibold text-foreground">Экономия ~15 000 руб</span> на каждом клиентском обращении
      </p>
    </div>
  </PBSlideContainer>
);
export default PBSlide10Cost;
