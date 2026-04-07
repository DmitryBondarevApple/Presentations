import { AXSlideContainer } from './AXSlideContainer';

const AXSlide02Problem = () => (
  <AXSlideContainer number={2} label="Проблема">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="ax-problem-title">
      Цифровой сервис начинают <span className="text-accent">с предположений</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      На старте у компании есть идея, гипотезы и набор желаемых функций. Но ключевые вопросы остаются без ответа:
    </p>
    <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 mb-2 sm:mb-4 md:mb-8">
      <div className="bg-card rounded-lg border border-border p-2.5 sm:p-5 md:p-7">
        <span className="font-heading text-sm sm:text-base md:text-xl font-bold text-accent">Кто пользователь?</span>
        <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/80 mt-1 sm:mt-2 md:mt-4 leading-snug">Неясно, кто станет ранним пользователем и какие сценарии действительно востребованы</p>
      </div>
      <div className="bg-card rounded-lg border border-border p-2.5 sm:p-5 md:p-7">
        <span className="font-heading text-sm sm:text-base md:text-xl font-bold text-accent">Что в первый релиз?</span>
        <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/80 mt-1 sm:mt-2 md:mt-4 leading-snug">Не определён состав MVP — что включить, а что оставить на потом</p>
      </div>
      <div className="bg-card rounded-lg border border-border p-2.5 sm:p-5 md:p-7">
        <span className="font-heading text-sm sm:text-base md:text-xl font-bold text-accent">Какие гипотезы верны?</span>
        <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/80 mt-1 sm:mt-2 md:mt-4 leading-snug">Часть представлений о рынке может не подтвердиться — но это выяснится слишком поздно</p>
      </div>
      <div className="bg-card rounded-lg border border-border p-2.5 sm:p-5 md:p-7">
        <span className="font-heading text-sm sm:text-base md:text-xl font-bold text-accent">Сколько стоит ошибка?</span>
        <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/80 mt-1 sm:mt-2 md:mt-4 leading-snug">Первая версия, собранная на предположениях, обходится в месяцы работы и миллионы рублей</p>
      </div>
    </div>
    <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-2.5 sm:p-4 md:p-6">
      <p className="font-body text-sm sm:text-base md:text-xl text-foreground/80 leading-snug sm:leading-relaxed">
        <span className="font-semibold text-foreground">Итог: </span>
        если идти в разработку без проверки, первая версия продукта собирается на догадках, а не на данных.
      </p>
    </div>
  </AXSlideContainer>
);
export default AXSlide02Problem;
