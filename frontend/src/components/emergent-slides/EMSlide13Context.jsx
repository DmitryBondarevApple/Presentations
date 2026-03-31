import { EMSlideContainer } from './EMSlideContainer';

const EMSlide13Context = () => {
  return (
    <EMSlideContainer number={13} label="Процесс">
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4" data-testid="em-context-title">
        Агенты могут <span className="text-accent">меняться</span>
      </h2>
      <p className="font-body text-sm md:text-lg text-muted-foreground mb-6 md:mb-10">
        Контекст нужно удерживать через документацию
      </p>

      {/* Process flow */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch mb-4 md:mb-8">
        <div className="flex-1 bg-card rounded-lg border border-border p-4 md:p-6">
          <span className="font-heading text-accent/30 text-xl md:text-2xl font-bold block mb-2">01</span>
          <h3 className="font-heading text-base md:text-xl font-bold text-foreground mb-1">Чат растёт</h3>
          <p className="font-body text-xs md:text-base text-muted-foreground">Вы общаетесь, ставите задачи, уточняете детали</p>
        </div>

        <div className="flex items-center justify-center shrink-0">
          <span className="text-accent text-xl md:text-2xl">&rarr;</span>
        </div>

        <div className="flex-1 bg-card rounded-lg border border-border p-4 md:p-6">
          <span className="font-heading text-accent/30 text-xl md:text-2xl font-bold block mb-2">02</span>
          <h3 className="font-heading text-base md:text-xl font-bold text-foreground mb-1">Окно внимания</h3>
          <p className="font-body text-xs md:text-base text-muted-foreground">Объём контекста заканчивается</p>
        </div>

        <div className="flex items-center justify-center shrink-0">
          <span className="text-accent text-xl md:text-2xl">&rarr;</span>
        </div>

        <div className="flex-1 bg-card rounded-lg border border-accent/30 border-l-[3px] border-l-accent p-4 md:p-6">
          <span className="font-heading text-accent/30 text-xl md:text-2xl font-bold block mb-2">03</span>
          <h3 className="font-heading text-base md:text-xl font-bold text-accent mb-1">Fork</h3>
          <p className="font-body text-xs md:text-base text-muted-foreground">Новая ветка — новые агенты</p>
        </div>
      </div>

      <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-4 md:p-6">
        <p className="font-body text-sm md:text-lg lg:text-xl text-foreground/80 leading-relaxed">
          <span className="font-semibold text-foreground">Ключевое: </span>
          новые агенты опираются на документацию внутри проекта. Без неё — часть деталей теряется.
          Документация удерживает память проекта.
        </p>
      </div>
    </EMSlideContainer>
  );
};

export default EMSlide13Context;
