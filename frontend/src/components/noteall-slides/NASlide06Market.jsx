import { NASlideContainer } from './NASlideContainer';

const NASlide06Market = () => (
  <NASlideContainer number={6} label="Анализ рынка">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="na-market-title">
      Рынок <span className="text-accent">bottom-up</span> (Россия)
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-4 md:mb-8">
      Малые компании и ИП, активно использующие видео-конференции
    </p>

    <div className="flex flex-col lg:flex-row gap-2 sm:gap-4 md:gap-6">
      <div className="flex-1 space-y-1.5 sm:space-y-3 md:space-y-5">
        <div className="bg-card rounded-lg border border-border p-2.5 sm:p-5 md:p-7 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground">TAM — потенциальные клиенты</p>
            <p className="font-body text-[10px] sm:text-[10px] md:text-base text-muted-foreground/60 mt-0.5">~1 млн компаний</p>
          </div>
          <span className="font-heading text-base sm:text-xl md:text-4xl font-bold text-accent shrink-0">48 млрд ₽</span>
        </div>
        <div className="bg-card rounded-lg border border-border p-2.5 sm:p-5 md:p-7 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground">SAM — активные пользователи ВКС</p>
            <p className="font-body text-[10px] sm:text-[10px] md:text-base text-muted-foreground/60 mt-0.5">45% → 450 000 компаний</p>
          </div>
          <span className="font-heading text-base sm:text-xl md:text-4xl font-bold text-accent shrink-0">21.6 млрд ₽</span>
        </div>
        <div className="bg-card rounded-lg border-2 border-accent p-2.5 sm:p-5 md:p-7 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="font-body text-xs sm:text-sm md:text-lg text-foreground font-semibold">SOM — записывают встречи</p>
            <p className="font-body text-[10px] sm:text-[10px] md:text-base text-muted-foreground/60 mt-0.5">15% → 67 500 компаний</p>
          </div>
          <span className="font-heading text-base sm:text-xl md:text-4xl font-bold text-accent shrink-0">3.2 млрд ₽</span>
        </div>
      </div>

      <div className="lg:w-80 bg-card rounded-lg border border-border p-2.5 sm:p-5 md:p-7">
        <p className="font-heading text-sm sm:text-base md:text-xl font-semibold text-foreground mb-2 sm:mb-4 md:mb-6">Расчёт ARPPU</p>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3 md:gap-5">
          <div><p className="font-body text-[10px] sm:text-[10px] md:text-base text-muted-foreground">Средний чек за транскрибацию и анализ записи</p><p className="font-heading text-sm sm:text-lg md:text-2xl font-bold text-foreground mt-0.5">400 ₽</p></div>
          <div><p className="font-body text-[10px] sm:text-[10px] md:text-base text-muted-foreground">Записей в месяц</p><p className="font-heading text-sm sm:text-lg md:text-2xl font-bold text-foreground mt-0.5">10</p></div>
          <div className="col-span-2 lg:col-span-1 hidden sm:block w-full h-px bg-border" />
          <div><p className="font-body text-[10px] sm:text-[10px] md:text-base text-muted-foreground">ARPPU в месяц</p><p className="font-heading text-sm sm:text-xl md:text-3xl font-bold text-accent mt-0.5">4 000 ₽</p></div>
          <div><p className="font-body text-[10px] sm:text-[10px] md:text-base text-muted-foreground">ARPPU в год</p><p className="font-heading text-sm sm:text-xl md:text-3xl font-bold text-accent mt-0.5">48 000 ₽</p></div>
        </div>
      </div>
    </div>
  </NASlideContainer>
);
export default NASlide06Market;
