import { EMSlideContainer } from './EMSlideContainer';

const EMSlide13Context = () => {
  return (
    <EMSlideContainer number={13} label="Процесс">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="em-context-title">
        Агенты могут <span className="text-accent">меняться</span>
      </h2>
      <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
        Контекст нужно удерживать через документацию
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-4 md:mb-6 md:flex-1 auto-rows-fr">
        <div className="bg-card rounded-lg border border-border p-4 md:p-8">
          <div className="w-8 md:w-10 h-8 md:h-10 rounded-md bg-accent/10 flex items-center justify-center mb-3 md:mb-5">
            <span className="font-heading text-sm md:text-lg font-bold text-accent">01</span>
          </div>
          <h3 className="font-heading text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-3">Чат растёт</h3>
          <p className="font-body text-xs md:text-lg text-muted-foreground leading-relaxed">Вы общаетесь, ставите задачи, уточняете детали — контекст накапливается</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-4 md:p-8">
          <div className="w-8 md:w-10 h-8 md:h-10 rounded-md bg-accent/10 flex items-center justify-center mb-3 md:mb-5">
            <span className="font-heading text-sm md:text-lg font-bold text-accent">02</span>
          </div>
          <h3 className="font-heading text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-3">Окно внимания</h3>
          <p className="font-body text-xs md:text-lg text-muted-foreground leading-relaxed">Объём контекста заканчивается — агент «забывает» начало разговора</p>
        </div>

        <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-4 md:p-8">
          <div className="w-8 md:w-10 h-8 md:h-10 rounded-md bg-accent/10 flex items-center justify-center mb-3 md:mb-5">
            <span className="font-heading text-sm md:text-lg font-bold text-accent">03</span>
          </div>
          <h3 className="font-heading text-lg md:text-2xl font-bold text-accent mb-1 md:mb-3">Fork</h3>
          <p className="font-body text-xs md:text-lg text-muted-foreground leading-relaxed">Создаётся новая ветка — с чистым контекстом и новыми агентами</p>
        </div>
      </div>

      <p className="font-body text-sm md:text-xl text-foreground/80 leading-relaxed">
        <span className="font-semibold">Ключевое: </span>
        новые агенты опираются на документацию внутри проекта. Без неё — часть деталей теряется. Документация удерживает память проекта.
      </p>
    </EMSlideContainer>
  );
};

export default EMSlide13Context;
