import { NPSlideContainer } from './NPSlideContainer';

const NPSlide14Pricing = () => (
  <NPSlideContainer number={14} label="Команда и тарифы">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="np-pricing-title">
      Простая <span className="text-accent">кредитная модель</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Платите только за AI-вызовы. Бесплатный старт с приветственным бонусом — начните работать сразу.
    </p>
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-6">
      <div className="flex-1 bg-card rounded-lg border-2 border-accent p-3 sm:p-5 md:p-8">
        <span className="inline-block px-3 py-1 rounded bg-accent/10 text-accent text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase mb-2 md:mb-4">Старт</span>
        <p className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-1 md:mb-3">Бесплатно</p>
        <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground mb-2 md:mb-6">Приветственный бонус кредитов при регистрации</p>
        <div className="space-y-1 md:space-y-2">
          {[
            "Транскрибация аудио и видео",
            "Анализ записей с видео-хостингов",
            "Автоматическое определение спикеров",
            "Гибкие сценарии обработки",
            "Визуальные отчёты с кадрами из видео",
            "Шаринг результатов по ссылке",
            "Экспорт в DOCX по шаблону",
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent shrink-0" />
              <p className="font-body text-[10px] sm:text-xs md:text-base text-foreground/80">{f}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8">
        <span className="inline-block px-3 py-1 rounded bg-accent/10 text-accent text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase mb-2 md:mb-4">Команда</span>
        <p className="font-heading text-lg sm:text-xl md:text-3xl font-bold text-foreground mb-1 md:mb-3">Работайте вместе</p>
        <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground mb-2 md:mb-6">Организации, роли, общий баланс кредитов</p>
        <div className="space-y-1 md:space-y-2">
          {[
            "Мультиорганизации",
            "Приватные и публичные папки",
            "4 роли: владелец, менеджер, участник, клиент",
            "Общий баланс кредитов",
            "Совместные сценарии",
            "Семантический поиск по проектам",
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent shrink-0" />
              <p className="font-body text-[10px] sm:text-xs md:text-base text-foreground/80">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </NPSlideContainer>
);
export default NPSlide14Pricing;
