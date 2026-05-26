import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const checks = [
  { n: "01", q: "Сколько людей с этим сталкиваются?", h: "Объём рынка" },
  { n: "02", q: "Насколько это болезненно?", h: "Интенсивность проблемы" },
  { n: "03", q: "Готовы ли они платить за решение?", h: "Платёжеспособность" },
  { n: "04", q: "Как часто будут возвращаться?", h: "Частота использования" },
  { n: "05", q: "Разовая покупка или долгий сценарий?", h: "Модель монетизации" },
];
const TASlide40Market = () => (
  <TASlideContainer number={40} label="Шаг 2 · Рынок">
    <TAH>Проверь не только проблему, но и силу спроса</TAH>
    <TASub>Если продукт не решает важную и понятную задачу — он не нужен</TASub>
    <div className="space-y-2 md:space-y-3 max-w-4xl">
      {checks.map((c, i) => (
        <div key={i} className="flex items-center gap-3 md:gap-4 rounded-md px-4 py-3 md:py-4" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5" }}>
          <span className="font-mono text-sm md:text-lg font-bold shrink-0" style={{ color: "#d4d4d8" }}>{c.n}</span>
          <span className="font-body text-sm md:text-lg flex-1" style={{ color: "#0a0a0a" }}>{c.q}</span>
          <span className="font-body text-xs md:text-sm hidden md:block" style={{ color: "#a1a1aa" }}>{c.h}</span>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide40Market;
