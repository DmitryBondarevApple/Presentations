import { EMSlideContainer } from './EMSlideContainer';

const steps = [
  { num: "01", title: "Сформулировать идею", desc: "Точно сказать, что вы делаете, для кого и зачем" },
  { num: "02", title: "Понять проблему пользователя", desc: "Разобраться, у кого болит, как болит и почему текущие решения не работают" },
  { num: "03", title: "Превратить в требования", desc: "Перевести найденные потребности в конкретный набор функций продукта" },
];

const EMSlide05Map = () => {
  return (
    <EMSlideContainer number={5} label="Маршрут">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="em-map-title">
        Три шага <span className="text-accent">к продукту</span>
      </h2>
      <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
        Каждый шаг — фундамент для следующего
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-4 md:mb-6 md:flex-1 auto-rows-fr">
        {steps.map((s, i) => (
          <div key={i} className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-4 md:p-8 flex flex-col">
            <div className="w-8 md:w-10 h-8 md:h-10 rounded-md bg-accent/10 flex items-center justify-center mb-3 md:mb-5">
              <span className="font-heading text-sm md:text-lg font-bold text-accent">{s.num}</span>
            </div>
            <h3 className="font-heading text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-3">{s.title}</h3>
            <p className="font-body text-xs md:text-lg text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <p className="font-body text-xs md:text-lg text-muted-foreground/70 mt-1 md:mt-2 italic">
        Без первого шага второй не имеет смысла. Без второго — третий будет придуманным.
      </p>
    </EMSlideContainer>
  );
};

export default EMSlide05Map;
