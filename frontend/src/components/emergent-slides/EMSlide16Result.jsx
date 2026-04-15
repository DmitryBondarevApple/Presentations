import { EMSlideContainer } from './EMSlideContainer';

const EMSlide16Result = () => (
  <EMSlideContainer number={16} label="Результат">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-4" data-testid="em-result-title">
      Что получилось <span className="text-accent">за 40 минут</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-6 max-w-3xl">
      От PRD-документа к первому рабочему продукту
    </p>

    <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mb-4 md:mb-6">
      {/* Screenshot */}
      <div className="lg:w-[55%] rounded-lg overflow-hidden border border-border shadow-lg">
        <img
          src={`${process.env.PUBLIC_URL || ''}/images/emergent/vc-dashboard.png`}
          alt="VetControl — Сводка по хозяйству"
          className="w-full h-auto"
        />
      </div>

      {/* Timeline */}
      <div className="lg:w-[45%] flex flex-col gap-3 md:gap-4 justify-center">
        <div className="bg-card rounded-lg border border-border p-4 md:p-5 flex items-center gap-4">
          <span className="font-heading text-2xl md:text-4xl font-bold text-foreground">17:43</span>
          <div>
            <p className="font-body text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Запуск задачи</p>
            <p className="font-body text-xs md:text-sm text-muted-foreground/60">PRD.md передан платформе</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-[2px] h-4 md:h-6 bg-accent/40" />
        </div>

        <div className="bg-card rounded-lg border-2 border-accent p-4 md:p-5 flex items-center gap-4">
          <span className="font-heading text-2xl md:text-4xl font-bold text-accent">18:23</span>
          <div>
            <p className="font-body text-xs md:text-sm text-accent uppercase tracking-wider">Готовый результат</p>
            <p className="font-body text-xs md:text-sm text-muted-foreground/60">Рабочий прототип SaaS-продукта</p>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 mt-1 md:mt-2">
          {["Действующий прототип системы с нуля за одну сессию", "Авторизация, роли, dashboard, CRUD"].map((t, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
              <p className="font-body text-xs md:text-base text-muted-foreground">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </EMSlideContainer>
);

export default EMSlide16Result;
