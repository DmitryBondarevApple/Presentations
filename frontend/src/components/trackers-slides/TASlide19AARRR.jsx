import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const rows = [
  { s: "Acquisition", q: "Как пользователь приходит?" },
  { s: "Activation", q: "Получает ли первую ценность?" },
  { s: "Retention", q: "Возвращается ли?" },
  { s: "Referral", q: "Рекомендует ли другим?" },
  { s: "Revenue", q: "Платит ли, сколько, как часто?" },
];
const TASlide19AARRR = () => (
  <TASlideContainer number={19} label="AARRR">
    <TAH>AARRR как карта продукта</TAH>
    <TASub>Пиратские метрики для понимания воронки</TASub>
    <div className="max-w-3xl" style={{ border: "1px solid #e5e5e5", borderRadius: 6, overflow: "hidden" }}>
      <div className="grid grid-cols-[1fr_2fr] font-mono text-[10px] md:text-xs tracking-wider uppercase px-4 py-2 md:py-3" style={{ backgroundColor: "#fafafa", borderBottom: "1px solid #e5e5e5", color: "#a1a1aa" }}>
        <span>Этап</span><span>Вопрос</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-[1fr_2fr] px-4 py-2.5 md:py-3.5 text-xs sm:text-sm md:text-base" style={{ borderBottom: i < rows.length - 1 ? "1px solid #e5e5e5" : "none" }}>
          <span className="font-bold" style={{ color: "#0a0a0a" }}>{r.s}</span>
          <span style={{ color: "#52525b" }}>{r.q}</span>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide19AARRR;
