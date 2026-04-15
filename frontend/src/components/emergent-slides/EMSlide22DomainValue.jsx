import { EMSlideContainer } from './EMSlideContainer';

const EMSlide22DomainValue = () => (
  <EMSlideContainer number={20} label="Ценность">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-4" data-testid="em-domain-title">
      Ценность растёт, <span className="text-accent">когда продукт глубоко погружен в предметную область</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8 max-w-3xl">
      Чем глубже система понимает контекст — тем больше пользы она приносит
    </p>

    <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-stretch">
      {/* Before */}
      <div className="flex-1 bg-card rounded-lg border border-border p-4 md:p-6">
        <span className="inline-block px-2 py-1 rounded bg-muted-foreground/10 text-muted-foreground text-[10px] md:text-xs font-bold tracking-wider uppercase mb-3 md:mb-4">
          Было
        </span>
        <h3 className="font-heading text-sm md:text-lg font-bold text-foreground mb-2 md:mb-4">Карточка препарата</h3>
        <div className="space-y-2 md:space-y-3">
          {["Название", "Краткое описание"].map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
              <p className="font-body text-xs md:text-lg text-muted-foreground/60">{t}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-border">
          <p className="font-body text-[10px] md:text-sm text-muted-foreground/40 italic">Минимум данных — минимум пользы</p>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex items-center justify-center md:px-2">
        <svg className="w-6 h-6 md:w-8 md:h-8 text-accent rotate-90 md:rotate-0" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      {/* After */}
      <div className="flex-1 bg-card rounded-lg border-2 border-accent p-4 md:p-6">
        <span className="inline-block px-2 py-1 rounded bg-accent/10 text-accent text-[10px] md:text-xs font-bold tracking-wider uppercase mb-3 md:mb-4">
          Стало
        </span>
        <h3 className="font-heading text-sm md:text-lg font-bold text-foreground mb-2 md:mb-4">Карточка препарата</h3>
        <div className="space-y-1.5 md:space-y-2">
          {[
            "Название и действующее вещество",
            "Состав и форма выпуска",
            "Показания и противопоказания",
            "Дозировка по типу животного",
            "Фото упаковки и этикетка",
            "Расчёт дозы по массе и поголовью",
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <p className="font-body text-xs md:text-base text-foreground">{t}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 md:mt-5 pt-3 md:pt-4 border-t border-accent/20">
          <p className="font-body text-[10px] md:text-sm text-accent italic">Инструмент поддержки принятия решений</p>
        </div>
      </div>
    </div>
  </EMSlideContainer>
);

export default EMSlide22DomainValue;
