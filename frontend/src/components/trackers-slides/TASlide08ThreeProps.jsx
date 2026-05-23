import { TASlideContainer, TAH, TACard, TACardTitle } from './TASlideContainer';
const props = [
  { n: "01", t: "Гипотеза", d: "Что должно быть истинным, чтобы бизнес работал?" },
  { n: "02", t: "Неопределённость", d: "Что команда ещё не знает о клиенте, продукте, канале, цене, экономике?" },
  { n: "03", t: "Рост", d: "Можно ли быстро и значимо увеличить бизнес, не разрушив модель?" },
];
const TASlide08ThreeProps = () => (
  <TASlideContainer number={8} label="Свойства">
    <TAH>Три свойства стартапа</TAH>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mt-2 md:mt-6">
      {props.map((p, i) => (
        <TACard key={i}>
          <span className="font-mono text-lg md:text-2xl font-bold" style={{ color: "#d4d4d8" }}>{p.n}</span>
          <TACardTitle>{p.t}</TACardTitle>
          <p className="font-body text-xs sm:text-sm md:text-base leading-relaxed" style={{ color: "#52525b" }}>{p.d}</p>
        </TACard>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide08ThreeProps;
