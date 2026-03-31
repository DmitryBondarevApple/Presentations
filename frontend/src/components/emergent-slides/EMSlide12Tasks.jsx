import { EMSlideContainer } from './EMSlideContainer';

const doItems = [
  "Объяснять простым языком",
  "Давать контекст и детали",
  "Описывать желаемый результат",
  "Уточнять ограничения",
];

const dontItems = [
  "Говорить слишком общо",
  "Использовать много сленга",
  "Надеяться, что додумает сам",
  "Перескакивать между задачами",
];

const EMSlide12Tasks = () => {
  return (
    <EMSlideContainer number={12} label="Практика">
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4" data-testid="em-tasks-title">
        Как правильно <span className="text-accent">ставить задачу</span>
      </h2>
      <p className="font-body text-sm md:text-lg text-muted-foreground mb-6 md:mb-10">
        Разговаривайте как с умным исполнителем, который впервые слышит о задаче
      </p>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {/* Do */}
        <div className="flex-1 bg-card rounded-lg border border-accent/30 border-l-[3px] border-l-accent p-5 md:p-8">
          <span className="font-heading text-accent text-sm md:text-base tracking-widest uppercase mb-4 md:mb-6 block font-bold">
            Делать
          </span>
          <div className="space-y-3 md:space-y-5">
            {doItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="font-body text-base md:text-xl lg:text-2xl text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Don't */}
        <div className="flex-1 bg-card rounded-lg border border-destructive/20 border-l-[3px] border-l-destructive/50 p-5 md:p-8">
          <span className="font-heading text-destructive/70 text-sm md:text-base tracking-widest uppercase mb-4 md:mb-6 block font-bold">
            Не делать
          </span>
          <div className="space-y-3 md:space-y-5">
            {dontItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive/50 shrink-0" />
                <span className="font-body text-base md:text-xl lg:text-2xl text-foreground/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </EMSlideContainer>
  );
};

export default EMSlide12Tasks;
