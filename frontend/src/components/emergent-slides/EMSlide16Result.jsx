import { EMSlideContainer } from './EMSlideContainer';

const EMSlide16Result = () => (
  <EMSlideContainer number={16} label="Результат">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-4" data-testid="em-result-title">
      Что получилось <span className="text-accent">за 30 минут</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-6 md:mb-10 max-w-3xl">
      От PRD-документа к первому рабочему продукту
    </p>

    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-6 md:mb-10">
      {/* Timeline */}
      <div className="flex items-center gap-3 md:gap-6 w-full max-w-2xl">
        <div className="flex-1 bg-card rounded-lg border border-border p-4 md:p-6 text-center">
          <span className="font-body text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Запуск задачи</span>
          <p className="font-heading text-2xl md:text-4xl font-bold text-foreground mt-1">17:43</p>
          <p className="font-body text-xs md:text-sm text-muted-foreground/60 mt-1">PRD.md передан платформе</p>
        </div>

        <div className="flex items-center gap-1">
          <div className="w-8 md:w-16 h-[2px] bg-accent/40" />
          <div className="w-2 h-2 md:w-3 md:h-3 rotate-45 border-t-2 border-r-2 border-accent/40" />
        </div>

        <div className="flex-1 bg-card rounded-lg border-2 border-accent p-4 md:p-6 text-center">
          <span className="font-body text-xs md:text-sm text-accent uppercase tracking-wider">Готовый результат</span>
          <p className="font-heading text-2xl md:text-4xl font-bold text-accent mt-1">18:23</p>
          <p className="font-body text-xs md:text-sm text-muted-foreground/60 mt-1">Рабочий SaaS-продукт</p>
        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
      {["Агенты составили план backend и frontend", "Реализовали систему с нуля", "Рабочий прототип с авторизацией, ролями, UI"].map((t, i) => (
        <div key={i} className="flex items-start gap-2 md:gap-3">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent shrink-0 mt-2" />
          <p className="font-body text-xs md:text-lg text-muted-foreground">{t}</p>
        </div>
      ))}
    </div>
  </EMSlideContainer>
);

export default EMSlide16Result;
