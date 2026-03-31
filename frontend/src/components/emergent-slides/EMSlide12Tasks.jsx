import { EMSlideContainer } from './EMSlideContainer';

const doItems = [
  { text: "Объяснять простым языком", hint: "Как новому сотруднику" },
  { text: "Давать контекст и детали", hint: "Что, для кого, зачем" },
  { text: "Описывать желаемый результат", hint: "Что должно получиться" },
  { text: "Уточнять ограничения", hint: "Бюджет, сроки, технологии" },
];

const dontItems = [
  { text: "Говорить слишком общо", hint: "«Сделай красиво»" },
  { text: "Использовать много сленга", hint: "Без контекста непонятно" },
  { text: "Надеяться, что додумает сам", hint: "Агент не телепат" },
  { text: "Перескакивать между задачами", hint: "Одна задача за раз" },
];

const EMSlide12Tasks = () => {
  return (
    <EMSlideContainer number={12} label="Практика">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="em-tasks-title">
        Как правильно <span className="text-accent">ставить задачу</span>
      </h2>
      <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
        Разговаривайте как с умным исполнителем, который впервые слышит о задаче
      </p>

      <div className="flex flex-col md:flex-row gap-3 md:gap-5 mb-4 md:mb-6 md:flex-1">
        <div className="flex-1 bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-4 md:p-8">
          <span className="inline-block px-2 py-1 md:px-3 md:py-1.5 rounded bg-accent/10 text-accent text-xs md:text-sm font-bold tracking-wider uppercase mb-3 md:mb-5">
            Делать
          </span>
          <div className="space-y-2 md:space-y-4">
            {doItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 md:gap-4">
                <div className="w-2 h-2 rounded-full bg-accent shrink-0 mt-2" />
                <div>
                  <span className="font-body text-sm md:text-xl text-foreground">{item.text}</span>
                  <span className="font-body text-xs md:text-base text-muted-foreground/60 ml-2">— {item.hint}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-card rounded-lg border-l-[3px] border-l-destructive/50 border border-border p-4 md:p-8">
          <span className="inline-block px-2 py-1 md:px-3 md:py-1.5 rounded bg-destructive/10 text-destructive text-xs md:text-sm font-bold tracking-wider uppercase mb-3 md:mb-5">
            Не делать
          </span>
          <div className="space-y-2 md:space-y-4">
            {dontItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 md:gap-4">
                <div className="w-2 h-2 rounded-full bg-destructive/50 shrink-0 mt-2" />
                <div>
                  <span className="font-body text-sm md:text-xl text-foreground/70">{item.text}</span>
                  <span className="font-body text-xs md:text-base text-muted-foreground/40 ml-2">— {item.hint}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="font-body text-sm md:text-xl text-foreground/80 leading-relaxed">
        <span className="font-semibold">Ключевой тезис: </span>
        одна задача = один чёткий запрос с контекстом, ожиданиями и ограничениями.
      </p>
    </EMSlideContainer>
  );
};

export default EMSlide12Tasks;
