import { EMSlideContainer } from './EMSlideContainer';

const EMSlide20Environments = () => (
  <EMSlideContainer number={21} label="Инфраструктура">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-4" data-testid="em-envs-title">
      Разработка и рабочий продукт — <span className="text-accent">это не одно и то же</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8 max-w-3xl">
      У любого реального продукта есть как минимум две среды
    </p>

    <div className="flex flex-col md:flex-row gap-3 md:gap-6">
      {/* Dev */}
      <div className="flex-1 bg-card rounded-lg border border-border p-4 md:p-8">
        <div className="flex items-center gap-2 mb-3 md:mb-5">
          <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-amber-500/80" />
          <h3 className="font-heading text-lg md:text-2xl font-bold text-foreground">Development</h3>
        </div>
        <p className="font-body text-xs md:text-base text-muted-foreground/60 mb-3 md:mb-5">
          Сервер разработки
        </p>
        <div className="space-y-2 md:space-y-3">
          {[
            "Здесь тестируют новые функции",
            "Здесь можно ломать и экспериментировать",
            "Здесь живут промежуточные решения",
          ].map((t, i) => (
            <div key={i} className="flex items-start gap-2 md:gap-3">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-500/60 shrink-0 mt-1.5 md:mt-2" />
              <p className="font-body text-xs md:text-lg text-foreground/70">{t}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Production */}
      <div className="flex-1 bg-card rounded-lg border-2 border-accent p-4 md:p-8">
        <div className="flex items-center gap-2 mb-3 md:mb-5">
          <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent" />
          <h3 className="font-heading text-lg md:text-2xl font-bold text-foreground">Production</h3>
        </div>
        <p className="font-body text-xs md:text-base text-muted-foreground/60 mb-3 md:mb-5">
          Сервер для пользователей
        </p>
        <div className="space-y-2 md:space-y-3">
          {[
            "Здесь работают реальные пользователи",
            "Сюда попадает только проверенное",
            "Здесь критична стабильность",
          ].map((t, i) => (
            <div key={i} className="flex items-start gap-2 md:gap-3">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent shrink-0 mt-1.5 md:mt-2" />
              <p className="font-body text-xs md:text-lg text-foreground">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </EMSlideContainer>
);

export default EMSlide20Environments;
