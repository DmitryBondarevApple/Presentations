import { TASlideContainer, TAH, TASub, TACard, TACardTitle } from './TASlideContainer';
const steps = [
  { n: "01", t: "Сформулировать идею", d: "Точно сказать, что вы делаете, для кого и зачем" },
  { n: "02", t: "Понять проблему пользователя", d: "Разобраться, у кого болит, как болит и почему текущие решения не работают" },
  { n: "03", t: "Превратить в требования", d: "Перевести найденные потребности в конкретный набор функций продукта" },
];
const TASlide37Map = () => (
  <TASlideContainer number={37} label="Маршрут">
    <TAH>Три шага к продукту</TAH>
    <TASub>Каждый шаг — фундамент для следующего</TASub>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
      {steps.map((s, i) => (
        <div key={i} className="rounded-md p-4 md:p-6" style={{ backgroundColor: "#fafafa", borderLeft: "3px solid #0a0a0a", border: "1px solid #e5e5e5", borderLeftWidth: 3, borderLeftColor: "#0a0a0a" }}>
          <span className="font-mono text-lg md:text-2xl font-bold" style={{ color: "#d4d4d8" }}>{s.n}</span>
          <p className="font-heading text-base md:text-xl font-bold mt-1 mb-2" style={{ color: "#0a0a0a" }}>{s.t}</p>
          <p className="font-body text-sm md:text-base" style={{ color: "#52525b" }}>{s.d}</p>
        </div>
      ))}
    </div>
    <p className="font-body text-sm md:text-base mt-4" style={{ color: "#71717a", fontStyle: "italic" }}>Без первого шага второй не имеет смысла. Без второго — третий будет придуманным.</p>
  </TASlideContainer>
);
export default TASlide37Map;
