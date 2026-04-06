import { NASlideContainer } from './NASlideContainer';

const NASlide06Market = () => (
  <NASlideContainer number={6} label="Анализ рынка">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-3" data-testid="na-market-title">
      Рынок <span className="text-accent">bottom-up</span> (Россия)
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-6">
      Малые компании и ИП, активно использующие видео-конференции
    </p>

    <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
      <div className="flex-1 space-y-2 md:space-y-4">
        <div className="bg-card rounded-lg border border-border p-4 md:p-6 flex items-center justify-between">
          <div>
            <p className="font-body text-xs md:text-base text-muted-foreground">TAM — потенциальные клиенты</p>
            <p className="font-body text-[10px] md:text-sm text-muted-foreground/60 mt-0.5">~1 млн компаний</p>
          </div>
          <span className="font-heading text-xl md:text-4xl font-bold text-accent">48 млрд ₽</span>
        </div>
        <div className="bg-card rounded-lg border border-border p-4 md:p-6 flex items-center justify-between">
          <div>
            <p className="font-body text-xs md:text-base text-muted-foreground">SAM — активные пользователи ВКС</p>
            <p className="font-body text-[10px] md:text-sm text-muted-foreground/60 mt-0.5">45% → 450 000 компаний</p>
          </div>
          <span className="font-heading text-xl md:text-4xl font-bold text-accent">21.6 млрд ₽</span>
        </div>
        <div className="bg-card rounded-lg border-2 border-accent p-4 md:p-6 flex items-center justify-between">
          <div>
            <p className="font-body text-xs md:text-base text-foreground font-semibold">SOM — записывают встречи</p>
            <p className="font-body text-[10px] md:text-sm text-muted-foreground/60 mt-0.5">15% → 67 500 компаний</p>
          </div>
          <span className="font-heading text-xl md:text-4xl font-bold text-accent">3.2 млрд ₽</span>
        </div>
      </div>

      <div className="lg:w-72 bg-card rounded-lg border border-border p-4 md:p-6">
        <p className="font-heading text-xs md:text-base font-semibold text-foreground mb-3 md:mb-4">Расчёт ARPU</p>
        <div className="space-y-2 md:space-y-3">
          <div><p className="font-body text-[10px] md:text-sm text-muted-foreground">Средний чек за запись</p><p className="font-heading text-sm md:text-xl font-bold text-foreground">400 ₽</p></div>
          <div><p className="font-body text-[10px] md:text-sm text-muted-foreground">Записей в месяц</p><p className="font-heading text-sm md:text-xl font-bold text-foreground">10</p></div>
          <div className="w-full h-px bg-border" />
          <div><p className="font-body text-[10px] md:text-sm text-muted-foreground">ARPU в месяц</p><p className="font-heading text-lg md:text-2xl font-bold text-accent">4 000 ₽</p></div>
          <div><p className="font-body text-[10px] md:text-sm text-muted-foreground">ARPU в год</p><p className="font-heading text-lg md:text-2xl font-bold text-accent">48 000 ₽</p></div>
        </div>
      </div>
    </div>
  </NASlideContainer>
);
export default NASlide06Market;
