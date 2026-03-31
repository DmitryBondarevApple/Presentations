import { EMSlideContainer } from './EMSlideContainer';

const steps = [
  { num: "01", title: "Сформулировать идею", desc: "Точно сказать, что вы делаете, для кого и зачем" },
  { num: "02", title: "Понять проблему пользователя", desc: "Разобраться, у кого болит, как болит и почему текущие решения не работают" },
  { num: "03", title: "Превратить в требования", desc: "Перевести найденные потребности в конкретный набор функций продукта" },
];

const EMSlide05Map = () => {
  return (
    <EMSlideContainer number={5} label="Маршрут">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 md:mb-10" data-testid="em-map-title">
        Три шага <span className="text-accent">к продукту</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {steps.map((s, i) => (
          <div key={i} className="bg-card rounded-lg border border-border p-5 md:p-8 flex flex-col">
            <span className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-accent/20 mb-2 md:mb-4">
              {s.num}
            </span>
            <h3 className="font-heading text-lg md:text-2xl lg:text-3xl font-bold text-foreground mb-2 md:mb-4">
              {s.title}
            </h3>
            <p className="font-body text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </EMSlideContainer>
  );
};

export default EMSlide05Map;
