import { EMSlideContainer } from './EMSlideContainer';

const beforeSteps = ["Идея", "Команда", "Разработка", "Тесты", "Запуск"];
const afterSteps = ["Идея", "ИИ-агенты", "Продукт"];

const EMSlide04Path = () => {
  return (
    <EMSlideContainer number={4} label="Сдвиг">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 md:mb-10" data-testid="em-path-title">
        Путь стал <span className="text-accent">короче в разы</span>
      </h2>

      <div className="space-y-4 md:space-y-6">
        {/* Before track */}
        <div className="bg-card rounded-lg border border-border p-4 md:p-6 lg:p-8">
          <span className="font-heading text-muted-foreground text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-5 block">
            Раньше · месяцы
          </span>
          <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            {beforeSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-3">
                <span className="font-body text-sm md:text-lg lg:text-xl text-foreground/70 bg-secondary px-3 py-1.5 md:px-5 md:py-2.5 rounded">
                  {step}
                </span>
                {i < beforeSteps.length - 1 && (
                  <span className="text-muted-foreground/40 text-lg md:text-2xl">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* After track */}
        <div className="bg-card rounded-lg border border-accent/30 border-l-[3px] border-l-accent p-4 md:p-6 lg:p-8">
          <span className="font-heading text-accent text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-5 block">
            Сейчас · часы или дни
          </span>
          <div className="flex items-center gap-2 md:gap-4 flex-wrap">
            {afterSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-4">
                <span className="font-body text-base md:text-xl lg:text-2xl text-foreground font-semibold bg-accent/10 px-4 py-2 md:px-6 md:py-3 rounded border border-accent/20">
                  {step}
                </span>
                {i < afterSteps.length - 1 && (
                  <span className="text-accent text-xl md:text-3xl">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="font-body text-sm md:text-lg text-muted-foreground mt-4 md:mt-6">
        MVP и коммерчески применимый продукт — разница сокращается
      </p>
    </EMSlideContainer>
  );
};

export default EMSlide04Path;
